import './sass/main.scss';

import refs from './js/refs';
import debounce from 'lodash.debounce';
import singleTemplate from '../src/template/single_template';
import multiTemplate from '../src/template/multi_template';

import checkData from './js/inputCheck';

import fetchCountries from './js/fetchCountries';
// import refs from './js/refs';

refs.input.addEventListener('input', debounce(handleInput, 750));

function handleInput(event) {
  let inputValue = event.target.value;
  if (inputValue === '' || inputValue === null) {
    refs.node.innerHTML = '';
    return;
  }
  fetchCountries(inputValue).then(data => {
    refs.node.innerHTML = '';
    let trueData = checkData(data);
    if (trueData) {
      renderCountries(data);
    }
  });
}

function renderCountries(data) {
  if (data.length > 2 && data.length < 10) {
    refs.node.insertAdjacentHTML('beforeend', multiTemplate(data));
  } else refs.node.insertAdjacentHTML('beforeend', singleTemplate(data));
}
