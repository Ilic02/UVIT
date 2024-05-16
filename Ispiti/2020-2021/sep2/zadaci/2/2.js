const casovi = [
{
  predmet: "Uvod u organizaciju i arhitekturu racunara 2",
  tip: "predavanje",
  dan: "Ponedeljak",
  vreme: 8,
  brojCasova: 3
},
{
  predmet: "Uvod u organizaciju i arhitekturu racunara 2",
  tip: "vezbe",
  dan: "Sreda",
  vreme: 8,
  brojCasova: 2
},
{
  predmet: "Diskretne strukture 2",
  tip: "predavanje",
  dan: "Ponedeljak",
  vreme: 11,
  brojCasova: 3
},
{
  predmet: "Diskretne strukture 2",
  tip: "vezbe",
  dan: "Utorak",
  vreme: 8,
  brojCasova: 2
},
{
  predmet: "Programiranje 2",
  tip: "predavanje",
  dan: "Utorak",
  vreme: 12,
  brojCasova: 3
},
{
  predmet: "Programiranje 2",
  tip: "vezbe",
  dan: "Utorak",
  vreme: 8,
  brojCasova: 3
},
{
  predmet: "Uvod u organizaciju i arhitekturu racunara 2",
  tip: "vezbe",
  dan: "Utorak",
  vreme: 8,
  brojCasova: 2
},
{
  predmet: "Diskretne strukture 2",
  tip: "vezbe",
  dan: "Utorak",
  vreme: 10,
  brojCasova: 2
},
{
  predmet: "Programiranje 2",
  tip: "vezbe",
  dan: "Petak",
  vreme: 12,
  brojCasova: 3
},
{
  predmet: "Linearna algebra",
  tip: "predavanje",
  dan: "Utorak",
  vreme: 12,
  brojCasova: 3
},
{
  predmet: "Linearna algebra",
  tip: "vezbe",
  dan: "Ponedeljak",
  vreme: 8,
  brojCasova: 3
},
{
  predmet: "Geometrija 1",
  tip: "predavanje",
  dan: "Ponedeljak",
  vreme: 11,
  brojCasova: 2
},
{
  predmet: "Geometrija 1",
  tip: "vezbe",
  dan: "Sreda",
  vreme: 8,
  brojCasova: 2
},
{
  predmet: "Analiza 1",
  tip: "vezbe",
  dan: "Petak",
  vreme: 11,
  brojCasova: 2
},
{
  predmet: "Analiza 1",
  tip: "vezbe",
  dan: "Sreda",
  vreme: 8,
  brojCasova: 2
},
{
  predmet: "Analiza 1",
  tip: "predavanje",
  dan: "Ponedeljak",
  vreme: 13,
  brojCasova: 2
},
{
  predmet: "Analiza 1",
  tip: "predavanje",
  dan: "Utorak",
  vreme: 10,
  brojCasova: 2
},
{
  "grupa": "1o2a",
  predmet: "Geometrija 1",
  tip: "vezbe",
  dan: "Petak",
  vreme: 13,
  brojCasova: 1
},
{
  predmet: "Analiza 1",
  tip: "vezbe",
  dan: "Utorak",
  vreme: 9,
  brojCasova: 1
}
];

const body = document.querySelector('body');
if(body == null)
    console.log('ERROR! Missing body!');

const lbl = document.createElement('lbl');
const lblTxt = document.createTextNode('Dan:')
lbl.appendChild(lblTxt);

const select = document.createElement('select');

let dani = {
  Pon: "Ponedeljak",
  Uto: "Utorak",
  Sre: "Sreda",
  Cet: "Cetvrtak",
  Pet: "Petak"
};

for(let d in dani){
  const opt = document.createElement('option');
  const optTxt = document.createTextNode(dani[d]);
  opt.appendChild(optTxt);

  select.appendChild(opt);
}

const button = document.createElement('button');
const btnTxt = document.createTextNode('Prikazi');
button.appendChild(btnTxt);

const ul = document.createElement('ul');

let danFound = false;

button.addEventListener('click', function(event){
  ul.innerHTML = '';
  for(let c of casovi){
    const li = document.createElement('li');
    if(c.dan == select.value){
      danFound = true;
      const liTxt = document.createTextNode(c.tip + ': ' + c.vreme + '-' + (c.vreme + c.brojCasova) + 'h, ' + c.predmet);
      li.appendChild(liTxt);

      if(c.tip == 'vezbe')
        li.style.color = 'salmon'
      else
        li.style.color = 'cornflowerblue';

      ul.append(li);
    }
   
    body.appendChild(ul);
  }

  if(!danFound)
    window.alert('Nema informacija za trazeni dan');
})

body.appendChild(lbl);
body.appendChild(select);
body.appendChild(button);

