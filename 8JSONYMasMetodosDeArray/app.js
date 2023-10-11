const arrayBicis = require("./datosBici");

let dhBici = {
    bicicletas: arrayBicis,
    buscarBici: function(idBicicleta){
        let arrayNuevo = this.bicicletas.filter(function(objeto){
            return objeto.id == idBicicleta;
        })

        if(arrayNuevo.length == 0){
            return null;
        }
        
        return arrayNuevo;
    },

    venderBici: function(idBicicleta){
        let arrayBiciEncontrada = this.buscarBici(idBicicleta);

        if(arrayBiciEncontrada != null){
            arrayBiciEncontrada[0].vendida = "si";
            return arrayBiciEncontrada;
        }else{
            return "Bicicleta no encontrada";
        }
    },

    biciParaLaVenta: function(){
        return this.bicicletas.filter(function(objeto){
            return objeto.vendida == "no"; 
        });
    },

    totalDeVentas: function(){

        let bicicletasVendidas = this.bicicletas.filter(function(objeto){
            return objeto.vendida == "si"; 
        });
        //nos devuelve un array filtrado con aquellas bicis que cumplan la condicion de vendida

        return bicicletasVendidas.reduce(function(acumulador, objeto){
            return acumulador + parseInt(objeto.precio)
        }, 0);
        //el primer elemento de reduce es la funcion que suma los elemetos del arreglo, el segundo elemento indica en que valor comienza el acumulador
        
    },

    aumentoBici: function(aumento){
        return this.bicicletas.map(function(objeto){
            objeto.precio = objeto.precio * ((aumento/100)+1);
            return objeto;
        })
    },

    biciPorRodado: function(nroRodado){
        return this.bicicletas.filter(function(objeto){
            return objeto.rodado == nroRodado; 
        });
    },

    listarTodasLasBicis: function(){
        /* this.bicicletas.forEach(function(objeto){
            console.log(objeto);
        }); */
        
        for(let objeto of this.bicicletas){
            console.log(objeto);
        }
    }
}

console.log(dhBici.listarTodasLasBicis());