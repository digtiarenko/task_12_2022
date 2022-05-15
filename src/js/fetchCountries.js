import refs from './refs';

function fetchCountries(inputValue) {
  const url = `https://restcountries.com/v2/name/${inputValue}`;
  return fetch(url)
    .then(response => response.json())
    .catch(error => console.log(error));
}

export default fetchCountries;
