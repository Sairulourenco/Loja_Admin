
 function logar(){
    let lg = document.querySelector("#login").value
    let ps = document.querySelector("#password").value

    let dados = JSON.parse(localStorage.getItem("bancodados"));


 // laço de repetição

    for (let i =0; i < dados.length; i ++){

         if (lg == dados[i].usuario && ps == dados[i].senha){

            sessionStorage.setItem("usuario", dados[i].usuario)
            sessionStorage.setItem("tipo", dados[i].tipo);

            if (dados[i].tipo =="admin") {
               window.location.href = "adm.html";

            } else {
               window.location.href ="outra.html";   
            }

            return;

         }
    }
      console.log (" sera ?  \n qual o numero " + i)
      alert ("Errou bobinho!")
 }

 function userlogado() {
    const user = sessionStorage.getItem("usuario");
    if (!user) window.location.href = "index.html";
    document.getElementById("nome").value = user;
}

function sair() {
    sessionStorage.clear();
    window.location.href = "index.html";
}







 