const arrCode = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'];
const enArrKey = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '🠅', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', '🠄', '🠇', '🠆', 'Ctrl'];
const enArrShift = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Del', 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '🠅', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', '🠄', '🠇', '🠆', 'Ctrl'];
const enArrShiftCaps = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '{', '}', '|', 'Del', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ':', '"', 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '<', '>', '?', '🠅', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', '🠄', '🠇', '🠆', 'Ctrl'];
const enArrKeyCaps = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'Del', 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '🠅', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', '🠄', '🠇', '🠆', 'Ctrl'];
const ruArrKey = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del', 'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '🠅', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', '🠄', '🠇', '🠆', 'Ctrl'];
const ruArrKeyCaps = ['Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\', 'Del', 'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter', 'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', '🠅', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', '🠄', '🠇', '🠆', 'Ctrl'];
const ruArrShift = ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'Del', 'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter', 'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '🠅', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', '🠄', '🠇', '🠆', 'Ctrl'];
const ruArrShiftCaps = ['ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '/', 'Del', 'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', ',', '🠅', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', '🠄', '🠇', '🠆', 'Ctrl'];

/*document.addEventListener("keydown", (event) => {
  ruArrShift.push(event.key);
  console.log(ruArrShift);
})
*/
//const keyboardArea = document.querySelector('.keyboard_area');

let enKeys = "";
const title = 'Virtual Keyboard';
const subtitle1 = 'Клавиатура создана в операционной системе Windows';
const subtitle2 = 'Для переключения языка: левый Shift + Alt';

//Язык по-умолчанию английский
if (!localStorage.getItem('language')) {
  localStorage.setItem('language', 'en');
}
let lang = localStorage.getItem('language');

//Создаем элементы
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

const init = (lang) => {
  //Проверка на язык после перезагрузки
  let chars;
  if (lang === 'ru') {
    chars = ruArrKey;
  } else {
    chars = enArrKey;
  }
  //Создаем кнопки
  for (let i = 0; i < chars.length; i++) {
    if (arrCode[i] === 'Backspace') {
      enKeys += `<div class="keys backspace" data ="${arrCode[i]}">` + `${chars[i]}` + '</div>';
      continue
    }
    if (arrCode[i] === 'Tab' || arrCode[i] === 'Delete') {
      enKeys += `<div class="keys tab-del" data ="${arrCode[i]}">` + `${chars[i]}` + '</div>';
      continue
    }
    if (arrCode[i] === 'ShiftLeft' || arrCode[i] === 'ShiftRight' || arrCode[i] === 'Enter' || arrCode[i] === 'CapsLock') {
      enKeys += `<div class="keys caps-shift-ent " data ="${arrCode[i]}">` + `${chars[i]}` + '</div>';
      continue
    }
    if (arrCode[i] === 'Space') {
      enKeys += `<div class="keys space" data ="${arrCode[i]}">` + `${chars[i]}` + '</div>';
      continue
    }
    if (arrCode[i] === 'ControlLeft' || arrCode[i] === 'ControlRight') {
      enKeys += `<div class="keys ctrl" data ="${arrCode[i]}">` + `${chars[i]}` + '</div>';
      continue
    }
    enKeys += `<div class="keys" data ="${arrCode[i]}">` + `${chars[i]}` + '</div>';
  }
  document.querySelector('.keyboard_area').innerHTML = enKeys;
}

init(lang);

const keys = document.querySelectorAll('.keys');
//const text = document.querySelector('.text');

