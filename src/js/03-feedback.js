import Throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');

formRef.addEventListener('input', Throttle(handleFormInput), 500);

function handleFormInput(event) {
  const email = event.currentTarget.elements.email.value;
  const message = event.currentTarget.elements.message.value;
  const form = {
    email,
    message,
  };
  console.log(localStorage.setItem('feedback-form-state', form));
}

formRef.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();
  const email = event.currentTarget.elements.email.value;
  const message = event.currentTarget.elements.message.value;
  const form = {
    email,
    message,
  };
  console.log(form);
  event.currentTarget.reset();
}
