'use client'
import React, { useRef, useState } from 'react';

const ImageUploader = () => {
  const inputEl = useRef(null);
  const [images, setImages] = useState([]);

  const handleImageChange = () => {
    const file = inputEl.current.files[0];
    const blob = new Blob([file], { type: file.type });
    const url = URL.createObjectURL(blob);
    const img = new Image();
    img.src = url;

    img.onload = () => {
      const output = document.getElementById('output');
      output.appendChild(img);
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');

      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      ctx.drawImage(img, 0, 0);

      canvas.toBlob((newBlob) => {
        const fr = new FileReader();
        fr.readAsDataURL(newBlob);
        fr.addEventListener('load', () => {
          const newImg = new Image();
          const dataURL = fr.result;
          newImg.src = dataURL;

          newImg.onload = () => {
            setImages((prevImages) => [...prevImages, newImg]);
          };
        });
      }, 'image/webp', 0.7);
    };
  };

  return (
    <div>
      <input type="file" ref={inputEl} onChange={handleImageChange} />
      <div id="output">
        {images.map((image, index) => (
          <img key={index} src={image.src} alt={`Uploaded ${index}`} />
        ))}
      </div>
    </div>
  );
};

export default ImageUploader;
