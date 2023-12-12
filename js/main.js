// Foydalanuvchi kiritishini qidiruv funksiyasi
function search() {
  // Qidirish inputining qiymatini olish
  var searchInput = document.getElementById("searchInput").value.toLowerCase();

  // Barcha box elementlarini olish
  var boxes = document.querySelectorAll(".box");

  // Container elementini olish
  var container = document.querySelector(".container");

  // Qidirish inputi bo'shmi yoki yo'qmi tekshirish
  if (searchInput === "") {
    // Agar bo'sh bo'lsa, barcha boxlarni pastga tushib ketish
    boxes.forEach(function (box, index) {
      container.appendChild(box);
    });
  } else {
    // Agar bo'sh bo'lmasa, qidirish natijalariga ko'ra tartibni yangilash
    boxes.forEach(function (box, index) {
      // Joriy boxning matnini olish
      var boxText = box.textContent.toLowerCase();

      // Agar qidirish inputi matnda paydo bo'lsa
      if (boxText.includes(searchInput)) {
        // Qidirilgan boxni yuqoriga o'tkazish, agar box yuqoriga chiqqanidan oldinmas
        if (container.firstChild !== box) {
          container.insertBefore(box, container.firstChild);
        }
      }
    });

    // Qolgan boxlarni ham tartibini saqlab qo'yish
    var remainingBoxes = Array.from(boxes).filter(function (box) {
      return !container.contains(box);
    });

    // Agar qidirilgan element pastga tushib ketsa, o'zi o'zini yangi joyiga qaytariladi
    if (remainingBoxes.length === boxes.length - 1) {
      container.insertBefore(
        remainingBoxes[0],
        container.lastChild.nextSibling
      );
    } else {
      remainingBoxes.forEach(function (remainingBox) {
        container.appendChild(remainingBox);
      });
    }
  }
}

// Qidiruvda topilgan so'zni belgilash uchun span qo'shish
function highlightMatch(text, filter) {
  // RegExp obyekti yaratish
  let regex = new RegExp("(" + escapeRegExp(filter) + ")", "ig");

  // Qidiruv natijasidagi so'zlarni ajratish
  return text.replace(regex, '<span class="highlight">$1</span>');
}

// RegExp uchun belgilangan simvollarni qo'shish
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

//////////////////////////////////////////////////////////////////////////////////////////////
/// consolega qo'shish
function runFunction() {
  // JavaScript kodini olish
  let editableTextContent = document.getElementById("editableText");
  let userInput = editableTextContent.innerText;

  try {
    eval(userInput);
  } catch (error) {
    // Xatolarni konsolga chiqaramiz
    console.error(error);
  }
}

///conent none block qilish

function toggleContent(contentId) {
  let content = document.getElementById(contentId);

  if (content.classList.contains("show")) {
    content.style.opacity = 0;
    content.style.height = 0;
    content.classList.remove("show");
  } else {
    content.style.opacity = 1;
    content.style.height = "250px";
    content.classList.add("show");
  }
}

//////navbar
document.getElementById("nav-toggle").addEventListener("change", function () {
  var navbar = document.querySelector(".navbar");
  navbar.style.left = this.checked ? "0" : "-100%";
});
//////////////////////////////////////////////////////////////////

// 1-length

// let text = document.getElementById("toleng");
// alert(text.innerText.length);
// console.log(text.innerText.length);

// 2- to UpperCase
// let text = document.getElementById("toUpper");
// let kattaharflar = text.innerText.toLocaleUpperCase();
// //natijani o'zlashtirish
// text.innerText = kattaharflar;

//3- toLowerCase()

// let text = document.getElementById("toLower");
// let kichik = text.innerText.toLowerCase();
// text.innerText = kichik;

// 4- charAt

// let text = document.getElementById("charAt");
// let indexi = text.innerText.charAt(0);
// text.innerText = indexi;

//5- indexof

// let text = document.getElementById("indexOf");
// let indexi = text.innerText.indexOf("JavaScript");
// text.innerText = indexi;

//6-substring

// let text = document.getElementById("substring");
// let subs = text.innerText.substring(6, 10);
// text.innerText = subs;

//7-slice

