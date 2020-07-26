var List=document.getElementById("list");
function add_item()
{
    //Create li tag with javascript
var item=document.getElementById("todo_item");
var li=document.createElement('li')
var litext=document.createTextNode(item.value)
li.appendChild(litext);

if(item.value=="")
{
alert("Please add entry!")
}
else
{
    List.appendChild(li);

}


// Create a delete button
var deleteButton=document.createElement('button')
var Deletetextbutton=document.createTextNode("DELETE")
deleteButton.setAttribute("class","Delete_button")
deleteButton.setAttribute("onclick","delete_item_button(this)")
deleteButton.appendChild(Deletetextbutton);


// Edit Butoon
var edit_button=document.createElement('button')
var edit_button_text=document.createTextNode("EDIT")
edit_button.setAttribute("class","Edit_button")
edit_button.setAttribute("onclick","edit_button_value(this)")
edit_button.appendChild(edit_button_text);
li.appendChild(deleteButton);
li.appendChild(edit_button);
item.value=""
//console.log(li);
}

function delete_item_button(parameter)
{
parameter.parentNode.remove();

}
function delete_all()
{
List.innerHTML=""

}
function edit_button_value(parameter)
{
    var val=parameter.parentNode.firstChild.nodeValue;
    var edit_value=prompt("Please enter a new value to add",val)
parameter.parentNode.firstChild.nodeValue=edit_value;
}