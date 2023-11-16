function login() {
    // Replace this with your actual authentication logic
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Check if the entered username and password are valid
    if (username === 'admin' && password === 'adminpassword') {
        alert('Login successful!');
        // Redirect to a dashboard or another page
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid username or password. Try again.');
    }
}
