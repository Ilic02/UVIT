const f = document.getElementById('formular');
if(f != null){
f.addEventListener("submit", obradaFormulara);
}

function obradaFormulara(){
    let polje;
    const greska = document.getElementById('greska');
    if(greska == null){
        ev.preventDefault();
        console.log("Nije pronadjeno polje za greksu");
        return;
    }

    //Ime i prezime
    polje = document.getElementById('ime_prezime');
    if(polje == null){
        ev.preventDefault();
        console.log("Nije pronadjeno polje za ime i prezime");
        return;
    }
    const imePrezime = polje.value.trim();
    if(imePrezime == '' || imePrezime.length > 30){
        greska.textContent = "Polje za ime i prezime nije validno";
        polje.focus();
        ev.preventDefault();
        return;
    }

    //Datuim rodjenja
    polje = document.getElementById('#datum_rodjenja');
    if(polje == null){
        ev.preventDefault();
        console.log("Nije pronadjeno polje za datum rodjenja");
        return;
    }
    const datumRodjenja = polje.value; //2021-04-20
    const godina = parseInt(datumRodjenja.substr(0,4));
    const mesec = parseInt(datumRodjenja.substr(5, 2));
    const dan = parseInt(datumRodjenja.substr(8,2));

    if(
        isNaN(dan) ||
        isNaN(mesec) ||
        isNaN(godina) ||    
        dan < 1 ||
        dan > 31 ||
        mesec < 1 || 
        mesec > 12 ||
        godina < 0
    ){
        greska.textContent = 'Nekorektna vrednost u polju za datum rodjenja'
    }

    //Fakultet
    polje.document.querySelector("#fakultet");

    if(polje.selectedIndex === 0){
        greska.textContent = 'Odaberite fakultet';
        polje.focus();
        ev.preventDefault();
        return false;
    }

    //Godina studja
    const radios = document.querySelector('input[name="godina]');
    let indikatorGodina = false;

    for(let i = 0; i< radios.length; ++i){
        polje = radios[i];

        if(polje.checked){
            indikatorGodina = true;
        }
    }
    if(indikatorGodina === false){
        greska.textContent = "Godina studija je obavezno polje";
        polje.focus();
        ev.preventDefault();
        return false;
    }
}

