//inputni ishga tushirish
function search() {
  var input = document.getElementById("searchInput");
  var filter = input.value.toUpperCase();
  var boxes = document.getElementsByClassName("box");

  for (var i = 0; i < boxes.length; i++) {
    var box = boxes[i];
    var title = box.querySelector("h1").innerText;
    var content = box.querySelector("p").innerText;

    var titleHighlighted = highlightMatch(title, filter);
    var contentHighlighted = highlightMatch(content, filter);

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
  var regex = new RegExp("(" + filter + ")", "ig");
  return text.replace(regex, '<span class="highlight">$1</span>');
}

/// consolega qo'shish

function runFunction() {
  // JavaScript kodini olish
  var editableTextContent = document.getElementById("editableText");
  var userInput = editableTextContent.innerText;

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
  var content = document.getElementById(contentId);

  if (content.style.display === "none") {
    content.style.display = "block";
  } else {
    content.style.display = "none";
  }
}
