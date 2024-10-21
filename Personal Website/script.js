document.addEventListener("DOMContentLoaded", function() {
    const name = "Silvester Htet"; // Replace with your name
    const typedNameElement = document.getElementById("typed-name");

    let i = 0;
    typedNameElement.innerHTML = ''; // Clear any initial content

    // Function to type the name out
    function type() {
        if (i < name.length) {
            typedNameElement.innerHTML += name.charAt(i);
            i++;
            setTimeout(type, 150); // Adjust typing speed (milliseconds)
        } else {
            // Wait for 1 second before scrolling to the next section
            setTimeout(function() {
                document.querySelector(".about-section").scrollIntoView({ behavior: "smooth" });
            }, 1000); // 1 second delay
        }
    }

    type(); // Start typing effect
});

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active'); // Toggle active class on hamburger
    });
});