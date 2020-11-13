


// Create a new list item when clicking on the "Add" button
function main() {
  let li = document.createElement("li");
  let inputValue = getInput("title").value;
  let inputDate = new Date(getInput("due-date").value);
  let addTitle = document.createTextNode(inputValue);
  let dateToString = inputDate.toString();
  let addDate = document.createTextNode(dateToString);
  let breakline = document.createElement('br');
  li.appendChild(addTitle);
  li.appendChild(breakline);
  li.appendChild(addDate);
  if (inputValue === '') {
    alert("You must write something!");
  } 
  else {
    document.getElementById("list").appendChild(li);
  }
  getInput("title").value = "";

  let txt = document.createTextNode("\u00D7");

  let i;
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

function getInput(id):HTMLInputElement{
    return <HTMLInputElement>document.getElementById(id);
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    const target = event.target as HTMLElement;
    if (target.tagName === 'LI') {
    target.classList.toggle('checked');
  }
}, false);