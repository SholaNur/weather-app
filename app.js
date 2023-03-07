const searchInput = document.querySelector("#searchInput");
const submitButton = document.querySelector("#submitButton");
const container = document.querySelector("#container");

const apiKey = "d3c30d5bbdee3b395bab9de6f880b297";

window.onload = function () {
  searchInput.focus();
};

function searchWeather() {
  let searchTerm = searchInput.value;
  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appkey=${apiKey}
`;
  console.log(apiURL);
  fetch(apiURL)
    .then((res) => res.json())
    .then((data) => {
      let dataWeather = data;
    });
}
submitButton.addEventListener("click", searchWeather);
