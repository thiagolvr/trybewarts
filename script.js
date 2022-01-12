const submitBtn = document.getElementById('submitBtn');
const emailInp = document.getElementById('input-email');
const passwordInp = document.getElementById('input-password');
const checkboxContainer = document.getElementById('checkboxContainer');
const familyContainer = document.getElementById('familyContainer');
const rateContainer = document.getElementById('rateContainer');
const houseConteiner = document.getElementById('house');
const toLearn = ['HoFs', 'Jest', 'Promises', 'React', 'SQL', 'Python'];
const rate = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const family = ['Frontend', 'Backend', 'FullStack'];
const select = ['Gitnória', 'Reactpuff', 'Corvinode', 'Pytherina'];

// function criada em call, decidimos mudar a estrutura do html, para criar dinamicamente pelo script.
const inputConstructor = (arr, type, name, element) => {
  arr.forEach((item) => {
    const label = document.createElement('label');
    const span = document.createElement('span');
    label.innerHTML = item;
    label.setAttribute('for', item);
    const newElement = document.createElement('input');
    newElement.type = type;
    newElement.name = name;
    newElement.value = item;
    newElement.id = item;
    span.appendChild(newElement);
    span.appendChild(label);
    element.appendChild(span);
  });
};

inputConstructor(family, 'radio', 'family', familyContainer);
inputConstructor(toLearn, 'checkbox', '', checkboxContainer);
inputConstructor(rate, 'radio', 'rate', rateContainer);

const inputSelectOption = (arr) => {
  arr.forEach((item) => {
    const option = document.createElement('option');
    option.innerText = item;
    option.value = item;
    option.id = `${item === 'Gitnória' ? 'gitnoria' : item.toLocaleLowerCase()
    }-house`;
    houseConteiner.appendChild(option);
  });
};

inputSelectOption(select);

const login = () => {
  alert(
    emailInp.value === 'tryber@teste.com' && passwordInp.value === '123456'
      ? 'Olá, Tryber!'
      : 'Email ou senha inválidos.',
  );
};

submitBtn.addEventListener('click', login);
