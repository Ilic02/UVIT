let opcije = [
    {tabela: [
        [1,0,0,0,0,0,0,0,0,1],
        [0,1,0,0,0,0,0,0,1,0],
        [0,0,1,0,0,0,0,1,0,0],
        [0,0,0,1,0,0,1,0,0,0],
        [0,0,0,0,1,1,0,0,0,0],
        [0,0,0,0,1,1,0,0,0,0],
        [0,0,0,1,0,0,1,0,0,0],
        [0,0,1,0,0,0,0,1,0,0],
        [0,1,0,0,0,0,0,0,1,0],
        [1,0,0,0,0,0,0,0,0,1]
    ]},
    {tabela: [
        [1,0,1,0,1,0,1,0,1,0],
        [0,1,0,1,0,1,0,1,0,1],
        [1,0,1,0,1,0,1,0,1,0],
        [0,1,0,1,0,1,0,1,0,1],
        [1,0,1,0,1,0,1,0,1,0],
        [0,1,0,1,0,1,0,1,0,1],
        [1,0,1,0,1,0,1,0,1,0],
        [0,1,0,1,0,1,0,1,0,1],
        [1,0,1,0,1,0,1,0,1,0],
        [0,1,0,1,0,1,0,1,0,1]
    ]},
    {tabela: [
        [1,1,0,0,1,0,1,0,1,0],
        [0,1,0,1,0,1,0,1,0,1],
        [1,0,1,1,1,0,0,0,1,0],
        [0,0,0,1,0,1,0,1,0,1],
        [1,0,1,0,1,0,1,0,1,0],
        [0,1,0,0,0,1,1,1,0,1],
        [1,1,0,0,1,1,0,0,1,0],
        [0,1,0,1,0,1,1,1,0,1],
        [1,0,1,0,1,0,1,0,1,0],
        [0,1,0,1,0,1,0,1,0,1]
    ]},
    {tabela: [
        [1,1,1,1,1,1,1,1,1,1],
        [0,1,0,1,0,1,0,1,0,1],
        [1,1,1,1,1,1,1,1,1,1],
        [0,1,0,1,0,1,0,1,0,1],
        [1,1,1,1,1,1,1,1,1,1],
        [0,1,0,1,0,1,0,1,0,1],
        [1,1,1,1,1,1,1,1,1,1],
        [0,1,0,1,0,1,0,1,0,1],
        [1,1,1,1,1,1,1,1,1,1],
        [0,1,0,1,0,1,0,1,0,1]
    ]}
]

let table = document.querySelector('table');
if(table == null)
    console.log("greska!");

let newBtn = document.getElementById('clear');

let color = document.getElementById("boja");

let btn1 = document.getElementById("op1");
let btn2 = document.getElementById("op2");
let btn3 = document.getElementById("op3");
let btn4 = document.getElementById("op4");

newBtn.addEventListener("click", function(){
    table.innerHTML = '';

    for(let i = 0; i < 10; i++){
        let tr = document.createElement('tr');
        for(let j = 0; j < 10; j++){
            let td = document.createElement('td');
            td.style.width = '20px';
            td.style.height = '20px';
            td.style.border = '2px solid black';
            td.style.borderRadius = '50%'
            td.addEventListener("click", function(){
                td.style.backgroundColor = color.value;
            })
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
});

btn1.addEventListener("click", function(){
    table.innerHTML = '';

    for(let i = 0; i < 10; i++){
        let tr = document.createElement('tr');
        for(let j = 0; j < 10; j++){
            let td = document.createElement('td');
            td.style.width = '20px';
            td.style.height = '20px';
            td.style.border = '2px solid black';
            td.style.borderRadius = '50%'
            td.addEventListener("click", function(){
                td.style.backgroundColor = color.value;
            })
            if(opcije[0].tabela[i][j] == 1)
                td.style.backgroundColor = color.value;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
})

btn2.addEventListener("click", function(){
    table.innerHTML = '';

    for(let i = 0; i < 10; i++){
        let tr = document.createElement('tr');
        for(let j = 0; j < 10; j++){
            let td = document.createElement('td');
            td.style.width = '20px';
            td.style.height = '20px';
            td.style.border = '2px solid black';
            td.style.borderRadius = '50%'
            td.addEventListener("click", function(){
                td.style.backgroundColor = color.value;
            })
            if(opcije[1].tabela[i][j] == 1)
                td.style.backgroundColor = color.value;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
});

btn3.addEventListener("click", function(){
    table.innerHTML = '';

    for(let i = 0; i < 10; i++){
        let tr = document.createElement('tr');
        for(let j = 0; j < 10; j++){
            let td = document.createElement('td');
            td.style.width = '20px';
            td.style.height = '20px';
            td.style.border = '2px solid black';
            td.style.borderRadius = '50%'
            td.addEventListener("click", function(){
                td.style.backgroundColor = color.value;
            })
            if(opcije[2].tabela[i][j] == 1)
                td.style.backgroundColor = color.value;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
});

btn4.addEventListener("click", function(){
    table.innerHTML = '';

    for(let i = 0; i < 10; i++){
        let tr = document.createElement('tr');
        for(let j = 0; j < 10; j++){
            let td = document.createElement('td');
            td.style.width = '20px';
            td.style.height = '20px';
            td.style.border = '2px solid black';
            td.style.borderRadius = '50%'
            td.addEventListener("click", function(){
                td.style.backgroundColor = color.value;
            })
            if(opcije[3].tabela[i][j] == 1)
                td.style.backgroundColor = color.value;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
});
