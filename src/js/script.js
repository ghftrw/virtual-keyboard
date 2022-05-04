const enArrCode = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight', 'ControlLeft', 'MetaLeft','AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'];
const enArrKey = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '🠅', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', '🠄', '🠇', '🠆', 'Ctrl'];
//const enArrShift = ['~','!','@', '#', '$','%', '^', '&', '*', '(', ')' , '_', '+', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Del', 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '🠅', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', '🠄', '🠇', '🠆', 'Ctrl'];

/*document.addEventListener("keydown",(event) =>{
  enArrShift.push(event.key);
  console.log(enArrShift);
})

//const keyboardArea = document.querySelector('.keyboard_area');
*/
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

const keyboard = document.createElement('div');
keyboard.className = 'keyboard_area';
document.body.append(keyboard);

const subtitleArea = document.createElement('div');
subtitleArea.className = 'subtitle_area';
subtitleArea.innerHTML = `<p>${subtitle1}</p> <p>${subtitle2}</p>`;
document.body.append(subtitleArea);

const init = () => {
  for (let i = 0; i < enArrCode.length; i++) {
    if (enArrCode[i] === 'Backspace') {
      enKeys += `<div class="keys backspace" data ="${enArrCode[i]}">`+`${enArrKey[i]}`+'</div>';
      continue
    }
    if (enArrCode[i] === 'Tab' || enArrCode[i] === 'Delete') {
      enKeys += `<div class="keys tab-del" data ="${enArrCode[i]}">`+`${enArrKey[i]}`+'</div>';
      continue
    }
    if (enArrCode[i] === 'ShiftLeft' || enArrCode[i] === 'ShiftRight' || enArrCode[i] === 'Enter' || enArrCode[i] === 'CapsLock') {
      enKeys += `<div class="keys caps-shift-ent " data ="${enArrCode[i]}">`+`${enArrKey[i]}`+'</div>';
      continue
    }
    if (enArrCode[i] === 'Space') {
      enKeys += `<div class="keys space" data ="${enArrCode[i]}">`+`${enArrKey[i]}`+'</div>';
      continue
    }
    if (enArrCode[i] === 'ControlLeft' || enArrCode[i] === 'ControlRight') {
      enKeys += `<div class="keys ctrl" data ="${enArrCode[i]}">`+`${enArrKey[i]}`+'</div>';
      continue
    }
    enKeys += `<div class="keys" data ="${enArrCode[i]}">`+`${enArrKey[i]}`+'</div>';
  }
  document.querySelector('.keyboard_area').innerHTML = enKeys;
}

init();

const keys =  document.querySelectorAll('.keys');

document.addEventListener('keydown', (event) => {
 if (event.code === 'CapsLock'){ 
  document.querySelector(`.keys[data="${event.code}"]`).classList.toggle('caps-active')
    keys.forEach((item) => {
     item.classList.toggle('text-upper');
   })
  } 
   if(keys[29].classList.contains('caps-active')) {
     if (event.key != 'CapsLock' && event.key != 'Meta' && event.key != 'Alt' && event.key != 'Control' && event.key != 'Shift'){ 
     textArea.value += event.key.toUpperCase();
    }
  } else {
    if (event.key != 'CapsLock' && event.key != 'Meta' && event.key != 'Alt' && event.key != 'Control' && event.key != 'Shift'){
    textArea.value += event.key.toLowerCase();
  }
}
  document.querySelector(`.keys[data="${event.code}"]`).classList.add('active');
})

document.addEventListener('keyup', (event) => {
  document.querySelector(`.keys[data="${event.code}"]`).classList.remove('active');
 })


 document.querySelector('.keyboard_area').addEventListener('mousedown', (event) => {
   if(event.target.classList.contains('keys')) {
    if (event.target.childNodes[0].textContent === 'CapsLock'){ 
     event.target.classList.toggle('caps-active');
     keys.forEach((item) => {
      item.classList.toggle('text-upper');
    })
    } else {
      if(keys[29].classList.contains('caps-active')) {
        textArea.value += event.target.childNodes[0].textContent.toUpperCase();
      } else {
        textArea.value += event.target.childNodes[0].textContent;
  }
    } 
    event.target.classList.add('active');
   }
 })

 document.querySelector('.keyboard_area').addEventListener('mouseup', () => {
  // console.log(event.target)
  keys.forEach((item) => {
    item.classList.remove('active');
  })
  // event.target.classList.remove('active');
   // event.target.classList.remove('active');
 })

/*const upp = () => {
  if(keys[29].classList.contains('caps-active')) {
    textArea.value.toUpperCase();
  }
}*/
