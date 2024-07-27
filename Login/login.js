// login.js

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.login-form form');
    
    form.addEventListener('submit', function (event) {
        const username = form.querySelector('input[name="user"]');
        const password = form.querySelector('input[name="password"]');
        let valid = true;

        // Clear any previous error messages
        clearErrors();

        // Username required
        if (username.value.trim() === '') {
            showError(username, 'Username is required');
            valid = false;
        } else if (!validateEmail(username.value.trim())) {
            showError(username, 'Invalid email format');
            valid = false;
        }

        // Password required
        if (password.value.trim() === '') {
            showError(password, 'Password is required');
            valid = false;
        } else if (password.value.length < 8) {
            showError(password, 'Password must be at least 8 characters long');
            valid = false;
        } else if (!validatePassword(password.value)) {
            showError(password, 'Password must contain uppercase, lowercase, number, and special character');
            valid = false;
        }

        if (!valid) {
            event.preventDefault(); // Prevent form submission if validation fails
        } else {
            event.preventDefault(); // Prevent default form submission
            window.location.href = 'hello.html'; // Redirect to hello.html on successful validation
        }
    });

    function showError(input, message) {
        const errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        errorElement.textContent = message;
        input.parentNode.insertBefore(errorElement, input.nextSibling);
    }

    function clearErrors() {
        const errors = document.querySelectorAll('.error-message');
        errors.forEach(error => error.remove());
    }

    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    function validatePassword(password) {
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return passwordPattern.test(password);
    }
});
