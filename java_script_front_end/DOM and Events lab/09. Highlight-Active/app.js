function focused() {
    let inputField = Array.from(document.querySelectorAll('input[type="text"]'));
    inputField.forEach(e => {
        e.addEventListener('focus', function() {
            console.log(e.parentElement.classList)
            e.parentElement.classList.add('focused');
        });
        e.addEventListener('blur', function(){
            e.parentElement.classList.remove('focused');
        })

    })
}