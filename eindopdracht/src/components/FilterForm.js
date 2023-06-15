import React, { useState } from 'react';
import './FilterForm.css';

const FilterForm = ({ onFilter }) => {
  const [filterValues, setFilterValues] = useState({
    prijs: '',
    kamers: '',
    oppervlakte: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    onFilter(filterValues);
  };

  const handleReset = () => {
    setFilterValues({
      prijs: '',
      kamers: '',
      oppervlakte: '',
    });
    onFilter({});
  };

  const handleChange = (event) => {
    setFilterValues({
      ...filterValues,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form className="filter-form" onSubmit={handleSubmit}>
      <select name="prijs" onChange={handleChange}>
        <option value="">Prijs</option>
        <option value="<200000">Minder dan 200.000</option>
        <option value="200000-350000">Tussen 200.000 en 350.000</option>
        <option value="350000-500000">Tussen 350.000 en 500.000</option>
        <option value=">500000">Meer dan 500.000</option>
      </select>

      <select name="kamers" onChange={handleChange}>
        <option value="">Kamers</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value=">5">5+</option>
      </select>

      <select name="oppervlakte" onChange={handleChange}>
        <option value="">Oppervlakte</option>
        <option value="<120">Minder dan 120</option>
        <option value="120-180">Tussen 120 en 180</option>
        <option value="180-250">Tussen 180 en 250</option>
        <option value="250-350">Tussen 250 en 350</option>
        <option value=">350">Meer dan 350</option>
      </select>

      <button type="submit">Filter</button>
      <button type="button" onClick={handleReset}>Reset</button>
    </form>
  );
};

export default FilterForm;
