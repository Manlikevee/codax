'use client'
import DashLayout from '@/components/Dashboardcontents/DashLayout'
import React, { useState } from 'react'
import Dashboardtable from '@/components/Dashboardcontents/Dashboardtable'
import Dashboaredcards from '@/components/Dashboardcontents/Dashboaredcards'
import Designcard from '@/components/Designcard'
import myimg from '../../../../public/gb6.png'
const page = () => {
  const [title, setTitle] = useState('');
  const [service, setService] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState();
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  };
const mydata= {
  object_key: '',
  service: service,
  title: title,
  imageUrl: imagePreview 
}
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log({
      title,
      description,
      link,
      image,
    });
  };
  return (
    <DashLayout>

<br />
<div className="cfflex">
<div className="creationform">
        <div className="ttxt">
  Create something extraordinary with us.
</div>
<div className="stxt">
  To showcase a new project, please fill out the form below.
</div>

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
        <label htmlFor="title">Service</label>
        <input
          type="text"
          id="title"
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
          cols={5}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
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
          onChange={handleImageChange}
        />
      </div>
      <button type="submit">Submit</button>
</div>
        </div>

     <div className="preview">

<Designcard data={mydata}/>

     </div>
</div>
  



 

    </DashLayout>
  )
}

export default page