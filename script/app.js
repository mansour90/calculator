const displayResults = document.querySelector('.calculator__results');
const themeSwitchers = document.querySelectorAll('.theme-switcher');

let expression = '';
let answer = 0;

const display = (symbol) => {
  expression += symbol;
  displayResults.textContent = expression;
};

const calculate = () => {
  try {
    answer = eval(expression);
    displayResults.textContent = answer;
  } catch (error) {
    console.error('Expresia este invalidă:', error);
    displayResults.textContent = 'Error';
  }
};

const clear = () => {
  expression = expression.slice(0, -1);
  displayResults.textContent = expression;
};

const allClear = () => {
  expression = '';
  displayResults.textContent = '0';
};

const switchTheme = (index) => {
  const positions = ['0px', '20px', '45px'];
  document.querySelector(
    '.theme__switcher--circle'
  ).style.transform = `translateX(${positions[index]})`;
};

themeSwitchers.forEach((themeSwitcher, index) => {
  themeSwitcher.addEventListener('click', () => {
    switchTheme(index);
  });
});

const keys = document.querySelectorAll('.key');
keys.forEach((key) => {
  key.addEventListener('click', function () {
    const symbol = this.textContent;
    if (symbol === '=') {
      calculate();
    } else if (symbol === 'RESET') {
      allClear();
    } else if (symbol === 'DEL') {
      clear();
    } else {
      display(symbol);
    }
  });
});
