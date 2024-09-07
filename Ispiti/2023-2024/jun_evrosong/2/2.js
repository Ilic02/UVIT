let niz = {
    0: "1.jpeg", 1: "2.webp", 2: "1.jpeg", 3: "5.webp", 
    4: "7.webp", 5: "3.jpeg", 6: "2.webp", 7: "4.jpg", 
    8: "6.jpeg", 9: "5.webp", 10: "8.jpg", 11: "4.jpg", 
    12: "6.jpeg", 13: "3.jpeg", 14: "8.jpg", 15: "7.webp"
};

let tds = document.querySelectorAll("td");
let otvoreniPolja = [];
let brojac = 0;

tds.forEach((td, index) => {
    td.style.backgroundColor = "blue";
    td.style.width = "120px";
    td.style.height = "150px";

    td.addEventListener("click", function () {
        if (brojac < 2 && !td.style.backgroundImage) {
            td.style.backgroundImage = "url(" + niz[index] + ")";
            td.style.backgroundSize = "cover";
            td.style.backgroundRepeat = "no-repeat";
            td.style.backgroundPosition = "center";
            
            otvoreniPolja.push({element: td, image: niz[index]});
            brojac++;
            
            if (brojac === 2) {
                setTimeout(() => {
                    if (otvoreniPolja[0].image === otvoreniPolja[1].image) {
                        otvoreniPolja[0].element.style.visibility = "hidden";
                        otvoreniPolja[1].element.style.visibility = "hidden";
                    } else {
                        otvoreniPolja[0].element.style.backgroundImage = "";
                        otvoreniPolja[1].element.style.backgroundImage = "";
                    }
                    
                    otvoreniPolja = [];
                    brojac = 0;
                }, 1000); 
            }
        }
    });
});
