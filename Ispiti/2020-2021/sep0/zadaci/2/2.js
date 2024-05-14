const rezultati = [
    {
        sport: 'Kosarka',
        zlato: 'SAD',
        srebro: 'Francuska',
        bronza: 'Australija'
      },
      {
        zlato: 'SAD',
        srebro: 'Brazil',
        bronza: 'Srbija'
      },
      {
        sport: 'Vaterpolo',
        zlato: 'Srbija',
        srebro: 'Grcka',
        bronza: 'Madjarska'
      },
      {
        sport: 'Karate',
        zlato: 'Srbija',
        srebro: 'Kina',
        bronza: 'Turska'
      },
      {
        sport: 'Tekvondo -49',
        zlato: 'Tajland',
        srebro: 'Spanija',
        bronza: 'Srbija'
      },
      {
        sport: 'Tekvondo +67',
        zlato: 'Srbija',
        srebro: 'Juzna koreja',
        bronza: 'Velika britanija'
      },
      {
        sport: 'Rvanje',
        zlato: 'Ukrajna',
        srebro: 'Madjarska',
        bronza: 'Srbija'
      },
      {
        sport: 'Streljastvo 10',
        zlato: 'Iran',
        srebro: 'Srbija',
        bronza: 'Kina'
      },
      {
        sport: 'Streljastvo 50',
        zlato: 'Kina',
        srebro: 'Rusija',
        bronza: 'Srbija'
      },
      {
        sport: 'Basket',
        zlato: 'Letonija',
        srebro: 'Rusija',
        bronza: 'Srbija'
      }
];

const body = document.querySelector('body');
if(body == null)
    console.log("ERROR! Missing body!");

const lblSport = document.createElement('label');
const lblText = document.createTextNode('Sport:');
lblSport.appendChild(lblText);

const input = document.createElement('input');
input.type = 'text';

const button = document.createElement('button');
const btnText = document.createTextNode('Prikazi rezultate');
button.appendChild(btnText);

const div1 = document.createElement('div');
const div2 = document.createElement('div');
const div3 = document.createElement('div');

const p = document.createElement('p');

button.addEventListener('click', function(){
  let sportFound = false;
  div1.innerHTML = '';
  div2.innerHTML = '';
  div3.innerHTML = '';

  for(let rez of rezultati){
    const sprt = input.value;
    if(sprt == rez.sport){
      sportFound = true;

      const div1Txt = document.createTextNode(rez.srebro);
      div1.appendChild(div1Txt);
      const div2Txt = document.createTextNode(rez.zlato);
      div2.appendChild(div2Txt);
      const div3Txt = document.createTextNode(rez.bronza);
      div3.appendChild(div3Txt);

      div1.style.position = 'absolute';
      div1.style.height = '100px';
      div1.style.verticalAlign = 'top';
      div1.style.textAlign = 'center';
      div1.style.width = '150px';
      div1.style.backgroundColor = 'silver';
      div1.style.marginBottom = '450px';
      div1.style.bottom = '0';
      div1.style.top = '';

      div2.style.position = 'absolute';
      div2.style.height = '150px';
      div2.style.verticalAlign = 'top'
      div2.style.textAlign = 'center'
      div2.style.width = '150px'
      div2.style.backgroundColor = 'yellow';
      div2.style.marginLeft = '150px';
      div2.style.marginBottom = '450px';
      div2.style.bottom = '0';
      div2.style.top = '';


      div3.style.position = 'absolute';
      div3.style.height = '50px';
      div3.style.verticalAlign = 'top'
      div3.style.textAlign = 'center';
      div3.style.backgroundColor = 'rgb(136, 31, 2)'
      div3.style.width = '150px';
      div3.style.marginLeft = '300px';
      div3.style.marginBottom = '450px';
      div3.style.bottom = '0';
      div3.style.top = '';

    }
  }
  if(!sportFound)
    window.alert('Trazeni sport ne postoji!');
})

body.appendChild(lblSport);
body.appendChild(input);
body.appendChild(button);
body.appendChild(div1);
body.appendChild(div2);
body.appendChild(div3);

