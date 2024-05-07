// const niz_niski = ['uvit', 'os', 'aisp'];

// function ispisi_uvecane_niske(niz){
//     for(const niska of niz){
//         console.log(niska.toUpperCase());
//     }
// }

// ispisi_uvecane_niske(niz_niski);
// console.log('-------------------------------');

// for(let i = 0; i<niz_niski.length; ++i){
//     console.log(niz_niski[i]);
// }

// console.log('-----------------------------------------------');

// const mesani_niz = [17.5, 'oop', false, 1000, -12.457, 'kiaa', true, true];

// function negiraj_bilove_vrednosti(niz){
//     for(let i = 0; i<niz.length; ++i){
//         if(typeof niz[i] == 'boolean'){
//             niz[i] = !niz[i];
//         }
//     }
// }

// function izdvoj_samo_brojeve(niz){
//     const brojevi = [];
//     for(let i = 0; i<niz.length; i++){
//         if(typeof niz[i] == 'number'){
//             brojevi.push(niz[i]);
//         }
//     }
//     return brojevi;
// }

// console.log(mesani_niz);
// console.log('--------------------------------');
// negiraj_bilove_vrednosti(mesani_niz);

// console.log(mesani_niz);

// const a = izdvoj_samo_brojeve(mesani_niz);
// console.log(a);

// const sekvenca = 'a-t-a-g-c-a-g-t-c-c-a';
// const nukleotide = sekvenca.split('-'); // iz niza u string preko join
// console.log(nukleotide);

// //2-grami (n-grami):

// function napravi_2grame(niz){
//     const dvagrami = [];

//     for(let i= 0; i<niz.length - 1; i++){
//         const dvagram = niz[i] + niz[i+1];

//         dvagrami.push(dvagram);
//     }
//     return dvagrami;
// }

// const dvagrami = napravi_2grame(nukleotide);
// console.log(dvagrami);

// const automobil = {
//     ime: 'Fiat',
//     tezina: 850,
//     bola: 'bela',
//     pokreni: function(){
//         return "Automobil je ukljucen";
//     }
// };
// automobil.model = '500'

// console.log(automobil.pokreni());
// console.log(automobil.ime, automobil.model);

// Drugi cas

const prviPasus = document.getElementById('prvi'); // objekat!
console.log(prviPasus);
if(prviPasus == null){
    console.log("Nije pronadjen");
}
else{
    console.log("Pronadjen");
}

const pasusi = document.getElementsByTagName('p');
console.log(pasusi);