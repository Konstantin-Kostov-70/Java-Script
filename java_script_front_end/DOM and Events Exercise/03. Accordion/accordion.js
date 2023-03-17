function toggle() {
  const btn = document.querySelector('#accordion .head > span');
  const div = document.querySelector('#extra');
  if (div.style.display === 'block') {
    div.style.display = 'none'
    btn.textContent = 'More'
  }
  else {
    div.style.display = 'block'
    btn.textContent = 'Less'
  }
}