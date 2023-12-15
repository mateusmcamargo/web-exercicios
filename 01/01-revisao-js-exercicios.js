var globalFruitsCount = 0;

//----------------------------------------------------------------------------------------------\\

//ex1
//create li
var li1 = document.createElement("li");
li1.setAttribute("id", "li1");
var bt1 = document.getElementById("bt1");

bt1.addEventListener("click", () => {
    var ex1 = document.getElementById("ex1");
    var ip1 = document.getElementById("ip1");

    //create text node
    var text = ip1.value;
    if (text === "") {
        var text_inter = "Nenhum texto inserido no input";
    } else {
        var text_inter = `O texto no input é ${text}`;
    }
    li1.appendChild(document.createTextNode(text_inter));

    //link li to ul
    ex1.appendChild(li1);
});

//----------------------------------------------------------------------------------------------\\

//ex2
//create li
var li2 = document.createElement("li");

var char  = "";
var ip2   = document.getElementById("ip2");
var ex2   = document.getElementById("ex2");
/*
the variables are written outside of the keydown event so that only one li element is created and the chars are formulated into a string
*/

ip2.addEventListener("keydown", function(i) {

    //get key code and check if it is a letter or sacebar (obsolete)
    var code = i.keyCode || i.which;
    if (i.key === " " || i.keyCode >= 65 && i.keyCode <= 90) {
        //convert code to string
        char += String.fromCharCode(code).toLowerCase();

        //fill li with text
        li2.textContent = char;

        //link li to ul
        ex2.appendChild(li2);
    }
});

//----------------------------------------------------------------------------------------------\\

//ex3
function createFruits(fruits) {
    //find ul
    var ul3 = document.getElementById("ul3");

    //use forEach method to check and list the elements
    fruits.forEach(fruit => {

        //create and set id for li
        var li3 = document.createElement("li");
        li3.setAttribute("id", "il3");

        //create and set id for label
        var lb3 = document.createElement("label");
        lb3.setAttribute("id", "lb3");
        lb3.textContent = fruit.name;

        //create and set id for checkbox
        var cb3 = document.createElement("input");
        cb3.setAttribute("id", "cb3");
        cb3.setAttribute("type", "checkbox");
        //link checkbox to array
        cb3.checked = fruit.checked;

        //
        cb3.addEventListener("change", () => {
            fruit.checked = cb3.checked;
        });

        //link elements
        li3.appendChild(cb3);
        li3.appendChild(lb3);
        ul3.appendChild(li3);
    });
    
}

//----------------------------------------------------------------------------------------------\\

//ex6
//checks how many elements are highlighted
function updateCountUp() {
    if (globalFruitsCount <= 2) {
        globalFruitsCount += 1;
    }
    var p = document.getElementById("p6-span");
    p.textContent = "teste " + globalFruitsCount;
}
function updateCountDown() {
    if (globalFruitsCount > 0) {
        globalFruitsCount -= 1;
    }
    var p = document.getElementById("p6-span");
    p.textContent = globalFruitsCount;
}

//----------------------------------------------------------------------------------------------\\

//ex4
//gets the fruits array 
function searchFruits(fruits) {
    var ip4 = document.getElementById("ip4");

    //input event (runs every time the selected input.value is altered)
    ip4.addEventListener("input", () => {
        //checks if input.value is empty. If no, run the code. If yes, reset the style
        if (ip4.value.trim() !== "") {
            //selects all elements with the '#li3' id
            var li3 = document.querySelectorAll("#il3");

            //'forEach' one of them, check if the element.textContent starts with the chars inserted in the input
            li3.forEach(li => {
                updateCountUp();
                //selects all elements with the '#li3' id in the li
                var lb3 = li.querySelector("#lb3");
                if (lb3.textContent.startsWith(ip4.value)) {
                    //change style
                    li.style.color = "#333";
                    li.style.fontWeight = "600";
                    li.style.backgroundColor = "#98ffd4";
                } else {
                    updateCountDown();
                    li.style.color = "";
                    li.style.fontWeight = "";
                    li.style.backgroundColor = "";
                }
            });
        } else {
            var li3 = document.querySelectorAll("#il3");
            li3.forEach(li => {
                updateCountDown();
                li.style.color = "";
                li.style.fontWeight = "";
                li.style.backgroundColor = "";
            });
        }
    });
}

//fruits array
const fruits = [
    {name: "abacate",    checked: false},
    {name: "uva",        checked: false},
    {name: "maracujá",   checked: false},
    {name: "mamão",      checked: false},
    {name: "cereja",     checked: false},
    {name: "jaboticaba", checked: false},
    {name: "jaca",       checked: false},
    {name: "guaraná",    checked: false}
];

//runs the functions
createFruits(fruits);
searchFruits(fruits);
//----------------------------------------------------------------------------------------------\\

