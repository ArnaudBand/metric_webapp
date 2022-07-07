const API_CONTINENT = 'https://disease.sh/v3/covid-19/countries';

const GET_CONTNINENT = 'redux/Continents/GET_CONTINENT';

export const getData = (country) => ({
  type: GET_CONTNINENT,
  payload: country,
});

export const fetchData = () => async (dispatch) => {
  const res = await fetch(API_CONTINENT);
  const data = await res.json();
  const countries = data.map((country) => ({
    continent: country.continent,
    name: country.country,
    flag: country.countryInfo.flag,
    lt: country.countryInfo.iso2,
    lat: country.countryInfo.lat,
    long: country.countryInfo.long,
    cases: country.cases,
    death: country.deaths,
    population: country.population,
    recovered: country.recovered,
    tests: country.tests,
    todayCases: country.todayCases,
    todayDeath: country.todayDeaths,
    todayRecovered: country.todayRecovered,
  }));
  dispatch(getData(countries));
};

const reduceData = (state = [], action = {}) => {
  switch (action.type) {
    case GET_CONTNINENT:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export default reduceData;
