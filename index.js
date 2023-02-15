const list = document.querySelector("#doll-nav")
const form = document.querySelector('#add-doll-form')
const likesButton = document.querySelector('#likes-btn')
let dollyLikes = document.querySelector('#num-of-likes')
// let currentDoll

//fetching data
fetch('http://localhost:3000/dollies')
.then(res => res.json())
.then(data => data.forEach(dolly => displayDolly(dolly)))


//function that add all the dolly images to the menu on top
function displayDolly(dolly) {
    let dollyImg = document.createElement('img')
    dollyImg.src = dolly.photo
    list.append(dollyImg)

    dollyImg.addEventListener('click', () => displayInfo(dolly))
}

//function that displays detailed info about the dolly
function displayInfo(dolly) {
    let dollyName = document.querySelector('#doll-name')
    let dollyImage = document.querySelector('#doll-image')
    let dollyDescription = document.querySelector('#doll-description')

    dollyName.textContent = dolly.name
    dollyImage.src = dolly.photo
    dollyDescription.textContent = dolly.description
    dollyLikes.textContent = dolly.likes
    currentDoll = dolly
}

function handleSubmit(e) {
    e.preventDefault()

    console.log(e.target['new-doll-name'].value)

    //creating new doll
    const newDoll = {
        name: e.target['new-doll-name'].value,
        photo: e.target['new-doll-image'].value,
        likes: 0
    }

    //calling functuion to add dolly to the menu
    displayDolly(newDoll)

    //resetting the form
    e.target.reset()

}


//EVENT LISTENERS
form.addEventListener('submit', (e) => handleSubmit(e))
likesButton.addEventListener('click', () => {
// const newLikes = currentDoll.likes++
// dollyLikes.textContent = `${newLikes} Likes`
dollyLikes.textContent++
})