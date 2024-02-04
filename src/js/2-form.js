const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';


const savedState = JSON.parse(localStorage.getItem(localStorageKey));

if (savedState) {
  form.elements.email.value = savedState.email || '';
  form.elements.message.value = savedState.message || '';
}

form.addEventListener('input', event => {
  const formData = {
    email: form.elements.email.value.trim(),
    message: form.elements.message.value.trim(),
  };

  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();

  const emailValue = form.elements.email.value.trim();
  const messageValue = form.elements.message.value.trim();

  if (!emailValue || !messageValue){
    alert('Please fill in both email and message fields');
    return;
  }

  const formData = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };

  console.log(formData);

  localStorage.removeItem(localStorageKey);
  form.reset();
});