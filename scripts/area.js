var base=document.querySelector(".base");
var height=document.querySelector(".height");
var btnCheck=document.querySelector(".check");
var mes=document.querySelector(".msg");
function clickHandler(){
    var ans=(Number(base.value)*Number(height.value))/2;
    mes.innerText="Area of triangle is "+ans+" square units."
}
btnCheck.addEventListener("click",clickHandler)

