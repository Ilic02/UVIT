// const veza = document.getElementById('veza');
// if(veza != null){
//     veza.href = 'http://uvit.math.rs';
//     veza.target = '_blank';

//     veza.innerHTML = 'Sajt kursa';
// }

//  const divovi = document.getElementsByTagName('div');
// // if(divovi.length > 0){
// //     const div = divovi[0];

// //     console.log(div.style.backgroundColor, typeof div.style.backgroundColor);
// //     div.style.backgroundColor = '#f5205c';
// //     console.log(div.style.backgroundColor, typeof div.style.backgroundColor);
// // }

// if(divovi.length > 0){
//     const div = divovi[0];

//     console.log(div.className, typeof div.className);
//     console.log(div.classList, typeof div.classList);

// }


// ---------------------------------------------------------------------------------------------------------------------------------------------------

function napravi_dom_podstablo(body){
    const koren = document.createElement('div');
    body.appendChild(koren);

    //h1
    const h1 = document.createElement('h1');
    const h1Text = document.createTextNode('JavaScript');
    h1.appendChild(h1Text);
    koren.appendChild(h1);

    //p
    const p = document.createElement('p');
    const pText = document.createTextNode('Super jezik, ali samo ako znamo kako se koristi :)');
    p.appendChild(pText);
    koren.appendChild(p);

    //ul
    const lista = document.createElement('ul');
    koren.appendChild(lista);
    const stavke = [
        'Moze da se koristi na klijentskoj strani',
        'Ali i na serverskoj'
    ];
    for(const stavka of stavke){
        const li = document.createElement('li');
        const liText = document.createTextNode(stavka);
        li.appendChild(liText);
        lista.appendChild(li); 
    }
}

// Pravljenje novih cvorova u DOM stablu
//      -pravljenje elemenata: <div></div>
//      -tekstualni cvorovi: 'JavaScript'
// Povezivanje cvorova u drvoliku strukturu

const bodies = document.getElementsByTagName('body');
if(bodies.length > 0){
    const body = bodies[0];
    napravi_dom_podstablo(body);
}


