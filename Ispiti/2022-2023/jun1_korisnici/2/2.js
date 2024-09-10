const korisnici = [
    { ime: 'Rowan', prezime: "O'Connor" },
    { ime: 'Melody', prezime: 'Norton' },
    { ime: 'Minnie', prezime: 'Terry' },
    { ime: 'Damien', prezime: 'Roach' },
    { ime: 'Ida', prezime: 'Macdonald' },
    { ime: 'Zak', prezime: 'Carlson' },
    { ime: 'Nevaeh', prezime: 'Randolph' },
    { ime: 'Dewi', prezime: 'Sanford' },
    { ime: 'Michelle', prezime: 'Rhodes' },
    { ime: 'Oscar', prezime: 'Carter' },
];

const ol = document.getElementById("lista");

let i = 0;

for(let korisnik of korisnici){
    const li = document.createElement("li");
    let ime = document.createTextNode(korisnik.ime + " ");
    let prezime = document.createTextNode(korisnik.prezime);

    let imeElement = document.createElement("span");
    let prezimeElement = document.createElement("span");

    imeElement.appendChild(ime);
    prezimeElement.appendChild(prezime);

    if(i % 2 == 0){
        imeElement.style.color = "red";
        prezimeElement.style.color = "green";
    }
    else if(i % 2 != 0){
        imeElement.style.color = "green";
        prezimeElement.style.color = "red";
    }

    li.appendChild(imeElement);
    li.appendChild(prezimeElement);

    ol.appendChild(li);
    i++;
}