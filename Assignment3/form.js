const nameInput = document.querySelector('input[name="name"]');

nameInput.addEventListener('input', function() {
  const name = nameInput.value;
  const regex = /^\S+$/;
  if (!regex.test(name)) {
    nameInput.setCustomValidity('Name cannot contain spaces');
  } else {
    nameInput.setCustomValidity('');
  }
});
