'use client'
import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Herodata from '@/components/Herodata';
import Filterfields from '@/components/filtertop/Filterfields';
import Designcard from '@/components/Designcard';
import { database } from '@/components/firebaseConfig';
import { ref, onValue } from 'firebase/database';

const Page = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const dbRef = ref(database, '/websitedata');
    onValue(dbRef, (snapshot) => {
      const fetchedData = snapshot.val();
      setData(fetchedData);
    });
  }, []);

  return (
    <div>
      <Header />
      <Herodata />
      <div className="containers">
        <Filterfields />
        <div className="portfoliogrid">
          {data &&
            Object.keys(data).map((key) => (
              <Designcard key={key} data={data[key]} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
