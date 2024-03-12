const YeniElaveet = document.getElementById('YeniElaveet')
const duyme = document.getElementById('duyme')
const tableBody = document.getElementById("tableBody")
let nomre = 0;

duyme.onclick = () => {
    const newTodo = YeniElaveet.value;
   
    const tr = document.createElement('tr');
    const tdNomre = document.createElement('td');
    const tdname = document.createElement('td');
    const tdTip = document.createElement('td');
    const TopdanBtn = document.createElement('button');
    const KartBtn = document.createElement('button');

    tdNomre.innerText =  ++nomre
    TopdanBtn.İnnerText = 'TOPDAN'
    KartBtn.İnnerText = 'KART'
    tdTip.append(Topdan,Kart) 
    tr.append(tdNomre.tdTip)
    tableBody.append(tr)

   

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

