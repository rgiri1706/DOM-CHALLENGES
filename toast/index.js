var button = document.getElementById("modalButton");
var toast = document.getElementById("toast-id");
button.onclick=function(){
    toast.style.display = "block";
    setTimeout(()=>{
        toast.style.display = "none";
    }, 2000);
}