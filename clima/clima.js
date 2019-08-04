const axios = require('axios');
const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=ae34e702b53ea586f27b873cf8fd0e5d&units=metric`)
    return resp.data.main.temp;
}


module.exports = {
    getClima
}