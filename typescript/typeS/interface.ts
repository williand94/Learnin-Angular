(()=>{

    interface Xmen {
        nombre: String,
        edad:   Number,
        power?:  String
    }

    const enviarMision = ( xmen:Xmen ) =>{

        console.log(` Enviando a ${ xmen.nombre } a la misión `);
        console.log(` El poder  de  ${ xmen.nombre } son ${xmen.power = 'las garras y regeneración'} `);
    }
  
    const llegarAlCuartel = ( xmen:Xmen ) =>{

        console.log(` ${ xmen.nombre } a retornado de la misión `);
    }
    const wolverine : Xmen = {
        nombre:'Logan',
        edad:30
    }
    enviarMision( wolverine );
    llegarAlCuartel( wolverine );
})();




