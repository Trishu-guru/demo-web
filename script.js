document.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('form[data-form]');
  forms.forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const button = form.querySelector('button[type="submit"]');
      if (button) {
        button.textContent = 'Submitted';
        button.disabled = true;
      }
      const note = document.createElement('p');
      note.className = 'form-note';
      note.textContent = 'Thank you! We will contact you shortly on your provided number or email.';
      form.appendChild(note);
    });
  });
});
