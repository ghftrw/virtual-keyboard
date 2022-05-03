const arrKeysCode = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight', 'ControlLeft', 'MetaLeft','AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'];
const arrKeysKey = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Delete', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'ArrowUp', 'Shift', 'Control', 'Meta', 'Alt', ' ', 'Alt', 'Control', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];
//document.addEventListener("keydown",(event) =>{
  //arrKeysKey.push(event.key);
  //console.log(arrKeysKey);
//})

let enKeys = "";
const title = 'Virtual Keyboard';
const subtitle1 = 'Клавиатура создана в операционной системе Windows';
const subtitle2 = 'Для переключения языка: левы Shift + Alt';

const titleArea = document.createElement('div');
titleArea.innerHTML = `<h1>${title}</h1>`;
titleArea.className = 'title';
document.body.append(titleArea);

const textArea = document.createElement('textarea');
textArea.className = 'text';
document.body.append(textArea);
textArea.focus();

const keyboard = document.createElement('div');
keyboard.className = 'keyboard_area';
document.body.append(keyboard);

const subtitleArea = document.createElement('div');
subtitleArea.className = 'subtitle_area';
subtitleArea.innerHTML = `<p>${subtitle1}</p> <p>${subtitle2}</p>`;
document.body.append(subtitleArea);

const init = () => {
  for (let i = 0; i < arrKeysCode.length; i++) {
    if (arrKeysCode[i] === 'Backspace') {
      enKeys += `<div class="keys backspace" data ="${arrKeysCode[i]}">` +`<p class="key_text"> ${arrKeysKey[i]}`+'</p>'+'</div>';
      continue
    }
    if (arrKeysCode[i] === 'Tab' || arrKeysCode[i] === 'Delete') {
      enKeys += `<div class="keys tab-del" data ="${arrKeysCode[i]}">` +`<p class="key_text"> ${arrKeysKey[i]}`+'</p>'+'</div>';
      continue
    }
    if (arrKeysCode[i] === 'ShiftLeft' || arrKeysCode[i] === 'ShiftRight' || arrKeysCode[i] === 'Enter' || arrKeysCode[i] === 'CapsLock') {
      enKeys += `<div class="keys caps-shift-ent " data ="${arrKeysCode[i]}">` +`<p class="key_text"> ${arrKeysKey[i]}`+'</p>'+'</div>';
      continue
    }
    if (arrKeysCode[i] === 'Space') {
      enKeys += `<div class="keys space" data ="${arrKeysCode[i]}">` +`<p class="key_text"> ${arrKeysKey[i]}`+'</p>'+'</div>';
      continue
    }
    if (arrKeysCode[i] === 'ArrowUp') {
      enKeys += `<div class="keys" data ="${arrKeysCode[i]}">` +'<p class="key_text"> 🠅 </p>'+'</div>';
      continue
    }
    if (arrKeysCode[i] === 'ArrowLeft') {
      enKeys += `<div class="keys" data ="${arrKeysCode[i]}">` +'<p class="key_text"> 🠄 </p>'+'</div>';
      continue
    }
    if (arrKeysCode[i] === 'ArrowDown') {
      enKeys += `<div class="keys" data ="${arrKeysCode[i]}">` +'<p class="key_text"> 🠇 </p>'+'</div>';
      continue
    }
    if (arrKeysCode[i] === 'ArrowRight') {
      enKeys += `<div class="keys" data ="${arrKeysCode[i]}">` +'<p class="key_text"> 🠆 </p>'+'</div>';
      continue
    }
    if (arrKeysCode[i] === 'ControlLeft' || arrKeysCode[i] === 'ControlRight') {
      enKeys += `<div class="keys" data ="${arrKeysCode[i]}">` +'<p class="key_text"> Ctrl </p>'+'</div>';
      continue
    }
    if (arrKeysCode[i] === 'MetaLeft') {
      enKeys += `<div class="keys" data ="${arrKeysCode[i]}">` + '<p class="key_text"> Win </p>'+'</div>';
      continue
    }
    enKeys += `<div class="keys" data ="${arrKeysCode[i]}">` +`<p class="key_text"> ${arrKeysKey[i]}`+'</p>'+'</div>';
  }
  document.querySelector('.keyboard_area').innerHTML = enKeys;
}

init();

document.addEventListener('keydown', (event) => {
  textArea.focus();
  document.querySelector(`.keyboard_area .keys[data="${event.code}"]`).classList.add('active');
})

document.addEventListener('keyup', (event) => {
  textArea.focus();
  document.querySelector(`.keyboard_area .keys[data="${event.code}"]`).classList.remove('active');
 })

 document.querySelector('.keyboard_area').addEventListener('click', (event) => {
  textArea.focus();
   if(event.target.classList.contains('keys','key_text')) {
     //console.log(event.target.childNodes[0].innerHTML);
     textArea.value += event.target.childNodes[0].innerHTML;
    event.target.classList.add('active');
   }
  setTimeout(() => {
    event.target.classList.remove("active") }, 200)
 })



