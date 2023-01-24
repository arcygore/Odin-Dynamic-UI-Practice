const imageSlider = document.querySelectorAll('.image-slider')
const imageSelector = document.querySelectorAll('.image-selector')

imageSelector.forEach(element => {
    element.addEventListener('click', e => {
        removeClasses(imageSelector[0].children);
        e.target.classList.add('selected');
    })
    });

function removeClasses(arr) {
    for (item of arr) {
        item.classList.remove('selected');
    }
}