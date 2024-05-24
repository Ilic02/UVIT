let div1 = document.getElementById('first');
if(div1 == null)
    console.log("ERROR! Failed to get div1!");

let div1Green = document.getElementById('green1');

let poeni = document.getElementById('poeni');
poeni.value = 0;

let rb1Da = document.getElementById('rb1Da');
let rb1Ne = document.getElementById('rb1Ne');
let rb1Nzm = document.getElementById('rb1Nzm');

rb1Da.addEventListener('click', function(){
    div1.remove();
    poeni.value = parseInt(poeni.value) + 10;
});

rb1Ne.addEventListener('click', function(){
    div1Green.style.backgroundColor = 'red';
    poeni.value = parseInt(poeni.value) - 5;
    
});

rb1Nzm.addEventListener('click', function(){
    div1Green.style.border = '2px solid black';
});

let div2 = document.getElementById('second');
if(div2 == null)
    console.log("ERROR! Failed to get div2!");

let div2Green = document.getElementById('green2');


let rb2Da = document.getElementById('rb2Da');
let rb2Ne = document.getElementById('rb2Ne');
let rb2Nzm = document.getElementById('rb2Nzm');

rb2Da.addEventListener('click', function(){
    div2.remove();
    poeni.value = parseInt(poeni.value) + 10;
});

rb2Ne.addEventListener('click', function(){
    div2Green.style.backgroundColor = 'red';
    poeni.value = parseInt(poeni.value) - 5;
});

rb2Nzm.addEventListener('click', function(){
    div2Green.style.border = '2px solid black';
});

let div3 = document.getElementById('third');
if(div3 == null)
    console.log("ERROR! Failed to get div2!");

let div3Green = document.getElementById('green3');


let rb3Da = document.getElementById('rb3Da');
let rb3Ne = document.getElementById('rb3Ne');
let rb3Nzm = document.getElementById('rb3Nzm');

rb3Da.addEventListener('click', function(){
    div3.remove();
    poeni.value = parseInt(poeni.value) + 10;
});

rb3Ne.addEventListener('click', function(){
    div3Green.style.backgroundColor = 'red';
    poeni.value = parseInt(poeni.value) - 5;
});

rb3Nzm.addEventListener('click', function(){
    div3Green.style.border = '2px solid black';
});