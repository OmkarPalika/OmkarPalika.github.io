document.addEventListener('DOMContentLoaded', function () {
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

    // Function to handle smooth scrolling
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').slice(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const offsetTop = targetElement.offsetTop;
                window.scrollTo({
                    top: offsetTop - 50,
                    behavior: 'smooth'
                });
                animateLine();
            }
        });
    });
});

// Function for social buttons
let translateXValue = 45;

function prev() {
    const socialButtons = document.querySelector(".social-buttons");
    if (translateXValue < 45) {
        translateXValue += 45;
        socialButtons.style.transform = `translateX(${translateXValue}%) scale(0.9)`;
    }
}

function next() {
    const socialButtons = document.querySelector(".social-buttons");
    if (translateXValue > -45) {
        translateXValue -= 45;
        socialButtons.style.transform = `translateX(${translateXValue}%) scale(0.9)`;
    }
}

prev();
next();

// Add transition to social buttons
const socialButtons = document.querySelector(".social-buttons");
socialButtons.style.transition = "transform 0.5s ease";

// Reset scale to 1 after translating
socialButtons.addEventListener('transitionend', function () {
    socialButtons.style.transform = `translateX(${translateXValue}%) scale(1)`;
});

// Continuously run translation every 2 seconds
setInterval(function() {
    if (translateXValue === 0) {
        // Check the direction from where it came
        const random = Math.random();
        if (random < 0.5) {
            next();
        } else {
            prev();
        }
    } else if (translateXValue === 45) {
        next();
    } else if (translateXValue === -45) {
        prev();
    }
}, 4000);