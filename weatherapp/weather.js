class Weather {
  constructor(city) {
    this.apiKey = "c0d7e1800b754973a57133629211410";
    this.baseUrl = "http://api.weatherapi.com/v1/";
    this.city = city;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(
      `${this.baseUrl}current.json?key=${this.apiKey}&q=${this.city}&aqi=no`
    );

    const responseData = await response.json();
    return responseData;
  }

  // Change weather location
  changeLocation(city) {
    this.city = city;
  }
}
