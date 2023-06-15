// SearchForm.js
import React, { useState } from 'react';
import './SearchForm.css';

const SearchForm = ({ onSearch }) => {
  const [searchValues, setSearchValues] = useState({
    gemeente: '',
    postcode: '',
    prijs: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchValues);
  };

  const handleReset = () => {
    setSearchValues({
      gemeente: '',
      postcode: '',
      prijs: '',
    });
    onSearch({});
  };

  const handleChange = (event) => {
    setSearchValues({
      ...searchValues,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="gemeente"
        placeholder="Zoek op gemeente"
        value={searchValues.gemeente}
        onChange={handleChange}
      />
      <input
        type="text"
        name="postcode"
        placeholder="Zoek op postcode"
        value={searchValues.postcode}
        onChange={handleChange}
      />
      <input
        type="text"
        name="prijs"
        placeholder="Zoek op prijs"
        value={searchValues.prijs}
        onChange={handleChange}
      />
      <button type="submit">Zoeken</button>
      <button type="button" onClick={handleReset}>Reset</button>
    </form>
  );
};

export default SearchForm;
