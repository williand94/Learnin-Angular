(()=>{

    const sumar = (a:number,b:number) :number => a + b;
    
    const nombre = () => 'Hola David';

    const obtenerSalario = (salario:number) :Promise<string> => {

        return new Promise((resolve, reject) => {
            if (salario < 900000) {
                
                reject(`NEcesito un aumento mi paga es de ${salario} y es muy baja`)
            }else{
                resolve(`Estoy contento porque  mi salario es de ${salario}`);
            }
        });
    }
    obtenerSalario(1000000).then( a => console.log(a) )
                    .catch(b => console.log(b));
    
})();

 


