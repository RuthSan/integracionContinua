const axios = require('axios');

const fetchWeatherData = async() => {
 const { data } = await axios.get(
    'http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=cf44e93b52d564987f483061cf006652'
 );

console.log(data);
};


fetchWeatherData();

