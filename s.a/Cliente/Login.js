function enviar() {
    // Obtém os elementos dos campos do formulário de login usando os IDs atualizados
    let usuario = document.getElementById('usuario'); // Campo para nome de usuário
    let senha = document.getElementById('senha'); // Campo para senha

    // Obtém os valores digitados pelo usuário
    let usuarioLogin = usuario.value;
    let senhaLogin = senha.value;

    // Obtém os dados armazenados no Local Storage ou usa um objeto vazio se não houver dados
    let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados")) || {};

    // Verifica se o nome de usuário e a senha correspondem a algum registro no banco de dados
    if (bancoDeDados[usuarioLogin] && bancoDeDados[usuarioLogin].password === senhaLogin) {
        alert("Login bem-sucedido!"); // Exibe mensagem se o login for bem-sucedido
        window.location.href = "Main_cliente.html"; 
        } else {
        alert("Nome de usuário ou senha incorretos."); // Exibe mensagem se o login falhar
    }
}