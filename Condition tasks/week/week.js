//  let day = +prompt('what day is it?');
//  if(day === 1) {
//     document.write ('monday');
//  }else if (day === 2) {
//     document.write ('Tuesday');
//  }else if (day === 3) {
//     document.write ('Wednesday');
//  }else if (day === 4) {
//     document.write ('Thursday');
//  }else if (day === 5) {
//     document.write ('Friday');
//  }else if (day === 6) {
//     document.write ('Saturday');
//  }else if (day === 7) {
//     document.write ('Sunday');
//  }
// else {
//     document.write('Please select the day...')
// }

// switch mode

// switch(day){
//     case 1:
//         document.write('Its MONDAY')
//         break;
//     case 2:
//         document.write('Its Tuesday')
//         break;
//     case 3:
//         document.write('Its Wednesday')
//         break;
//     case 4:
//         document.write('Its Thursday')
//         break;
//     case 5:
//         document.write('Its Friday')
//         break;
//     case 6:
//         document.write('Its Saturday')
//         break;
//     case 7:
//         document.write('Its Sunday')
//         break;
//     default:
//         document.write (' Please select the day...' ) ;
// }

let name = "Dan";
alert(`hello ${name + 1}`); // ?
alert(`hello ${"name"}`); // ?
alert("hello ${name}"); // ?
alert('hello ${"name"}'); // ?
// let x;
// alert(typeof null;

"" + 1 + 0;
// "" - 1 + 0
// true + false
// 6 / "3"
// "2" * "3"
// 4 + 5 + "px"
// "$" + 4 + 5
// '4' - 2
// "4px" - 2
// 7 / 0
// '-9 ' + 5 "
// -9 " - 5
// null + 1
// undefined + 1

/*
1. How many data types are there in Javascript?   
2. Name all JavaScript basic types
3. What type shall we use to store a text?
4. What type do we use for calculations?
5. What is the difference between undefined and null?
6. How can we cast one type to another?
7. How can we check which data type does variable store?
*/
let x = 5;
let y;
let z = null;
let str = "Hello, world!";
let obj = { name: "John", age: 30 };

console.log(typeof x); // выведет "number"
console.log(typeof y); // выведет "undefined"
console.log(typeof z); // выведет "object" (хотя это специфическая особенность JavaScript)
console.log(typeof str); // выведет "string"
console.log(typeof obj); // выведет "object"
