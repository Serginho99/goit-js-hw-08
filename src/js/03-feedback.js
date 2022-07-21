import Throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

formRef.addEventListener('input', Throttle(handleFormInput), 500);
populateFormOutput();
const formData = {};

function handleFormInput(event) {
  // const email = event.currentTarget.elements.email.value;
  // const message = event.currentTarget.elements.message.value;
  formData[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ formData }));
}

formRef.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();
  const saved = localStorage.getItem(STORAGE_KEY);
  const parsed = JSON.parse(saved);
  console.log(parsed);
  localStorage.removeItem(STORAGE_KEY);
  event.currentTarget.reset();
}

function populateFormOutput(event) {
  const savedMessage = localStorage.getItem(STORAGE_KEY);

  if (savedMessage) {
    formRef.elements.email.value = JSON.parse(savedMessage).email;
    formRef.elements.message.value = JSON.parse(savedMessage).message;
    // formData[event.target.name] = event.target.value;
    // formData = JSON.parse(savedMessage);
  }
}

// function populateFormOutput() {
//   const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
//   const email = document.querySelector('.feedback-form input');
//   const message = document.querySelector('.feedback-form textarea');
//   if (data) {
//     email.value = data.email;
//     message.value = data.message;
//   }
// }
