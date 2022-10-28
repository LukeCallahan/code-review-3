

//Business Logic
function wordReplacer(number){
  let inputNumber = parseInt(number);
  let stringArray = [0]; 
  let arrayElement = 0;

  
  for (let i=1; i < inputNumber + 2; i += 1){
    arrayElement += 1;
    stringArray[i] = arrayElement -1;
  };

  //Okay so here, stringArray has our entire array of numbers from 0 to 14. It says it is undefined.
  // So from here we want to take this array, iterate through it, then, on each Element, we want to split it into it's own array, determine it's length, and if it has a 1, 2, or 3, in it, perform a function.






  // stringArray = number.split("");
  for (let i = 0; i < stringArray.length; i += 1){
    if (stringArray[i].toString().includes("3")){
      stringArray[i] = "Won't you be my neighbor?";
    } else if (stringArray[i].toString().includes("2")){
      stringArray[i] = "Boop";
    } else if (stringArray[i].toString().includes("1")){
      stringArray[i] = "Beep";
    }
    console.log(stringArray[i]);
  };
  return stringArray;
}





//User Interface Logic

window.addEventListener("load", function(){

  let form = document.querySelector("form");
  let result = document.getElementById("results");

  form.addEventListener("submit", function(event){
    event.preventDefault();
    const number = document.getElementById("text-input1").value;
    let test = wordReplacer(number);
    let div = document.createElement("div");
    let p = document.createElement("p");
    let text = document.createTextNode(test);
    p.appendChild(text);
    let divTag = document.getElementById("results");
    divTag.appendChild(p);
    
  });
});