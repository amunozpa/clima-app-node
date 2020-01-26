const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs')
    .options({
        direccion: {
            alias: 'd',
            desc: 'Direccion de la ciudad para obtener el clima',
            demand: true
        }
    })
    .argv;





console.log(argv.direccion);
//var direccion = argv.direccion

// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log);

// clima.getWeather(-5.710000, -79.279999)
//     .then(console.log)
//     .catch(console.log);

const getInfo = async(direccion) => {

    try {
        const coor = await lugar.getLugarLatLng(direccion);

        const t = await clima.getWeather(coor.lat, coor.lng);

        return `El clima de ${coor.direccion} es de ${t}.`
    } catch (error) {
        return `No hay clima de ${direccion}.`;
    }


}

getInfo(argv.direccion).then(console.log).catch(console.log);