// let text = document.getElementById("slice");
// let natija = text.innerText.slice(6, 10);
// text.innerText = natija;

//8- replace

// let text = document.getElementById("replace");
// let yangimatn = text.innerText.replace("Javascript", "Dunyo!");
// text.innerText = yangimatn;

//9-split

// let text = document.getElementById("split");
// let natija = text.innerText.split("");
// text.innerText = natija;

//10-concat

// let matn1 = document.getElementById("matn1");
// let matn2 = document.getElementById("matn2");
// let natija = matn1.innerText.concat(matn2.innerText);

// matn1.innerText = natija;

//11-match

// let text = document.getElementById("matn");
// let natijaqutisi = document.getElementById("natija");
// let regex = /javascript/g;
// let natija = text.innerText.match(regex);

// natijaqutisi.innerText = natija ? natija.join(", ") : "Natija topilmadi";

//12-repeat

// let text = document.getElementById("repeat");
// let natija = text.innerText.repeat(3);
// text.innerText = natija;

//13 - search

// let text = document.getElementById("srch");
// let natijaqutisi = document.getElementById("quti");

// let natija = text.innerText.search(/meni top/);

// natijaqutisi.innerText = natija !== -1 ? natija.toString() : "Natija topilmadi";

//14 trim

// let textjoin = document.getElementById("trim");
// let text = "     salom script    ";
// let natija = text.trim();
// textjoin.innerText = natija;

//15 padEnd

// let text = document.getElementById("padEnd");

// let natija = text.innerText.padEnd(10, "!");

// text.innerText = natija;

//16 padStart

// let text = document.getElementById("padStart");

// let natija = text.innerText.padStart(10, "!");

// text.innerText = natija;

//17 - includes

// let text = document.getElementById("includes");
// let natija = text.innerText.includes("jav");
// text.innerText = natija;

//18-endsWith
// let matn = document.getElementById("endsWith");
// let text = matn.innerText.trim(); // Matndan bo'sh joylarni olib tashlash
// let natija = text.endsWith("end.");

// matn.innerText = natija;

//19-startsWith
// let matn = document.getElementById("startsWith");
// let text = matn.innerText.trim();
// let natija = text.startsWith("startsWith");
// matn.innerText = natija;

//20 -localeCompare

// let paragraph = document.getElementById("localeCompare");
// let resultElement = document.getElementById("localnatija");
// let text = paragraph.innerText.trim();
// let searchString1 = "Bahtiyor";
// let searchString2 = "Hoshimbek";
// let result = text.localeCompare(searchString2);
// resultElement.innerText = result;

//21 -toString
// let h1element = document.getElementById("toString");

// let text = h1element.innerText;
// let numqiymat = parseFloat(text);

// console.log(typeof numqiymat + " " + numqiymat);
// console.log(isFinite(numqiymat));

// h1element.innerText = numqiymat;

// number methods /////////////////////////////////////

// 1- MAX-VALUE , MIN-VALUE

// const h1Element = document.getElementById("value");
// const numbers = h1Element.innerText.match(/\b\d+(\.\d+)?\b/g);
// const maxNumber = Math.max(...numbers);
// const minNumber = Math.min(...numbers);

// const kattasiP = document.getElementById("kattasi");
// const kichigiP = document.getElementById("kichigi");

// kattasiP.innerText = `kattasi = ${maxNumber}`;
// kichigiP.innerText = `kichigi = ${minNumber}`;

//2- isFinite

// const h1Element = document.getElementById("son");
// const sonMatn = h1Element.innerText;
// const sonRaqam = parseFloat(sonMatn);
// console.log(typeof sonRaqam);
// const natija = isFinite(sonRaqam);
// console.log(isfinite);
// const quti = document.getElementById("isfinite");
// quti.innerText = `natija = ${natija}`;

//3-isInteger

// const h1Element = document.getElementById("sonInteger");
// const matn = h1Element.innerText;

// // Matndan faqat raqamlarni ajratib olish
// const raqam = matn.match(/\b\d+/);
// const son = parseInt(raqam[0]);
// let int = Number.isInteger(son);

// let natija = document.getElementById("isInteger");

// natija.innerText = `natija =  ${int}`;
// console.log(`${son}  ${int}`);
