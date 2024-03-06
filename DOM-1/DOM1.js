// *************************** Task 1 **********************************

// const button = document.getElementById('btn')
// const digit = document.getElementById('numbInput')
// const digit2 = document.getElementById('numbInput')
// const count = document.getElementById('operatorInput')

// button.onclick = () => {
//     const x = digit.value;
//     const y = digit2.value;
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
// document.write(result)
// }

// neticede cavab cixir , amma sehv))))

// ***************************************** Task 2 ********************************************

// const buttons = document.querySelectorAll(".circle")

// buttons.forEach(button => {
//     button.onclick = () => {
//          document.body.style.background = button.id
//     }
// })

// ****************************************** Task 3 ********************************************
// ekranda 5 eded ag rengde duyme olacaq.Yuxarida ise bir input
// inputun icerisine reng yazacayiq,hansi buttona click etsek onun arxa fonu inputun icerisindeki rengle evez edilecek.

const button = document.querySelectorAll(".button");
const color = document.getElementById('color');
const show = document.getElementById('show')

show.onclick = () => {
  document.body.button.background = color.value;
  color.value = "";
  color.focus();
};
