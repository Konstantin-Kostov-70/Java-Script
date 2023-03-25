function loadCommits() {
    const user = document.getElementById('username');
    const repo = document.getElementById('repo');
    const commits = document.getElementById('commits')
    const userValue = user.value
    const repoValue = repo.value
  
    const BASE_URL = 'https://api.github.com/repos'
  
    fetch(`${BASE_URL}/${userValue}/${repoValue}/commits`)
      .then((res) => {
        if (res.ok === false) {
          throw new Error(`${res.status} (Not Found)`)
        }
        return res.json()
      })
      .then(handleResponse)
      .catch((err) => {
        let li = document.createElement('li')
        li.textContent = err
        commits.appendChild(li)
      })
  
    function handleResponse(data) {
      data.forEach(obj => {
        let text = `${obj.commit.author.name}: ${obj.commit.message}`
        let li = document.createElement('li')
        li.textContent = text
        commits.appendChild(li)
      });
    }
  }