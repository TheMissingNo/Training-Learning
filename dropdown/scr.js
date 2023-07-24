
const menu = ['a', 'b', 'c'];

const dropdowns = document.querySelectorAll('.drp');

// Function to create and fill the ul elements
function fillList(listClass, items) {
  const uls = document.querySelectorAll(`.${listClass}`);
  if (!uls) {
    console.error(`Element with class '${listClass}' not found.`);
    return;
  }

  uls.forEach(ul => {
    items.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      ul.appendChild(li);
    });
  });
}

// Fill the 'menu' lists
fillList('menu', menu);

dropdowns.forEach(dropdown => {
  const select = dropdown.querySelector('.select'); // Use dropdown to select elements relative to each dropdown
  const caret = dropdown.querySelector('.caret');
  const menu = dropdown.querySelector('.menu');
  const options = menu.querySelectorAll('li'); // Use 'li' for options since 'options' class was not provided
  const selected = select.querySelector('.selected'); // Use select to select the .selected element

  select.addEventListener('click', () => {
    select.classList.toggle('select-clicked');
    caret.classList.toggle('caret-rotate');
    menu.classList.toggle('menu-open');
  });

  options.forEach(option => {
    option.addEventListener('click', () => {
      selected.innerText = option.innerText;
      select.classList.remove('select-clicked');
      caret.classList.remove('caret-rotate');
      menu.classList.remove('menu-open');
      options.forEach(option => {
        option.classList.remove('active');
      });
      option.classList.add('active');
    });
  });
});
