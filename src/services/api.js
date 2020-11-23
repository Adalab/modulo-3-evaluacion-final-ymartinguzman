const getDataFromApi = () => {
  fetch(
    'https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json'
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data.results);
    });
};
export default {
  getDataFromApi: getDataFromApi,
};
