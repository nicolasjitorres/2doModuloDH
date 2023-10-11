let cursosDisponibles = [["html5", 4000], ["css3", 5000], ["javascript", 10000], ["react", 7000], ["nodejs", 15000]];

let cursosATomar = ["HTML5", "CSS3", "NODEJS"];

function calcularMontoTotal (arregloCursos, arregloCursosAlumno) {
    let indiceCursosAlumno = 0;
    let montoTotal = 0;
    while(indiceCursosAlumno < arregloCursosAlumno.length){
        let indiceCursos = 0;
        let cursoAlumno = arregloCursosAlumno[indiceCursosAlumno];
        while(indiceCursos < arregloCursos.length){
            let curso = arregloCursos[indiceCursos];
            if(curso[0].toUpperCase().includes(cursoAlumno)){
                montoTotal += curso[1];
                indiceCursos = arregloCursos.length;
            }
            indiceCursos++;
        }
        indiceCursosAlumno++;
    }
    return montoTotal;
}


function alumnoYMontoAPagar(nombreAlumno, arregloCursos, arregloCursosAlumno) {
    
    let montoTotal = calcularMontoTotal(arregloCursos, arregloCursosAlumno);
    let cursosQueTomaAlumno = "";
    let indice = 0;
    while(indice < arregloCursosAlumno.length){
        cursosQueTomaAlumno = cursosQueTomaAlumno + (indice+1) + ": " + arregloCursosAlumno[indice] + "\n" 
        indice++;
    }
    let mensaje = `Estimado ${nombreAlumno}, en función de los cursos seleccionados: \n${cursosQueTomaAlumno}El monto total a pagar es de: ${montoTotal}. \n¡Bienvenido a la aventura de Digital House!`
    return mensaje;
}


console.log(alumnoYMontoAPagar("Nicolas Torres", cursosDisponibles, cursosATomar));