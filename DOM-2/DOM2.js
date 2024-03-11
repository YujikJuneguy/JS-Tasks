const newTodoInput = document.getElementById('newTodoInput')
const addTodoBtn = document.getElementById('addTodoBtn')
const tableBody = document.getElementById("tableBody")
let uniqueId = 0;

addTodoBtn.onclick = () => {
    const newTodo = newTodoInput.value;
    console.log(newTodo);

    const tr = document.createElement('tr');
    const tdId = document.createElement('td');
    const tdTodo = document.createElement('td');
    const tdActions = document.createElement('td');
    const isDoneButton = document.createElement('button');
    const deleteButton = document.createElement('button');

    if (newTodo !== '') {
        tr.classList.add('undone')
        tdTodo.innerText = newTodo;
        tdId.innerText = ++uniqueId;
        deleteButton.innerText = '🗑️'
        deleteButton.dataset.id = tdId.innerText;
        isDoneButton.innerText = '✅'
        isDoneButton.dataset.done = false

    //     tdActions.append(deleteButton, isDoneButton)
    //     tr.append(tdId, tdTodo, tdActions)
    //     tableBody.append(tr)
    // }else {
    //     alert('Error')
    // }
    // newTodoInput.value = '';


    // deleteButton.onclick = () => {
    //     deleteButton.parentNode.parentNode.remove();
    // }

    // isDoneButton.onclick = () => {
    //     if (isDoneButton.dataset.done === 'false') {
    //         isDoneButton.dataset.done === 'true'
    //         isDoneButton.parentNode.parentNode.classList.add('done')
    //         isDoneButton.remove();
    //     }
    // }
    //deleteTodo

}




{/* <tr class="undone">
<td>1</td>
<td>Ev tapsiriqlarini isle</td>
<td>False</td>
<td>
    <button>🗑️</button>
    <input type="checkbox">
</td>
</tr> */}