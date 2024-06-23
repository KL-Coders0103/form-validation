document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Clear previous error messages
    clearErrors();
    
    // Form fields
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var mobile = document.getElementById('mobile').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    
    var valid = true;
    
    // Validate Name
    if (name.trim() === '') {
        showError('nameError', 'Name is required');
        valid = false;
    }
    
    // Validate Email
    if (email.trim() === '') {
        showError('emailError', 'Email is required');
        valid = false;
    } else if (!validateEmail(email)) {
        showError('emailError', 'Invalid email format');
        valid = false;
    }
    
    // Validate Mobile
    if (mobile.trim() === '') {
        showError('mobileError', 'Mobile number is required');
        valid = false;
    } else if (!validateMobile(mobile)) {
        showError('mobileError', 'Mobile number must be 10 digits');
        valid = false;
    }
    
    // Validate Password
    if (password.trim() === '') {
        showError('passwordError', 'Password is required');
        valid = false;
    } else if (password.length < 6) {
        showError('passwordError', 'Password must be at least 6 characters');
        valid = false;
    }
    
    // Validate Confirm Password
    if (confirmPassword.trim() === '') {
        showError('confirmPasswordError', 'Confirm Password is required');
        valid = false;
    } else if (password !== confirmPassword) {
        showError('confirmPasswordError', 'Passwords do not match');
        valid = false;
    }
    
    if (valid) {
        // Display success message
        alert('Form submitted successfully!');
        // Clear form fields
        document.getElementById('registrationForm').reset();
        // Hide success message after 3 seconds
        setTimeout(function() {
            document.getElementById('successMessage').style.display = 'none';
        }, 3000);
    }
});


function clearErrors() {
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('mobileError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('confirmPasswordError').textContent = '';
}

function showError(elementId, message) {
    document.getElementById(elementId).textContent = message;
}

function validateEmail(email) {
    var re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
}

function validateMobile(mobile) {
    var re = /^[0-9]{10}$/;
    return re.test(mobile);
}


