const submitBtn = document.getElementById("submitBtn");
const emailInp = document.getElementById("input-email");
const passwordInp = document.getElementById("input-password");

const login = () => {
  alert(
    emailInp.value === "tryber@teste.com" && passwordInp.value == "123456"
      ? "Olá, Tryber!"
      : "Email ou senha inválidos."
  );
};

submitBtn.addEventListener("click", login);
