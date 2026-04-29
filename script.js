const dados = [
    {
        nome: "Triciclo 50cc",
        preco: "R$1.899",
        img: "manco1.png",
        descricao: "Ideal para iniciantes. Econômico e divertido."
    },
    {
        nome: "Mini B",
        preco: "R$3.599",
        img: "manco2.png",
        descricao: "Compacto e estiloso, perfeito para passeios urbanos."
    },
    {
        nome: "Kombixinha",
        preco: "R$7.999",
        img: "manco3.png",
        descricao: "Clássico e espaçoso."
    },
    {
        nome: "Sabor Chevette",
        preco: "R$4.899",
        img: "manco4.png",
        descricao: "Raiz, forte e cheio de personalidade."
    }
];

function mostrar(index) {

    document.getElementById("img-detalhe").src = dados[index].img;
    document.getElementById("nome").innerText = dados[index].nome;
    document.getElementById("preco-detalhe").innerText = dados[index].preco;
    document.getElementById("descricao").innerText = dados[index].descricao;

    // destaque no card
    document.querySelectorAll(".card").forEach(card => {
        card.classList.remove("ativo");
    });

    document.querySelectorAll(".card")[index].classList.add("ativo");
}