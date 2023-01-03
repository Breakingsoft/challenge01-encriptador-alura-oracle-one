const encrypt = (
  text // Constante para la encriptación del texto
) =>
  text
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

const decrypt = (
  text // Constante para la desencriptación del texto
) =>
  text
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

const stringValidate = (text) => {
  // Validación de texto, no mayúsculas y caracteres especiales
  let regStringValidate = /[A-Z]|[á-ú]|[Á-Ú]|[à-ù]/;
  return regStringValidate.test(text);
};

function encryptText() {
  // Función para encriptar
  let texto = document.getElementById("input").value;
  let value = stringValidate(texto);

  defaultCopy();

  if (!value && texto != "") {
    let output = encrypt(texto);
    outputConf(output);
    document.getElementById("info").style.visibility = "hidden";
  } else if (!value && texto == "") {
    defaultOutput();
  } else {
    document.getElementById("info").style.visibility = "visible";
  }
}

function decryptText() {
  // Función para desencriptar
  let texto = document.getElementById("input").value;
  let value = stringValidate(texto);

  defaultCopy();

  if (!value && texto != "") {
    // Condiciones para encriptar el texto
    let output = decrypt(texto);
    outputConf(output);
    document.getElementById("info").style.visibility = "hidden";
    tooltip.innerHTML = "Copiar al portapapeles";
  } else if (!value && texto == "") {
    defaultOutput();
  } else {
    document.getElementById("info").style.visibility = "visible";
  }
}

//Funciones para las salidas

function outputConf(text) {
  document.getElementById("initial_output").style.display = "none";
  document.getElementById("text").innerHTML = text;
  document.getElementById("final_output").style.display = "flex";
}

function defaultOutput() {
  document.getElementById("info").style.visibility = "hidden";
  document.getElementById("final_output").style.display = "none";
  document.getElementById("initial_output").style.display = "flex";
}

// Funciones para copiar el texto

function copyText() {
  try {
    let entrada = document.getElementById("text").innerHTML;
    navigator.clipboard.writeText(entrada);
    let tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Se ha copiado: " + entrada;
  } catch (err) {
    console.log("Error al copiar");
  }
}

function defaultCopy() {
  let tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copiar al portapapeles";
}
