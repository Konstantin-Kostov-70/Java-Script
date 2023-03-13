function focused() {
    const elements = Array.from(document.querySelectorAll('input'));
    elements.forEach(e => {
        e.addEventListener('focus', onFocus);
        e.addEventListener('blur', outFocus);
    })
    
    function onFocus(ev) {
        ev.target.parentNode.classList.add('focused')
    }

    function outFocus(ev) {
        ev.target.parentNode.classList.remove('focused')
    }
}