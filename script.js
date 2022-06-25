const hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('close');
})
document.getElementById('input-hamburger').checked = false;