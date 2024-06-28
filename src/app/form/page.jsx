'use client';

import { database } from '@/components/firebaseConfig';
import { ref, push, set } from 'firebase/database';
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import Header from '@/components/Header';
import React, { useState, useRef } from 'react';

const Page = () => {
  const [websitedata, setWebsiteData] = useState([]);
  const [title, setTitle] = useState('');
  const [service, setService] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [link, setLink] = useState('');
  const inputEl = useRef(null);
  const [image, setImage] = useState(null);

  const handleImageChange = () => {
    console.log('compressing');
    const file = inputEl.current.files[0];
    const blob = new Blob([file], { type: file.type });
    const url = URL.createObjectURL(blob);
    const img = new Image();
    img.src = url;

    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');

      // const maxWidth =  img.naturalWidth;// Maximum width for the compressed image
      // const maxHeight = img.naturalHeight; // Maximum height for the compressed image
      // let width = img.naturalWidth;
      // let height = img.naturalHeight;

      // if (width > height) {
      //   if (width > maxWidth) {
      //     height = Math.round((height *= maxWidth / width));
      //     width = maxWidth;
      //   }
      // } else {
      //   if (height > maxHeight) {
      //     width = Math.round((width *= maxHeight / height));
      //     height = maxHeight;
      //   }
      // }

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (image) {
      const newChildRef = push(ref(database, 'websitedata'));
      const newId = newChildRef.key;
      const response = await fetch(image);
      const blob = await response.blob();
      const number = Math.floor(Math.random() * 100) + 1;
      const file = new File([blob], `${number}${newId}`, { type: 'image/webp' });

      const storage = getStorage();
      const fileRef = storageRef(storage, `images/${file.name}`);
      await uploadBytes(fileRef, file);
      const imageUrl = await getDownloadURL(fileRef);

      // Create a new child reference with a unique ID


      if (imageUrl) {
        alert(imageUrl);
        await set(newChildRef, {
          id: newId,
          imageUrl: imageUrl,
          link: link,
          service: service,
          title: title,
        });
      }

      // Reset the form and state
      setTitle('');
      setService('');
      setLink('');
      setImage(null);
      inputEl.current.value = ''; // Reset the file input
    }
  };

  return (
    <div>
      <Header />
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
          <label htmlFor="imageFile">Image:</label>
          <input type="file" ref={inputEl} onChange={handleImageChange} />
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
            <strong>{data.title}</strong> - {data.service} -{' '}
            <img src={data.imageUrl} alt={data.title} width="100" /> -{' '}
            <a href={data.link}>{data.link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
