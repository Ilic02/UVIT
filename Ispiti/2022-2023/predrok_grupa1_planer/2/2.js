const body = document.querySelector('body');
if(body == null)
    console.log("ERROR! Missing body!");

const table = document.createElement('table');
if(table == null)
    console.log("ERROR! Missing table!");

for(let i = 0; i < 10; i++){
    const tr = document.createElement('tr');
    if(tr == null)
        console.log("ERROR! Missing tr!");

    for(let j = 0; j < 10; j++){
        const td = document.createElement('td');
        if(td == null)
            console.log("ERROR! Missing td!");
        td.style.border = '2px solid white';
        td.style.height = '50px';
        td.style.width = '50px';

        let random = Math.random();
        if(random > 0.5)
            td.style.backgroundColor = 'green';
        else
            td.style.backgroundColor = 'red';

        td.addEventListener('click', function(){
            if(td.style.backgroundColor == 'green')
                td.style.backgroundColor = 'red';
            else 
                td.style.backgroundColor = 'green';
        })

        tr.appendChild(td);
    }
    table.appendChild(tr);
}

table.style.margin = 'auto';
table.style.borderCollapse = 'collapse';

body.appendChild(table);