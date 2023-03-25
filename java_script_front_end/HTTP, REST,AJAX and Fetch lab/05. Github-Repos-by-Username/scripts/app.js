function loadRepos() {
	const user = document.getElementById('username')
	const repos = document.getElementById('repos')
	const url = `https://api.github.com/users/${user.value}/repos`

	fetch(url)
		.then((res) => {
			if (res.ok === false) {
				throw new Error(`${res.status} Not Found`)
			}
			return res.json()
		})
		.then(handleResponse)
		.catch(handleError)
		
	function handleResponse(data) {
		repos.innerHTML = ''
		for(let repo of data) {
			const liElement = document.createElement('li')
            liElement.innerHTML = ` 
                <a href=${repo.html_url}>
                    ${repo.full_name}
                </a>`
			repos.appendChild(liElement)
		}
	}

	function handleError(err) {
        repos.innerHTML = ''
		repos.textContent = `${err.message}`
	}

}