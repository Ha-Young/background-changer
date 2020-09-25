/*

  1. Element들을 담는 변수는 상수 아닙니다. SOMETHING_ELEMENT (X) -> somethingElement (O)
  2. Javascript Naming Convention은 camelCase입니다. make_hex_colorCode (X) -> makeHexColorCode (O)

 */

const hexColorElement = document.getElementById("hex-color-code");
const hexTextElement = document.getElementById("hex-color-text");
const buttonElement = document.getElementById("btn-change-color");
const mainElement = document.getElementById("background");

function makeHexColorCode() {
  const r = Math.floor(Math.random() * 254);
  const g = Math.floor(Math.random() * 254);
  const b = Math.floor(Math.random() * 254);

  return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
}

function getFontColorFromHexCode(hexColorCode) {
  const r = "0x" + hexColorCode.substring(1, 3);
  const g = "0x" + hexColorCode.substring(3, 5);
  const b = "0x" + hexColorCode.substring(5, 7);

  const sumRGB = parseInt(r) + parseInt(g) + parseInt(b);

  return sumRGB > (254 * 3) / 2 ? "black" : "white";
}

function init() {
  buttonElement.addEventListener("click", function () {
    const hexColorCode = makeHexColorCode();
    mainElement.style.backgroundColor = hexColorCode;
    hexColorElement.innerHTML = hexColorCode;
    hexTextElement.style.color = getFontColorFromHexCode(hexColorCode);
  });
}

init();
