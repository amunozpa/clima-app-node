const axios = require('axios');

const getWeather = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=dba98e240a26be86abeaded1cea6b967&units=metric`)

    return resp.data.main.temp;
}


module.exports = {
    getWeather
}