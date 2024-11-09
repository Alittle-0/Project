
const display = document.getElementById("display");

function displaystuff(input){
    display.value += input;
}

function clearstuff(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}