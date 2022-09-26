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
randomiseButton.addEventListener('click', getImage)
likeButton.addEventListener('click', likedImage)
//likeButton.addEventListener('click', changeLikeButtonColor)

function likedImage() {
    const img = document.getElementById('random-image')
    const cloned = img.cloneNode(true)
    const likedImgDestination = document.getElementById('faved-img-div')
    likedImgDestination.appendChild(cloned)

    const button = document.getElementById('like-button')

    console.log(button.classList)

    function removeUnlikedImage() {
        return likedImgDestination.removeChild(likedImgDestination.lastChild)
    }

    if (button.classList.contains('clicked-like-button')) {
        button.innerHTML = 'LIKE'
        for (let i = 0; i < 2; i++) {
            removeUnlikedImage();
        }
    } 
    else {
        button.innerHTML = "LIKED"
    }

    button.classList.toggle('clicked-like-button')
}

/*
function changeLikeButtonColor() {
    const button = document.getElementById('like-button')

    //button.innerHTML = 'LIKED'
    console.log(button.classList)

    if (button.classList.contains('clicked-like-button')) {
        button.innerHTML = 'LIKE'
    } 
    else {
        button.innerHTML = "LIKED"
    }

    button.classList.toggle('clicked-like-button')
}*/

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



