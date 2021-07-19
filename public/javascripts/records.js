const category = document.querySelector('#category')
const form = document.querySelector('.needs-validation')
category.value = category.dataset.value

form.addEventListener('submit', function onFormSubmitted(event) {
  if (!form.checkValidity()) {
    event.preventDefault()
    event.stopPropagation()
  }
  form.classList.add('was-validated')
}, false)