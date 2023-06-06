const inputs = document.querySelectorAll('.input-container input, .input-container textarea');

inputs.forEach((input) => {
  input.addEventListener('focus', () => {
    input.parentNode.classList.add('active');
  });

  input.addEventListener('blur', () => {
    if (input.value === '') {
      input.parentNode.classList.remove('active');
    }
  });
});
