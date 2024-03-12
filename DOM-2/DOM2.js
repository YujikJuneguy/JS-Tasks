const YeniElaveet = document.getElementById('YeniElaveet')
const duyme = document.getElementById('duyme')
const tableBody = document.getElementById("tableBody")
let nomre = 0;

duyme.onclick = () => {
    const newTodo = YeniElaveet.value;
    console.log(newTodo);

    const tr = document.createElement('tr');
    const tdMomre = document.createElement('td');
    const tdMuesse = document.createElement('td');
    const tdTip = document.createElement('td');
    const Topdan = document.createElement('button');
    const Kart = document.createElement('button');

    tdMomre.innerText =
    Topdan.İnnerText = 'TOPDAN'
    Kart.İnnerText = 'KART'
    tdTip.append(Topdan,Kart)
    tr.append(tdTip)
    tableBody.append(tr)

//     if (newTodo !== '') {
//         tr.classList.add('undone')
//         tdTodo.innerText = newTodo;
//         tdId.innerText = ++uniqueId;
//         deleteButton.innerText = '🗑️'
//         deleteButton.dataset.id = tdId.innerText;
//         isDoneButton.innerText = '✅'
//         isDoneButton.dataset.done = false

//         tdActions.append(deleteButton, isDoneButton)
//         tr.append(tdId, tdTodo, tdActions)
//         tableBody.append(tr)
//     }else {
//         alert('Error')
//     }
//     newTodoInput.value = '';


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