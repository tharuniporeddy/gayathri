document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');
    const currentPath = window.location.pathname.split('/').pop(); // Gets 'index.html', 'login.html', etc.

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        } else if (currentPath === '' && link.getAttribute('href') === 'index.html') {
            // Handle case where index.html is accessed directly without the filename
            link.classList.add('active');
        }
    });

    // --- Feedback Form Logic ---
    const feedbackForm = document.getElementById('feedbackForm');
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent actual form submission

            const rating = document.getElementById('rating').value;
            const comments = document.getElementById('comments').value;
            const emailFeedback = document.getElementById('email_feedback').value;
            const feedbackMessage = document.getElementById('feedbackMessage');

            if (rating === '') {
                feedbackMessage.textContent = 'Please select a satisfaction rating.';
                feedbackMessage.className = 'message error'; // Apply error styling
            } else {
                feedbackMessage.textContent = 'Thank you for your feedback! (No data is actually sent)';
                feedbackMessage.className = 'message success'; // Apply success styling
                feedbackForm.reset(); // Clear the form
                console.log('Feedback Submitted (Simulated):', { rating, comments, emailFeedback });
            }
        });
    }

    // --- Login Form Logic (Simulated) ---
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent actual form submission

            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const loginMessage = document.getElementById('loginMessage');

            if (username === '' || password === '') {
                loginMessage.textContent = 'Please enter both username and password.';
                loginMessage.className = 'message error';
            } else {
                // This is purely for demonstration. In a real app, you'd send
                // these credentials to a server for authentication.
                loginMessage.textContent = `Attempting to log in as ${username}... (No actual authentication)`;
                loginMessage.className = 'message success';
                console.log('Login Attempt (Simulated):', { username, password });
                // You might clear the form or redirect after a simulated "successful" login
                // loginForm.reset();
            }
        });
    }
});
