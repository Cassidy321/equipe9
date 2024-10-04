import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2'; // Importer le graphique Doughnut
import 'chart.js/auto'; // Auto-register chart types

function GraphiqueD() {
  const [chartData, setChartData] = useState(null);
  const [totalTrees, setTotalTrees] = useState(0); // État pour le nombre total d'arbres
  const limit = 100; // Limite de résultats par requête API

  // Fonction pour récupérer les données avec pagination
  const fetchAllData = async () => {
    let allData = [];
    let offset = 0;
    let totalRecords = 0;

    try {
      do {
        // Mise à jour de l'URL pour récupérer par "domanialité"
        const response = await fetch(`https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/les-arbres/records?select=domanialite&limit=${limit}&offset=${offset}`);
        const responseData = await response.json();

        // Vérifie que les résultats existent et sont valides
        if (response.ok && responseData.results) {
          const results = responseData.results;
          totalRecords = responseData.total_count;

          // Ajouter les résultats à la liste complète
          allData = [...allData, ...results];

          // Mise à jour de l'offset pour la prochaine requête
          offset += limit;
        } else {
          console.error('Erreur lors de la récupération des données :', responseData);
          break; // Sort de la boucle en cas d'erreur
        }

      } while (offset < totalRecords);

      return allData;

    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
      return [];
    }
  };

  useEffect(() => {
    // Appel de la fonction pour récupérer toutes les données avec pagination
    fetchAllData().then(allData => {
      if (allData.length > 0) {
        // Compter les arbres par domanialité
        const domanialiteCounts = allData.reduce((acc, record) => {
          const domanialite = record.domanialite;
          if (domanialite) {
            acc[domanialite] = (acc[domanialite] || 0) + 1;
          }
          return acc;
        }, {});

        // Calculer le nombre total d'arbres
        const totalCount = allData.length; // Total d'arbres
        setTotalTrees(totalCount); // Mettre à jour l'état avec le total

        // Préparer les données pour Chart.js en pourcentage
        const percentageData = Object.values(domanialiteCounts).map(count => (count / totalCount * 100).toFixed(2)); // Calculer les pourcentages
        setChartData({
          labels: Object.keys(domanialiteCounts), // Les domanialités
          datasets: [
            {
              label: 'Pourcentage d\'arbres par domanialité',
              data: percentageData, // Pourcentages d'arbres
              backgroundColor: [
                  'rgba(34, 139, 34, 0.6)', // Vert foncé
                  'rgba(144, 238, 144, 0.6)', // Vert clair
                  'rgba(60, 179, 113, 0.6)', // Vert medium
                  'rgba(50, 205, 50, 0.6)', // Vert lime
                  'rgba(160, 82, 45, 0.6)', // Marron foncé
                  'rgba(210, 180, 140, 0.6)', // Marron clair
                  'rgba(165, 42, 42, 0.6)', // Marron rougeâtre
                  'rgba(205, 133, 63, 0.6)', // Marron sable
                  'rgba(222, 184, 135, 0.6)', // Marron beige
                  'rgba(128, 0, 0, 0.6)', // Marron sombre
                  'rgba(139, 87, 36, 0.6)', // Marron acajou
                  'rgba(255, 228, 196, 0.6)', // Marron bisque
              'rgba(255, 218, 185, 0.6)',
              'rgba(111, 78, 55, 0.6)',
              'rgba(205, 127, 50, 0.6)',
              'rgba(245, 222, 179, 0.6)',
              'rgba(255, 255, 224, 0.6)'
              ],
              borderWidth: 1,
            },
          ],
        });
      } else {
        console.error('Aucune donnée à afficher');
      }
    });
  }, []);

  return (
    <div className='p-6'>
      {chartData ? (
        <div className='w-full max-w-lg mx-auto'> {/* Conteneur pour le graphique */}
          <Pie 
            data={chartData}
            options={{
              responsive: true,
              plugins: {
                title: {
                  display: true, // Afficher le titre
                  text: 'Répartition des Arbres par Domanialité', // Texte du titre
                  font: {
                    size: 14, // Taille de police du titre
                  },
                },
                legend: {
                  display: false, // Désactiver l'affichage de la légende
                },
                tooltip: {
                  callbacks: {
                    label: function(tooltipItem) {
                      const label = tooltipItem.label || '';
                      const value = tooltipItem.raw; // valeur en pourcentage
                      return `${label}: ${value}%`; // Afficher le pourcentage dans l'info-bulle
                    },
                  },
                },
              },
            }}
          />
        </div>
      ) : (
        <p>Chargement des données...</p>
      )}
    </div>
  );
}

export default GraphiqueD;
