document.querySelectorAll('[data-answer]').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelector('.feedback').textContent = button.dataset.answer === 'right'
      ? '正确。斜率没有变化，所有点的 y 坐标都增加了 2。'
      : '再想一想：决定陡峭程度的是 k，这次变化的是 b。';
  });
});
