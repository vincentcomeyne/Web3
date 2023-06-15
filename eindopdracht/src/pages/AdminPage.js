import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminPage = () => {
  const [properties, setProperties] = useState([]);
  const [currentProperty, setCurrentProperty] = useState(null);
  const [formState, setFormState] = useState('add');  // formState is of 'add' or 'edit'

  useEffect(() => {
    axios.get('http://localhost:3000/panden')
      .then(response => {
        setProperties(response.data);
      })
      .catch(error => {
        console.error(`Er is iets misgegaan bij het ophalen van de data: ${error}`);
      });
  }, []);

  const handleAddProperty = (event) => {
    event.preventDefault();
    // Hier zou je normaal gesproken de waarden van het form gebruiken om een nieuw pand toe te voegen.
    axios.post('http://localhost:3000/panden', currentProperty)
      .then(response => {
        setProperties([...properties, response.data]);
      })
      .catch(error => {
        console.error(`Er is iets misgegaan bij het toevoegen van het pand: ${error}`);
      });
  };

  const handleEditProperty = (event) => {
    event.preventDefault();
    axios.put(`http://localhost:3000/panden/${currentProperty.id}`, currentProperty)
      .then(response => {
        setProperties(properties.map(property => 
          property.id === response.data.id ? response.data : property
        ));
        setFormState('add');
        setCurrentProperty(null);
      })
      .catch(error => {
        console.error(`Er is iets misgegaan bij het bewerken van het pand: ${error}`);
      });
  };

  const handleDeleteProperty = (id) => {
    axios.delete(`http://localhost:3000/panden/${id}`)
      .then(() => {
        setProperties(properties.filter(property => property.id !== id));
      })
      .catch(error => {
        console.error(`Er is iets misgegaan bij het verwijderen van het pand: ${error}`);
      });
  };

  return (
    <div>
      <h1>Admin Panel</h1>

      <h2>Panden Lijst</h2>
      <table style={{width: "100%", textAlign: "left", borderCollapse: "collapse"}}>
        <thead>
          <tr style={{backgroundColor: "#f8f8f8"}}>
            <th>Pand</th>
            <th>Bewerken</th>
            <th>Verwijderen</th>
          </tr>
        </thead>
        <tbody>
          {properties.map(property => (
            <tr key={property.id}>
              <td>{property.straat} {property.huisnummer}, {property.gemeente}</td>
              <td>
                <button onClick={() => {setCurrentProperty(property); setFormState('edit')}}>Bewerken</button>
              </td>
              <td>
                <button onClick={() => handleDeleteProperty(property.id)}>Verwijderen</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>{formState === 'add' ? 'Pand Toevoegen' : 'Pand Bewerken'}</h2>
      <form onSubmit={formState === 'add' ? handleAddProperty : handleEditProperty}>
        {/* Je form velden hier. Zorg ervoor dat ze gebruik maken van currentProperty en deze updaten. */}
      </form>
    </div>
  );
};

export default AdminPage;