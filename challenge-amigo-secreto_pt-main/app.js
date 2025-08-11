//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

//add amigos após clicar no botão
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

//a lista é criada ou atualizada após inserir um nome
function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}

//limpa o campo de texto após digitar o nome
function limparCampo() {
    document.getElementById("amigo").value = "";
}

//sorteia amigos dentro da lista
function sortearAmigo() {
    //validar que há amigos disponíveis
    if (amigos.length === 0) {
        alert("A lista de amigos está vazia. Adicione pelo menos um nome antes de sortear.");
        return;
    }

    //gerar índice aleatório
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    //obter o nome sorteado
    let amigoSorteado = amigos[indiceAleatorio];

    //mostrar o resultado
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>O amigo secreto sorteado é: <strong>${amigoSorteado}</strong></li>`;
}
