document.getElementById('menu-icon').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show-menu');
});

function updateCartBadge(count) {
    const badge = document.getElementById('cart-badge');
    badge.textContent = count;
}

updateCartBadge(5);

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});