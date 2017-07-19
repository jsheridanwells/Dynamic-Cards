let input = document.getElementById('text-input');
let button = document.getElementById('button');

//function to...
function makeCard() {
  let text = input.value;  //get text
  let card = document.createElement('div');//create div
  card.id = 'delete'; //give div id:delete
  card.innerText = text;  //add text
  let del = document.createElement('button');//create delete button
  del.innerText = 'Delete Me';
  del.addEventListener('click', deleteMe);  //add event listener to delete button
  card.appendChild(del);//append delete button
  document.getElementById('outer').appendChild(card);//append div to div:create

	//function to
	function deleteMe() {
	  document.getElementById('outer').removeChild(card);
	}

}


button.addEventListener('click', makeCard);