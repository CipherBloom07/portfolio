// Select all nav links
const navLinks = document.querySelectorAll('nav a');

// Loop through each link
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default jump
        const targetId = this.getAttribute('href'); // "#about"
        const targetSection = document.querySelector(targetId);

        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});
// Alert when clicking on contact email
const contact = document.querySelector('#contact p');
contact.addEventListener('click', () => {
    alert('Copy email: your@email.com');
});