const submitBtn = document.getElementById("submitBtn");
const emailInp = document.getElementById("input-email");
const passwordInp = document.getElementById("input-password");
const checkboxContainer = document.getElementById("checkboxContainer");
const familyContainer = document.getElementById("familyContainer");
const rateContainer = document.getElementById("rateContainer");
const toLearn = ["HoFs", "Jest", "Promises", "React", "SQL", "Python"];
const rate = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const family = ["Frontend", "Backend", "FullStack"];

// function criada em call, decidimos mudar a estrutura do html, para criar dinamicamente pelo script.
const inputConstructor = (arr, type, name, element) => {
  arr.forEach((item) => {
    const label = document.createElement("label");
    label.innerHTML = item;
    label.setAttribute("for", item);
    const newElement = document.createElement("input");
    newElement.type = type;
    newElement.name = name;
    newElement.value = item;
    newElement.id = item;
    element.appendChild(newElement);
    element.appendChild(label);
  });
};

inputConstructor(family, "radio", "family", familyContainer);
inputConstructor(toLearn, "checkbox", "", checkboxContainer);
inputConstructor(rate, "radio", "rate", rateContainer);

const login = () => {
  alert(
    emailInp.value === "tryber@teste.com" && passwordInp.value == "123456"
      ? "Olá, Tryber!"
      : "Email ou senha inválidos."
  );
};

submitBtn.addEventListener("click", login);
