var button = document.getElementById("modalButton");
var modal = document.getElementById("modal-id");
var span = document.getElementById("close-id");
button.onclick = function(){
    modal.style.display = "block";
}

span.onclick = function(){
    modal.style.display = "none"
}