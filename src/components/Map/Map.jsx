import React from 'react';
import { useSelector } from 'react-redux';
import {
  MapContainer, TileLayer, Marker, Popup,
} from 'react-leaflet';
import Header from '../Header/Header';

const Map = () => {
  const countries = useSelector((state) => state.reduceData);
  const regionCountries = countries.filter((country) => country.continent === 'Europe');
  return (
    <>
      <Header />
      <div className="map">
        <MapContainer center={[51.505, -0.09]} zoom={4} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {regionCountries.map((country, index) => (
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

    </>
  );
};

export default Map;
