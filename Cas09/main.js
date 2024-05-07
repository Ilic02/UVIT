const paket = require('./paket');



console.log('Trenutno ima ' + paket.brojStudenata + ' studenata');

paket.dodajStudenta(20200004, "Marija");
console.log(paket.pronadjiStudenta(20200004));

