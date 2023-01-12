// let userLogado = JSON.parse(localStorage.getItem("userLogado"));

// let logado = document.querySelector("#logado");

// logado.innerHTML = `Olá ${userLogado.nome}`;


// THIS FUNCTION ERASES THE TOKEN AND THE USER IS NO LONGER LOGGED IN
function sair() {
  localStorage.removeItem("token");
  // localStorage.removeItem("userLogado");
  window.location.href = "login.html";
}

// IF THE USER IS NO LOGGED (NO TOKEN IN THE LOCALSTORAGE) -> LOGIN PAGE
if (localStorage.getItem("token") === null) {
  alert("Você precisa estar logado para acessar essa página");
  window.location.href = "login.html";
}

