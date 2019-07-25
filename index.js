let digit1=document.querySelector('#msTens');
let digit2=document.querySelector('#msHundreds');
let digit3=document.querySelector('#secondOnes');
let digit4=document.querySelector('#secondTens');

let count1=0;
let count2=0;
let count3=0;
let count4=0;

digit1.textContent
function counter(){

for(var i=0;i<10;i++){
    setTimeout(()=>{
    digit1.textContent=count1;

    if(i<10){
        count1++;
        
    }else{
        count1=0;
    }
},10);
   }
   for(var i=0;i<10;i++){

   }

counter();
