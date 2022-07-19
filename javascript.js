
//select value and buttons
let finalvalue = document.querySelector("#final-value") ; 
let count = 0;


function increase(){
   count +=  1 
   finalvalue.innerText = count
   colorcheck();
  
}

function decrease(){
    count -= 1
    finalvalue.innerText = count
    colorcheck();
}

function reset(){
     count = 0;
     finalvalue.innerText = count;
     colorcheck();
}
function colorcheck(){
    if(count > 0){
        finalvalue.style.color = "green";
    }
    else if(count < 0){
        finalvalue.style.color ="red";
    }
    else{
        finalvalue.style.color = "black";
    }
}
