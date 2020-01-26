const axios = require('axios');

const getLugarLatLng = async(dir) => {
    //encodeURI crea caracteres especiales en espacios que se mostraran en la URL, asi se evita error por espacios vacios
    const encodedUrl = encodeURI(dir);
    console.log(encodedUrl);

    //crea instacia que permite definir el endpoint y el header necesario
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: { 'x-rapidapi-key': 'd0995047d7msh71b886a3d72f3b4p15a200jsnd91f2548bdf0' }
    });
    //se llama la instacia
    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para  ${dir}`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}