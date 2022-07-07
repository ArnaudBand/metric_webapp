import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './countries.css';

const Countries = () => {
  const countries = useSelector((state) => state.reduceData);

  const regionCountry = countries.filter((country) => country.continent === 'Europe');
  const [state, setState] = useState('');

  const arr = [];
  if (regionCountry.length > 0 && state) {
    regionCountry.filter((country) => {
      if (country.name.toLowerCase().includes(state)) {
        arr.push(country);
      }
      return arr;
    });
  }

  const handleChange = (element) => setState(element.target.value);

  return (
    <div className="container_app">
      <Header />
      <div className="div_header">
        <img src="europeCountries.png" alt="Europe" className="headerImageSc" />
        <img src="covidGif.gif" alt="Europe" className="headerImageRes" />
      </div>
      <div className="input_div">
        <input type="text" id="input" placeholder="Type a country name" onChange={handleChange} />
      </div>
      <div className="container">

        {
        arr && arr.map((country) => (
          <Link className="container_country" key={country.name} to={`/Details/${country.name}`}>
            <img src={country.flag} alt={country.name} width={100} className="country_flag" />
            <div className="cases">
              <h1 className="country_name">{country.name}</h1>
              <p className="case">{country.cases}</p>
            </div>
          </Link>
        ))
      }

        {
      arr.length === 0 && regionCountry.map((country) => (
        <Link className="container_country" key={country.name} to={`/Details/${country.name}`}>
          <img src={country.flag} alt={country.name} width={100} className="country_flag" />
          <div className="cases">
            <h1 className="country_name">{country.name}</h1>
            <p className="case">{country.cases}</p>
          </div>
        </Link>
      ))
    }

      </div>
      <Footer />
    </div>
  );
};

export default Countries;
