// **************************************************************Digital watch

// const hour = document.getElementById ('hour')
// const minutes = document.getElementById ('minutes')
// const seconds = document.getElementById ('seconds')

// setInterval(() => {
//    const date = new Date();
//    const saat = date.getHours();
//    const deqiqe = date.getMinutes();
//    const saniye = date.getSeconds();

//    hour.innerText = saat;
// //    minutes.innerText = deqiqe;
// //    seconds.innerText = saniye;

//    if (deqiqe < 10) {
//     minutes.innerText = "0" + deqiqe;
//    } else {
//     minutes.innerText = deqiqe;
//    }
//    if (saniye < 10) {
//     seconds.innerText = "0" + saniye;
//    } else {
//       seconds.innerText = saniye;
//    }
// }, 1000);

// ******************************************************************Big Baaada boom 

// const colors = ['red','green','yellow','blue']
// const buttons = document.querySelectorAll('.btn')
// const randomIndex =Math.ceil(Math.random() * colors.length - 1)
// const theBombisdeactivated =colors[randomIndex]
// buttons.forEach(btn => {
//     btn.addEventListener('click', (e) => {
//         if (e.target.dataset.color === theBombisdeactivated) {
//             clearTimeout(BIGBAADABOOM)
//             document.write('you are safe')
//         }
//     })
// });

// const BIGBAADABOOM = setTimeout(() => {
//     const img = document.createElement('img')
//     img.className = 'BBB'
//     img.src = "https://media.tenor.com/faW__Fp34z8AAAAe/fifth-element-milla-jovovich.png"
//     document.body.append(img)
// }, 5000);

// ********************************************************************ToDO LIST update*********************************
const Yeni = document.getElementById('Yeni')
const duyme = document.getElementById('duyme')
const tableBody = document.getElementById("tableBody")
let uniqueId = 0;

duyme.onclick = () => {
    const newTodo = Yeni.value;
    Yeni.value ='';
    Yeni.focus();    
   
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
// mode setting ________________________________
localStorage.getItem('mode') || 'light'
let mode = 'light'
let button = 'Dark Mode'
const modeChanger = document.getElementById ('modeChanger')
document.body.className = mode
modeChanger.innerText = button;

modeChanger.addEventListener('click',() => {
    if (mode === 'dark') {
        localStorage.setItem('mode','light')
        mode = localStorage.getItem('mode')
        button = 'Dark mode'
    }
    else {
        button = 'Light mode'
        localStorage.setItem('mode','dark')
        mode = localStorage.getItem('mode')
    }
    document.body.className = mode
    modeChanger.innerText = button;
})
