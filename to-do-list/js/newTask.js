// Buscando os elementos HTML
let novaTarefaInput = document.getElementById("newTask");
let listaDeTarefas = document.querySelector('.list');

function tarefaNova() {
    let inputValor = novaTarefaInput.value;
    if (inputValor === '') {
        alert("You must write something!");
    } else {
        let novoItem = document.createElement("div");
        novoItem.className = "list-item";

        let novoInput = document.createElement("input");
        novoInput.type = "checkbox";

        let novoLabel = document.createElement("label");
        novoLabel.htmlFor = "t" + (listaDeTarefas.childElementCount + 1);
        novoLabel.appendChild(document.createTextNode(inputValor));

        let novaImagemClose = document.createElement("img");
        novaImagemClose.src = "img/fechar.png";
        novaImagemClose.className = "close";
        novaImagemClose.alt = "Fechar";

        novaImagemClose.addEventListener("click", function(){
            novoItem.remove();
        })

        novoItem.appendChild(novoInput);
        novoItem.appendChild(novoLabel);
        novoItem.appendChild(novaImagemClose);
        listaDeTarefas.appendChild(novoItem);

        // Limpar o input
        novaTarefaInput.value = '';
    }
}