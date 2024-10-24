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
  const [currentPage, setCurrentPage] = useState(1); // Track current page
  const [loading, setLoading] = useState(true); // Track loading state
  const pageSize = 6; // Define how many items per page

  // Fetch data on component mount
  useEffect(() => {
    setLoading(true); // Start loading
    const dbRef = ref(database, "/websitedata");
    onValue(dbRef, (snapshot) => {
      const fetchedData = snapshot.val();
      const dataWithKeys = Object.keys(fetchedData).map((key) => ({
        object_key: key,
        ...fetchedData[key],
      }));
      setData(dataWithKeys);
      setLoading(false); // Stop loading
    });
  }, []);

  // Calculate paginated data
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedData = data.slice(startIndex, startIndex + pageSize);

  // Handle loading more data (Next Page)
  const handleNextPage = () => {
    if (currentPage * pageSize < data.length) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  // Handle going back (Previous Page)
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };


  return (
    <div>
      <Header />
      <Herodata />
      <div className="containers">
        {/* <Filterfields /> */}
        <Pills/>
        <div>
      {loading ? (
        <div>Loading...</div> // Show loading state
      ) : (
        <>
          <div className="portfoliogrid">
            {paginatedData.map((item) => (
              <Designcard key={item.object_key} data={item} />
            ))}
          </div>
          {/* Show the "Next" button only if there are more items to load */}
          {/* Pagination Controls */}
          <br />
          <br />
          <div className="pagination-controls">
            {currentPage > 1 && (
              <button onClick={handlePreviousPage} className="npro whites mt-5 px-4 py-2 bg-gray-500 text-white rounded">
                Back
              </button>
            )}
            
            {currentPage * pageSize < data.length && (
              <button onClick={handleNextPage} className="npro mt-5 px-4 py-2 bg-blue-500 text-white rounded">
                Next
              </button>
            )}
          </div>
        </>
      )}
    </div>
      </div>
    </div>
  );
};

export default Page;
