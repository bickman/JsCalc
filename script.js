function updateHistory(){
    document.getElementById("history-value").innerText=calHistory;
}

function updateOutput(){
    document.getElementById("output-value").innerText=calOutput;
}

function clearHistory(){
    calHistory="";
    updateHistory();
}

function clearOutput(){
    calOutput="";
    updateOutput();
}


var isFinished = false;
var calOutput ='';
var calHistory='';
updateOutput();
updateHistory();

var numKeys = document.getElementsByClassName("number");
for(var i = 0;i<numKeys.length;i++){
    numKeys[i].addEventListener('click',function(){
        if(isFinished){
            clearHistory();
            clearOutput();
        }
        else if(calOutput.length<18){
            calOutput = calOutput + this.id;
        }
        updateOutput();
        isFinished=false;
    });
}

var opeKeys = document.getElementsByClassName("operator");
for(var i = 0;i<opeKeys.length;i++){
    opeKeys[i].addEventListener('click',function(){
        if(calOutput!=""){
            if(isFinished){
                clearHistory();
            }
            calHistory = calHistory + calOutput + this.value;
            updateHistory();
            clearOutput();
            isFinished=false;
        }
    });
}

var calcKey = document.getElementById("equal");
calcKey.addEventListener('click',function(){
    if(calOutput!=""){
        if(calHistory!=""){
            calHistory = calHistory + calOutput;
            calOutput=eval(calHistory);
            updateOutput();
            calHistory = calHistory + "=";
            updateHistory();
            isFinished=true;
        }
    }
});


var backKey = document.getElementById("backspace");
backKey.addEventListener('click',function(){
   if(calOutput!=""){
       if(!isFinished){
           calOutput=calOutput.substr(0,calOutput.length-1);
           updateOutput();
       }
   } 
});

var clearKey= document.getElementById("clear");
clearKey.addEventListener('click',function(){
   clearHistory();
   clearOutput(); 
});

var negKey= document.getElementById("negToggle");
negKey.addEventListener('click',function(){
    if(calOutput!=""){
        if(!isFinished){
            if(calOutput[0]=="-"){
                calOutput=calOutput.substr(1,calOutput.length-1);
            }
            else{
                calOutput="-"+calOutput;
            }
            updateOutput();
        }
    }
});