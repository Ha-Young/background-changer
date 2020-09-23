const DOM_HEX_COLOR_CODE = document.getElementById("hex-color-code");
const DOM_HEX_COLOR_TEXT = document.getElementById("hex-color-text");
const DOM_HEX_COLOR_BTN = document.getElementById("btn-change-color");
const DOM_BACKGROUND = document.getElementById("background");

function make_hexColorCode() {
  const r = Math.floor(Math.random() * 254);
  const g = Math.floor(Math.random() * 254);
  const b = Math.floor(Math.random() * 254);

  return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
}

function get_fontColor_from_hexa(hexColorCode) {
  const r = "0x" + hexColorCode.substring(1, 3);
  const g = "0x" + hexColorCode.substring(3, 5);
  const b = "0x" + hexColorCode.substring(5, 7);

  const sumRGB = parseInt(r) + parseInt(g) + parseInt(b);

  return sumRGB > (254 * 3) / 2 ? "black" : "white";
}

function init() {
  console.log(DOM_HEX_COLOR_BTN);
  DOM_HEX_COLOR_BTN.addEventListener("click", function () {
    const hexColorCode = make_hexColorCode();
    DOM_BACKGROUND.style.backgroundColor = hexColorCode;
    DOM_HEX_COLOR_CODE.innerHTML = hexColorCode;
    DOM_HEX_COLOR_TEXT.style.color = get_fontColor_from_hexa(hexColorCode);
  });
}

init();
