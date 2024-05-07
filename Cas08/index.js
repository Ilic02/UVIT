// let velicina = 100;
// const korak = 50;


// const uvecaj = document.getElementById('uvecaj');
// if(uvecaj != null){
//     uvecaj.addEventListener("click", uvecajClick);
// }

// const smanji = document.getElementById('smanji');
// if(smanji != null){
//     smanji.addEventListener("click", smanjiClick);
// }

// function uvecajClick(){
//     velicina += korak;

//     const kvadrat = document.getElementById('kvadrat');
//     if(kvadrat != null){
//         kvadrat.style.width = velicina + 'px';
//         kvadrat.style.height = velicina + 'px';
//     }
// }

// function smanjiClick(){
//     velicina -= korak;

//     const kvadrat = document.getElementById('kvadrat');
//     if(kvadrat != null){
//         kvadrat.style.width = velicina + 'px';
//         kvadrat.style.height = velicina + 'px';
//     }
// }

// const kvadrat = document.getElementById('kvadrat');
// if(kvadrat != null){
//     kvadrat.addEventListener('mouseenter', function (){
//         kvadrat.style.backgroundColor = 'violet';
//     });
//     kvadrat.addEventListener('mouseleave', function(){
//         kvadrat.style.backgroundColor = 'white';
//     });
// }

console.log('Begin');

setTimeout(function() {
    console.log('Middle');
}, 2000);

console.log('End');