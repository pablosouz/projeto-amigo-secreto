//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    // pega o valor digitado
    let input = document.getElementById("amigo");
    let nome = input.value.trim();

    // validação: campo vazio
    if (nome === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }

    // adiciona na lista
    amigos.push(nome);

    // atualiza a lista visível
    atualizarLista();

    // limpa o campo
    limparCampo();
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}


