(()=>{

    const avenger = {
        name:'Hulk',
        key:'Hulk destroys',
        power:'Super Strength'
    }

    const extract = ( { name,key }:any ) => {

        //const {name,key,power} = avenger;
        console.log(name);
        console.log(key);
        //console.log(power);
    }
    //extract(avenger);
    const avengers :string[] = ['Thor','IronMan','Spiderman','EyesHawk','Hulk'];
    const [,,,,hulk] = avengers;
    console.log(hulk);
    const extractArr = ( [,,,EyesHawk,hulk]:string[]) =>{

        console.log(EyesHawk,hulk);
    }
    extractArr(avengers);
 














})();




