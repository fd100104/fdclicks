document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signup-form');
    const signupError = document.getElementById('signup-error');
    const signupSuccess = document.getElementById('signup-success');

    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('signup-name').value;
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;
        
        const users = getAllUsers();
        const emailExists = users.some(u => u.email === email);
        
        if (emailExists) {
            signupError.textContent = 'Email already registered. Please login.';
            signupError.classList.remove('d-none');
            return;
        }
        
        const newUser = { name, email, password };
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        
        signupSuccess.classList.remove('d-none');
        signupForm.reset();
        
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 2000);
    });
});