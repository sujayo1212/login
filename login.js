function login(){
    var id = document.getElementById("username").value
    var origin="1234"
    var ispw = document.getElementById("pwd").value
    if(id === "admin"){
        if(ispw === origin){
            alert("ok")
            window.location.href="todo.html"
        }else{
            window.alert("error")
        }
    }else{
        window.alert("error")

    }
}

document.getElementById("login").onclick = login;


