const fs = require('fs');

function bicisArray(){
    let bicis = fs.readFileSync( __dirname + "/bicicletas.json", "utf-8");
    return JSON.parse(bicis);
};
//convierte el texto plano del JSON en un array de objetos literarios

module.exports = bicisArray();