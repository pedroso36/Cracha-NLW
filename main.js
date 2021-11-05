const linksSocialMedia = {
  github: 'pedroso36',
  youtube: 'YamashidaGameplay',
  instagram: 'guto_36',
  facebook: '',
  twitter: ''
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com.br/${linksSocialMedia[social]}`

    // alert(li.children[0].href)
  }
}
changeSocialMediaLinks()

function getGithubProfileInfo() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`
  fetch(url)
    .then(response => response.json())
    .then(date => {
      userName.textContent = date.name
      userBio.textContent = date.bio
      userLink.href = date.html_url
      profilePhoto.src = date.avatar_url
      userLogin.textContent = date.login
    })
}

getGithubProfileInfo()
