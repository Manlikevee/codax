'use client'

import { useState } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
export default function Page() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const API_KEY = 'AIzaSyCmTIrEffXp5jBva5PKKfeCha3xs1Eba-8'; // Replace with your actual API key

  const optimizeBusinessDescription = async (businessDescription) => {
    const prompt = "Please provide a business description and feature breakdown. Here's what I expect:\n\n";
    
    try {
      const res = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${API_KEY}`,
        {
          contents: [
            {
              parts: [
                {
                  text: prompt + businessDescription,
                },
              ],
            },
          ],
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
  
      const generatedText = res.data.candidates[0].content.parts[0].text;
      return generatedText;
    } catch (error) {
      console.error('Error:', error);
      return null;
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const optimizedDescription = await optimizeBusinessDescription(prompt);
      setResponse(optimizedDescription);
    } catch (error) {
      console.error('Error optimizing description:', error);
    }

    setLoading(false);
  };


  return (
    <div>
    <h1>Product Optimizer</h1>
    <form onSubmit={handleSubmit}>
      <textarea
        placeholder="Describe your business and its current features..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        required
        rows={5}
        style={{ width: '100%', maxWidth: '600px' }}
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Generating...' : 'Optimize Description'}
      </button>
    </form>
    {response && (
      <div>
        <h2>Optimized Business Description</h2>
        <ReactMarkdown>{response}</ReactMarkdown>


        
      </div>
    )}
  </div>
  );
}
