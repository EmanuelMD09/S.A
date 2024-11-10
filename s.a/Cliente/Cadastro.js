function cadastro() {
    // Buscas os inputs do cadastro pelo seu ID e armazena os valores digitados pelo usuário nos inputs
    let email = document.getElementById('email').value;
    let usuario = document.getElementById('usuario').value;
    let senha = document.getElementById('senha').value;
    let repetirSenha = document.getElementById('repetirSenha').value;
    
    // Verifica se todos os campos estão preenchidos
    if (!email || !usuario || !senha || !repetirSenha) {
    alert("Por favor, preencha todos os campos."); // Mensagem se algum campo estiver vazio
    return; // Encerra a função
    }

    // Verifica se a senha e a confirmação de senha são iguais
    if (senha === repetirSenha) {
        // Obtém os dados armazenados no Local Storage ou cria um objeto vazio se não houver dados
        let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados")) || {};

        // Verifica se o nome de usuário já está cadastrado
        if (bancoDeDados[usuario]) {
            alert("Nome de usuário já cadastrado."); // Exibe mensagem se o nome de usuário já existir
            return; // Encerra a função para não cadastrar o usuário
        }

        // Adiciona o novo usuário ao banco de dados
        bancoDeDados[usuario] = { usuario: usuario, password: senha };

        // Salva o banco de dados atualizado no Local Storage
        localStorage.setItem("bancoDeDados", JSON.stringify(bancoDeDados));

        alert("Usuário cadastrado com sucesso!"); // Exibe mensagem de sucesso
    } else {
        alert("As senhas são diferentes!"); // Exibe mensagem se as senhas não coincidirem
    }

  
}

