(()=>{


    const retirarDinero = ( montoRetirar:number ): Promise<number> =>{

    
        let dineroActual = 10000;

        return new Promise((resolve, reject) => {
            
            if(Math.sign(montoRetirar) === -1){

                return console.error('NO puede ungresar un número negativo');
            }
            if (montoRetirar > dineroActual) {
                reject('Saldo insuficiente');
            }else{
                dineroActual -= montoRetirar;
                resolve(dineroActual);
            }
        })

    }    
    retirarDinero(-20000)
                      .then(montoActual => console.log(`Me quedan : ${montoActual}`))
                      .catch(console.warn);

})();




