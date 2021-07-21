function info(){
    var pw1 = document.getElementById("pwd1").value
    var pw2 = document.getElementById("pwd2").value
    if(pw1 === pw2){
        window.alert("ok")
    }
    else{
        window.alert("error")
}
}
document.getElementById("join").onclick = info;
