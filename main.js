const button = document.querySelector('.button');
const textarea = document.querySelector('.textarea');
const textareaValue = document.querySelector('.textarea').value;
const average = document.querySelector('.average');
let numsArray = [];
let result = 0;


textarea.addEventListener('keypress', ()=>{
    if(event.code == 'Digit1'){
        numsArray.push(1);
    }
    else if(event.code == 'Digit2'){
        numsArray.push(2);
    }
    else if(event.code == 'Digit3'){
        numsArray.push(3);
    }
    else if(event.code == 'Digit4'){
        numsArray.push(4);
    }
    else if(event.code == 'Digit5'){
        numsArray.push(5);
    }
    if(event.code == 'Digit6'){
        numsArray.push(6);
    }
    else if(event.code == 'Digit7'){
        numsArray.push(7);
    }
    else if(event.code == 'Digit8'){
        numsArray.push(8);
    }
    else if(event.code == 'Digit9'){
        numsArray.push(9);
    }
    else if(event.code == 'Digit0'){
        numsArray.push(0);
    }
})


button.addEventListener('click', ()=>{
    finalResult();
    average.innerHTML = result
})

function finalResult(){
    var rounded = function(number){
        return +number.toFixed(2);
    }
    let summ = 0
    for (let i = 0;  i < numsArray.length; i++){
        let arrayItem = numsArray[i];
        summ += arrayItem;
    }
    result = summ / numsArray.length;
}
