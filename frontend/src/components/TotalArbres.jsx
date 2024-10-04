import React, { useEffect, useState } from 'react';
import { FaTree } from "react-icons/fa";
import axios from 'axios';

const TotalArbres = () => {
  const [totalCount, setTotalCount] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/les-arbres/records?select=arrondissement&limit=20");
        
        if (response.data && response.data.total_count !== undefined) {
          setTotalCount(response.data.total_count);
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
        setError("Une erreur est survenue lors de la récupération des données.");
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col p-4 bg-green-200 items-center rounded-lg border border-green-500 shadow-md">
        <div className="flex items-center mb-2">
          <FaTree className="text-green-700 mr-2" size={24} />
          <h1 className="text-lg font-semibold">Total des arbres de Paris</h1>
        </div>
        <div className="text-2xl font-bold text-green-700">{totalCount}</div>
      </div>
    </div>
  );
};

export default TotalArbres;
