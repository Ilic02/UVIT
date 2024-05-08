const form = document.querySelector('form');
if(form == null)
    console.log("ERROR! Missing form");

form.addEventListener('submit', function(event){
    const btns = document.getElementsByName('tipOcene');
    const selected = false;
    for(let b of btns){
        if(b.checked){
            selected = true;
            break;
        }
    }

    if(selected == false){
        window.alert('Niste izabrali tip ocene!');
        event.preventDefault();
        return;
    }
})