var form = document.forms.myForm;
var elem = form.elements.elem;
var elem1 = form.elements.elem1;
var meaning = document.querySelector("#str");
var table = document.querySelector(".wrapp_table");
var form = document.querySelector("#form_imt");
//debugger;
function IMT() {
  var button = document.querySelector("#button");
  var result =
    Number(elem.value) / (Number(elem1.value) * Number(elem1.value) * 0.0001);
  var num1Min = Number(elem1.value) * Number(elem1.value) * 0.0001 * 18.5;
  var num1Max = Number(elem1.value) * Number(elem1.value) * 0.0001 * 24.99;
 
  document.getElementById("result").innerHTML = result.toFixed(2);
  document.getElementById("text").innerHTML = num1Min.toFixed(2);
  document.getElementById("text1").innerHTML = num1Max.toFixed(2);
  if (result.toFixed(4) < 16) {
    meaning.innerHTML = "У Вас выраженный дефицит массы тела.";
    document.querySelector("tbody > tr:nth-child(2) > td").style.background =
      "#D8BFD8";
    document.querySelector(
      "tbody > tr:nth-child(2) > td:last-child"
    ).style.background = "#D8BFD8";
    document.querySelector("tbody > tr:nth-child(2)").style.fontWeight = "bold";
  } else if (result.toFixed(4) >= 16 && result.toFixed(4) < 18.5) {
    meaning.innerHTML = "У Вас дефицит массы тела.";
    document.querySelector("tbody > tr:nth-child(3) > td").style.background =
      "#D8BFD8";
    document.querySelector(
      "tbody > tr:nth-child(3) > td:last-child"
    ).style.background = "#D8BFD8";

    document.querySelector("tbody > tr:nth-child(3)").style.fontWeight = "bold";
  } else if (result.toFixed(4) >= 18.5 && result.toFixed(4) < 25) {
    meaning.innerHTML = "У Вас нормальная масса тела.";
    document.querySelector("tbody > tr:nth-child(4) > td").style.background =
      "#D8BFD8";
    document.querySelector(
      "tbody > tr:nth-child(4) > td:last-child"
    ).style.background = "#D8BFD8";

    document.querySelector("tbody > tr:nth-child(4)").style.fontWeight = "bold";
  } else if (result.toFixed(4) >= 25 && result.toFixed(4) < 30) {
    meaning.innerHTML = "У Вас избыточная масса тела.";
    document.querySelector("tbody > tr:nth-child(5) > td").style.background =
      "#D8BFD8";
    document.querySelector(
      "tbody > tr:nth-child(5) > td:last-child"
    ).style.background = "#D8BFD8";

    document.querySelector("tbody > tr:nth-child(5)").style.fontWeight = "bold";
  } else if (result.toFixed(4) >= 30 && result.toFixed(4) < 35) {
    meaning.innerHTML = "У Вас ожирение 1 степени.";
    document.querySelector("tbody > tr:nth-child(6) > td").style.background =
      "#D8BFD8";
    document.querySelector(
      "tbody > tr:nth-child(6) > td:last-child"
    ).style.background = "#D8BFD8";

    document.querySelector("tbody > tr:nth-child(6)").style.fontWeight = "bold";
  } else if (result.toFixed(4) >= 35 && result.toFixed(4) < 40) {
    meaning.innerHTML = "У Вас ожирение 2 степени.";
    document.querySelector("tbody > tr:nth-child(7) > td").style.background =
      "#D8BFD8";
    document.querySelector(
      "tbody > tr:nth-child(7) > td:last-child"
    ).style.background = "#D8BFD8";

    document.querySelector("tbody > tr:nth-child(7)").style.fontWeight = "bold";
  } else {
    meaning.innerHTML = "У Вас ожирение 3 степени.";
    document.querySelector("tbody > tr:nth-child(8) > td").style.background =
      "#D8BFD8";
    document.querySelector(
      "tbody > tr:nth-child(8) > td:last-child"
    ).style.background = "#D8BFD8";

    document.querySelector("tbody > tr:nth-child(8)").style.fontWeight = "bold";
  }
  table.classList.remove("none");
  form.classList.add("none");
}

const button = document.getElementById("button");
const next = document.getElementById("next");

elem.onblur = function () {
  if (!elem.value) {
    elem.classList.add("invalid");
    document.getElementById("error").innerHTML =
      "Введите корректное значение веса.";
  }
};

elem.onfocus = function () {
  if (this.classList.contains("invalid")) {
    // удаляем индикатор ошибки, т.к. пользователь хочет ввести данные заново
    this.classList.remove("invalid");
    document.getElementById("error").innerHTML = "";
  }
};
elem1.onblur = function () {
  if (!elem1.value) {
    elem1.classList.add("invalid");
    document.getElementById("error1").innerHTML =
      "Введите корректное значение роста.";
  }
};

elem1.onfocus = function () {
  if (this.classList.contains("invalid")) {
    // удаляем индикатор ошибки, т.к. пользователь хочет ввести данные заново
    this.classList.remove("invalid");
    document.getElementById("error1").innerHTML = "";
  }
};
debugger;
form.onsubmit = function(e) {
  e.preventDefault();
  if (!elem.value || !Number(elem.value)) {
    elem.classList.add("invalid");
    document.getElementById("error").innerHTML =
      "Введите корректное значение веса.";
  } else {
    elem.classList.remove("invalid");
    document.getElementById("error").innerHTML = "";
  }
  if (!elem1.value || !Number(elem1.value)) {
    elem1.classList.add("invalid");
    document.getElementById("error1").innerHTML =
      "Введите корректное значение роста.";
  } else {
    elem1.classList.remove("invalid");
    document.getElementById("error1").innerHTML = "";
  }

  if (Number(elem.value) && Number(elem1.value)) {
    IMT();
  }
};
/*
button.onclick = function () {
  if (!elem.value || !Number(elem.value)) {
    elem.classList.add("invalid");
    document.getElementById("error").innerHTML =
      "Введите корректное значение веса.";
  } else {
    elem.classList.remove("invalid");
    document.getElementById("error").innerHTML = "";
  }
  if (!elem1.value || !Number(elem1.value)) {
    elem1.classList.add("invalid");
    document.getElementById("error1").innerHTML =
      "Введите корректное значение роста.";
  } else {
    elem1.classList.remove("invalid");
    document.getElementById("error1").innerHTML = "";
  }

  if (Number(elem.value) && Number(elem1.value)) {
    IMT();
  }
};*/

next.onclick = function () {
  document.forms.myForm.reset();
  location.reload();
};
