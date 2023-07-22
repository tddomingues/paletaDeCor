const generateButton = document.querySelector("#generate-button");
const colorsDiv = document.querySelector(".colors");

const caracteres = "ABCDEF0123456789";

let hexDec;

function imprimirHexDec() {
  colorsDiv.innerHTML = "";
  for (let z = 0; z < 5; z++) {
    geradorHexDec();
    const elementCor = document.createElement("div");
    const elementHexDec = document.createElement("p");
    elementCor.style.background = hexDec;
    elementHexDec.innerHTML = hexDec;
    colorsDiv.appendChild(elementCor);
    elementCor.appendChild(elementHexDec);
  }
}

function geradorHexDec() {
  hexDec = "#";
  for (let i = 0; i < 6; i++) {
    const caracterAleatorio =
      caracteres[Math.floor(Math.random() * caracteres.length)];
    hexDec = hexDec + caracterAleatorio;
  }
}

generateButton.addEventListener("click", imprimirHexDec);
