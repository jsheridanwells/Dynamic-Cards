//select dom elements
let frame = document.getElementById('frame');
let input = document.getElementById('text-input');
let addBtn = document.getElementById('add-button');

//set counter to number cards
let count = 0;

function makeCard() {
  count++;
  let text = input.value;
  let newCard = document.createElement('div');
  let delBtn = document.createElement('button');

  newCard.className = 'card';
  delBtn.className = 'delete-button';
  delBtn.innerText = 'Delete';

  newCard.innerHTML = `<h2 class="card-title">Card ${count}</h2><p>${text}</p>`;
  newCard.appendChild(delBtn);
  frame.appendChild(newCard);
}

addBtn.addEventListener('click', makeCard);