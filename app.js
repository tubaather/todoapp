


var list = document.getElementById("list");

function addTodo(){
    var todo_item = document.getElementById("todo-item");
    
//created li tag with text node
    var li = document.createElement("li");
    li.setAttribute("id","text");
    var liText = document.createTextNode(todo_item.value);
    li.appendChild(liText);
    list.appendChild(li);
     todo_item.value="";
    

//create del button for list
    var delBtn = document.createElement("button");
    var delText = document.createTextNode("DELETE");
    delBtn.setAttribute("id","btn");
    delBtn.setAttribute("onclick","deleteItem(this)");
    delBtn.appendChild(delText);

    li.appendChild(delBtn);
     

 //create edit button
     var editBtn= document.createElement("button");
     var editText = document.createTextNode("EDIT");
     editBtn.setAttribute("id","btn");
     editBtn.appendChild(editText);
     editBtn.setAttribute("onclick","editItem(this)");
     li.appendChild(editBtn);

    
    

}
function deleteItem(e){
   e.parentNode.remove();

}
function deleteAll(){
	list.innerHTML = "";
}
function editItem(e){
var val =e.parentNode.firstChild.nodeValue;
	 var editValue = prompt("Enter edit value: ",val);
    e.parentNode.firstChild.nodeValue =editValue;
}

