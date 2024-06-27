'use client'
import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Herodata from '@/components/Herodata';
import Filterfields from '@/components/filtertop/Filterfields';
import Designcard from '@/components/Designcard';
import { database } from '@/components/firebaseConfig';
import { ref, onValue } from 'firebase/database';
import Pills from '@/components/Pills';

const Page = () => {


  const [data, setData] = useState([]);

  useEffect(() => {
    const dbRef = ref(database, '/websitedata');
    onValue(dbRef, (snapshot) => {
      const fetchedData = snapshot.val();
      const dataWithKeys = Object.keys(fetchedData).map(key => ({
        object_key: key,
        ...fetchedData[key]
      }));
      setData(dataWithKeys);
    });
  }, []);

  return (
    <div>
      <Header />
      <Herodata />
      <div className="containers">
        {/* <Filterfields /> */}
        <Pills/>
        <div className="portfoliogrid">
          {data.length > 1 &&
            data.map((item) => (
              <Designcard key={item.object_key} data={item} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
