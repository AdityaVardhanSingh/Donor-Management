import React, { useEffect, useState } from 'react';
import DonorService from '../services/DonorService';

const DonorList = () => {
  const [donors, setDonors] = useState([]);

  useEffect(() => {
    async function fetchDonors() {
      try {
        const fetchedDonors = await DonorService.getDonors();
        setDonors(fetchedDonors);
      } catch (error) {
        // handle error
      }
    }
    fetchDonors();
  }, []);

  // render UI to display list of donors with CRUD options
  
  return (
    // JSX for displaying the list of donors
  );
};

export default DonorList;
