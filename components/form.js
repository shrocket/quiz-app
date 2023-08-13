console.clear;

const form = document.querySelector('[js-data="quizappNewCardForm"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formElements = event.target.elements;

  console.log(formElements.theQuestion);
  console.log(formElements.theQuestion.value);
});
