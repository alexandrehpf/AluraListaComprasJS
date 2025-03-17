const item = document.getElementById("input-item");
const botaoSalvarItem = document.getElementById("adicionar-item");
const listaDeComprar = document.getElementById("lista-de-compras");

botaoSalvarItem.addEventListener("click", adicionarItem);

function adicionarItem(evento){
    evento.preventDefault();
    
    //Criar um item na lista
    const itemDaLista = document.createElement("li");
    const containerItemLista = document.createElement("div");
    containerItemLista.classList.add("lista-item-container");

    //Container do nome do item
    const contianerNomeDoItem = document.createElement("div");
    const nomeDoItem = document.createElement("p");
    nomeDoItem.innerText = item.value;
    contianerNomeDoItem.appendChild(nomeDoItem);

    //Container de botões
    const containerBotoes = document.createElement("div");
    const botaoRemover = document.createElement("button");
    botaoRemover.classList.add("item-lista-button");
    const botaoEditar = document.createElement("button");
    botaoEditar.classList.add("item-lista-button");

    const imagemRemover = document.createElement("img");
    imagemRemover.src = "img/delete.svg";
    imagemRemover.alt = "Remover";

    const imagemEditar = document.createElement("img");
    imagemEditar.src = "img/edit.svg";
    imagemEditar.alt = "Editar";

    botaoRemover.appendChild(imagemRemover);
    containerBotoes.appendChild(botaoRemover);

    botaoEditar.appendChild(imagemEditar);
    containerBotoes.appendChild(botaoEditar);

    containerItemLista.appendChild(contianerNomeDoItem);
    containerItemLista.appendChild(containerBotoes);
    itemDaLista.appendChild(containerItemLista);
    listaDeComprar.appendChild(itemDaLista);
}