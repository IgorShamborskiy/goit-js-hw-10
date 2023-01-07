// const BASE_URL = `https://restcountries.com/#api-endpoints-v3-name`;

// export function fetchCountries(name) {
//     return fetch().then(response =>
//         response.json(`${BASE_URL}`),
//     );
// }
//  console.log(fetchCountries)


fetch(`https://restcountries.com/#api-endpoints-v3-name`).then(response => {
  // console.log(response.json());
  return response.json();
}).then(name => {
  console.log(name);
});