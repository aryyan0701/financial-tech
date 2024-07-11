import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';
import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';

dotenv.config();

const PORT = 5000;
const app = express();

app.use(express.json());
app.use(cors());

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

let globalAdviceText = null;

app.post("/api/generate-topics", async (req, res) => {
    try {
        const { name, age, gender, salary, city } = req.body;
        console.log("Received data:", { name, age, gender, salary, city });
        
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
    
            1. Topic 1
              small description about it.
    
            2. Topic 2
              small description about it.
    
            3. Topic 3
              small description about it.
    
            4. Topic 4
              small description about it.
    
            5. Topic 5
              small description about it.
    
            6. Topic 6
              small description about it.
    
            Provide only the most relevant 6 topics in JSON format:
        `;

        console.log("Generated Prompt:", prompt);

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = await response.text();

        console.log("Model Response:", text);

        // Clean the response to remove backticks and ```json code block
        const cleanedText = text.replace(/```json/g, '').replace(/```/g, '');

        // Parse JSON string into JavaScript object
        const parsedResponse = JSON.parse(cleanedText);

        console.log("Parsed Response:", parsedResponse);

        // Ensure the response is an array and format topics as required
        const topics = parsedResponse.topics;

        const formattedTopics = topics.map(topic => ({
            headline: topic.topic,
            description: topic.description,
        }));

        console.log("Formatted Topics:", formattedTopics);

        // Update local variable
        globalAdviceText = formattedTopics;

        // Return formatted topics as JSON response
        res.json({ advice: formattedTopics });
    } catch (error) {
        console.error('Error generating topics:', error);
        res.status(500).json({ error: 'Failed to generate topics' });
    }
});

app.get('/api/get-generated-topics', (req, res) => {
    if (globalAdviceText) {
        res.json({ advice: globalAdviceText });
    } else {
        res.status(404).json({ error: 'No topics generated yet' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
});
