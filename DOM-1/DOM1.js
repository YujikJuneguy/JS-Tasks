// *************************** Task 1 **********************************

// const button = document.getElementById('btn')
// const digit = document.getElementById('num1Input')
// const digit2 = document.getElementById('num2Input')
// const count = document.getElementById('operatorInput')

// button.onclick = () => {
//     const x = +digit.value;
//     const y = +digit2.value;
//     const operator = operatorInput.value;
//     let result;
//      switch(operator) {
//         case '+':
//             result = x + y;
//             break;
//         case '-':
//             result = x - y;
//             break;
//         case '*':
//             result = x * y;
//             break;
//         case '/':
//             result = x / y;
//             break;
//         default:
//             result = "do something!!!";

// }
// SUM.innerText += result
// }

// ***************************************** Task 2 ********************************************

const buttons = document.querySelectorAll(".circle")
const colorname = document.querySelector(".colorname")

buttons.forEach(button => {
    const colorname = item.className.split(" ")[1]
    button.onclick = () => {
         document.body.style.background = button.id
         colorname.InnerText = 'color is:' + colorname
    }
})

/*
istədim həm rəng dəyişsib , həm rəngin adı yazılsın, nəsə alınmır
*/ 

// ****************************************** Task 3 ********************************************

// const button = document.querySelectorAll(".button");
// const colorInput = document.getElementById('colorİnput');


// button.forEach(button => {
//   button.onclick = () => { 
//     button.style.background = colorInput.value
//   }
// })

