function toString() {
    return `${this.imePrezime} ima prosecnu ocenu ${this.prosek} na smeru ${this.smer}`;
}

const studenti = [
    {
        id: 1,
        imePrezime: "Pera Peric",
        prosek: 10.0,
        smer: "I",
        upisan: true,
        toString,
    },
    {
        id: 2,
        imePrezime: "Laza Lazic",
        prosek: 9.21,
        smer: "M",
        upisan: false,
        toString,
    },
    {
        id: 3,
        imePrezime: "Pera Peric",
        prosek: 8.17,
        smer: "M",
        upisan: true,
        toString,
    },
    {
        id: 4,
        imePrezime: "Pera Peric",
        prosek: 9.5,
        smer: "A",
        upisan: true,
        toString,
    },
    {
        id: 5,
        imePrezime: "Pera Peric",
        prosek: 7.0,
        smer: "I",
        upisan: true,
        toString,
    },
    {
        id: 6,
        imePrezime: "Pera Peric",
        prosek: 8.04,
        smer: "I",
        upisan: false,
        toString,
    },
];

const bodies = document.getElementsByTagName('body');
if(bodies == null)
    console.log('ERROR: Missing body!');

const body = bodies[0];
for(let student of studenti){
    const chkBox = document.createElement('input');
    chkBox.type = 'checkbox';

    const lbl = document.createElement('label');
    let lblText = document.createTextNode(student.toString());
    lbl.appendChild(lblText);
    lbl.style.textDecoration = 'line-through';
    body.appendChild(chkBox);
    body.appendChild(lbl);

    chkBox.addEventListener('change', (event)=>{
        if(event.currentTarget.checked){
            lbl.style.textDecoration = 'none';
        }
        else
            lbl.style.textDecoration = 'line-through';
    })


    body.appendChild(document.createElement('br'));

}
