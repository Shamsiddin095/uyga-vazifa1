// string medhodlari

//endi medhodlar bilan tanishamiz

/*

1-  substring  // //slice //substr// 3tasi bitta
substring() metodi:
.substring(start, end) metodi orqali siz stringning boshlang'ich va 
tugash indekslari orasidagi qismini olishingiz mumkin. 
*/

//misol keltiramiz

// let originalString = "kanikuldars";
// let yangistring = originalString.substring(0, 7); // 1 dan 8 gacha bo'lgan qism
// console.log(yangistring);
// console.log(yangistring.length);

// // 2-  substr.substr(start, length) metodi
// orqali boshlang'ich indeks va uzunlik
// orqali substringni olishingiz mumkin.

// let originalString = "kanikuldars";
// let yangistring = originalString.substr(0, 7); // 3 dan boshlab, 7 belgi uzunligida
// console.log(yangistring);
// console.log(yangistring.length);

// 3-  slice
// .slice(start, end) metodi orqali ham siz boshlang'ich
// va tugash indekslari orasidagi qismini olishingiz mumkin.
// .substring() bilan o'xshash ravishda ishlaydi.

// let originalString = "kanikuldars";
// let yangistring = originalString.slice(0, 7); // 3 dan 10 gacha bo'lgan qism
// console.log(yangistring);
// console.log(yangistring.length);

// 4-  replace
// JavaScript'da replace va replaceAll metodlari,
// bir stringda belgilangan qismi boshqa bir string bilan almashtirish uchun ishlatiladi
// replace() metodi:
// .replace(search, replacement) metodi orqali birinchi topilgan substringni
// ikkinchi substring bilan almashtirishingiz mumkin. Agar search ni ikki marta
// ko'rsatsangiz, faqat birinchi topilgan substringni almashtiradi.

// let originalString = "kanikul dars kanikul";
// let yangistring = originalString.replace("kanikul", "dars"); //
// console.log(yangistring);
// console.log(yangistring.length);

// 5-  replaceAll
// replaceAll() metodi:
// .replaceAll(search, replacement) metodi orqali barcha topilgan substringlarni
//  birorta substring bilan almashtirishingiz mumkin. Bu metoddan farq,
//   .replace() faqat birinchi topilgan substringni almashtiradi.

// let originalString = "kanikul dars kanikul";
// let yangistring = originalString.replaceAll("kanikul", "dars"); // barcha kanikul so'zlarini almashtiradi
// console.log(yangistring);
// console.log(yangistring.length);

// 6-  toUpperCase

// JavaScript'da toUpperCase metodi,
//  stringning barcha harflarini katta (uppercase) harflarga
// o'tkazib berish uchun ishlatiladi. Bu metod, barcha harflarni katta qiladi,

// let originalString = "KaniKul dArs kanIkul";
// let yangistring = originalString.toLocaleUpperCase(); // barcha harflarni katta harfda chop etadi
// console.log(yangistring);
// console.log(yangistring.length);

// 7-  toLowerCase

// JavaScript tilida toUpperCase metodi,
// bir stringning barcha harflarini katta (uppercase)
// harflarga o'tkazish uchun ishlatiladi. Bu metod,
//  barcha harflarni katta qiladi, masalan,

// let originalString = "KaniKul dArs KanIkul";
// let yangistring = originalString.toLocaleLowerCase(); // barcha harflarni kichik harfda chop etadi
// console.log(yangistring);
// console.log(yangistring.length);

// 8-  concat

// JavaScript tilida concat metodi,
// bir yoki bir nechta stringlarni birlashtirish uchun ishlatiladi.
//  Bu metod, birinchi stringning ohiriga ikkinchi stringni qo'shadi va yangi bir string qaytaradi.

// let originalString1 = "birinchi quti ";
// let yangistring1 = originalString1.toLocaleLowerCase(); // barcha harflarni kichik harfda chop etadi
// console.log(yangistring1);

// let originalString2 = "ikkinchi quti ";
// let yangistring2 = originalString2.toLocaleLowerCase(); // barcha harflarni kichik harfda chop etadi
// console.log(yangistring2);

// const kattaquti = yangistring1.concat(yangistring2);
// console.log(kattaquti);

// 9-  trim
// JavaScript tilida trim metodi, bir stringning bosh va ohiridagi
//  bo'shliqlarni olib tashlash uchun ishlatiladi. Bu metod,
//  orasidagi bo'shliqlarni o'chirib tashlaydi, lekin stringning
//   o'rtasidagi bo'shliqlarni o'chirmaydi.

// const mashina = "   malibu nexia tiko    ";

// const oraliq = mashina.trim();
// console.log(oraliq);

// 10- trimEnd
// trimEnd metodini esa ohiridagi bo'shliqlarni olib tashlash uchun ishlatiladi.

// const text = "    salom dunyo               ";

