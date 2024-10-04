import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ApiTest() {
  const [data, setData] = useState([]); // Stocker les données
  const [error, setError] = useState(null); // Stocker les erreurs
  const [loading, setLoading] = useState(true); // Stocker l'état de chargement

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/les-arbres/records?select=typeemplacement,domanialite,arrondissement,genre&limit=20');
        console.log('Response Data:', response.data); // Voir la réponse API dans la console
        const results = response.data.results || []; // Extraire les résultats
        console.log('Results:', results); // Voir les résultats dans la console
        setData(results); // Mettre à jour l'état avec les résultats
        setLoading(false); // Le chargement est terminé
      } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
        setError('Erreur lors de la récupération des données.');
        setLoading(false); // Arrêter le chargement même en cas d'erreur
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Chargement des données...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h2>Données des Arbres</h2>
      {data.length > 0 ? (
        <ul>
          {data.map((record, index) => {
            // Puisque les champs sont directement dans 'record'
            return (
              <li key={index}>
                Arrondissement: {record.arrondissement || 'N/A'}, 
                Domanialité: {record.domanialite || 'N/A'}, 
                Genre: {record.genre || 'N/A'}
              </li>
            );
          })}
        </ul>
      ) : (
        <p>Aucune donnée trouvée.</p>
      )}
    </div>
  );
}

export default ApiTest;
