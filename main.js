//inputni ishga tushirish
function search() {
  let input = document.getElementById("searchInput");
  let filter = input.value.toUpperCase();
  let boxes = document.getElementsByClassName("box");

  for (let i = 0; i < boxes.length; i++) {
    let box = boxes[i];
    let title = box.querySelector("h1").innerText;
    let content = box.querySelector("p").innerText;

    let titleHighlighted = highlightMatch(title, filter);
    let contentHighlighted = highlightMatch(content, filter);

    box.querySelector("h1").innerHTML = titleHighlighted;
    box.querySelector("p").innerHTML = contentHighlighted;

    if (
      titleHighlighted.includes("<span") ||
      contentHighlighted.includes("<span")
    ) {
      box.style.display = "block";
    } else {
      box.style.display = "none";
    }
  }
}

function highlightMatch(text, filter) {
  let regex = new RegExp("(" + filter + ")", "ig");
  return text.replace(regex, '<span class="highlight">$1</span>');
}
/// consolega qo'shish
function runFunction() {
  // JavaScript kodini olish
  let editableTextContent = document.getElementById("editableText");
  let userInput = editableTextContent.innerText;

  try {
    // JavaScript kodini ishga tushiramiz
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
//1-length
// let text = document.getElementById("test1");
// alert(text.innerText.length);
// console.log(text.innerText.length);
