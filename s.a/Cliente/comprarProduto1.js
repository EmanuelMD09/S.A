let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

function adicionarAoCarrinho(nomeProduto, precoProduto, imagemProduto) {
    // Adiciona o produto ao carrinho
    carrinho.push({ nome: nomeProduto, preco: precoProduto, imagem: imagemProduto });
    alert("Produto adicionado ao carrinho");

    // Atualiza o localStorage
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
}