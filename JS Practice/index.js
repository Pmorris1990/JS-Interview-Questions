 // DOM - Document Object Model 
 // How you use JavaScript to modify a model
 // The document keyword is of the datatype Object.
 


let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
// let clearEl = document.getElementById("save-el");
const btn = document.createElement('button');


let count = 0; 

function increment() {
    count += 1;
    // Grab the elements ID from the HTML code, then assign it to the count variable. 
    // innerText alters the actual text tied to the element you are grabbing. count-el's default text was 0.
    // count-el is the JS Model - DOM talk...
    countEl.textContent = count;
}

function save() {
    let countString = count + " - ";
    // You can use += here even with .innerText, etc. to concatenate strings with calls like so.
    // The .textContent will be able to read invisible spaces
    // as .innerText only returns "human-readable" elements...
    saveEl.textContent += countString;
    countEl.textContent = 0;
    count = 0;

}

function clear() {
  btn;
    console.log("wooo");
}





