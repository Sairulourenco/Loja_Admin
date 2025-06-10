function verificarAdmin() {
    let tipo = sessionStorage.getItem("tipo");
    if (tipo!=="admin") {
        alert("Errou Nega!");
        window.location.href = "index.html";
    }
}

function listar() {
    let dados = JSON.parse(localStorage.getItem("bancodados")) || [];

    if (dados.length === 0) {
        document.getElementById("tabelaUsuarios").innerHTML = "<p><strong>Nenhum usuário cadastrado.</strong></p>";
        return;
    }

    let tabela = "<table border='1'><tr><th>ID</th><th>Login</th><th>Senha</th></tr>";

    dados.forEach(user => {
        tabela += `<tr><td>${user.id}</td><td>${user.usuario}</td><td>${user.senha}</td></tr>`;
    });

    tabela += "</table>";
    document.getElementById("tabelaUsuarios").innerHTML = tabela;
    console.log(JSON.parse(localStorage.getItem("bancodados")));

}


function adicionar() {
    let dados = JSON.parse(localStorage.getItem("bancodados")) || [];

    let login = document.querySelector("#login").value;
    let senha = document.querySelector("#senha").value;

    if (!login || !senha) {
        alert("Preencha login e senha!");
        return;
        console.log(JSON.parse(localStorage.getItem("bancodados")));

    }

    let novo = { id: Date.now(), usuario: login, senha: senha, tipo: "user" };
    dados.push(novo);
    localStorage.setItem("bancodados", JSON.stringify(dados));
    alert("Add My Best Friend!");
    listar(); // atualiza tabela
}

function buscar() {
    let dados = JSON.parse(localStorage.getItem("bancodados")) || [];
    let login = document.querySelector("#login").value.trim().toLowerCase();

    if (!login) {
        alert("Digite um login para buscar!");
        return;
    }

    let usuarioEncontrado = dados.find(user => user.usuario.toLowerCase() === login);

    if (usuarioEncontrado) {
        document.querySelector("#id").value = usuarioEncontrado.id;
        document.querySelector("#senha").value = usuarioEncontrado.senha;

        let tabela = `
            <table border='1'>
                <tr><th>ID</th><th>Login</th><th>Senha</th></tr>
                <tr>
                    <td>${usuarioEncontrado.id}</td>
                    <td>${usuarioEncontrado.usuario}</td>
                    <td>${usuarioEncontrado.senha}</td>
                </tr>
            </table>
        `;
        document.getElementById("tabelaUsuarios").innerHTML = tabela;
    } else {
        alert("Usuário não encontrado!");
    }
}


function atualizar() {
    let dados = JSON.parse(localStorage.getItem("bancodados")) || [];
    let id = parseInt(document.querySelector("#id").value);
    let login = document.querySelector("#login").value;
    let senha = document.querySelector("#senha").value;

    for (let i = 0; i < dados.length; i++) {
        if (dados[i].id === id) {
            dados[i].usuario = login;
            dados[i].senha = senha;
            localStorage.setItem("bancodados", JSON.stringify(dados));
            alert("Usuário atualizado!");
            listar();
            return;
        }
    }

    alert("Atualizou Babadeiro");
}

function apagar() {
    if (confirm("Tem certeza que deseja apagar TODOS os usuários?")) {
        localStorage.removeItem("bancodados");
        alert("Todos os usuários foram apagados!");
        listar(); // atualiza a tabela (agora vazia)
    }
}

function sair() {
    sessionStorage.clear();
    window.location.href = "index.html";
}
