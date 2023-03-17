function lockedProfile() {
    document.querySelector('#main').addEventListener('click', showOrHide);
 
    function showOrHide(ev) {
        const profile = ev.target.parentElement
        const isActive = profile.querySelector('input[type="radio"][value="unlock"]').checked
        const hideDiv = Array
        .from(profile.querySelectorAll('div'))
        .find(d => d.id.includes('HiddenFields'))
      

        if (ev.target.tagName === 'BUTTON' && ev.target.textContent === 'Show more' && isActive) {
            hideDiv.style.display = 'block';
            ev.target.textContent = 'Hide it'
            
            
        }
        else if (ev.target.tagName === 'BUTTON' && ev.target.textContent === 'Hide it' && isActive){
            hideDiv.style.display = 'none'
            ev.target.textContent = 'Show more'
        }

    }

}