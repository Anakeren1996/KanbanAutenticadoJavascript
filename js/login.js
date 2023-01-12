// ACCESS THE DOCUMENT THROUGH THE (QUERYELECTOR)
let eye = document.querySelector("#verSenha");

// I CREATE AN ARROW FUNCTION THAT WHEN I CLICK DOES SOMETHING
eye.addEventListener("click", () => {
  // THIS FUNCTION WILL TAKE WHATEVER IS INSIDE THE PASSWORD INPUT
  let inputSenha = document.querySelector("#senha");
  //   let confirmSenha = document.querySelector("#confirmSenha");

  if (inputSenha.getAttribute("type") == "password") {
    inputSenha.setAttribute("type", "text");
  } else {
    inputSenha.setAttribute("type", "password");
  }
});

// FUNCTION CALLED WHEN CLICKING THE ENTER BUTTON
function entrar() {
  let usuario = document.querySelector("#usuario");
  let userLabel = document.querySelector("#userLabel");

  let senha = document.querySelector("#senha");
  let senhaLabel = document.querySelector("#senhaLabel");

  let msgError = document.querySelector("#msgError");

  let listaUser = [];

  // THIS OBJECT ARE THE FIELDS THAT I WANT TO GET FROM LOCALSTORAGE
  let userValid = {
    nome: "",
    user: "",
    senha: "",
  };

  listaUser = JSON.parse(localStorage.getItem("listaUser"));
  // TESTANDO -> BRINGS THE LIST IN THE USER'S LOCALSTORAGE IN THE CONSOLE
  // console.log(listaUser);

  // I AM LOOKING AT USER LIST ITEM BY ITEM WITH (FOR EACH)
  listaUser.forEach((item) => {
    if (usuario.value == item.user && senha.value == item.senha) {
      userValid = {
        nome: item.nome,
        user: item.user,
        senha: item.senha,
      };
    }
  });

  // console.log(userValid);
  if (usuario.value == userValid.user && senha.value == userValid.senha) {
    window.location.href = "index.html";

    let mathRandom = Math.random().toString(16).substr(2);
    let token = mathRandom + mathRandom;

    localStorage.setItem("token", token);

    // TAKES THE USER WHO IS LOGGED IN AND SHOWS HIS NAME ON THE LOGIN SCREEN
    localStorage.setItem("userLogado", JSON.parse(userValid));
  } else {
    userLabel.setAttribute("style", "color: red");
    usuario.setAttribute("style", "border-color: red");
    senhaLabel.setAttribute("style", "color: red");
    senha.setAttribute("style", "border-color: red");
    msgError.setAttribute("style", "display:block");
    msgError.innerHTML = "Usuário ou senha incorretos";
    usuario.focus();
  }
}
