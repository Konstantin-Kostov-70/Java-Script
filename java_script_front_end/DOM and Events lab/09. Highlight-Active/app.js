function focused() {
    let inputField = Array.from(document.querySelectorAll('input[type="text"]'));
    inputField.forEach(e => {
        e.addEventListener('focus', function() {
            e.parentNode.classList.add('focused'); 
            // e.parentNode.className = 'focused';
        });
        e.addEventListener('blur', function(){
            e.parentNode.classList.remove('focused');
            // e.parentNode.className = '';
        })

    })
}