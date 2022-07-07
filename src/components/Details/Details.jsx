import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import {
  Detail, FlexDetails, TitleCountry, TextPop, LeftRight, TitleDetails, Text,
} from './details.styled';

const Details = () => {
  const countries = useSelector((state) => state.reduceData);
  const { country } = useParams();
  const filterCountries = countries.filter((country) => country.continent === 'Europe');
  const countryName = filterCountries.filter((item) => item.name === country);

  return (
    <div className="details">
      <Header />
      {countryName.map((country) => (
        <Detail key={country.name} className="detail">
          <TitleCountry>
            {country.name}
          </TitleCountry>
          <img src={country.flag} alt={country.name} width={250} />
          <TextPop>
            Population:
            {' '}
            {country.population}
          </TextPop>
          <FlexDetails>
            <LeftRight>
              <TitleDetails>
                Covid-19 data
              </TitleDetails>
              <Text>
                tests:
                {' '}
                {country.tests}
              </Text>
              <Text>
                cases:
                {' '}
                {country.cases}
              </Text>
              <Text>
                Deaths:
                {' '}
                {country.death}
              </Text>
              <Text>
                Recovered:
                {' '}
                {country.recovered}
              </Text>
            </LeftRight>
            <LeftRight>
              <TitleDetails>
                Today&apos;s updates:
              </TitleDetails>
              <Text>
                Today&apos;s cases:
                {' '}
                {country.todayCases}
              </Text>
              <Text>
                Today&apos;s deaths:
                {' '}
                {country.todayDeath}
              </Text>
              <Text>
                Today&apos;s recovered:
                {' '}
                {country.todayRecovered}
              </Text>
            </LeftRight>
          </FlexDetails>
        </Detail>
      ))}
      <Footer />
    </div>

  );
};

export default Details;
