// Task-02
// function eded (eded1, eded2, eded3) {
//     let enBoyuk = eded1
//     if (eded2 > enBoyuk) {
//         enBoyuk = eded2
//     }
//     if (eded3 > enBoyuk) {
//         enBoyuk = eded3
//     }
//     console.log(enBoyuk);
// }

// eded (20,76,23);
// eded (245,76,333);
// eded (85,65,1);
// ________________________________________________________________________________________________________

// Task-03
// function rublcem() {
//     let rubl = +prompt("Type your RUB balance:");
//     let USD = +prompt("Type your USD balance:");
//     let currency = USD * 75;
//     let sum = currency + rubl

//     alert("Сумма: " + sum );
// }
// rublcem();
// ________________________________________________________________________________________________________

// Task-04
// burada biraz çalışsaq mathrandomda eləmək olar zənnimcə, zsadecə mən eləmədim. Çünkiməncə tapşırıq o deyil))))

// function enKicikeded (a,b) {
//    let enKicik = a

//    if (b > enKicik) {
//        enKicik = b
//    }
//    document.write (enKicik)
// }
// enKicikeded (14, 78)
// _______________________________________________________________________________________________________-

// Task-05

// function calculator(a, b, c) {
//     let equal;
//     switch (c) {
//       case "+":
//         equal = a + b;
//         break;
//       case "-":
//         equal = a - b;
//         break;
//       case "*":
//         equal = a * b;
//         break;
//       case "/":
//         equal = a / b;
//         break;
//       default:
//         equal = 'error';
//     }
//     alert("Cavab: " + equal);
// }
// let a = + prompt("1st value");
// let c =   prompt("operator:");
// let b = + prompt("second value:");

// calculator(a,b,c);
// ______________________________________________________________________________________________________

// Task-06
// function ticket(digits) {
//   let result = "";
//   let firstThreeDigits = 0;
//   let secondThreeDigits = 0;
//   for (let i = 0; i < 3; i++) {
//     firstThreeDigits += digits[i];
//   }
//   for (let i = 3; i < 6; i++) {
//     secondThreeDigits += digits[i];
//   }
//   if (firstThreeDigits === secondThreeDigits) {
//     result = "true";
//   } else {
//     result = "false";
//   }

//   document.write(result);
// }
// let firstThreeDigits = +prompt("first three digits");
// let secondThreeDigits = +prompt("second three digits");

// ticket(digits);
// __________________________________________________________________________________________________

// Task-07
// function isEven(number) {
//     if (number % 2 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(isEven(4));
// console.log(isEven(7));
// ___________________________________________________________________________________________________
//  Task-8
// function numCounter () {
//     let word = prompt('type text');
//     document.write(word.length);
// }
// numCounter ()
// _____________________________________________________________________________________________________
// Task-09
// function factorial(n) {
//     if (n === 0 || n === 1) {
//         return 1;
//     } else {
//         let result = 1;
//         for (let i = 2; i <= n; i++) {
//             result *= i;
//         }
//         return result;
//     }
// }

// console.log(factorial(5));
// console.log(factorial(0));
// console.log(factorial(1));
// console.log(factorial(3));
// _____________________________________________________________________________________________________

// Task-10
// function checkNumber(a) {
//     if (a > 0) {
//         console.log(a + " müsbət rəqəmdir.");
//     } else if (a < 0) {
//         console.log(a + " mənfi rəqəmdir.");
//     } else {
//         console.log(a + " sifirdir.");
//     }
// }
// let Numb = +prompt("Bir sayi daxil edin:");
// checkNumber(Numb);
// ______________________________________________________________________________________________________

// Task-11
// İstifadəçidən bir ədəd daxil etməsini tələb edən və rəqəmin mükəmməl və ya mükəmməl olmadığını bildirən bir proqram yazın. (if-else ilə)
// _______________________________________________________________________________________________________
// Task-12
// function showaDays() {
//     let month = prompt('type the month');

//     switch (month) {
//         case 'January':
//         case 'March':
//         case 'May':
//         case 'Iyul':
//         case 'Avqust':
//         case 'October':
//             document.write('there is 31 days')
//             break;
//         case 'April':
//         case 'June':
//         case 'September':
//         case 'November':
//             document.write('there is 30 days')
//             break;
//         case 'February':
//             document.write('there is 28 days, sometimes 29')
//             break;
//         default:
//             document.write('Please type the Month')
//             break;
//     }
// }

// showaDays()
// ________________________________________________________________________________________________________
// Task-18
function IsInteger(number) {
    let numb = +prompt('type number');
    
}