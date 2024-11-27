
function enviar() {
    // Obtém os elementos dos campos do formulário de login usando os IDs atualizados
    let usuario = document.getElementById('usuario'); // Campo para nome de usuário
    let senha = document.getElementById('senha'); // Campo para senha

    // Obtém os valores digitados pelo usuário
    let usuarioLogin = usuario.value;
    let senhaLogin = senha.value;

    // Define as credenciais corretas
    const usuarioCorreto = "vendedor-sk8";
    const senhaCorreta = "4321";

    // Verifica se o nome de usuário e a senha correspondem às credenciais corretas
    if (usuarioLogin === usuarioCorreto && senhaLogin === senhaCorreta) {
        // Armazena os dados no localStorage
        localStorage.setItem('usuario', usuarioLogin);
        localStorage.setItem('senha', senhaLogin); // Armazenando a senha

        alert("Login bem-sucedido!"); // Exibe mensagem se o login for bem-sucedido
        window.location.href = "Cadastrar_produto.html"; 
    } else {
        alert("Nome de usuário ou senha incorretos."); // Exibe mensagem se o login falhar
    }
}