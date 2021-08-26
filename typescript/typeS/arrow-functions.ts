(function(){
    
    const myFuncion = function(a:string){
        return a.toUpperCase();
    }
    const  arrowFunction = (a:string) => {
        return a.toUpperCase();
    }
    const myFuncionf = (a:number,b:number) => a + b;
    
    const hulk = {
        name: 'hulk',
        smash(){

            setTimeout( ()=>{

                console.log(`${this.name} smash!!!`);
            },1000)

        }
    }
    hulk.smash();
    
    
    
    
    
    /*
    console.log(myFuncionf(5,6)); 
    console.log(myFuncion('hola mamasita'));
    console.log(arrowFunction('hola mamasita')); */

})();




