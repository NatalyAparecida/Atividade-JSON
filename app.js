let livros = [];

const listaLivros = document.getElementById("listaLivros");
const status = document.getElementById("status");
const btnBuscar = document.getElementById("btnBuscar");

async function carregarLivros() {
    try{
        status.textContent = "Carregando livros...";
        const resposta = await fetch('livros.json');

        if(!resposta.ok){
            throw new Error("Não foi possivel carregar JSON.");
        }
        livros = await resposta.json();
    
    }catch (erro){
        status.textContent = `Erro: ${erro.message}`;
    }
}

function mostrarLivros(lista) {
    listaLivros.innerHTML = "";

    lista.forEach((livros) => {

        const card = document.createElement("div");

        card.classList.add("card");

        card.innerHTML = `
            <h2>${livros.titulo}</h2>
            
            <p><strong> Descrição: </strong> ${livros.descrição}</p>
            <p><strong> Autor: </strong> ${livros.autor}</p>
        `;
       
        listaLivros.appendChild(card);
    });
}

btnBuscar.addEventListener("click", () =>{
    status.textContent = `${livros.length} livros carregados...aguarde!`;
    mostrarLivros(livros);
});

carregarLivros();