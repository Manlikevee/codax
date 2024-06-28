// pages/api/generative-ai.js
import axios from 'axios';

const API_KEY = 'AIzaSyCmTIrEffXp5jBva5PKKfeCha3xs1Eba-8'; // Replace with your actual API key

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: 'Prompt is required' });
    }

    try {
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${API_KEY}`,
        {
          contents: [{ parts: [{ text: prompt }] }],
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      return res.status(200).json(response.data);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Failed to generate content' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
