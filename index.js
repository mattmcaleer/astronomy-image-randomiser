const page1 = document.getElementById("page1")
const page2 = document.getElementById("page2")
const randomiseButton = document.getElementById('randomise-button')
const likeButton = document.getElementById('like-button')
const imageContainer = document.getElementById('imageContainer')

function getImage() {
    fetch('https://api.nasa.gov/planetary/apod?count=1&api_key=o7gxI9H9bjgd1MP2kQxRy7xiS9VsT7009UsQ6809')
        .then(res => res.json())
        .then(data => {
            console.log(data[0])
            imageContainer.innerHTML = `<img id="random-image" src=${data[0].url}>
                                <div id="modal">
                                    <h3>${data[0].title}</h3>
                                    <p>${data[0].explanation}</p>
                                </div>`
        })
    const button = document.getElementById('like-button')
    button.classList.remove('clicked-like-button')
    button.innerHTML = 'LIKE'
        //clears the like button
}

document.addEventListener('DOMContentLoaded', getImage)

function likedImage() {
    const img = document.getElementById('random-image')
    const cloned = img.cloneNode(true)
    const likedImgDestination = document.getElementById('faved-img-div')
    likedImgDestination.appendChild(cloned)
}

function changeLikeButtonColor() {
    const button = document.getElementById('like-button')
    button.classList.toggle('clicked-like-button')
    button.innerHTML = 'LIKED'
}

randomiseButton.addEventListener('click', getImage)
likeButton.addEventListener('click', likedImage)
likeButton.addEventListener('click', changeLikeButtonColor)

imageContainer.addEventListener('mouseover', () => {
    let modal = document.getElementById('modal');
        modal.style.display = 'inline';
})

imageContainer.addEventListener('mouseout', () => {
    let modal = document.getElementById('modal');
        modal.style.display = 'none';
}) 

const imgRandomiserNav = document.getElementById('image-randomiser')
const likedImagesNav = document.getElementById('faved-images')

imgRandomiserNav.addEventListener('click', () => {
    page1.style.display = "block";
    page2.style.display = "none";
})

likedImagesNav.addEventListener('click', () => {
    page1.style.display = "none";
    page2.style.display = "block";
})

/*adding search bar to search through already liked images

const imageDataTemplate = document.querySelector("[data-image-data-template]")
const resultContainer = document.querySelector("[data-image-container]")
const searchInput = document.querySelector("[data-search]")
let images = []

searchInput.addEventListener('input', (e) => {
    const value = e.target.value.toLowerCase()
    console.log(value)
    console.log(images)
    images.forEach(image => {
        const isVisible = image.title.toLowerCase().includes(value)
        image.element.classList.toggle("hide", !isVisible)
    })
})

fetch('https://api.nasa.gov/planetary/apod?count=3&api_key=o7gxI9H9bjgd1MP2kQxRy7xiS9VsT7009UsQ6809')
    .then(response => response.json())
    .then(data => {
        images = data.map(image => {
            const card = imageDataTemplate.content.cloneNode(true).children[0]
            const header = card.querySelector("[data-header-data]")
            const body = card.querySelector("[data-body-data]")
            header.textContent = image.title
            header.innerHTML = `<img src=${image.hdurl} class="thumbnail"></img><h3>${image.title}</h3>`
            body.textContent = image.explanation
            resultContainer.append(card)
            return { title: image.title, description: image.explanation, element: card }
        })
    })
*/