// const oxiridanolibtashla = text.trimEnd();
// console.log(oxiridanolibtashla);

// 11- trimStart
// trimSart metodini esa boshidagi bo'shliqlarni olib tashlash uchun ishlatiladi.

// const text = "    salom dunyo               ";

// const boshidanolibtashla = text.trimStart();
// console.log(boshidanolibtashla);

// 12- padStart
// padStart metodi, JavaScript tilidagi string obyektining bir metodi bo'lib,
//  bir stringni belgilangan uzunlikka yettirish uchun boshlang'ich qismni belgilangan
//  belgi bilan to'ldiradi. Agar boshlang'ich string ko'proq belgilar qo'shishni talab qilsa,
//   stringni boshdan boshlab to'ldirish uchun ishlatiladi.

// let originalString = "JavaScript";
// let paddedString = originalString.padStart(15, "*");
// // Bu misolda, "JavaScript" stringi "*" belgisini boshidan boshlab 15 ta belgiga yettiriladi
// //  va natija konsolga chiqariladi.

// console.log(paddedString); // NATIJA: *******JavaScript

// 14- split

// JavaScript tilida split metodi, stringni belgilangan
// ayiruvchi (delimiter) orqali bo'lgan qismlarga bo'lib bo'ladi
//  va ularni bir massivga o'zlashtiradi. Bu usul bilan bir stringni
//  bo'lmagan qismalari boyicha barcha ayiruvchi orqali tanlash mumkin.

// let sentence = "JavaScript tilida split metodi ishlatish";
// let words = sentence.split(" ");

// console.log(words.length);
// // NATIJA: [ 'JavaScript', 'tilida', 'split', 'metodi', 'ishlatish' ]

// uyga vazifa

// O'zbekcha ismlar manbasi
let ismlarManbasi = [
  "Shamsiddin",
  "Navruz",
  "Shamshod",
  "Abdumalik",
  "Jasur",
  "Jahongir",
  "Sanjar",
  "Sharofiddin",
  "botir",
  "ilhom",
  "akrom",
  "malik",
  "farruh",
  "farrux",
  "Javhar",
  "umid",
  "akmal",
  "nizom",
  "alisher",
  "ali",
  "ketmonber",
  "said",
  "g'anisher",
  "abdusalom",
  "abdulloh",
  "ikrom",
  "juma",
  "toshmurod",
  "eshmurod",
  "odil",
  "ibodulla",
  "akrom",
  "salim",
  "bahtiyor",
  "nozim",
  "kozim",
  "toshqin",
  "bobur",
  "farhod",
  "komil",
  "o'ktam",
  "qalandar",
  "zokir",
  "dilshod",
  "sherbek",
  "sherzod",
  "sherdil",
  "doniyor",
  "doston",
  "muhammadjon",
  "alibek",
  "elbek",
  "azizbek",
  "quvonch",
  "qayum",
  "javohir",
  "javlon",
  "asad",
  "asadbek",
  "donyor",
];

function tahlil() {
  const matn = document.getElementById("matnInput").value;

  // So'z, harf, unli harf, undosh harf, 'a' harfi, 'b' harfi, katta 'A' harfi, katta 'B' harfi san'ati
  const soz = matn.split(/\s+/).filter(Boolean).length;
  const harf = matn.replace(/[^a-zA-ZğüşıöçĞÜŞİÖÇ]/g, "").length;
  const unliHarf = (matn.match(/[aeiouAEIOU]/g) || []).length;
  const undoshHarf = harf - unliHarf;
  const aHarfi = (matn.match(/a/gi) || []).length;
  const bHarfi = (matn.match(/b/gi) || []).length;
  const kattaAHarf = (matn.match(/A/g) || []).length;
  const kattaBHarf = (matn.match(/B/g) || []).length;

  // Ismlarni aniqlash
  let ismlar = ismlarManbasi.filter(function (ism) {
    return new RegExp(`\\b${ism}\\b`, "gi").test(matn);
  });

  const natijaContainer = document.getElementById("natijaContainer");
  natijaContainer.style.opacity = 1;

  document.getElementById("natijaSoz").textContent = "" + soz + "";
  document.getElementById("natijaHarf").textContent = "" + harf + "";
  document.getElementById("natijaUnliHarf").textContent = "" + unliHarf + "";
  document.getElementById("natijaUndoshHarf").textContent =
    "" + undoshHarf + "";
  document.getElementById("natijaAHarf").textContent = "" + aHarfi + "";
  document.getElementById("natijaBHarf").textContent = "" + bHarfi + "";
  document.getElementById("natijaKattaAHarf").textContent =
    "" + kattaAHarf + "";
  document.getElementById("natijaKattaBHarf").textContent =
    "" + kattaBHarf + "";
  document.getElementById("natijaIsmSon").textContent = "" + ismlar.length + "";
  document.getElementById("natijaIsmlar").textContent = "" + ismlar.join(", ");
}
