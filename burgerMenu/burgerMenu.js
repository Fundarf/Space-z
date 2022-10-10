let burgerButton=document.querySelector(".burgerButton");
let info=document.querySelector(".info");

burgerButton.addEventListener("click",()=>{
    if(info.classList.contains("infoActive")){
        info.classList.remove("infoActive");
    }
    else{
        info.classList.add("infoActive");
    }
})