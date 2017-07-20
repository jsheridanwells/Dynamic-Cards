//select dom elements
let frame = document.getElementById('frame');
let input = document.getElementById('text-input');
let addBtn = document.getElementById('add-button');

//set counter to number cards
let count = 0;

function makeCard() {
  count++;  //increase counter
  let text = input.value;  //get text from textbox
  let newCard = document.createElement('div');  //create new card
  let delBtn = document.createElement('button');  //create delete button

  newCard.className = 'card';
  delBtn.className = 'delete-button';
  delBtn.innerText = 'Delete';

  newCard.innerHTML = `<h2 class="card-title">Card ${count}</h2><p>${text}</p>`;  //insert content
  newCard.appendChild(delBtn);  //add delete button to card
  frame.appendChild(newCard);  //add card to frame
  input.value = '';  //clear text in textbox

  delBtn.addEventListener('click', deleteCard);

  function deleteCard() {
    frame.removeChild(newCard);  //remove last card from frame
  }
}

addBtn.addEventListener('click', makeCard);