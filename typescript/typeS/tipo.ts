(function(){
    
    function saludar( nombre:string,apellido:string ) {
        console.table( 'Hola que tal: ' + nombre + ' ' + apellido); // Hola Logan
    }
    
    
    const wolverine = {
        nombre: 'Logan',
        apellido: 'Rogelio'
    };
    saludar(wolverine.nombre,wolverine.apellido); 
    
    /*--------- Variables let,var  y const ----------*/

    var mensaje = 'hola';

    if(true){
        var mensaje = 'mundo';
        //console.log('I said ' + mensaje );
    }
    console.log(mensaje);


    /*--------- Tipos de datos ----------*/

    let name:string = 'Willian David';
    let number:number = 123;
    let boolean: boolean = true; //false;
    let today: Date = new Date();
    
    //let anything:number | boolean;
    let anything;

    anything = name;
    anything = number;
    anything = boolean;
    anything = today;

    let spiderman ={
        name : 'Peter',
        age: 30, 
    };
   
    spiderman={
        name:'Parker',
        age:22,
    };




















})();




