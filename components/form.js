console.clear;

const form = document.querySelector('[js-data="quizappNewCardForm"]');

export function Form() {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formElements = event.target.elements;

    console.log(formElements.theQuestion);
    console.log(formElements.theQuestion.value);
    console.log(formElements.theAnswer);
    console.log(formElements.theAnswer.value);
    console.log(formElements.tags);
    console.log(formElements.tags.value);
  });
}
