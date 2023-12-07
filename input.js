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
