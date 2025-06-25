document.getElementsByClassName("container")[0].addEventListener("submit", function(event) {
  event.preventDefault(); // Impede envio automático do formulário

  const name = document.getElementsByClassName("input-user")[0].value.trim();
  const password = document.getElementsByClassName("input-password")[0].value.trim();

  if (name === "" || password === "") {
    alert("Por favor, preencha todos os campos!");
  } else {
    alert("Formulário enviado com sucesso!");
    // Aqui você pode enviar os dados para o servidor, limpar os campos, etc.
  }
});