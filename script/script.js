'use strict';

document.addEventListener('DOMContentLoaded', () => {

  // экранная клавиатура
  {
    const keyboardBtn = document.querySelector('.search-form__keyboard');
    const keyboard = document.querySelector('.keyboard');
    const closeKeyboard = document.getElementById('close-keyboard');
    const searchInput = document.querySelector('.search-form__input');

    function toggleKeyboard() {
      if (keyboard.style.top) {
        keyboard.style.top = '';
      } else {
        keyboard.style.top = '50' + '%';
      }
    }

    const typing = event => {
      const target = event.target;
      
      if (target.tagName === 'BUTTON') {
        searchInput.value += target.textContent.trim();
      } 
    };

    keyboardBtn.addEventListener('click', toggleKeyboard);
    closeKeyboard.addEventListener('click', toggleKeyboard);
    keyboard.addEventListener('click', typing);
  }

  // меню

  {
    const burger = document.querySelector('.spinner');
    const sidebarMenu = document.querySelector('.sidebarMenu');

    burger.addEventListener('click', () => {
      burger.classList.toggle('active');
      sidebarMenu.classList.toggle('rollUp');
    });

    sidebarMenu.addEventListener('click', (e) => {
      let target = e.target;

      target = target.closest('a[href="#"]');

      if (target) {
        const parentTarget = target.parentNode;
        
        sidebarMenu.querySelectorAll('li').forEach(item => {
          if (item === parentTarget) {
            item.classList.add('active');
          } else {
            item.classList.remove('active');
        
            }  
          });
        }
    });
  }

  // модалка
  {
    const divYoutuber = document.createElement('div');
    
  }
});



/* Подія DOMContentLoaded викликається, 
коли вихідний HTML документ повністю завантажився та був розібраний (parse), 
без очікування повного завантаження стилів, 
зображень, сабфреймів (subframes). */

// classList.add('class'), classList.remove('class') = classList.toggle('class')
// className = 'class class' = замена класса 

// Метод Element.closest() возвращает ближайший родительский элемент (или сам элемент), 
// который соответствует заданному CSS-селектору или null, 
// если таковых элементов вообще нет. Имеет ли этот элемент заданный селектор