function validate() {
    document.getElementById('email').addEventListener('change', onClick);

    function onClick(ev) {
        const pattern = /^[a-z]+@[a-z]+\.[a-z]+$/;
        if (pattern.test(ev.target.value)) {
            ev.target.classList.remove('error');
        }
        else {
            ev.target.classList.add('error');
        }
    }
}