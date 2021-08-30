import data from './medalists.json';

const filterCountries = data.map((country) => country.country);
const noRepeatCountries = [...new Set(filterCountries)];
let filterResult = [];

const filtercountriesRepeat = [];
function filterCountriesFunction() {
  noRepeatCountries.forEach((curRepeat) => {
    data.filter((curFilter) => {
      if(curRepeat === curFilter.country) {
        const obj = curFilter;
        filtercountriesRepeat.push(obj);
      }
    })
  })
}
filterCountriesFunction();

const countriesFinale = [];
function formatDate() {
  // source: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
  filterResult = filtercountriesRepeat.reduce(
    (h, car) => Object.assign(h, { [car.country]:( h[car.country] || []
  )
  .concat(
    {athlete: car.athlete, medal: car.medal, country: car.country}) }), []
  );

  let ouro = 0;
  let prata = 0;
  let bronze = 0;

  const filterMedals = Object.entries(filterResult);
  filterMedals.forEach((cur) => {
    const countMedals = [];
      cur[1].forEach((aux) => {
        countMedals.push(aux);
      })
      const format = {
      pais: cur[0],
      atletas: cur[1],
      ouro,
      prata,
      bronze,
      total: cur[1].length
    }
    countMedals.forEach((cur) => {
      switch(cur.medal) {
        case 'Gold':
         format.ouro += 1
        break;
        case 'Silver':
          format.prata += 1
        break;
        case 'Bronze':
          format.bronze += 1
        break;
        default:
        // default
      }
    })
    countriesFinale.push(format);                                   
  })
}
formatDate();

export default countriesFinale;
