var base=document.querySelector(".base");
var height=document.querySelector(".height");
var btnCheck=document.querySelector(".check");
var mes=document.querySelector(".msg");
function eventHandler(){
    var a=Number(base.value);
    var b=Number(height.value);
    var sqrA=a*a;
    var sqrB=b*b;
    var ans=Math.sqrt(sqrA+sqrB);
    mes.innerText="Hypotenuse of given triangle is "+ans.toFixed(2)+" units."
}
btnCheck.addEventListener("click",eventHandler)