'use client'
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { ref, onValue } from 'firebase/database';
import { database } from '@/components/firebaseConfig';
import Header from '@/components/Header';
import ReactMarkdown from 'react-markdown';

const page = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const dbRef = ref(database, `/websitedata/${id}`);
    onValue(dbRef, (snapshot) => {
      const fetchedData = snapshot.val();
      console.log(fetchedData)
      setData(fetchedData);
    });
  }, [id]);



  return (
    <div>
            <Header />
            <br/>
       
            <div className="containers">
              <div className="myp">
              <div className="headerphotos">
<img src={data?.imageUrl} alt={data?.service} />
              </div>
              <div className="sidesection">
<div className="data">
 <b>
{data?.title}
</b>
Get Access To POS Terminals, Business Accounts, Business Tools And Access To Top Tier Loans To Grow Your Business.
</div>
<div className="data">
 <strong>
 CATEGORY


</strong>
{data?.service}
</div>

<div className="data">
 <strong>
 FONT


</strong>
Lota Grotesque
</div>


<div className="data">
 <strong>
Stack


</strong>
Lota Grotesque
</div>
<div className="data">

<button>Visit Site</button>
</div>

              </div>
              </div>


<br />
<br />

<div className="mymarkdown">
<ReactMarkdown>{data?.description}</ReactMarkdown>
</div>



            </div>
      {id}</div>
  )
}

export default page