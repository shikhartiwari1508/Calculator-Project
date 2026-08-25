const display=document.getElementById("display");

function append(value){
display.value+=value;
}

function clearDisplay(){
display.value="";
}

function deleteLast(){
display.value=display.value.slice(0,-1);
}

function calculate(){

try{

display.value=eval(display.value);

}

catch{

display.value="Error";

}

}

document.addEventListener("keydown",(e)=>{

if(!isNaN(e.key)||"+-*/.%".includes(e.key)){

append(e.key);

}

else if(e.key==="Enter"){

calculate();

}

else if(e.key==="Backspace"){

deleteLast();

}

else if(e.key==="Escape"){

clearDisplay();

}

});