console.clear();

import { AnswerButton } from "./components/answer__buttons.js";

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
