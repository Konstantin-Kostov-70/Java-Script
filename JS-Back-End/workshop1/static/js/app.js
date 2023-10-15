document.getElementById('cars').addEventListener('click', (ev) => {
    if (ev.target.classList.contains('more')) {
        const btn = ev.target
        console.log(btn);
        const desc = btn.parentElement.parentElement.querySelector('.desc');
        if (desc.style.display == 'block') {
            desc.style.display = 'none'
            btn.textContent = 'Show more'
        }
        else {
            desc.style.display = 'block'
            btn.textContent = 'Hide'
        }
    }
})

