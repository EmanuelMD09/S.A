  let slideIndex = 1;
          showSlides(slideIndex);
          
          function plusSlides(n) {
            showSlides(slideIndex += n);
          }
          
          function currentSlide(n) {
            showSlides(slideIndex = n);
          }
          
          function showSlides(n) {
            let i;
            let slides = document.getElementsByClassName("mySlides");
            let dots = document.getElementsByClassName("dot");
            if (n > slides.length) {slideIndex = 1}    
            if (n < 1) {slideIndex = slides.length}
            for (i = 0; i < slides.length; i++) {
              slides[i].style.display = "none";  
            }
            for (i = 0; i < dots.length; i++) {
              dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex-1].style.display = "block";  
            dots[slideIndex-1].className += " active";
          }

          let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

          function adicionarAoCarrinho(nomeProduto, precoProduto, imagemProduto) {
            carrinho.push({ nome: nomeProduto, preco: precoProduto, imagem: imagemProduto });
            alert("Produto adicionado ao carrinho");
            
            // Atualiza o localStorage
            localStorage.setItem('carrinho', JSON.stringify(carrinho));
        }
          //-------------------------------------------------------------------------------------------------------------------
// Função para exibir os produtos
function exibirProdutos() {
  const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
  const productGrid = document.getElementById('penguin');

  // Limpar a grid de produtos
  productGrid.innerHTML = '';

  // Exibir os produtos
  produtos.forEach((produto) => {
    const produtoHTML = `
      <div class="produto">
        <img src="${produto.Url}" alt="${produto.nome}" class="product-image" id="camiseta">
        <div class="produto-info">
          <h2 class="nome-produto">${produto.nome}</h2>
          <p class="descricao-produto">${produto.descricao}</p>
          <div class="preco">R$${produto.preco}</div>
          <div class="estoque">Em estoque</div>
          <span class="estrela">★★★★★</span>
          <span class="avaliacao">(118 avaliações)</span>
          <button class="add-carrinho" onclick="adicionarAoCarrinho('${produto.nome}', ${produto.preco})">Adicionar ao carrinho</button>
        </div>
      </div>
    `;

    productGrid.innerHTML += produtoHTML;
  });
}

// Chamar a função para exibir os produtos quando a página carregar
window.onload = exibirProdutos;