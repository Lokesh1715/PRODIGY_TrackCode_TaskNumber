// script.js
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#222';
    } else {
        navbar.style.backgroundColor = '#333';
    }
});

document.querySelectorAll('.nav-item a').forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.backgroundColor = '#444';
        item.style.color = '#fff';
    });

    item.addEventListener('mouseout', () => {
        item.style.backgroundColor = '';
        item.style.color = '';
    });
});
