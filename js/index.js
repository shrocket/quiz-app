console.clear();

const answerButton = document.querySelector('[data-js="showAnswer"]');
const hiddenAnswer = document.querySelector('[data-js="hiddenAnswer"]');

answerButton.addEventListener("click", () => {
  hiddenAnswer.classList.toggle("quizapp__card--answer--hidden");
  if (!hiddenAnswer.classList.contains("quizapp__card--answer--hidden")) {
    answerButton.textContent = "Hide Answer";
  } else {
    answerButton.textContent = "Show Answer";
  }
});
