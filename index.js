let btn3 = document.querySelector(".button3");
let clickBtn = document.querySelector(".click-btn");
let btnContainer = document.querySelector(".buttons-containers");
let initArea = document.querySelector(".init-area");
let calcContainer = document.querySelector(".contenedor-calculadora");
let calcBtn = document.querySelector(".button1");

/////////////////////////////////////////
//Calc Screen
let calcArea = document.querySelector(".inputs2");
let result = document.querySelector(".result");

//calc buttons container
let calBtnsContainer = document.querySelector(".btns-container");

let numero_actual;
let estado_actual;
let resultado;

// Lisenter for calc buttons.
calBtnsContainer.addEventListener("click", (e) => {
  if (e.target.dataset.type === "numberKey") {
    let digito_actual = calcArea.textContent;
    let digito_presionado = e.target.dataset.num;
    let digito_nuevo;

    if (digito_actual === "0") {
      digito_nuevo = digito_presionado;
    } else {
      digito_nuevo = digito_actual + digito_presionado;
    }

    calcArea.textContent = digito_nuevo;
  } else if (e.target.dataset.type === "operator") {
    if (result.textContent === "0") {
      numero_actual = Number(calcArea.textContent);
    } else {
      numero_actual = Number(result.textContent);
    }

    estado_actual = e.target.dataset.operation;

    calcArea.textContent = "0";
  } else if (e.target.dataset.type === "igual") {
    if (estado_actual != "igual") {
      let numero_nuevo = Number(calcArea.textContent);

      if (estado_actual === "suma") {
        resultado = numero_actual + numero_nuevo;
        calcArea.textContent = "0";
        result.textContent = resultado;
        estado_actual = "igual";
      } else if (estado_actual === "resta") {
        resultado = numero_actual - numero_nuevo;
        calcArea.textContent = "0";
        result.textContent = resultado;
        estado_actual = "igual";
      } else if (estado_actual === "multiplicacion") {
        resultado = numero_actual * numero_nuevo;
        calcArea.textContent = "0";
        result.textContent = resultado;
        estado_actual = "igual";
      } else if (estado_actual === "division") {
        resultado = numero_actual / numero_nuevo;
        calcArea.textContent = "0";
        result.textContent = resultado;
        estado_actual = "igual";
      }
    }
  } else if (e.target.dataset.type === "punto") {
    let digito_actual = calcArea.textContent;
    let digito_nuevo;
    console.log(digito_actual);
    if (digito_actual.includes(".")) {
      digito_nuevo = digito_actual;
      calcArea.textContent = digito_nuevo;
    } else {
      digito_nuevo = digito_actual + ".";
      calcArea.textContent = digito_nuevo;
    }
  } else if (e.target.dataset.type === "borrar") {
    result.textContent = "0";
    calcArea.textContent = "0";
    numero_actual = 0;
    resultado = 0;
    estado_actual = "";
  } else if (e.target.dataset.type === "delete") {
    let nuevo_digito = calcArea.textContent.slice(0, -1);

    calcArea.textContent = nuevo_digito;
  }
});

////////////////////////////////////////

//Boton De Inicio
btn3.addEventListener("click", (e) => {
  console.log(e);
  e.preventDefault();

  window.open("./test.html", "_self");
});

clickBtn.addEventListener("click", (e) => {
  e.preventDefault();

  initArea.classList.toggle("hide");
  btnContainer.classList.toggle("hide");
  // calcContainer.classList.toggle("hide");
});

calcBtn.addEventListener("click", () => {
  calcContainer.classList.toggle("hide");
});

////////////////////////////////////

//operations buttons.
