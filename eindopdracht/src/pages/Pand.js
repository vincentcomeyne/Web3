// Pand.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Pand = () => {
  const [property, setProperty] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3000/panden/${id}`)
      .then(response => {
        setProperty(response.data);
      })
      .catch(error => {
        console.error(`Er is iets misgegaan bij het ophalen van de data: ${error}`);
      });
  }, [id]);

  if (!property) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{`${property.straat} ${property.huisnummer}, ${property.gemeente}`}</h1>
      <img src={property.afbeeldingen[0].url} alt={`Afbeelding van ${property.straat} ${property.huisnummer}`} />
      <h2>Prijs: {property.prijs}</h2>
      <p>Beschrijving: {property.beschrijving}</p>
      <p>Aantal kamers: {property.kamers}</p>
      <p>Oppervlakte: {property.oppervlakte} m²</p>
      {/* Voeg hier eventueel meer eigenschappen toe */}
    </div>
  );
};

export default Pand;
