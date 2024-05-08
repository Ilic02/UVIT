const takmicari = [
    { naziv: "ZITTI E BUONI", izvodjac: "Måneskin", zemlja: "Italija", poeni: 0 },
    { naziv: "SHUM", izvodjac: "Go_A", zemlja: "Ukrajina", poeni: 0 },
    { naziv: "Dark Side", izvodjac: "Blind Channel", zemlja: "Finska", poeni: 0 },
    { naziv: "Je me casse", izvodjac: "Destiny", zemlja: "Malta", poeni: 0 },
    { naziv: "Last Dance", izvodjac: "Stefania", zemlja: "Grčka", poeni: 0 },
    { naziv: "Sugar", izvodjac: "Natalia Gordienko", zemlja: "Moldavija", poeni: 0 },
    { naziv: "Loco", izvodjac: "Hurricane", zemlja: "Srbija", poeni: 0 },
    { naziv: "El Diablo", izvodjac: "Elena Tsagrinou", zemlja: "Kipar", poeni: 0 },
    { naziv: "Mata Hari", izvodjac: "Efendi", zemlja: "Azerbejdžan", poeni: 0 },
    { naziv: "Adrenalina", izvodjac: "Senhit", zemlja: "San Marino", poeni: 0 },
    { naziv: "Tick-Tock", izvodjac: "Albina", zemlja: "Hrvatska", poeni: 0 },
    { naziv: "The Wrong Place", izvodjac: "Hooverphonic", zemlja: "Belgija", poeni: 0 },
];

const bodies = document.getElementsByTagName('body');
if(bodies == null)
        console.log('ERROR: Missing body!');

const ul = document.createElement('ul');

const body = bodies[0];
body.append(ul);
for(let el of takmicari){
    const li = document.createElement('li');
    li.textContent = '[' + el.zemlja + '] ' + el.izvodjac + ' - ' + el.naziv + ': ' + el.poeni;

    li.addEventListener('click', function(){
        el.poeni++;
        li.textContent = '[' + el.zemlja + '] ' + el.izvodjac + ' - ' + el.naziv + ': ' + el.poeni;
    })

    ul.append(li);
}

