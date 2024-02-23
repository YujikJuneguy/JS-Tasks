// Task-01

// let My = {
//     Name: 'Elchin',
//     Gender: 'Male',
//     DOB: '18 June 1987'
// }
// console.log (My.DOB);
// _____________________________________________________________________________________________________

// Task-02
// const user = {
//     Name: 'Elchin',
//     Gender: 'Male',
//     DOB: '18 June 1987'
// }
// user.age = '36'
// delete user.DOB
// console.log(user);
// _____________________________________________________________________________________________________

// Task-03
// let user = {
//     age: 30,
//     retirementAge: 65,
//     setAge: function(newAge) {
//         this.age = newAge;
//     },
//     getYearsBeforeRetirement: function() {
//         let yearsLeft = this.retirementAge - this.age;
//         return yearsLeft > 0 ? yearsLeft : 0;
//      }
// };

// console.log("İstifadəçinin yaşi: " + user.age);
// let yearsLeft = user.getYearsBeforeRetirement();
// console.log("Pensiyaya qədər qalan illərin sayi: " + yearsLeft);

// __________________________________________________________________________________________________________
// Task-04
// Kalkulyator obyekti yaradın.
// Əsas riyazi hesablamaları yerinə yetirən və nəticəni yaddaşda saxlaya bilən kalkulyator obyekti yaradın.
//   - Obyekt yaradın və toplama, çıxma, vurma, bölmə üçün metodlar əlavə edin.

// calculator = {
//     plus: '+',
//     minus: '-',
//     devide: '/',
//     times: '*',
//     equals: '='
// }



// ObJECT PART 2

// task-1
// Car constructor fonksiyonunu tanımla

// function Car  ($brand, $model, $year, _engine ) {
//     this.brand = $brand;
//     this.model = $model;
//     this.year = $year;
//     this.engine = _engine;
// }

// const Honda = new Car ('honda', 'civic','2012','1800')
// const Chevy = new Car ('Cevrolet', 'Malibu','2016','2000')
// console.log(Honda);
// console.log(Chevy);
// ____________________________________________________________________________________________________________
// // task - 2
// const User1 = {
//     id: 1,
//     name: "Leanne Graham",
//     username: "Bret",
//     email: "Sincere@april.biz",
//     address: {
//         street: "Kulas Light",
//         suite: "Apt. 556",
//         city: "Gwenborough",
//         zipcode: "92998-3874",
//     }
//     }
//     const User2 = User1
//     User2.username = "Pitt"


// console.log("User1:", User1);
// console.log("User2:", User2);
// ________________________________________________________________________________________________________
    //  task - 3
// const User1 = {
//     id: 1,
//     name: "Leanne Graham",
//     username: "Bret",
//     email: "Sincere@april.biz",
//     address: {
//         street: "Kulas Light",
//         suite: "Apt. 556",
//         city: "Gwenborough",
//         zipcode: "92998-3874",
//     }
//     }
//     const User2 = Object.assign({},User1)

//     console.log("User1:", User1);
//     console.log("User2:", User2);
// ____________________________________________________________________________________________________________

// task -4


// Spread Operator (...):
// Spread operatoru, bir sıra dəyərləri ayrı ayrı elementlərə bölərək obyekt və ya digər strukturları əhatə edir.
// Əsasən funksiyalara argumentlərin ötürülməsində, və ya obyekt yaratmada,  birləşdirilməsində istifadə olunur.
// Spread operatoru array və ya obyekti tek tek elementlərə ayırmağa imkan verir.
 
// Misal _________________________________:

// const numbers = [1, 2, 3];
// console.log(...numbers); 


// const numbers1 = [1, 2, 3];
// const numbers2 = [4, 5, 6];
// const mergedNumbers = [...numbers1, ...numbers2];
// console.log(mergedNumbers); 


// Rest Operator (...)
// Rest operatoru funksiyaların parametrlərində istifadə olunur və qalan argumentləri bir yerdə yığır.
// Funksiyaların parametrlərinin sonunda istifadə olunur və qalan dəyərləri bir yerdə toplayır.
// Rest operatoru funksiyaların müxtəlif  parametrlərlə işləməsinə imkan verir.

// MIsal   ___________________________________:

// function sum(...numbers) {
//     return numbers.reduce((total, num) => total + num, 0);
// }

// console.log(sum(1, 2, 3)); 
// console.log(sum(1, 2, 3, 4, 5)); 
// ____________________________________________________________________________________________________________________


// function PropertyTaker( _obj, _propertyname ) {
//     this.continent =_obj;
//     this.contry = _propertyname
// }

// const Baku = new PropertyTaker('Eurasia', 'Azerbaijan');
// const Moscow = new PropertyTaker('Europe', 'Russia');


// console.log(Baku);
// console.log(Moscow);


// _________________________________________________________________________________________________________________
        //    Task -6
// Stack:

// Stack, proqramın daxilində funksiyaların, dəyişənlərin və digər məlumatların qeyd edildiyi bir verilən strukturudur.
// Funksiyalar çağrıldıqda, məlumatlar stack-dən istifadə olunur.
// Stack, "last in, first out" (LIFO) prinsipi ilə işləyir. Yəni, ən son daxil edilən məlumat ən birinci olaraq çıxarılır.
// Funksiyaların daxilində dəyişənlər və lokal məlumatlar da stack-də saxlanılır.
// Heap :

// Heap, proqramın daxilində dinamik olaraq yaradılan məlumatların saxlandığı böyük bir məmorya hissəsidir.
// Heap, məlumatların istifadəsi və işlənməsi üçün ayrılan yerdir.
// Daxili qeyri-statik obyektlər və məlumatlar (məsələn, obyekt və massivlər) heap-də yerləşir.
// Heap, proqram tərəfindən ayrılır və yığım hər hansı bir sıra ilə işləmir. Obyektlər və məlumatlar, lazımi olaraq alınaraq və azaldılanda heap-də dəyişir.

// _____________________________________________________________________________________

// Taks -7
// 7. existsAndTruthy() adinda funksiya yaradin. 2 ədəd argument alır: obyekt(obj) ve string (propertyName). Eger hemin obyektden o adda property varsa ve truthy-dirse, true qaytarsin eks halda false qaytarsin. Mes:
// existsAndTruthy({a:1,b:2,c:3},'b') // true

// existsAndTruthy({x:'a',y:null,z:'c'},'y') // false (obyektde 'y' var amma falsy-di ona gore false)
// existsAndTruthy({x:'a',b:'b',z:undefined},'z') // false (obyektde 'z' yoxdu ona gore false)