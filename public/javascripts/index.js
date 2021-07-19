document.querySelector('#data-panel').addEventListener('click', (event) => {
  if (event.target.classList.contains('btn-delete')) {
    document.querySelector('#delete-modal-body').innerHTML = '確定要刪除嗎？'
    document.querySelector('#delete-form').action = `/records/${event.target.dataset.id}?_method=DELETE`
  }
})

const categoryFilter = document.querySelector('#category-filter')
categoryFilter.value = categoryFilter.dataset.value
categoryFilter.addEventListener('change', () => categoryFilter.parentElement.submit())