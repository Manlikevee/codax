'use client'
import { useState } from 'react';
import { database } from '@/components/firebaseConfig';
import { ref, push } from 'firebase/database';

const Page = () => {
  const [websitedata, setWebsiteData] = useState([]);
  const [title, setTitle] = useState('');
  const [service, setService] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [link, setLink] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newDataRef = ref(database, 'websitedata');
    const newEntry = {
      title,
      service,
      imageUrl,
      link,
    };
    try {
      // Push new entry to Firebase array
      await push(newDataRef, newEntry);
      alert('Data submitted successfully');
      // Update local state with new entry
      setWebsiteData([...websitedata, newEntry]);
      // Clear the form
      setTitle('');
      setService('');
      setImageUrl('');
      setLink('');
    } catch (error) {
      console.error('Error submitting data:', error);
      alert('Failed to submit data');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="service">Service:</label>
          <input
            type="text"
            id="service"
            value={service}
            onChange={(e) => setService(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="imageUrl">Image URL:</label>
          <input
            type="url"
            id="imageUrl"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="link">Link:</label>
          <input
            type="url"
            id="link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      <h2>Submitted Website Data:</h2>
      <ul>
        {websitedata.map((data, index) => (
          <li key={index}>
            <strong>{data.title}</strong> - {data.service} - {data.imageUrl} - {data.link}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
