const div = document.getElementById("content");
div.style.display = "flex";

const div1 = document.createElement("div");
const div2 = document.createElement("div");
const div3 = document.createElement("div");
const div4 = document.createElement("div");
const div5 = document.createElement("div");

div1.style.backgroundColor = "green";
div1.style.width = "100px";

div3.style.backgroundColor = "red";
div3.style.height = "100px";
div3.style.width = "100px";

div4.style.backgroundColor = "blue";
div4.style.height = "100px";
div4.style.width = "100px";

div5.style.backgroundColor = "yellow";
div5.style.height = "100px";
div5.style.width = "100px";

div2.appendChild(div3);
div2.appendChild(div4);
div2.appendChild(div5);

div.appendChild(div1);
div.appendChild(div2);

div.addEventListener("click", function(){
    if(div1.style.backgroundColor == "green" && div3.style.backgroundColor == "red" && div4.style.backgroundColor == "blue" && div5.style.backgroundColor == "yellow"){
        div1.style.backgroundColor = "yellow";
        div3.style.backgroundColor = "green";
        div4.style.backgroundColor = "red";
        div5.style.backgroundColor = "blue";
    }
    else if(div1.style.backgroundColor == "yellow" && div3.style.backgroundColor == "green" && div4.style.backgroundColor == "red" && div5.style.backgroundColor == "blue"){
        div1.style.backgroundColor = "blue";
        div3.style.backgroundColor = "yellow";
        div4.style.backgroundColor = "green";
        div5.style.backgroundColor = "red";
    }
    else if(div1.style.backgroundColor == "blue" && div3.style.backgroundColor == "yellow" && div4.style.backgroundColor == "green" && div5.style.backgroundColor == "red"){
        div1.style.backgroundColor = "red";
        div3.style.backgroundColor = "blue";
        div4.style.backgroundColor = "yellow";
        div5.style.backgroundColor = "green";
    }
    else if(div1.style.backgroundColor == "red" && div3.style.backgroundColor == "blue" && div4.style.backgroundColor == "yellow" && div5.style.backgroundColor == "green"){
        div1.style.backgroundColor = "green";
        div3.style.backgroundColor = "red";
        div4.style.backgroundColor = "blue";
        div5.style.backgroundColor = "yellow";
    }
})