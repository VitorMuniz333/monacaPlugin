document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    console.log(navigator.notification);
}

$(document).on("click","#alerta", function(){

    function retorno(){
    }
    navigator.notification.alert("aleatório", retorno,"Aviso!","alerta");
});