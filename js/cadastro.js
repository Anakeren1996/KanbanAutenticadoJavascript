// ACCESS THE DOCUMENT THROUGH THE ID
let eye = document.querySelector("#verSenha");
let confirmSenhaEye = document.querySelector("#verConfirmSenha");

let nome = document.querySelector("#nome");
let labelNome = document.querySelector("#labelNome");
let validNome = false;

let usuario = document.querySelector("#usuario");
let labelUsuario = document.querySelector("#labelUsuario");
let validUsuario = false;

let senha = document.querySelector("#senha");
let labelSenha = document.querySelector("#labelSenha");
let validSenha = false;

let confirmSenha = document.querySelector("#confirmSenha");
let labelConfirmSenha = document.querySelector("#labelConfirmSenha");
let validConfirmSenha = false;

let msgError = document.querySelector("#msgError");
let msgSuccess = document.querySelector("#msgSuccess");

// AS SOON AS I START TYPING, VALIDATION STARTS
nome.addEventListener("keyup", () => {
  if (nome.value.length <= 2) {
    labelNome.setAttribute("style", "color:red");
    nome.setAttribute("style", "border-color:red");
    // ADD HTML CODE
    labelNome.innerHTML = "Insira no mínimo 3 caracteres";
    validNome = false;
  } else {
    labelNome.setAttribute("style", "color:black");
    labelNome.innerHTML = "Nome";
    nome.setAttribute("style", "border-color:blue");
    validNome = true;
  }
});

// USER VALIDATION
usuario.addEventListener("keyup", () => {
  if (usuario.value.length < 5) {
    labelUsuario.setAttribute("style", "color:red");
    usuario.setAttribute("style", "border-color:red");
    labelUsuario.innerHTML = "Insira no mínimo 5 caracteres";
    validUsuario = false;
  } else {
    labelUsuario.setAttribute("style", "color:black");
    labelUsuario.innerHTML = "Usuário";
    usuario.setAttribute("style", "border-color:blue");
    validUsuario = true;
  }
});

// PASSWORD VALIDATION
senha.addEventListener("keyup", () => {
  if (senha.value.length < 6) {
    labelSenha.setAttribute("style", "color:red");
    senha.setAttribute("style", "border-color:red");
    labelSenha.innerHTML = "Insira no mínimo 6 caracteres";
    validSenha = false;
  } else {
    labelSenha.setAttribute("style", "color:black");
    labelSenha.innerHTML = "Senha";
    senha.setAttribute("style", "border-color:blue");
    validSenha = true;
  }
});

// CHECK IF CONFIRMATION IS EQUAL TO PASSWORD
confirmSenha.addEventListener("keyup", () => {
  if (senha.value != confirmSenha.value) {
    labelConfirmSenha.setAttribute("style", "color:red");
    confirmSenha.setAttribute("style", "border-color:red");
    labelConfirmSenha.innerHTML = "As senhas não conferem";
    validConfirmSenha = false;
  } else {
    labelConfirmSenha.setAttribute("style", "color:black");
    labelConfirmSenha.innerHTML = "Confirmar senha";
    confirmSenha.setAttribute("style", "border-color:blue");
    validConfirmSenha = true;
  }
});

// REGISTER FUNCTION 
function cadastrar() {
  if (validNome && validUsuario && validSenha && validConfirmSenha) {
    // JSONPARSE TRABSFORMS WHAT WE ARE GOING TO PUT INSIDE THE LOCALSTORAGE INTO JSON
    let listaUser = JSON.parse(localStorage.getItem("listaUser") || "[]");

    // INCREMENT USER LIST
    // I CREATED AN OBJECT AND DID A PUSH WITHIN THIS LIST OF USERS
    listaUser.push({
      nome: nome.value,
      user: usuario.value,
      senha: senha.value,
    });

    // SAVE THE LIST
    localStorage.setItem("listaUser", JSON.stringify(listaUser));

    msgSuccess.setAttribute("style", "display: block");
    msgSuccess.innerHTML = "Cadastrando usuário...";
    //
    msgError.innerHTML = "";
    msgError.setAttribute("style", "display: none");

    // CREATES A DELAY IN REGISTRATION
    setTimeout(() => {
      // CHANGE PAGE LOCATION -> PAGE LOGIN
      window.location.href = "login.html";
    }, 3000);
  } else {
    msgError.setAttribute("style", "display: block");
    msgError.innerHTML = "Preencha todos os campos corretamente";
    //
    msgSuccess.innerHTML = "";
    msgSuccess.setAttribute("style", "display: none");
  }
}

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

// SEE CONFIRM PASSWORD
confirmSenhaEye.addEventListener("click", () => {
  // THIS FUNCTION WILL TAKE WHATEVER IS INSIDE THE PASSWORD INPUT
  let inputConfirmSenha = document.querySelector("#confirmSenha");
  //   let confirmSenha = document.querySelector("#confirmSenha");

  if (inputConfirmSenha.getAttribute("type") == "password") {
    inputConfirmSenha.setAttribute("type", "text");
  } else {
    inputConfirmSenha.setAttribute("type", "password");
  }
});
