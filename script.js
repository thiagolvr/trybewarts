/* eslint-disable sonarjs/no-use-of-empty-return-value */
const loginBtn = document.getElementById('submitBtn');
const emailInp = document.getElementById('input-email-header');
const passwordInp = document.getElementById('input-password');
const checkboxContainer = document.getElementById('checkboxContainer');
const familyContainer = document.getElementById('familyContainer');
const rateContainer = document.getElementById('rateContainer');
const houseConteiner = document.getElementById('house');
const check = document.getElementById('agreement');
const submitBtn = document.getElementById('submit-btn');
const textarea = document.getElementById('textarea');
const countText = document.getElementById('counter');
const form = document.getElementById('evaluation-form');
const toLearn = ['HoFs', 'Jest', 'Promises', 'React', 'SQL', 'Python'];
const rate = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const family = ['Frontend', 'Backend', 'FullStack'];
const select = ['Gitnória', 'Reactpuff', 'Corvinode', 'Pytherina'];
submitBtn.disabled = true;
let count;

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
    span.setAttribute('name', name);
    span.appendChild(newElement);
    span.appendChild(label);
    element.appendChild(span);
  });
};

const inputSelectOption = (arr) => {
  arr.forEach((item) => {
    const option = document.createElement('option');
    option.innerText = item;
    option.value = item;
    option.id = `${
      item === 'Gitnória' ? 'gitnoria' : item.toLocaleLowerCase()
    }-house`;
    houseConteiner.appendChild(option);
  });
};

const login = () => {
  alert(
    emailInp.value === 'tryber@teste.com' && passwordInp.value === '123456'
      ? 'Olá, Tryber!'
      : 'Email ou senha inválidos.',
  );
};

const active = () => {
  submitBtn.disabled = false;
};

const countCharacters = () => {
  count = 500 - textarea.value.length;
  countText.innerHTML = count;
};

const subjectClassName = () => {
  toLearn.forEach((item, index) => {
    form.checkbox[index].className = 'subject';
  });
};

inputConstructor(family, 'radio', 'family', familyContainer);
inputConstructor(toLearn, 'checkbox', 'checkbox', checkboxContainer);
inputConstructor(rate, 'radio', 'rate', rateContainer);
inputSelectOption(select);

check.addEventListener('click', active);
loginBtn.addEventListener('click', login);
textarea.addEventListener('keyup', countCharacters);
subjectClassName();

const checkeds = () => {
  const arrCheckeds = toLearn.filter(
    (item, index) => form.checkbox[index].checked,
  );
  return arrCheckeds.reduce((sum, curr, index, arr) => {
    sum += `${curr}${index < arr.length - 1 ? ', ' : '.'}`;
    return sum;
  }, '');
};

const formInfo = (e) => {
  e.preventDefault();
  // const formData = Object.
  form.innerText = `
  Nome: ${form['input-name'].value} ${form['input-lastname'].value}
  Email: ${form['input-email'].value}
  Casa: ${form.house.value}
  Família: ${form.family.value}
  Matérias: ${checkeds()}
  Avaliação: ${form.rate.value}
  Observações: ${textarea.value}
  `;
};

submitBtn.addEventListener('click', formInfo);
