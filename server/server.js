import express from 'express';
import cors from 'cors';
import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';

dotenv.config();

const PORT = 5000;
const app = express();

app.use(express.json());
app.use(cors());

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

let globalAdviceText; // Define globally to hold advice data

app.post("/api/generate-topics", async (req, res) => {
    try {
        const { name, age, gender, salary, city } = req.body;
        const prompt = `
            Generate six relevant financial topics for ${name}, a ${age}-year-old ${gender} earning ${salary} Rs per month, living in ${city} in India. Each topic should be a headline followed by a brief description. Give them the most relevant topics from the following ones:
            1. Introduction to Money Management
            2. Creating a Budget
            3. Income and Expenses
            4. Saving Strategies
            5. Banking Basics
            6. Managing a Bank Account
            7. Understanding Credit
            8. Credit Cards
            9. Debt Management
            10. Introduction to Investing
            11. Risk and Return
            12. Retirement Planning
            13. Insurance Basics
            14. Tax Basics
            15. Estate Planning
            16. Financial Goals Setting
            17. Emergency Fund
            18. Understanding Mortgages
            19. Consumer Rights
            20. Financial Psychology
            21. Financial Planning Tools
            22. Charitable Giving
            23. Entrepreneurship Basics
            24. Social Security and Benefits
            25. Financial Resources and Education

            The topics should be numbered from 1 to 6. The response format should be as follows:

            intro: ${name} should follow these strategies as per their criteria..

            1. Topic 1
              Small description about it.

            2. Topic 2
              Small description about it.

            3. Topic 3
              Small description about it.

            4. Topic 4
              Small description about it.

            5. Topic 5
              Small description about it.

            6. Topic 6
              Small description about it.

            Provide only the most relevant 6 topics in JSON format:
        `;

        const result = await model.generateContent(prompt);
        if (!result || !result.text) {
            throw new Error('No text returned from the AI model');
        }

        const text = result.text;

        // Clean the response to remove backticks and ```json code block
        const cleanedText = text.replace(/```json/g, '').replace(/```/g, '');

        let parsedResponse;
        try {
            parsedResponse = JSON.parse(cleanedText);
        } catch (error) {
            console.error('Failed to parse JSON:', error);
            return res.status(500).json({ error: 'Failed to parse JSON response from AI' });
        }

        // Construct the formatted topics array
        const formattedTopics = [];
        for (let i = 1; i <= 6; i++) {
            const topic = parsedResponse[i];
            if (topic) {
                formattedTopics.push({
                    headline: topic.Topic || topic.topic,
                    description: topic.Description || topic.description,
                });
            }
        }

        globalAdviceText = { intro: `${name} should follow these strategies as per their criteria..`, topics: formattedTopics };

        res.json(globalAdviceText);
    } catch (error) {
        console.error('Error generating topics:', error);

        if (error.status === 503) {
            return res.status(503).json({ error: 'The AI service is currently unavailable. Please try again later.' });
        }

        res.status(500).json({ error: 'Failed to generate topics' });
    }
});

app.get('/api/get-generated-topics', (req, res) => {
    try {
        // Check if globalAdviceText is populated
        if (!globalAdviceText) {
            throw new Error('Advice data not found');
        }

        // Return advice data as JSON response
        res.json({ advice: globalAdviceText });
    } catch (error) {
        console.error('Error fetching generated fields:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
});
