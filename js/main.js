let array=[9,10,15];


function display(){
    console.log(array);
    for(let i=0; i<array.length; i++){
        if(array[i]> 10){
            array[i] = 5;
        }
    }
    console.log(array);
}

display();