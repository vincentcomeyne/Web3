import React from 'react';
import { Link } from 'react-router-dom';
import './PropertyCard.css';

function PropertyCard({ property }) {
  // Verwacht dat property.afbeeldingen een array is.
  const afbeeldingUrl = property.afbeeldingen[0]?.url;
  
  // Debug: Log the URL to the console to check if it's correct.
  console.log('Afbeeldingen URL:', afbeeldingUrl);

  // Debug: Log the entire property object.
  console.log('Property object:', property);

  return (
    <div className="property-card">
      <Link to={`/panden/${property.id}`}>
        <img src={afbeeldingUrl} alt={`Afbeelding van ${property.straat} ${property.huisnummer}`} />
      </Link>
      <div className="property-details">
        <Link to={`/panden/${property.id}`} className="property-title">
          <h2>{`${property.straat} ${property.huisnummer}, ${property.gemeente}`}</h2>
        </Link>
        <p>{property.beschrijving}</p>
      </div>
    </div>
  );
}

export default PropertyCard;
