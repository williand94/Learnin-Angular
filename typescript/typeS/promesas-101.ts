(()=>{

    console.log("Beging");

    const prom1 = new Promise((resolve, reject) => {
      
        setTimeout(() => {
        
            reject("Time is over!");
        
        },1000);
    
    });

    
    prom1
        .then(mensaje => console.log(mensaje))
        .catch(err => console.warn(err));
       
    console.log("End");
})();




