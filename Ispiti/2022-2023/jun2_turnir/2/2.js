let flags = [
    {
        country: 'Italy',
        colors: ['green', 'white', 'red'],
        vertical: true
    },
    {
        country: 'Serbia',
        colors: ['red', 'blue', 'white'],
        vertical: false
    },
    {
        country: 'Afghanistan',
        colors: ['black', 'red', 'green'],
        vertical: true
    },
    {
        country: 'Austria',
        colors: ['red', 'white', 'red'],
        vertical: false
    },
    {
        country: 'Armenia',
        colors: ['darkred', 'darkblue', 'gold'],
        vertical: false
    },
    {
        country: 'Bolivia',
        colors: ['red', 'yellow', 'green'],
        vertical: false
    },
    {
        country: 'Croatia',
        colors: ['red', 'white', 'blue'],
        vertical: false
    },
    {
        country: 'Bulgaria',
        colors: ['white', 'green', 'red'],
        vertical: false
    },
    {
        country: 'Chad',
        colors: ['blue', 'yellow', 'red'],
        vertical: false
    },
    {
        country: 'Egypt',
        colors: ['darkred', 'white', 'yellow'],
        vertical: false
    },
    {
        country: 'Gabon',
        colors: ['green', 'yellow', 'blue'],
        vertical: false
    },
    {
        country: 'Germany',
        colors: ['black', 'red', 'yellow'],
        vertical: false
    },
    {
        country: 'Ghana',
        colors: ['red', 'yellow', 'green'],
        vertical: false
    },
    {
        country: 'Guinea',
        colors: ['red', 'yellow', 'green'],
        vertical: true
    },
    {
        country: 'Hungary',
        colors: ['red', 'white', 'green'],
        vertical: false
    },
    {
        country: 'Ireland',
        colors: ['green', 'white', 'orange'],
        vertical: true
    },
    {
        country: 'Luxembourg',
        colors: ['red', 'white', 'lightblue'],
        vertical: false
    },
    {
        country: 'Libya',
        colors: ['red', 'black', 'green'],
        vertical: false
    },
    {
        country: 'Mexico',
        colors: ['green', 'white', 'red'],
        vertical: true
    },
    {
        country: 'Romania',
        colors: ['blue', 'yellow', 'red'],
        vertical: true
    },
    {
        country: 'Senegal',
        colors: ['green', 'yellow', 'red'],
        vertical: true
    },
    {
        country: 'Spain',
        colors: ['red', 'gold', 'red'],
        vertical: false
    },
    {
        country: 'Slovenia',
        colors: ['white', 'blue', 'red'],
        vertical: false
    },
    {
        country: 'Yemen',
        colors: ['red', 'white', 'black'],
        vertical: false
    },
    {
        country: 'Estonia',
        colors: ['blue', 'black', 'white'],
        vertical: false
    }
]

const body = document.querySelector('body');
if(body == null){
    console.log("ERROR! Missing body!");
}

for(let flag of flags){
    if(flag.vertical)
        continue;
    const div = document.createElement('div');
    div.style.display = 'inline-block';
    div.style.margin = '10px';
    div.style.border = '1px solid black';
    div.style.width = '90px';
    div.style.height = '90px';

    body.append(div);

    for(let color of flag.colors){
        const colorDiv = document.createElement('div');
        colorDiv.style.backgroundColor = color;
        if(!flag.vertical){
            colorDiv.style.display = 'block'
            colorDiv.style.width = '90px';
            colorDiv.style.height = '30px';
        }
        div.append(colorDiv);
    }

    div.addEventListener('click', function(){
        window.alert(flag.country);
    }); 
}


