//Calcular Si alumno pasa la materia

let estudiante = {
  nombre:   'Willian David',
  apellido: 'Vallecilla Riasocos',
  edad:     27,
  carrera:  'Ingeniería en Sistemas',
  status:   true,

  calificaciones:{
    corte1: 50,
    corte2: 95,
    corte3: 22
  }
}

const notaFinal = (estudiante:any) => {

  return new Promise((resolve, reject) => {
    
    if (estudiante.status === true) {
      let prom = (estudiante.calificaciones.corte1 + estudiante.calificaciones.corte2 + estudiante.calificaciones.corte3) / 3;
      if (prom > 59) {
        resolve(`${estudiante.nombre} Paso la materia en : ${prom}`);
      }else{
        reject(`${estudiante.nombre}  la materia la pierde en : ${prom}`);
      }
    }

  })
}

notaFinal( estudiante )
                .then(nfinal => console.log(nfinal))
                .catch(console.log)