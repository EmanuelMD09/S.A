// const sidenav = document.getElementById("mySidenav");

// document.addEventListener("mousemove", function(event) {
//     if (event.clientX < 50) { // Adjust the threshold as needed
//         sidenav.style.width = "250px"; // Show the navbar
//     } else {
//         sidenav.style.width = "0"; // Hide the navbar
//     }
// });

// sidenav.addEventListener("mouseleave", function() {
//     sidenav.style.width = "0"; // Hide the navbar when mouse leaves
// });


// function cadastrarProduto() {
//     const nome = document.getElementById('nome').value;
//     const preco = document.getElementById('preco').value;
//     const descricao = document.getElementById('descricao').value;
//     const Url = document.getElementById('Url').value;

//     const produto = {
//         nome,
//         preco,
//         descricao,
//         Url
//     };

//     if (produto.nome && produto.preco && produto.descricao) {
//         let produtos = JSON.parse(localStorage.getItem('produtos')) || [];
//         produtos.push(produto);
//         localStorage.setItem('produtos', JSON.stringify(produtos));

//         limparFormulario();
//         exibirProdutos();
//     } else {
//         alert('Preencha todos os campos para cadastrar o produto!');
//     }
// }

// function limparFormulario() {
//     document.getElementById('nome').value = '';
//     document.getElementById('preco').value = '';
//     document.getElementById('descricao').value = '';
//     document.getElementById('Url').value = '';
// }

// function exibirProdutos() {
//     const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
//     const listaProdutos = document.getElementById('listaProdutos');
//     listaProdutos.innerHTML = '';

//     for (let i in produtos) {
//         const produto = produtos[i];
//         const li = document.createElement('li');
//         li.textContent = `${produto.nome} - R$${produto.preco} - ${produto.descricao} - ${produto.Url}`;
       
//         const deleteBtn = document.createElement('button');
//         deleteBtn.textContent = 'Deletar';
//         deleteBtn.classList.add('delete-btn');
//         deleteBtn.onclick = () => deletarProduto(i);

//         li.appendChild(deleteBtn);
//         listaProdutos.appendChild(li);
//     }
// }

// function deletarProduto(index) {
//     let produtos = JSON.parse(localStorage.getItem('produtos'));
//     produtos.splice(index, 1); // Remove o produto no índice especificado
//     localStorage.setItem('produtos', JSON.stringify(produtos));
//     exibirProdutos(); // Atualiza a lista exibida
// }

// function limparProdutos() {
//     localStorage.removeItem('produtos');
//     exibirProdutos();
// }

// window.onload = exibirProdutos; 

const sidenav = document.getElementById("mySidenav");

document.addEventListener("mousemove", function(event) {
    if (event.clientX < 50) {
        sidenav.style.width = "250px"; // Show the navbar
    } else {
        sidenav.style.width = "0"; // Hide the navbar
    }
});

sidenav.addEventListener("mouseleave", function() {
    sidenav.style.width = "0"; // Hide the navbar when mouse leaves
});

function cadastrarProduto() {
    const nome = document.getElementById('nome').value;
    const preco = document.getElementById('preco').value;
    const descricao = document.getElementById('descricao').value;
    const Url = document.getElementById('Url').value;

    const produto = {
        nome,
        preco,
        descricao,
        Url
    };

    if (produto.nome && produto.preco && produto.descricao) {
        let produtos = JSON.parse(localStorage.getItem('produtos')) || [];
        
        // Verifica se já existe um produto com o mesmo nome (ou código, se preferir)
        const existingProductIndex = produtos.findIndex(p => p.nome === nome);
        if (existingProductIndex !== -1) {
            // Atualiza o produto existente
            produtos[existingProductIndex] = produto;
        } else {
            // Adiciona um novo produto
            produtos.push(produto);
        }

        localStorage.setItem('produtos', JSON.stringify(produtos));
        limparFormulario();
        exibirProdutos();
    } else {
        alert('Preencha todos os campos para cadastrar o produto!');
    }
}

function buscarProduto() {
    const codigo = document.getElementById('codigo').value;
    const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
    
    // Aqui você pode definir como identificar um produto pelo código
    const produto = produtos.find(p => p.nome === codigo); // Ou use outra propriedade

    if (produto) {
        // Preenche o formulário com os dados do produto encontrado
        document.getElementById('nome').value = produto.nome;
        document.getElementById('preco').value = produto.preco;
        document.getElementById('descricao').value = produto.descricao;
        document.getElementById('Url').value = produto.Url;
    } else {
        alert('Produto não encontrado!');
    }
}

function limparFormulario() {
    document.getElementById('codigo').value = '';
    document.getElementById('nome').value = '';
    document.getElementById('preco').value = '';
    document.getElementById('descricao').value = '';
    document.getElementById('Url').value = '';
}

function exibirProdutos() {
    const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
    const listaProdutos = document.getElementById('listaProdutos');
    listaProdutos.innerHTML = '';

    for (let i in produtos) {
        const produto = produtos[i];
        const li = document.createElement('li');
        li.textContent = `${produto.nome} - R$${produto.preco} - ${produto.descricao} - ${produto.Url}`;
       
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Deletar';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.onclick = () => deletarProduto(i);

        li.appendChild(deleteBtn);
        listaProdutos.appendChild(li);
    }
}

function deletarProduto(index) {
    let produtos = JSON.parse(localStorage.getItem('produtos'));
    produtos.splice(index, 1); // Remove o produto no índice especificado
    localStorage.setItem('produtos', JSON.stringify(produtos));
    exibirProdutos(); // Atualiza a lista exibida
}

function limparProdutos() {
    localStorage.removeItem('produtos');
    exibirProdutos();
}

window.onload = exibirProdutos;