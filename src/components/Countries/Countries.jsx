import React from 'react';
import { useSelector } from 'react-redux/es/exports';
import { Link } from 'react-router-dom';
import {
  MapContainer, TileLayer, Marker, Popup,
} from 'react-leaflet';
import './countries.css';

const Countries = () => {
  const countries = useSelector((state) => state.reduceData);

  const regionCountry = countries.filter((country) => country.continent === 'Europe');
  console.log('hello', regionCountry);

  const container = regionCountry.map((country) => (
    <Link to={`/Details/${country.name}`} key={country.name} className="container_country">
      <p className="text">
        Population:
        {' '}
        {country.population}
      </p>
      <h3 className="Title_c">
        Country Name:
        {' '}
        {country.name}
      </h3>
      <p className="cases">
        Cases:
        {' '}
        {country.cases}
      </p>
      <img src={country.flag} alt={country.name} width={100} className="country_flag" />
    </Link>
  ));
  const handleChange = () => {
    let text = '';
    const input = document.querySelector('#input');
    const inputCountry = input.value.toUpperCase();
    const containerCountry = document.querySelectorAll('.container_country');
    [...containerCountry].forEach((country) => {
      const cont = country;
      text = cont.innerText || cont.textContent;
      if (text.toUpperCase().indexOf(inputCountry) > -1) {
        cont.style.display = '';
      } else {
        cont.style.display = 'none';
      }
    });
  };

  return (
    <div className="container_app">
      <div className="map">
        <MapContainer className="leaflet_container" center={[51.505, -0.09]} zoom={4} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {regionCountry.map((country, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <Marker key={index} position={[country.lat, country.long]}>
              <Popup>
                <h3 className="Title_c">
                  Country Name:
                  {' '}
                  {country.name}
                </h3>
                <img src={country.flag} alt={country.name} width={80} className="country_flag" />
                <p className="text">
                  Population:
                  {' '}
                  {country.population}
                </p>
                <p className="cases">
                  Cases:
                  {' '}
                  {country.cases}
                </p>
                <p>
                  Deaths:

                  {country.death}
                </p>
              </Popup>
            </Marker>
          ))}

        </MapContainer>
      </div>
      <div className="input_div">
        <input type="text" id="input" placeholder="Type a country name" onChange={handleChange} />
      </div>
      <div className="container">
        {container}
      </div>
    </div>
  );
};

export default Countries;
