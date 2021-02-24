// Delete box
var list = document.querySelector('#item-list ul');

list.addEventListener('click', function(e) {
  if (e.target.className == 'delete') {
    const d = e.target.parentElement;
    list.removeChild(d);
  }
});

//INTERACTING WITH FORMS(1)   / CREATE ELEMENTS(2) /styles and classes(3)
// 1
console.log(document.forms);
console.log(document.forms[1]);
console.log(document.forms['add-book']);

// add-books
const addform = document.forms['add-book'];

addform.addEventListener('submit', function(e) {
  e.preventDefault();

  const value = addform.querySelector('input[type="text"]').value;
  // console.log(value);

  //2
  // create elements
  const li = document.createElement('li');
  const bookname = document.createElement('span');
  const deletebtn = document.createElement('span');

  // add content
  deletebtn.textContent = 'delete';
  bookname.textContent = value;

  // append to dom
  li.appendChild(bookname);
  li.appendChild(deletebtn);
  list.appendChild(li);

  //3
  // add classes
  bookname.classList.add('name');
  deletebtn.classList.add('delete');
});

// CHECKBOX AND CHANGE EVENTS
// hide books
const hideBox = document.querySelector('#hide');
hideBox.addEventListener('change', function(e) {
  if (hideBox.checked) {
    list.style.display = 'none';
  } else {
    list.style.display = 'initial';
  }
});

// CUSTOM SEARCH FILTER
const searchbar = document.forms['search'].querySelector('input');

searchbar.addEventListener('keyup', function(e) {
  const term = e.target.value.toLowerCase();
  const books = list.getElementsByTagName('li');

  Array.from(books).forEach(function(book) {
    const title = book.firstElementChild.textContent;

    if (title.toLowerCase().indexOf(term) != -1) {
      book.style.display = 'block';
    } else {
      book.style.display = 'none';
    }
  });
});

const tabs = document.querySelector('.tabs');
const panels = document.querySelectorAll('.panel');
tabs.addEventListener('click', e => {
  if (e.target.tagName == 'LI') {
    const targetPanel = document.querySelector(e.target.dataset.target);
    Array.from(panels).forEach(panel => {
      if (panel == targetPanel) {
        panel.classList.add('active');
      } else {
        panel.classList.remove('active');
      }
    });
  }
});
