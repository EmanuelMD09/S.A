let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

function atualizarCarrinho() {
    const listaCarrinho = document.getElementById('lista-carrinho');
    const totalElement = document.getElementById('total');
    
    // Limpa a lista atual
    listaCarrinho.innerHTML = '';
    
    // Adiciona cada produto ao carrinho
    carrinho.forEach((item, index) => {
        const li = document.createElement('li');
        li.className = 'item-carrinho'; // Classe para estilizar os itens do carrinho
        li.id = `item-${index}`; // ID único para cada item do carrinho
        li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
        
        // Cria um botão para remover o item individualmente
        const btnRemover = document.createElement('button');
        btnRemover.textContent = 'Remover';
        btnRemover.id = `remover-${index}`; // ID único para o botão de remover
        btnRemover.className = 'btn-remover'; // Classe para estilizar o botão de remover
        btnRemover.onclick = () => removerItem(index); // Chama a função para remover o item
        
        li.appendChild(btnRemover); // Adiciona o botão ao item da lista
        listaCarrinho.appendChild(li); // Adiciona o item da lista ao carrinho
    });
    
    // Atualiza o total
    const total = calcularTotal(); // Atualiza o total aqui
    totalElement.textContent = `Total: R$ ${total.toFixed(2)}`;
}

function calcularTotal() {
    return carrinho.reduce((acc, item) => acc + item.preco, 0);
}

function removerItem(index) {
    carrinho.splice(index, 1); // Remove o item do carrinho
    localStorage.setItem('carrinho', JSON.stringify(carrinho)); // Atualiza o localStorage
    atualizarCarrinho(); // Atualiza a visualização do carrinho
}

function limparCarrinho() {
    carrinho = []; // Limpa o carrinho
    localStorage.removeItem('carrinho'); // Remove do localStorage
    atualizarCarrinho(); // Atualiza a visualização do carrinho
}

// Adiciona evento ao botão de limpar carrinho
document.getElementById('limpar-carrinho').onclick = limparCarrinho;

// Inicializa o carrinho ao carregar a página
document.addEventListener('DOMContentLoaded', atualizarCarrinho);