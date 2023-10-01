var b=document.querySelector("#myBulb")
var btn=document.querySelector("button")
flag=0;
btn.addEventListener("click",()=>{
    if(flag==0){
        b.style.backgroundImage=`URL("1.jpg")`
        flag=1;
    }
    else{
        b.style.backgroundColor="Transparent"
        flag=0;
    }

})