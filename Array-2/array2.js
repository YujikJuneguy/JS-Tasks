// 1. İki array verilib. Bu iki array-i birləşdirin və təkrarlanan elementləri aradan qaldırın.

function ikiArray(array1, array2) {
    let birlesmisArray = array1.concat(array2);
    let sonuc = birlesmisArray.filter((item, index) => birlesmisArray.indexOf(item) === index);

    return sonuc;
}
let array1 = [1, 2, 3, 4];
let array2 = [3, 4, 5, 6];
let birlesmisVeTekrarlananlariKaldirilmis = ikiArray(array1, array2);

console.log(birlesmisVeTekrarlananlariKaldirilmis);
// _______________________________________________________________________________________________________
// 2. İki array verilib. Bu iki array-dən yalnızca ilk array-də olub, ikinci array-də isə olmayan elementləri tapın.
// _______________________________________________________________________________________________________
// 3. Tam ədədlər massivini qəbul edən, onu artan ardıcıllıqla sıralayan və sıralanmış massivi geri qaytaran sortArray() funksiyasını yazın.
// let array = [
//   1, 6, 34, 5, 1, -4, 54, 76, 23, 65, 3, 50, 45, 100, 2346, -52, 6545, 0, 45, 22,
// ];
// _______________________________________________________________________________________________________
// 4.Rəqəmlər massivini parametr kimi qəbul edən və əgər həmin massivdə mənfi ədədlər varsa onları massiv şəklində geri qaytaran, yoxdursa uyğun mesajı geri funksiya yazın.
// _______________________________________________________________________________________________________
// 5. Kebab-case formatında mətni parametr kimi qəbul edən və onu UPPER_CASE mətninə çevirən kebabToUpper() funksiyasını yazın.
// _______________________________________________________________________________________________________
// 6. Orijinal massivin elementlərindən ibarət yeni massiv yaradın.
// Rəqəmlər massivi verilmişdir. Aşağıdakı qaydalarla dəyişdirilən orijinal massivin elementlərindən ibarət yeni massiv yaradın:

// mənfi ədədlər müsbət olublar;
// müsbət ədədlər ikiqat artırılıb.
// Input:  [1, 5, -7, 3, -9, 4, -6, 2];
// Output: [2, 10, 7, 6, 9, 8, 6, 4]
// _______________________________________________________________________________________________________
// 7. Adlar massivi verilib. Bir funksiya yazın, hansı ki parametr olaraq massiv qəbul edir. Həmin massivdə "A" hərfi ilə başlayan elementlərdən ibarət yeni massiv yaradıb, elə bir dəyər tapılmasa uyğun mesajı geri qaytarmalıdır.
// let namesArray = [
//   "Alice",
//   "Bob",
//   "Catherine",
//   "David",
//   "Eva",
//   "Andrew",
//   "Frank",
//   "Anna",
//   "George",
//   "Alex",
// ];