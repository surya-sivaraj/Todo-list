function cli() {
    var input = document.getElementById("input")
    var list = document.getElementById("row");
    if (input.value.trim() === "") {
        alert("Please enter a task.");
        return; 
    }
    var ul = document.createElement("li");
    ul.setAttribute("class", "row");
    ul.innerHTML = input.value +"<button onclick='deleteItem(event)'>Delete</button>"
    list.appendChild(ul);
    document.getElementById("input").value="";
}

function deleteItem(event) {
    event.target.parentElement.remove()
}

   
