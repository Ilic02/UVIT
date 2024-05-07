const studenti = [
    {indeks: 20200001, ime: "Pera"},
    {indeks: 20200002, ime: "Ana"},
    {indeks: 20200003, ime: "Laza"},
];

let brojStudenata = studenti.length;

function dodajStudenta(indeks, ime){
    studenti.push({indeks, ime});
    brojStudenata++;
}

function pronadjiStudenta(indeks){
    for(const student of studenti){
        if(student.indeks === indeks){
            return student;
        }
    }

    return null;
}

// module.exptors.dodajStudenta = dodajStudenta;
// module.exptors.pronadjiStudenta = pronadjiStudenta;
module.exports = {
    dodajStudenta,
    pronadjiStudenta,
    brojStudenata
};