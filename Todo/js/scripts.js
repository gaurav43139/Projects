const inputBox=document.getElementById("input-box")
const listContainer=document.getElementById("list-container")
function addTask(){
    if (inputBox.value===''){
        alert("You must write something");
    }
    else{
        let li=document.createElement("li"); /*Create a new <li> element.*/ 
        li.innerHTML=inputBox.value;/*Set the content of this <li> element to whatever the user has typed in the input field.*/
        listContainer.appendChild(li); /*Add this new <li> element to the end of the list container. */
        let span=document.createElement("span"); /*Create a new <span> element with a multiplication sign as its content. and span is selected as it is inline */
        span.innerHTML="\u00d7"; /*This Unicode character represents the multiplication sign (×). */
        li.appendChild(span);  /*This method adds the new <span> element as a child of the <li> element, making it a part of the list item. */

    }
    inputBox.value="";
    saveData(); /* we are saving the data after adding it */
}

listContainer.addEventListener("click",function(e){ /*Whenever we click in container */
    if(e.target.tagName==="LI"){ /* if the clicked container part is li */
        e.target.classList.toggle("checked"); /* 1.e.target refers to the element that triggered the event. For example, if a click event occurs on a list item (<li>), e.target would be that specific list item.2. classList is a property that returns a live DOMTokenList collection of the class attributes of the element. It provides methods to add, remove, and toggle CSS classes.3. The toggle method of classList toggles a specified class on the element. If the class is present, it removes it; if the class is not present, it adds it. */
        saveData(); /* we are saving the data after making changes to  it */
    }
    else if (e.target.tagName==="SPAN"){
        e.target.parentElement.remove(); /*1. parentElement is a property that returns the parent node of the specified element. In this context, it refers to the parent of the e.target element, which would be the list item (<li>) containing the button.2. remove() is a method that removes the specified element from the DOM. When called on e.target.parentElement, it removes the parent element of the target (in this case, the entire list item). */
        saveData(); /* we are saving the data after making changes to  it */
    }
},false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML); /* this saves the data and we can access the localstorage data into variable named data */

}

function showTask(){
    listContainer.innerHTML=localStorage.getItem("data"); /* here we are changing the value of list container with the already saved data with the help of variable named data */
}

showTask();