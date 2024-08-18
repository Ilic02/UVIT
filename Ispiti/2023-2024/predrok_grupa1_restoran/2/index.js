const recipes = [
    {
        name: 'Pizza Margherita', 
        image: 'pizza.jpg'
    },
    {
        name: 'Spaghetti alla Carbonara', 
        image: 'carbonara.jpg'
    },
    {
        name: 'Lasagne', 
        image: 'lasagne.jpg'
    },
    {
        name: 'Fettuccine Alfredo', 
        image: 'fettuccine.jpg'
    },
    {
        name: 'Spaghetti Bolognese', 
        image: 'bolognese.jpg'
    },
    {
        name: 'Spinach & Ricotta Cannelloni', 
        image: 'cannelloni.jpg'
    }
];

let div = document.getElementById("wrapper");

for(let recipe of recipes){
    let h3 = document.createElement('h3');
    h3.textContent = recipe.name;
    let img = document.createElement('img');
    img.src = recipe.image

    div.appendChild(h3);
    div.append(img);

}

