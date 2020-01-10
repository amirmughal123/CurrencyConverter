import { API_KEY } from '../config';

const convertCurrencyService = (from, to, amount = 1) => {
  let url = `https://free.currconv.com/api/v7/convert?q=${from}_${to}&compact=ultra&apiKey=${API_KEY}`;
  return new Promise((resolve, reject) => {
    fetch(url).then(res => {
      return res.json()
    }).then(data => {
      resolve(data[`${from}_${to}`]*amount);
    }).catch(err => {
      reject(err);
    });
  });
}

export {
  convertCurrencyService
}