//Нажать кнопку клавы
document.addEventListener('keydown', (event) => {
  //event.preventDefault()
  //textArea.blur();
  //Смена языка
  if (event.shiftKey && event.altKey) {
    keys[42].classList.remove('shift-active1');
    if (keys[0].innerHTML === 'ё' || keys[0].innerHTML === 'Ё') {
      localStorage.setItem('language', 'en');
      for (let i = 0; i < enArrKey.length; i++) {
        keys[i].innerHTML = enArrKey[i];
      }
    } else {
      localStorage.setItem('language', 'ru');
      for (let i = 0; i < ruArrKey.length; i++) {
        keys[i].innerHTML = ruArrKey[i];
      }
    }
  }
  //Шифт
  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    if (localStorage.getItem('language') === 'en') {
      if (keys[29].classList.contains('caps-active')) {
        for (let i = 0; i < keys.length; i++) {
          keys[i].innerHTML = enArrShiftCaps[i];
        }
      } else {
        for (let i = 0; i < keys.length; i++) {
          keys[i].innerHTML = enArrShift[i];
        }
      }
    }
    if (localStorage.getItem('language') === 'ru') {
      if (keys[29].classList.contains('caps-active')) {
        for (let i = 0; i < keys.length; i++) {
          keys[i].innerHTML = ruArrShiftCaps[i];
        }
      } else {
        for (let i = 0; i < keys.length; i++) {
          keys[i].innerHTML = ruArrShift[i];
        }
      }
    }
  }
  //КапсЛок
  if (event.code === 'CapsLock') {
    if (localStorage.getItem('language') === 'en') {
      if ((keys[42].classList.contains('active') || keys[54].classList.contains('active')) && !keys[29].classList.contains('caps-active')) {
        keys[29].classList.add('caps-active')
        for (let i = 0; i < keys.length; i++) {
          keys[i].innerHTML = enArrShiftCaps[i];
        }
      }
      else if ((keys[42].classList.contains('active') || keys[54].classList.contains('active')) && keys[29].classList.contains('caps-active')) {
        keys[29].classList.remove('caps-active')
        for (let i = 0; i < keys.length; i++) {
          keys[i].innerHTML = enArrShift[i];
        }
      }
      else if (keys[29].classList.contains('caps-active')) {
        keys[29].classList.remove('caps-active')
        for (let i = 0; i < keys.length; i++) {
          keys[i].innerHTML = enArrKey[i];
        }
      }
      else {
        keys[29].classList.add('caps-active')
        for (let i = 0; i < keys.length; i++) {
          keys[i].innerHTML = enArrKeyCaps[i];
        }
      }
    }
    if (localStorage.getItem('language') === 'ru') {
      if ((keys[42].classList.contains('active') || keys[54].classList.contains('active')) && !keys[29].classList.contains('caps-active')) {
        keys[29].classList.add('caps-active')
        for (let i = 0; i < keys.length; i++) {
          keys[i].innerHTML = ruArrShiftCaps[i];
        }
      }
      else if ((keys[42].classList.contains('active') || keys[54].classList.contains('active')) && keys[29].classList.contains('caps-active')) {
        keys[29].classList.remove('caps-active')
        for (let i = 0; i < keys.length; i++) {
          keys[i].innerHTML = ruArrShift[i];
        }
      }
      else if (keys[29].classList.contains('caps-active')) {
        keys[29].classList.remove('caps-active')
        for (let i = 0; i < keys.length; i++) {
          keys[i].innerHTML = ruArrKey[i];
        }
      }
      else {
        keys[29].classList.add('caps-active')
        for (let i = 0; i < keys.length; i++) {
          keys[i].innerHTML = ruArrKeyCaps[i];
        }
      }
    }
  }
  document.querySelector(`.keys[data="${event.code}"]`).classList.add('active');
})


//Отжать кнопку клавы
document.addEventListener('keyup', (event) => {
  event.preventDefault()
  document.querySelector(`.keyboard_area .keys[data="${event.code}"]`).classList.remove('active');
  //document.querySelector(`.keys[data="${event.code}"]`).classList.remove('active');

  //Чистим после шифта
  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    if (localStorage.getItem('language') === 'en') {
      if (keys[29].classList.contains('caps-active')) {
        for (let i = 0; i < keys.length; i++) {
          keys[i].innerHTML = enArrKeyCaps[i];
        }
      } else {
        for (let i = 0; i < enArrKey.length; i++) {
          keys[i].innerHTML = enArrKey[i];
        }
      }
    }
    if (localStorage.getItem('language') === 'ru') {
      if (keys[29].classList.contains('caps-active')) {
        for (let i = 0; i < keys.length; i++) {
          keys[i].innerHTML = ruArrKeyCaps[i];
        }
      } else {
        for (let i = 0; i < enArrKey.length; i++) {
          keys[i].innerHTML = ruArrKey[i];
        }
      }
    }
  }
})

