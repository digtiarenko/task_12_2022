import '@pnotify/core/dist/BrightTheme.css';
import { alert, notice, info, success, error } from '@pnotify/core';

function checkData(data) {
  if (!data) {
    return false;
  }
  if (data.status === 404) {
    error({
      title: 'Oh No!',
      text: 'Country is not found',
    });
    console.log('Country is not found'); //pNotify
    return false;
  }

  if (data.length > 10) {
    console.log('Too many matches found. Please specify your request');
    alert({
      title: 'Oh No!',
      text: 'Too many matches found. Please specify your request',
    });
    return false;
  } else return true;
}

export default checkData;
