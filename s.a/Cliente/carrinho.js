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

// PAGAMENTO

// Função para processar o pagamento
document.getElementById('payment-form').onsubmit = function(event) {
    event.preventDefault(); // Previne o envio padrão do formulário

    // Coleta as informações do pagamento
    const cardNumber = document.querySelector('input[placeholder="Número do Cartão"]').value;
    const cardName = document.querySelector('input[placeholder="Nome no Cartão"]').value;
    const expiryDate = document.querySelector('input[placeholder="Data de Validade (MM/AA)"]').value;
    const cvv = document.querySelector('input[placeholder="CVV"]').value;

    // Aqui você pode implementar a lógica para processar o pagamento
    processPayment(cardNumber, cardName, expiryDate, cvv)
        .then(response => {
            const randomDays = Math.floor(Math.random() * 10) + 1; // Número aleatório de 1 a 10
            showModal(`Pagamento processado com sucesso! Sua entrega será em ${randomDays} dias.`);
            limparCarrinho(); // Limpa o carrinho após o pagamento ser bem-sucedido
        })
        .catch(error => {
            showModal("Erro ao processar o pagamento: " + error.message);
        });
};

// Função simulada para processar o pagamento
function processPayment(cardNumber, cardName, expiryDate, cvv) {
    return new Promise((resolve, reject) => {
        // Simulação de uma resposta de pagamento bem-sucedida
        setTimeout(() => {
            resolve({ success: true });
        }, 1000);
    });
}

// Função para mostrar o modal
function showModal(message) {
    const modal = document.getElementById('modal');
    const modalMessage = document.getElementById('modal-message');
    modalMessage.textContent = message;
    modal.style.display = "block";
}

// Evento para fechar o modal
document.getElementById('modal-close').onclick = function() {
    document.getElementById('modal').style.display = "none";
}

// Fechar o modal quando clicar fora dele
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

// Limitar o CVV a 3 dígitos
const cvvInput = document.getElementById('cvv');
cvvInput.addEventListener('input', function() {
    if (cvvInput.value.length > 3) {
        cvvInput.value = cvvInput.value.slice(0, 3);
    }
});