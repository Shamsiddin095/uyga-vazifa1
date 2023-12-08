// Foydalanuvchi kiritishini qidiruv funksiyasi
function search() {
  // Input elementini tanlash
  let input = document.getElementById("searchInput");
  // Foydalanuvchi kiritishini katta harflarga aylantirish
  let filter = input.value.toUpperCase();
  // Barcha "box" elementlarini tanlash
  let boxes = document.getElementsByClassName("box");

  // Har bir "box" uchun qidiruvni bajarish
  for (let i = 0; i < boxes.length; i++) {
    // Joriy "box"ni tanlash
    let box = boxes[i];
    // "box" ichidagi sarlavhani va matnni tanlash
    let title = box.querySelector("h1").innerText;
    let content = box.querySelector("p").innerText;

    // Sarlavhaga qidiruvni qo'shish
    let titleHighlighted = highlightMatch(title, filter);
    // Matnga qidiruvni qo'shish
    let contentHighlighted = highlightMatch(content, filter);

    // Yangi sarlavhani va matnni "box"ga qo'yish
    box.querySelector("h1").innerHTML = titleHighlighted;
    box.querySelector("p").innerHTML = contentHighlighted;

    // Agar sarlavhada yoki matnda <span> bo'lsa, "box"ni ko'rsatish
    if (
      titleHighlighted.includes("<span") ||
      contentHighlighted.includes("<span")
    ) {
      box.style.display = "block";
    } else {
      // Aks holda "box"ni yashirish
      box.style.display = "none";
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
  let matn2 = document.getElementById("matn2");
  let matn1 = document.getElementById("matn1");
  let natija = document.getElementById("natija");

  try {
    // JavaScript kodini ishga tushiramiz
    matn2.style.display = "none";
    matn1.style.color = "green";
    natija.style.color = "blue";

    eval(userInput);
  } catch (error) {
    // Xatolarni konsolga chiqaramiz
    console.error(error);
  }
}

///conent none block qilish

function toggleContent(contentId) {
  let content = document.getElementById("content1");

  if (content.style.display === "none") {
    content.style.display = "block";
  } else {
    content.style.display = "none";
  }
}
// 1-length

// let text = document.getElementById("toleng");
// alert(text.innerText.length);
// console.log(text.innerText.length);

//2- to UpperCase
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
