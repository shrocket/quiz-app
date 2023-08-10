console.clear();

const answerButton = document.querySelector('[data-js="showAnswer"]');
const hiddenAnswer = document.querySelector('[data-js="hiddenAnswer"]');

answerButton.addEventListener("click", () => {
  hiddenAnswer.classList.toggle("quizapp__card--answer--hidden");
});
