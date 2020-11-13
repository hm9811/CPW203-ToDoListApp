function main() {
    var li = document.createElement("li");
    var inputValue = getInput("title").value;
    var inputDate = new Date(getInput("due-date").value);
    var addTitle = document.createTextNode(inputValue);
    var dateToString = inputDate.toString();
    var addDate = document.createTextNode(dateToString);
    var breakline = document.createElement('br');
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
    var txt = document.createTextNode("\u00D7");
    var i;
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        };
    }
}
function getInput(id) {
    return document.getElementById(id);
}
var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    var target = event.target;
    if (target.tagName === 'LI') {
        target.classList.toggle('checked');
    }
}, false);
