const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').option({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad de la cual quiero saber el clima...',
        demand: true
    }

}).argv;

const getInfo = async(direccion) => {
    try {
        const coordenadas = await lugar.getLugarLatLng(direccion);
        const temperatura = await clima.getClima(coordenadas.lat, coordenadas.lng);
        return `La temperatura para la ciudad de ${coordenadas.direccion} es de ${temperatura} grados C.`;

    } catch (e) {
        return `No tenemos datos meteorologicos de la ciudad de ${coordenadas.direccion}.`;
    }
}



getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);