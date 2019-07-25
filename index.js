let digit1 = document.querySelector('#msTens');
let digit2 = document.querySelector('#msHundreds');
let digit3 = document.querySelector('#secondOnes');
let digit4 = document.querySelector('#secondTens');

let msTens = 0;
let msHundreds = 0;
let secondOnes = 0;
let secondTens = 0;

setInterval(() => {
if(msTens<9){
    msTens++;
digit1.textContent=msTens;
}else{
    msTens=0;
}
}, 10);
setInterval(() => {
    if(msHundreds<9){
msHundreds++;
digit2.textContent=msHundreds;
}else{
    msHundreds=0;
}
}, 100);
setInterval(() => {
    if(secondOnes<9){
        secondOnes++;
        digit3.textContent=secondOnes;
        }else{
            secondOnes=0;
        }
}, 1000);
setInterval(() => {
    if(secondTens<9){
        secondTens++;
        digit4.textContent=secondTens;
        }else{
            secondTens=0;
        }
}, 10000);