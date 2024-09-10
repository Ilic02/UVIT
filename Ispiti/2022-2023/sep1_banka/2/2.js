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

const ol = document.getElementById('lista');

for(let korisnik of korisnici){
  const li = document.createElement("li");
  li.textContent = korisnik.ime + " " + korisnik.prezime;

  li.addEventListener("click", function(){
    li.style.color = "red";

    setTimeout(() => {
      ol.removeChild(li);
    }, 2000);
  })

  ol.append(li);
}