//Нажатия мыши
document.querySelector('.keyboard_area').addEventListener('mousedown', (event) => {
  if (event.target.classList.contains('keys')) {
    //КапсЛок
    if (event.target.childNodes[0].textContent === 'CapsLock') {
      if (localStorage.getItem('language') === 'en') {
        if ((keys[42].classList.contains('shift-active1') || keys[54].classList.contains('shift-active1')) && !keys[29].classList.contains('caps-active')) {
          for (let i = 0; i < keys.length; i++) {
            keys[i].innerHTML = enArrShiftCaps[i];
          }
          event.target.classList.add('caps-active');
        }
        else if ((keys[42].classList.contains('shift-active1') || keys[54].classList.contains('shift-active1')) && keys[29].classList.contains('caps-active')) {
          for (let i = 0; i < keys.length; i++) {
            keys[i].innerHTML = enArrShift[i];
          }
          event.target.classList.remove('caps-active');
        }
        else if (keys[29].classList.contains('caps-active')) {
          for (let i = 0; i < keys.length; i++) {
            keys[i].innerHTML = enArrKey[i];
          }
          event.target.classList.remove('caps-active');
        } else {
          for (let i = 0; i < keys.length; i++) {
            keys[i].innerHTML = enArrKeyCaps[i];
          }
          event.target.classList.add('caps-active');
        }
      }
      if (localStorage.getItem('language') === 'ru') {
        if ((keys[42].classList.contains('shift-active1') || keys[54].classList.contains('shift-active1')) && !keys[29].classList.contains('caps-active')) {
          for (let i = 0; i < keys.length; i++) {
            keys[i].innerHTML = ruArrShiftCaps[i];
          }
          event.target.classList.add('caps-active');
        }
        else if ((keys[42].classList.contains('shift-active1') || keys[54].classList.contains('shift-active1')) && keys[29].classList.contains('caps-active')) {
          for (let i = 0; i < keys.length; i++) {
            keys[i].innerHTML = ruArrShift[i];
          }
          event.target.classList.remove('caps-active');
        }
        else if (keys[29].classList.contains('caps-active')) {
          for (let i = 0; i < keys.length; i++) {
            keys[i].innerHTML = ruArrKey[i];
          }
          event.target.classList.remove('caps-active');
        } else {
          for (let i = 0; i < keys.length; i++) {
            keys[i].innerHTML = ruArrKeyCaps[i];
          }
          event.target.classList.add('caps-active');
        }
      }
    }
    //Альт
    if (event.target.childNodes[0].textContent === 'Alt') {
      if (localStorage.getItem('language') === 'en') {
        if (keys[42].classList.contains('shift-active1') || keys[54].classList.contains('shift-active1')) {
          for (let i = 0; i < keys.length; i++) {
            keys[i].innerHTML = ruArrKey[i];
          }
          keys[42].classList.remove('shift-active1');
          keys[54].classList.remove('shift-active1');
          localStorage.setItem('language', 'ru');
        }
      } else {
        if (keys[42].classList.contains('shift-active1') || keys[54].classList.contains('shift-active1')) {
          for (let i = 0; i < keys.length; i++) {
            keys[i].innerHTML = enArrKey[i];
          }
          keys[42].classList.remove('shift-active1');
          keys[54].classList.remove('shift-active1');
          localStorage.setItem('language', 'en');
        }
      }
    }
    //Шифт
    if (event.target.childNodes[0].textContent === 'Shift') {
      if (localStorage.getItem('language') === 'en') {
        if (keys[29].classList.contains('caps-active') && !keys[42].classList.contains('shift-active1') && !keys[54].classList.contains('shift-active1')) {
          for (let i = 0; i < keys.length; i++) {
            keys[i].innerHTML = enArrShiftCaps[i];
          }
          event.target.classList.add('shift-active1');
        }
        else if (keys[29].classList.contains('caps-active') && (keys[42].classList.contains('shift-active1') || keys[54].classList.contains('shift-active1'))) {
          for (let i = 0; i < keys.length; i++) {
            keys[i].innerHTML = enArrKeyCaps[i];
          }
          keys[42].classList.remove('shift-active1');
          keys[54].classList.remove('shift-active1');
        }
        else if (keys[42].classList.contains('shift-active1') || keys[54].classList.contains('shift-active1')) {
          for (let i = 0; i < keys.length; i++) {
            keys[i].innerHTML = enArrKey[i];
          }
          keys[42].classList.remove('shift-active1');
          keys[54].classList.remove('shift-active1');
        }
        else {
          for (let i = 0; i < keys.length; i++) {
            keys[i].innerHTML = enArrShift[i];
          }
          event.target.classList.add('shift-active1');
        }
      }
      if (localStorage.getItem('language') === 'ru') {
        if (keys[29].classList.contains('caps-active') && !keys[42].classList.contains('shift-active1') && !keys[54].classList.contains('shift-active1')) {
          for (let i = 0; i < keys.length; i++) {
            keys[i].innerHTML = ruArrShiftCaps[i];
          }
          event.target.classList.add('shift-active1');
        }
        else if (keys[29].classList.contains('caps-active') && (keys[42].classList.contains('shift-active1') || keys[54].classList.contains('shift-active1'))) {
          for (let i = 0; i < keys.length; i++) {
            keys[i].innerHTML = ruArrKeyCaps[i];
          }
          keys[42].classList.remove('shift-active1');
          keys[54].classList.remove('shift-active1');
        }
        else if (keys[42].classList.contains('shift-active1') || keys[54].classList.contains('shift-active1')) {
          for (let i = 0; i < keys.length; i++) {
            keys[i].innerHTML = ruArrKey[i];
          }
          keys[42].classList.remove('shift-active1');
          keys[54].classList.remove('shift-active1');
        }
        else {
          for (let i = 0; i < keys.length; i++) {
            keys[i].innerHTML = ruArrShift[i];
          }
          event.target.classList.add('shift-active1');
        }
      }
    }
    event.target.classList.add('active');
  }
})


//Отжать мышь
document.querySelector('.keyboard_area').addEventListener('mouseup', () => {
  keys.forEach((item) => {
    item.classList.remove('active');
  })
})

