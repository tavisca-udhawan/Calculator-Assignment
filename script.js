"use strict";
var HistoryData = [];
var calculationId = 1;
var localData = JSON.parse(localStorage.History);
var length = localData.length - 1;
function SaveDataToLocalStorage(calculation) {
    if (!localStorage.History) {
        localStorage.History = JSON.stringify(HistoryData);
    }
    else {
        var PrevData = JSON.parse(localStorage.History);
        PrevData.push(calculation);
        localStorage.History = JSON.stringify(PrevData);
    }
}
function getHistory() {
    if (!localStorage.History) {
        alert("History is Empty");
    } 
    else {
        document.getElementById("text-box").value=localData[length].Calculate;
        document.getElementById("output").innerText=localData[length].result;
        if (length > 0) {
            length--;
        }
    }
}
function inputValue(e) {
            var data=document.getElementById("text-box").value;
            document.getElementById("text-box").value = data+e.value;
            }
function calculate(){
            var expression=document.getElementById("text-box").value;
            if(expression[expression.length-1]=='+' || expression[expression.length-1]=='-'|| expression[expression.length-1]=='*' || expression[expression.length-1]=='/')
            {
              window.alert("Invalid Expression at the end");
              document.getElementById("text-box").value=null;
            }
            else if(expression.length>0){
              document.getElementById("output").innerText=eval(expression);
              var calculation = new Object();
              if (localStorage.History) {
                  calculationId = localData.length + 1;
                }
                  calculation.Id = calculationId;
                  calculation.Calculate = document.getElementById("text-box").value;
                  calculation.result = eval(document.getElementById("text-box").value);
                  HistoryData.push(calculation);
                  SaveDataToLocalStorage(calculation);
            }
            else{
                window.alert("No Expression is there");
            }  
    document.getElementById("text-box").value=null;
}
function clearExpression(){
            document.getElementById("text-box").value=null;
            document.getElementById("output").innerText="OUTPUT:";
            }
function clearPrevious(){
            var string="";
            var data=document.getElementById("text-box").value;
            for(var index=0;index<data.length-1;index++){
                string=string+data[index];
            }
            document.getElementById("text-box").value=string;
}
function scriptEvent(){
            var input = document.getElementById("text-box").value;
            if (event.keyCode ==13) {
                  calculate();
            }
            if(input[input.length-1]>=0 || input[input.length-1]=='-' || input[input.length-1]=='+' || input[input.length-1]=='*' || input[input.length-1]=='/'){
            }
            else{
                document.getElementById("text-box").value="";
            }
}