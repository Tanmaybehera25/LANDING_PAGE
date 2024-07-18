document.addEventListener('DOMContentLoaded', function() {
    // Handle form submission
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        alert(`Thank you, ${name}! We will contact you at ${email}.`);
        contactForm.reset();
    });

    // Handle dish hover events
    const dishes = document.querySelectorAll('.dish');
    dishes.forEach(dish => {
        dish.addEventListener('mouseenter', () => {
            dish.style.backgroundColor = '#ffe0b3';
        });
        dish.addEventListener('mouseleave', () => {
            dish.style.backgroundColor = '#fff';
        });
        dish.addEventListener('click', () => {
            alert(`You clicked on ${dish.dataset.dish}`);
        });
    });
});

