// Init Storage
const storage = new Storage();
// Get stored location data
const weatherLocation = storage.getLocationData();

// Init Weather object
const weather = new Weather(weatherLocation.city);

//Init UI
const ui = new UI();

// Get weather on DOM load
document.addEventListener("DOMContentLoaded", getWeather);

// Change location event
document.getElementById("w-change-btn").addEventListener("click", (e) => {
  const city = document.getElementById("city").value;
  weather.changeLocation(city);

  // Set location in local storage
  storage.setLocationData(city);

  getWeather();

  // Close modal with jquery
  $("#locModal").modal("hide");
});

function getWeather() {
  weather
    .getWeather()
    .then((results) => {
      ui.paint(results);
    })
    .catch((error) => console.log(error));
}
