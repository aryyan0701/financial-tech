import axios from 'axios';

export const generateTopics = async (req, res) => {
  try {
    const { name, age, gender, salary, city } = req.body;
    const prompt = `
      Provide specific financial advice for a ${age}-year-old ${gender} citizen named ${name}, who is earning ${salary} Rs per month and living in ${city} in India. Based on the criteria, suggest 6 fields from the following list that are most relevant to her and add some relatable descriptions to those particular topics:
      
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
    `;

    const aiResponse = await axios.post(
      'https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent',
      { prompt },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer YOUR_GOOGLE_API_KEY`,
        },
      }
    );

    const result = aiResponse.data; // Get response data directly

    res.json({ advice: result });
  } catch (error) {
    console.error('Error generating topics:', error);
    res.status(500).json({ error: 'Failed to generate topics' });
  }
};
