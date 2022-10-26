const eleMyNumber = document.querySelector('#my-number');
const elePcNumber = document.querySelector('#pc-number');
const eleOutput = document.querySelector('#output');
const eleButtonGenerate = document.querySelector('#button-generate');
const eleButtonReset = document.querySelector('#button-reset'); 

eleButtonGenerate.addEventListener('click',function () {

const myNumber = Math.floor(Math.random() * 6)+ 1; 
const pcNumber = Math.floor(Math.random() * 6)+ 1;

eleMyNumber.innerHTML = myNumber;
elePcNumber.innerHTML = pcNumber;

let solution;

    if (myNumber > pcNumber) {
        solution = 'Hai vinto';
    } else if (myNumber < pcNumber) {
        solution = 'Ha vinto il computer';
    } else {
        solution = 'Avete pareggiato';
    }
    
    eleOutput.innerHTML = solution;
})

eleButtonReset.addEventListener('click',function () {
    eleMyNumber.innerHTML = '';
    elePcNumber.innerHTML = '';
    eleOutput.innerHTML = '';
})
