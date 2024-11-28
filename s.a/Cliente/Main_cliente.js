// Inicializa o índice do slide
let slideIndex = 1;
showSlides(slideIndex); // Exibe o primeiro slide

// Função para mudar o slide
function plusSlides(n) {
    showSlides(slideIndex += n); // Atualiza e exibe o slide
}

// Função para exibir o slide atual
function currentSlide(n) {
    showSlides(slideIndex = n); // Atualiza e exibe o slide
}

// Função para mostrar os slides
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides"); // Obtém todos os slides
    let dots = document.getElementsByClassName("dot"); // Obtém todos os pontos
    if (n > slides.length) { slideIndex = 1; } // Volta para o primeiro slide se exceder
    if (n < 1) { slideIndex = slides.length; } // Volta para o último slide se for menor que 1
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Oculta todos os slides
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", ""); // Remove a classe ativa dos pontos
    }
    slides[slideIndex - 1].style.display = "block"; // Exibe o slide atual
    dots[slideIndex - 1].className += " active"; // Marca o ponto atual como ativo
}

//-------------------------------------------------------------------------------------------------------------

// Inicializa o carrinho a partir do localStorage
let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

// Função para adicionar produtos ao carrinho
function adicionarAoCarrinho(nomeProduto, precoProduto, imagemProduto) {
    carrinho.push({ nome: nomeProduto, preco: precoProduto, imagem: imagemProduto }); // Adiciona o produto ao carrinho
    alert("Produto adicionado ao carrinho"); // Alerta ao usuário

    // Atualiza o localStorage
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
}

//-------------------------------------------------------------------------------------------------------------------

// Função para exibir os produtos
function exibirProdutos() {
    const produtos = JSON.parse(localStorage.getItem('produtos')) || []; // Obtém os produtos do localStorage
    const productGrid = document.getElementById('penguin'); // Obtém o contêiner de produtos

    // Limpa a grid de produtos
    productGrid.innerHTML = '';

    // Exibe os produtos
    produtos.forEach((produto) => {
        const produtoHTML = `
            <div class="produto" id="camiseta-5">
                <img src="${produto.Url}" alt="${produto.nome}" class="product-image" id="camiseta">
                <div class="produto-info">
                    <h2 class="nome-produto">${produto.nome}</h2>
                    <p class="descricao-produto">${produto.descricao}</p>
                    <div class="preco">R$${produto.preco}</div>
                    <div class="estoque">Em estoque</div>
                    <span class="estrela">★★★★★</span>
                    <span class="avaliacao">(118 avaliações)</span>
                    <button class="add-carrinho" onclick="adicionarAoCarrinho('${produto.nome}', ${produto.preco}, '${produto.Url}')">Adicionar ao carrinho</button>
                </div>
            </div>
        `;

        productGrid.innerHTML += produtoHTML; // Adiciona o HTML do produto à grid
    });
}

// Chama a função para exibir os produtos quando a página carregar
window.onload = exibirProdutos;