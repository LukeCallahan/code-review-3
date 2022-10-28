

//Business Logic
function wordReplacer(number){
  let stringArray = number.split("");
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