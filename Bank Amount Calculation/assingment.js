/*--------------Problem--1---------- */
function  radianToDegree(radians){ 
    if (typeof radians != 'number'){
        return "Inter Valid Input";
       }
    else{
        result = radians * (180 / Math.PI)
      return result.toFixed(2);
    }
}
/*--------------Problem--2---------- */

function isJavaScriptFile(fileName){
    if (typeof fileName != 'string'){
     return "Inter Valid Input";
    }
    else{
     part=fileName.slice(-3);     
     if(part === ".js"){
        return true;
     }
     else{
        return false
     }
    }
} 

/*--------------Problem--3---------- */
function oilPrice(diesel ,petrol,octain){

    if (typeof diesel != 'number' || typeof petrol !='number' || typeof octain !='number'){
     return "Inter Valid Input";
    }
    
    else {
     let dieselPrice = diesel*114;
     let petrolPrice = petrol*130;
     let octainPrice = octain*135;
 
     let totalPrice = dieselPrice + petrolPrice + octainPrice;
 
     return totalPrice;
    }
 }
 
/*--------------Problem--4---------- */
function publicBusFare(totalPassenger){

    if (typeof totalPassenger != 'number'){
        return "Inter Valid Input";
    }
    else{
        let i,tiketPrice=250;
    for(i=0;true;i++){
        if(totalPassenger>=50){
            totalPassenger=totalPassenger -50;
        }
        else if(totalPassenger>=11){
            totalPassenger=totalPassenger-11;
        }
        else{
            return tiketPrice*totalPassenger;
        }
    }
    }
    }
    
/*--------------Problem--5---------- */
function isBestFriend(obj,obj1){
    if (typeof obj != 'object' || typeof obj1 != 'object'){
        return "Inter Valid Input";
       }
  else{
    if( (obj.name === obj1.friend)&&(obj.friend === obj1.name) ){
        return true;
    }
    else{
        return false;
    }
  }
}

/*--------------End---------- */