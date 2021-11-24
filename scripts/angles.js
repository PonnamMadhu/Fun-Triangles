var ans1=document.querySelector(".a1");
var ans2=document.querySelector(".a2");
var ans3=document.querySelector(".a3");
var btnCheck=document.querySelector(".check");
var message=document.querySelector(".msg");
function clickHandler(){
    var sum = Number(ans1.value)+Number(ans3.value)+Number(ans2.value);
    if(sum==180){
        message.innerText="Yeah!! Those angles forms a triangle."
    }else{
        message.innerText="Sorry!! Those angles don't form a triangle."
    }
}
btnCheck.addEventListener("click",clickHandler)