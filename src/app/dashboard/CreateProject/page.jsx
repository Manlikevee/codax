'use client'
import { useState, useRef } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import { Editor } from '@tinymce/tinymce-react';
import DashLayout from '@/components/Dashboardcontents/DashLayout';
import Designcard from '@/components/Designcard';
import { database } from '@/components/firebaseConfig';
import { ref, push, set } from 'firebase/database';
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';

const Page = () => {
  const [title, setTitle] = useState('');
  const [service, setService] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const inputEl = useRef(null);

  const API_KEY = 'AIzaSyCmTIrEffXp5jBva5PKKfeCha3xs1Eba-8'; // Replace with your actual API key

  // Function to optimize business description using AI
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
  
  async function tryai(){
    setLoading(true);
  
    try {
      const optimizedDescription = await optimizeBusinessDescription(description);
      setResponse(optimizedDescription);
    } catch (error) {
      console.error('Error optimizing description:', error);
    }
  
    setLoading(false);
  }
  
  // Handle image upload and preview
  const handleImageChange = () => {
    const file = inputEl.current.files[0];
    setImagePreview(URL.createObjectURL(file));
    const blob = new Blob([file], { type: file.type });
    const url = URL.createObjectURL(blob);
    const img = new Image();
    img.src = url;

    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      ctx.drawImage(img, 0, 0);

      canvas.toBlob((newBlob) => {
        const fr = new FileReader();
        fr.readAsDataURL(newBlob);
        fr.addEventListener('load', () => {
          const dataURL = fr.result;
          setImage(dataURL);
        });
      }, 'image/webp', 0.7);
    };
  };

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setLoading(true);

      // Optimize business description
      const optimizedDescription = await optimizeBusinessDescription(description);
      setResponse(optimizedDescription || '');

      // Upload image to Firebase Storage
      if (image) {
        const response = await fetch(image);
        const blob = await response.blob();
        const file = new File([blob], `${Date.now()}_${image.name}`, { type: blob.type });

        const storage = getStorage();
        const fileRef = storageRef(storage, `images/${file.name}`);
        await uploadBytes(fileRef, file);
        const imageUrl = await getDownloadURL(fileRef);

        // Save data to Firebase Realtime Database
        const newChildRef = push(ref(database, 'websitedata'));
        await set(newChildRef, {
          id: newChildRef.key,
          title: title,
          service: service,
          description: optimizedDescription,
          link: link,
          imageUrl: imageUrl,
        });

        // Reset form fields and state after successful submission
        setTitle('');
        setService('');
        setDescription('');
        setLink('');
        setImage(null);
        setImagePreview('');
        inputEl.current.value = ''; // Reset the file input
        setLoading(false);
        alert('Submission successful!');
      }
    } catch (error) {
      console.error('Error:', error);
      setLoading(false);
      alert('Submission failed. Please try again.');
    }
  };

  return (
    <DashLayout>
      <div className="cfflex">
        <div className="creationform">
          <div className="ttxt">Create something extraordinary with us.</div>
          <div className="stxt">To showcase a new project, please fill out the form below.</div>
          <div className="myformflex">
            <div className="mfflx">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                placeholder="Enter A Project Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="mfflx">
              <label htmlFor="service">Service</label>
              <input
                type="text"
                id="service"
                placeholder="Enter A Project Service"
                value={service}
                onChange={(e) => setService(e.target.value)}
              />
            </div>
            <div className="mfflx">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                placeholder="Enter A Project Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                cols={5}
              />
            </div>
            {response && (
              <div>
                <h2>Optimized Business Description</h2>
                <ReactMarkdown>{response}</ReactMarkdown>
              </div>
            )}
            <button onClick={tryai}>AI Magic</button>
            <div className="mfflx">
              <label htmlFor="link">Link</label>
              <input
                type="url"
                id="link"
                placeholder="Enter A Project Link"
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />
            </div>
            <div className="mfflx">
              <label htmlFor="image">Image Upload</label>
              <input
                type="file"
                id="image"
                accept="image/*"
                ref={inputEl}
                onChange={handleImageChange}
              />
            </div>
            <button type="submit" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
        <div className="preview">
          <Designcard data={{ title, service, imageUrl: imagePreview }} />
        </div>
      </div>
    </DashLayout>
  );
};

export default Page;
