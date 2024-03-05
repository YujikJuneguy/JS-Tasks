// calculator () 
// const digit = +document.getElementById('numbInput')
// const digit2 = +document.getElementById('numbInput')
// const count = document.getElementById('operatorInput')


// button.onclick = () => {
//      let result;   
//      switch(operator) {
//         case '+':
//             result = digit + digit2;
//             break;
//         case '-':
//             result = digit - digit2;
//             break;
//         case '*':
//             result = digit * digit2;
//             break;
//         case '/':
//             result = digit / digit2;
//             break;
//         default:
//             result = "Yanlış operatör!";
       
// }
// }
// document.body.getElementById('result') = result

// _____________________________________________________________________________________
// TAsk 2


const buttons = document.querySelectorAll(".circle")

buttons.forEach(button => {
    button.onclick = () => {
         document.body.style.background = button.id
    }
})