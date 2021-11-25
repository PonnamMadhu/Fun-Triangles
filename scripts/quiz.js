var formdata=document.querySelector(".formlist");
var buttonCheck=document.querySelector(".submit");
var outputMsg =document.querySelector(".qmsg");
const answers=["180°","60°","45°","24","12"];

function clcikHandler(){
 var formvalues= new FormData(formdata);
 let index=0;
 let score=0;
 for(let value of formvalues.values()){
     if(value === answers[index]){
         score+=1;
     }
     index+=1;
 }
outputMsg.innerText="Your score is "+score;
}
buttonCheck.addEventListener("click",clcikHandler);