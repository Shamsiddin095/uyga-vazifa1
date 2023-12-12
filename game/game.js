// Buttons
const againBtn = document.querySelector(".again");
const checkBtn = document.querySelector(".check");
const uzbekBtn = document.querySelector(".uzbek");
const englishBtn = document.querySelector(".eng");

const body = document.querySelector("body");
const message = document.querySelector(".message");
const opportunity = document.querySelector(".opportunity");
const score = document.querySelector(".score"); // highscore
const h1 = document.querySelector("h1");
const opportunity_num = document.querySelector(".opportunity_num");
const guess_num = document.querySelector(".guess_num");
const highscoreNum = document.querySelector(".highscore");

const inputNumber = document.querySelector(".guess");
const winAudio = new Audio("./06. Level Complete.mp3");
const loseAudio = new Audio("./08. Lost a Life.mp3");

////////////////////////
uzbekBtn.addEventListener("click", () => {
  againBtn.textContent = "Takror";
  checkBtn.textContent = "Tekshirish";
  h1.textContent = "O'ylangan raqam ?";
  message.textContent = "Taxmin qilishni boshlang";
  opportunity.textContent = "Urinishlar soni";
  score.textContent = " Yuqori natija ";
});
englishBtn.addEventListener("click", () => {
  againBtn.textContent = "Again!";
  checkBtn.textContent = "Check";
  h1.textContent = "Guess My Number ?";
  message.textContent = "Start Guessing";
  opportunity.textContent = "opportunity";
  score.textContent = " HighScore ";
});
let randomNumber = null;
let record = 0;
let urinishlarsoni = 10;

const random = () => {
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  // console.log(randomNumber);
  console.log(randomNumber);
};

random();

// Keydown hodisasi bilan "Enter" tugmasi
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    handleGuess();
  }
});

checkBtn.addEventListener("click", () => {
  handleGuess();
});

againBtn.addEventListener("click", () => {
  // O'yinni qayta boshlash
  resetGame();
});

const handleGuess = () => {
  const kiruvchison = +inputNumber.value;

  if (kiruvchison >= 1 && kiruvchison <= 20) {
    record++;

    if (randomNumber === kiruvchison) {
      // Foydalanuvchi sonni topdi
      win();
    } else if (record >= 10) {
      // Urinishlar soni 10 ga yetib keldi, yutqazib bo'ldi
      lost();
    }
  } else {
    // Foydalanuvchi to'g'ri son kiritmadi
    message.textContent = "Iltimos, 1 dan 20 gacha son kiriting";
  }

  // Urinish soni kamayib borsa
  opportunity_num.textContent = Math.max(0, 10 - record).toString();
};

const win = () => {
  // Foydalanuvchi yutdi
  guess_num.textContent = randomNumber;
  body.style.backgroundColor = "green";
  winAudio.play();

  // Yutqazgan holatda highscore ni yangilash
  if (record <= urinishlarsoni) {
    urinishlarsoni = record;
    highscoreNum.textContent = urinishlarsoni;
  }

  // Urinish soni kamayib borsa
  opportunity_num.textContent = "0";
};

const lost = () => {
  // O'yinchi yutqazib bo'ldi
  guess_num.textContent = randomNumber;
  body.style.backgroundColor = "red";
  h1.textContent = "GAME OVER";
  loseAudio.play();
  // Urinish soni kamayib borsa
  opportunity_num.textContent = "0";
};

const resetGame = () => {
  // O'yinni qayta boshlash
  body.style.backgroundColor = "#222";
  inputNumber.value = "";
  guess_num.textContent = "?";
  opportunity_num.textContent = "10";
  record = 0;

  // Yangi random sonni generatsiya qilish
  random();
};
