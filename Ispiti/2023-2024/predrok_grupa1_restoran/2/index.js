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

const div = document.getElementById("wrapper");
if(div == null)
    console.log("Missing div");

div.style.display = "flex";
div.style.flexDirection = "column";

for(let recipe of recipes){
    let lblRecipe = recipe.name;
    let imgRecipe = document.createElement("img");
    imgRecipe.style.width = "200px";
    imgRecipe.style.height = "200px";
    imgRecipe.src = recipe.image;

    div.append(lblRecipe);        
    div.append(imgRecipe);    
}

