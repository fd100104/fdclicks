document.addEventListener('DOMContentLoaded', function() {
    checkAuth(); // Ensure user is authenticated
    
    const navUsername = document.getElementById('nav-username');
    const userInfo = document.getElementById('user-info');
    const logoutBtn = document.getElementById('logout-btn');
    
    const currentUser = getCurrentUser();
    
    // Display user info
    navUsername.textContent = currentUser.name;
    userInfo.innerHTML = `
        <strong>Name:</strong> ${currentUser.name}<br>
        <strong>Email:</strong> ${currentUser.email}
    `;
    
    logoutBtn.addEventListener('click', logout);
});