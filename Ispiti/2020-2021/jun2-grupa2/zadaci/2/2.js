const ispiti = [
    {
        naziv: 'AISP',
        prijavljen: false
    },
    {
        naziv: 'A3',
        prijavljen: false
    },
    {
        naziv: 'KIAA',
        prijavljen: false
    },
    {
        naziv: 'A2',
        prijavljen: true
    },
    {
        naziv: 'UVIT',
        prijavljen: true
    },
    {
        naziv: 'OM',
        prijavljen: false
    },
    {
        naziv: 'OOP',
        prijavljen: true
    },
    {
        naziv: 'OA',
        prijavljen: false
    },
    {
        naziv: 'OS',
        prijavljen: false
    }
];

const body = document.querySelector('body');
if(body == null)
    console.log("ERROR! Missing body");

const p1 = document.createElement('p');
if(p1 == null)
    console.log("ERROR! Missing p1");
const p1Txt = document.createTextNode('Neprijavljeni ispiti');
p1.appendChild(p1Txt);

const p2 = document.createElement('p');
if(p2 == null)
    console.log("ERROR! Missing p1");
const p2Txt = document.createTextNode('Prijavljeni ispiti');
p2.appendChild(p2Txt);

const ul1 = document.createElement('ul');
if(ul1 == null)
    console.log("ERROR! Missing ul1");

const ul2 = document.createElement('ul');
if(ul2 == null)
    console.log("ERROR! Missing ul2");

for(const i of ispiti){
    const li = document.createElement('li');
    const liPrijavljen = i.prijavljen;
    if(li == null)
        console.log("ERROR! Missing li");

    const liTxt = document.createTextNode(i.naziv);
    li.appendChild(liTxt);

    if(!i.prijavljen)
        ul1.appendChild(li);
    else
        ul2.appendChild(li);

    li.addEventListener('click', function(){
        i.prijavljen = !i.prijavljen
        if(!i.prijavljen){
            ul1.removeChild(li);
            ul2.appendChild(li);
        }
        else{
            ul2.removeChild(li);
            ul1.appendChild(li);
        }
    })

}

body.appendChild(p1);
body.appendChild(ul1);
body.appendChild(p2);
body.appendChild(ul2);