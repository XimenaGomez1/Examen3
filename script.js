let list=document.getElementById("form");
let conten=document.getElementById("conten");
let figur= [];

list.addEventListener("submit", (event)=>{
    event.preventDefault();
    let data =new FormData(list);
    figur.push({
        texto: data.get("nombre"),
        color: data.get("color"),
        figura: data.get("figura"),
        
    });
    pintar_figuras();
});
const pintar_figuras=()=>
{
    content.innerHTML="";
    figur.forEach((e)=>{
        content.insertAdjacentHTML (
            "beforeend",
            '<div class="${e.figura}" style="background:$(e.color)"> $(e.nombre)<div/>'
        );
    });
};