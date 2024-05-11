const temperature = [
    { grad: "Beograd", temperatura: 21 },
    { grad: "Novi Sad", temperatura: 18 },
    { grad: "Subotica", temperatura: 17 },
    { grad: "Nis", temperatura: 25 },
];

function boja(temp){
    if(temp < 0)
        return null;
    else if(temp < 10)
        return "lightblue";
    else if(temp < 20)
        return "yellow"
    else if(temp < 30)
        return "orange";
    else 
        return "red";
}

const bodies = document.getElementsByTagName('body');
if(bodies == null)
        console.log("ERROR! Missing body!");

const body = bodies[0];

const table = document.createElement('table');
const trTemp = document.createElement('tr');
const trGrad = document.createElement('tr');

table.appendChild(trTemp);
table.appendChild(trGrad);

if(trTemp != null && trGrad != null){
    for(let temp of temperature){
        const tempCelija = document.createElement('td');
        const gradCelija = document.createElement('td');

        gradCelija.textContent = temp.grad;

        const temperatura = document.createElement('div');

        temperatura.style.width = '50px';
        temperatura.style.height = 10 * temp.temperatura + 'px';
        tempCelija.style.verticalAlign = 'bottom';
        temperatura.style.background = boja(temp.temperatura);
        gradCelija.style.textAlign = 'center';
        tempCelija.style.padding = '20px';

        temperatura.addEventListener('click', function(){
            const random = Math.random() * 4 - 2;
            temp.temperatura += random;

            temperatura.style.height = 10 * temp.temperatura + 'px';
            temperatura.style.background = boja(temp.temperatura);
        })

        tempCelija.appendChild(temperatura);
        trTemp.appendChild(tempCelija);
        trGrad.appendChild(gradCelija);
    }
}

body.appendChild(table);
