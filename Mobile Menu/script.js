const menuBtn = document.querySelector(".menu-button");
const menuDropdown = document.querySelector(".menu-dropdown");
const documentBody = document.querySelector("body");

menuBtn.addEventListener('click', createDropdown)
menuDropdown.addEventListener('click', dropdownSelect)
documentBody.addEventListener('click', () => {
    menuDropdown.classList.remove('active');
})

function createDropdown(e) {
    e.stopPropagation();
    menuDropdown.classList.add('active');
    // menuDropdown.style.left = `${e.clientX}px`
    // menuDropdown.style.top = `${e.clientY}px`
}

function dropdownSelect(e) {
    e.stopPropagation();
    if (e.target.classList.contains('menu-dropdown')) {
        return
    } 
    else menuDropdown.classList.remove('active');
}
