const Yeni = document.getElementById('Yeni')
const duyme = document.getElementById('duyme')
const tableBody = document.getElementById("tableBody")
let uniqueId = 0;

duyme.onclick = () => {
    const newTodo = Yeni.value;
    Yeni.value ='';
   
    const tr = document.createElement('tr');
    const tdId = document.createElement('td');
    const tdMuqavile = document.createElement('td');
    const tdTip = document.createElement('input');
    const tdStatus = document.createElement('td');
    const Xeyrduyme =document.createElement ('button')
    const Beliduyme =document.createElement ('button')

     if (newTodo !== '') {
        tr.classList.add ('gozle')
        tdId.innerText = newTodo; 
        tdMuqavile.innerText = newTodo;
        tdTip.innerText = ''
        tdId.innerText = ++uniqueId;
        Beliduyme.innerText = 'BELI'
        Xeyrduyme.innerText = 'XEYR'
        tdTip.setAttribute('type','input')
        tdStatus.append(Xeyrduyme,Beliduyme,tdTip)
        tr.append(tdId,tdMuqavile,tdTip,tdStatus)
        tableBody.append(tr)
    
        Beliduyme.onclick = () => {
            Xeyrduyme.remove();
        }
        Xeyrduyme.onclick = () => {
            Beliduyme.remove();
        }
     }
     else {
        alert('mwqavile elave et')
     }

}


let mode = 'light'
let button = 'Dark Mode'
const modeChanger = document.getElementById ('modeChanger')
document.body.className = mode
modeChanger.innerText = button;

modeChanger.addEventListener('click',() => {
    if (mode === 'dark') {
        mode = 'light'
        button = 'Dark mode'
    }
    else {
        mode = 'dark'
        button = 'Light mode'
    }
    document.body.className = mode
    modeChanger.innerText = button;
  

})

