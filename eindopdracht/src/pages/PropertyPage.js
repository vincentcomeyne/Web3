// PropertyPage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropertyCard from '../components/PropertyCard';
import SearchForm from '../components/SearchForm';
import FilterForm from '../components/FilterForm';
import './PropertyPage.css';

const fetchProperties = (filterValues, searchValues, setProperties) => {
    let url = 'http://localhost:3000/panden';
    if (filterValues.prijs) {
      url += `?prijs=${filterValues.prijs}`;
    } else if (filterValues.kamers) {
      url += `?kamers=${filterValues.kamers}`;
    } else if (filterValues.oppervlakte) {
      url += `?oppervlakte=${filterValues.oppervlakte}`;
    } else if (searchValues.gemeente) {
      url += `?gemeente=${searchValues.gemeente}`;
    } else if (searchValues.postcode) {
      url += `?postcode=${searchValues.postcode}`;
    } else if (searchValues.prijs) {
      url += `?prijs=${searchValues.prijs}`;
    }

    axios.get(url)
      .then(response => {
        setProperties(response.data);
      })
      .catch(error => {
        console.error(`Er is iets misgegaan bij het ophalen van de data: ${error}`);
      });
};

const PropertyPage = () => {
  const [properties, setProperties] = useState([]);
  const [filterValues, setFilterValues] = useState({});
  const [searchValues, setSearchValues] = useState({});

  useEffect(() => {
    fetchProperties(filterValues, searchValues, setProperties);
  }, [filterValues, searchValues]);

  const handleSearch = (search) => {
    setSearchValues(search);
  };

  const handleFilterChange = (filter) => {
    setFilterValues(filter);
  };

  return (
    <div>
      <div className="form-container">
        <SearchForm onSearch={handleSearch} />
        <FilterForm onFilter={handleFilterChange} />
      </div>
      <div className="property-grid">
        {properties.map(property => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default PropertyPage;
