const menuToggle = document.querySelector('.toggle');
const contain = document.querySelector('.container');

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        contain.classList.toggle('active');
    })