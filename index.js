let btn3 = document.querySelector(".button3");
let clickBtn = document.querySelector(".click-btn");
let btnContainer = document.querySelector(".buttons-containers");
let initArea = document.querySelector(".init-area");
let calcContainer = document.querySelector(".contenedor-calculadora");

btn3.addEventListener("click", (e) => {
  console.log(e);
  e.preventDefault();

  window.open("./test.html", "_self");
});

clickBtn.addEventListener("click", (e) => {
  e.preventDefault();

  initArea.classList.toggle("hide");
  btnContainer.classList.toggle("hide");
  calcContainer.classList.toggle("hide");
});
