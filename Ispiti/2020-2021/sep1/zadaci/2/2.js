const dogadjaji = [
    { naziv: "JavaScript conference 2021", datum: new Date(2021, 5, 14), prijavljen: false },
    { naziv: "A state of modern web", datum: new Date(2021, 5, 2), prijavljen: false },
    { naziv: "Node Congress", datum: new Date(2021, 3, 14), prijavljen: true },
    { naziv: "HTML + CSS conference", datum: new Date(2021, 7, 6), prijavljen: false },
    { naziv: "RxJS topics", datum: new Date(2021, 8, 24), prijavljen: false },
    { naziv: "TypeScript talks", datum: new Date(2021, 9, 20), prijavljen: true },
    { naziv: "Angular conference", datum: new Date(2021, 1, 9), prijavljen: false },
];

const svetlozelena = 'rgba(128, 255, 0, 0.5)';
const svetlocrvena = 'rgba(220, 20, 60, 0.5)';

const body = document.querySelector('body');
if(body == null)
    console.log('ERROR! Missing body!');

const h1 = document.createElement('h1');
const h1Txt = document.createTextNode('Prijavite se na dogadjaje');
h1.appendChild(h1Txt);

const ul = document.createElement('ul');

const br = document.createElement('br');

for(const dog of dogadjaji){
    const li = document.createElement('li');
    const liTxt = document.createTextNode(dog.naziv + '; datum: ' + dog.datum.getDate() + '.' + (dog.datum.getMonth() + 1) + '.' + dog.datum.getFullYear() + '.');
    li.style.padding = '5px';
    li.appendChild(liTxt);
    
    if(dog.prijavljen == true)
        li.style.backgroundColor = svetlozelena;
    else
        li.style.backgroundColor = svetlocrvena;

    li.addEventListener('click', function(){
        if(li.style.backgroundColor == svetlocrvena)
            li.style.backgroundColor = svetlozelena;
        else
            li.style.backgroundColor = svetlocrvena;
    })
    
    ul.appendChild(li);
}

ul.style.listStyle = 'none';
ul.style.padding = '10px';


body.appendChild(h1);
body.appendChild(ul);