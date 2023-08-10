console.clear();

// Answer Button Toggle!

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

// Bookmark Toggle!

const bookmarkButton = document.querySelector('[data-js="bookmarkButton"]');
const untickedBookmark = document.querySelector('[data-js="untickedBookmark"]');
const tickedBookmark = document.querySelector('[data-js="tickedBookmark"]');

function toggleButton() {
  untickedBookmark.classList.toggle("hidden");
  tickedBookmark.classList.toggle("hidden");
}

bookmarkButton.addEventListener("click", () => {
  tickedBookmark.classList.toggle("quizapp__card--bookmark--ticked");
  if (tickedBookmark.classList.contains("hidden")) {
    toggleButton();
  } else {
    toggleButton();
  }
});
