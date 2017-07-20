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

  newCard.innerHTML = `<h2 class="card-title">Card ${count}</h2>
    <form id="color-change">
    <input type="radio" id="red" name="color">
    <label for="red">Red</label>
    <input type="radio" id="blue" name="color">
    <label for="blue">Blue</label>
    </form>
    <p>${text}</p>`;  //insert content

  newCard.appendChild(delBtn);  //add delete button to card
  frame.appendChild(newCard);  //add card to frame
  input.value = '';  //clear text in textbox

  delBtn.addEventListener('click', deleteCard);

  function deleteCard() {
    frame.removeChild(newCard);  //remove last card from frame
  }

  newCard.addEventListener('click', changeColor);


  function changeColor() {
    let red = document.getElementById('red');
    let blue = document.getElementById('blue');

    if (red.checked === true) {
      this.classList.add('red');
    } else if (blue.checked === true) {
      this.classList.add('blue');
    }
  }
}

addBtn.addEventListener('click', makeCard);