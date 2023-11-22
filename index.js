/* Algorithmn

1. Press "Add", 
2. store Todo-name and Duedate into an array list
3. render the array list

4.each element of array is object with 2 properties (todo and duedate)

*/

const todoObjList = JSON.parse(localStorage.getItem("To-Do-Name")) || [];

renderList(todoObjList);

function add_render_List(){
  const todoName = document.querySelector(".js-todo-name");
  const dueDate = document.querySelector(".js-duedate");

  todoObjList.push({
    name: todoName.value,
    duedate: dueDate.value
  });
  
  todoName.value ='';

  localStorage.setItem("To-Do-Name", JSON.stringify(todoObjList));

  renderList(todoObjList);
}

function renderList(objList){

  const todoListHTML = document.querySelector(".todoList-grid");
  let accumulateHTML = '';

  //array.forEach(pass "function" agrument with 2 params "array element" and " El-index")
  objList.forEach((todoObj, index) => {
    const {name, duedate} = todoObj;
    const html =
    `
      <p>${name}</p>
      <p>${duedate}</p>
      <button class="js-detele-btn detele-btn">
        Detele
      </button>
    `;
    accumulateHTML += html;
  });

  todoListHTML.innerHTML = accumulateHTML; 

  document.querySelectorAll(".js-detele-btn")
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener("click", () => {
        deleteItem(index);
      });
    });
}


function deleteItem(index){
  todoObjList.splice(index, 1);
  renderList(todoObjList);

  //update storage by "Restore/overwrite"
  todoObjList.length === 0 ? localStorage.clear() : localStorage.setItem("To-Do-Name", JSON.stringify(todoObjList));
}


//Run & Call
document.querySelector(".add-btn").addEventListener("click", () => {
  add_render_List();
})