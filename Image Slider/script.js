const sliderImages = document.querySelectorAll('.image')
const imageSelector = document.querySelectorAll('.selection')

imageSelector.forEach(element => {
    element.addEventListener('click', e => {
        removeSelectorClasses(imageSelector);
        e.target.classList.add('selected');
    })
    });

sliderImages.forEach(element => {
    element.addEventListener('click', e => {
        removeImageClasses(sliderImages);
        e.target.classList.add('active');
    })
})


function removeImageClasses(arr) {
    for (item of arr) {
        item.classList.remove('active');
    }
}

function removeSelectorClasses(arr) {
    for (item of arr) {
        item.classList.remove('selected');
    }
}