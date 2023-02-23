const feedbackForm = document.querySelector(".feedback-form");
const feedbackSubmittedText = document.querySelector(
  ".feedback-form__submitted-text"
);

// To Show/Hide Feedback Submitted Success Message!

let feedbackSubmitted = false;

feedbackForm.addEventListener("submit", (e) => {
  e.preventDefault();
  feedbackSubmitted = true;
  if ((feedbackSubmitted)) {
    feedbackSubmittedText.classList.add("submitted");
  }

  setTimeout(() => {
    feedbackSubmitted = false;
    feedbackSubmittedText.classList.remove("submitted");
  }, 1000);
});
