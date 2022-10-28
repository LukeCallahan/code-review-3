

//Business Logic
function wordReplacer(number){
  let inputNumber = parseInt(number);
  let stringArray = []; 
  let arrayElement = 0;

  
  for (let i=-1; i < inputNumber; i += 1){
    arrayElement += 1;
    stringArray[i] = arrayElement;
    console.log(stringArray[i]);
  };
  
  stringArray = number.split("");
  for (let i = 0; i < stringArray.length; i += 1){
    if (stringArray[i] === 3){
      stringArray[i] = "Won't you be my neighbor?";
    } else if (stringArray[i] === 2){
      stringArray[i] = "Boop";
    } else if (stringArray[i] === 1){
      stringArray[i] = "Beep";
    }
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
    console.log(number);
    let test = wordReplacer(number);
    let div = document.createElement("div");
    let p = document.createElement("p");
    let text = document.createTextNode(test);
    p.appendChild(text);
    let divTag = document.getElementById("results");
    divTag.appendChild(p);
    
  });
});