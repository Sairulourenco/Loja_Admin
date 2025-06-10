function dicionario(){
    let dados = [
        {id:1, usuario:"Du", senha:"123", tipo: "user"},
        {id:2, usuario:"Dudu", senha:"1234", tipo: "user"},
        {id:3, usuario:"Edu", senha:"12345", tipo: "user"},
        {id:666, usuario:"Lulu", senha:"666", tipo: "admin"}
    ];

    localStorage.setItem("bancodados", JSON.stringify(dados));
}