//Business Logic
function wordReplacer(number){
  let inputNumber = parseInt(number);
  let stringArray = []; 
  let arrayElement = 0;
  
  for (let i = 1; i < inputNumber + 2; i += 1){
    arrayElement += 1;
    stringArray[i] = arrayElement -1;
  };

  for (let i = 1; i < stringArray.length; i += 1){
    if (stringArray[i].toString().includes("3")){
      stringArray[i] = '"Won\'t you be my neighbor?"';
    } else if (stringArray[i].toString().includes("2")){
      stringArray[i] = '"Boop!"';
    } else if (stringArray[i].toString().includes("1")){
      stringArray[i] = '"Beep!"';
    }
  };
  
  return stringArray;
}

//User Interface Logic
window.addEventListener("load", function(){
  let form = document.querySelector("form");
  let result = document.getElementById("results");

  form.addEventListener("submit", function(event){
    const number = document.getElementById("text-input1").value;
    let test = wordReplacer(number).join(', ');
    let p = document.getElementById("first");
    let text = document.createTextNode(test);
    let divTag = document.getElementById("results");
    
    event.preventDefault();
    p.textContent ='';
    p.appendChild(text);
    divTag.appendChild(p);
    form.reset();
  });
});