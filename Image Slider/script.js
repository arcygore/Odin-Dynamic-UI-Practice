const sliderImages = document.querySelectorAll('.image')
const imageSelector = document.querySelectorAll('.selection')

imageSelector.forEach(element => {
    element.addEventListener('click', e => {
        removeSelectorClasses(imageSelector);
        removeImageClasses(sliderImages);    
        const selectedIndex = Array.from(e.target.parentElement.children).indexOf(e.target);
        sliderImages[selectedIndex].classList.add('active');
        e.target.classList.add('selected');
    })
    });

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