const counter = document.querySelector(".counter");

var x = 0;

const increase = () => {
  x++;
  counter.textContent = x;
};

const decrease = () => {
  x--;
  counter.textContent = x;
};

const reset = () => {
  x = 0;
  counter.textContent = x;
};
