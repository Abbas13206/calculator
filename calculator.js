const dispaly = document.querySelector('.display');
const button = document.querySelectorAll('button');
const specialChars = ["%","*","/","-","+","="];
let output = "";

 
// Define function to calculate based on button clicked
const calculate = (btnValue) => {
  if(btnValue === "=" && output !== ""){
    // if output has '%', replace with '/100'before evaluating
    output = eval(output.replace("%","/100"));
  }
  else if(btnValue === "AC"){
    output = ""
  }
  else if(btnValue === "DEL"){
    // if DEL button is clicked , all the output will be clear
    output = output.toString().slice(0 , -1);
  }
  else{
    // if output is empty and button is specialchars then return
    if(output === "" && specialChars.includes(btnValue))return;
    output += btnValue; 
  }
  dispaly.value = output;
};

// Add event listner to buttons , call calculate() on click
button.forEach((button) => {
  // button click listener call calculate() with dateset value as argument
  button.addEventListener("click" , (e) => calculate(e.target.dataset.value));
});
