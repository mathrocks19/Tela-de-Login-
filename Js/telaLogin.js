document.addEventListener("DOMContentLoaded", () => {
  const email = "usuario@1.com";
  const senha = "abc123";

  let campoEmail = document.getElementById("email");
  let campoSenha = document.getElementById("senha");
  let botaoEntrar = document.getElementById("btn-entrar");

  botaoEntrar.addEventListener('click', () => {
    if (campoEmail.value == "" || campoSenha.value == "") {
      alert("Email e senha devem ser preenchidos!");
      return;
    } else if (campoEmail.value.toLowerCase() != email || campoSenha.value != senha) {
      alert('Usuário ou senha inválida');
      return;
    } else {
      window.location.href = "tela-principal.html";
    }
  });
});