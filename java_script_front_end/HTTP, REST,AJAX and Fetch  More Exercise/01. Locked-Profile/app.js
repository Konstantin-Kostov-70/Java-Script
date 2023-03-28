async function lockedProfile() {
    const main = document.querySelector('#main')
    main.addEventListener('click', hideIt)
    
    const res = await fetch('http://localhost:3030/jsonstore/advanced/profiles')
    const data = await res.json()
    
    main.innerHTML = ''
    Object.values(data).forEach((profile, idx) => {
        main.innerHTML += `
            <div class="profile">
                <img src="./iconProfile2.png" class="userIcon" />
				<label>Lock</label>
				<input type="radio" name="user${idx + 1}Locked" value="lock" checked>
				<label>Unlock</label>
				<input type="radio" name="user${idx + 1}Locked" value="unlock"><br>
				<hr>
				<label>Username</label>
				<input type="text" name="user${idx + 1}Username" value=${profile.username} disabled readonly />
				<div class="hiddenInfo">
					<hr>
					<label>Email:</label>
					<input type="email" name="user1Email" value=${profile.email} disabled readonly />
					<label>Age:</label>
					<input type="text" name="user1Age" value=${profile.age} disabled readonly />
				</div>
				
				<button>Show more</button>
            </div>`

    })

    function hideIt(ev) {

        if (ev.target.tagName === 'BUTTON'
            && ev.target.parentElement.querySelector('input[value=unlock]').checked
            && ev.target.textContent === 'Show more') {

            Array.from(ev.target.parentElement.querySelectorAll('.hiddenInfo > input'))
                .forEach(input => input.style.display = 'block')

            Array.from(ev.target.parentElement.querySelectorAll('.hiddenInfo > label'))
                .forEach(label => label.style.display = 'block')

            ev.target.textContent = 'Hide it'

        }

        else if (ev.target.tagName === 'BUTTON'
            && ev.target.parentElement.querySelector('input[value=unlock]').checked) {

            Array.from(ev.target.parentElement.querySelectorAll('.hiddenInfo > input'))
                .forEach(input => input.style.display = 'none')

            Array.from(ev.target.parentElement.querySelectorAll('.hiddenInfo > label'))
                .forEach(label => label.style.display = 'none')

            ev.target.textContent = 'Show more'

        }
    }
}