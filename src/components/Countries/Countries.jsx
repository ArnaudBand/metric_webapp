import React from 'react';
import { useSelector } from 'react-redux/es/exports';
import { Link } from 'react-router-dom';
import {
  MapContainer, TileLayer, Marker, Popup,
} from 'react-leaflet';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './countries.css';

const Countries = () => {
  const countries = useSelector((state) => state.reduceData);

  const regionCountry = countries.filter((country) => country.continent === 'Europe');

  const container = regionCountry.map((country) => (
    <Link to={`/Details/${country.name}`} key={country.name} className="container_country">
      <img src={country.flag} alt={country.name} width={100} className="country_flag" />
      <div className="cases">
        <h3 className="country_name">
          {country.name}
        </h3>
        <p className="case">
          {country.cases}
        </p>
      </div>

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
      <Header />
      <div className="map">
        <MapContainer center={[51.505, -0.09]} zoom={4} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {regionCountry.map((country, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <Marker key={index} position={[country.lat, country.long]}>
              <Popup>
                <div className="div_flex">
                  <h3 className="titl_c">
                    {country.lt}
                  </h3>
                  <img src={country.flag} alt={country.name} width={80} className="country_flag" />
                </div>
                <p>
                  Population:
                  {' '}
                  {country.population}
                </p>
                <p>
                  Cases:
                  {' '}
                  {country.cases}
                </p>
                <p>
                  Death:

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
      <Footer />
    </div>
  );
};

export default Countries;
