let digit1 = document.querySelector('#msTens');
let digit2 = document.querySelector('#msHundreds');
let digit3 = document.querySelector('#secondOnes');
let digit4 = document.querySelector('#secondTens');

let msTens = 0;
let msHundreds = 0;
let secondOnes = 0;
let secondTens = 0;

setInterval(() => {
    if(secondTens<1){
    if(msTens<9){
    msTens++;

}else{
    msTens=0;
}
}else{
    msTens=0;
    clearInterval();
    changeColor();

}digit1.textContent=msTens;
}, 10);


setInterval(() => {
    if(secondTens<1){
    if(msHundreds<9){
msHundreds++;

}else{
    msHundreds=0;
}
}else{
    msHundreds=0;
    clearInterval();
}digit2.textContent=msHundreds;
}, 100);


setInterval(() => {
    if(secondTens<1){
    if(secondOnes<9){
        secondOnes++;
                

        }else{
            secondOnes=0;
        }
    }
        else{
            secondOnes=0;
            clearInterval();
        }
        digit3.textContent=secondOnes;
}, 1000);

 setInterval(() => {
    if(secondTens<1){
        secondTens++;
        
        }else{
            clearInterval();

         
  } 
           digit4.textContent=secondTens;


}, 10000);
     
    function changeColor(){

   
  let digits=document.getElementsByClassName('digit');
    let digitArray=[...digits];   
  for(var i=0;i<digitArray.length;i++){
    digitArray[i].className +=' redDigit';} 
}