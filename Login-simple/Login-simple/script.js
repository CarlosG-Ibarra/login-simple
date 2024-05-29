function login() {
    clearMessage(); 
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const storedPassword = localStorage.getItem(email);

    if (storedPassword === null) {
        displayMessage('Correo no encontrado. Por favor regístrate.');
    } else if (storedPassword === password) {
        displayMessage('¡Inicio de sesión exitoso!');
    } else {
        displayMessage('Contraseña incorrecta. Inténtalo de nuevo.');
    }
}

function register() {
    clearMessage(); 
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

    if (localStorage.getItem(email) !== null) {
        displayMessage('Correo ya registrado. Por favor usa otro.');
    } else {
        localStorage.setItem(email, password);
        displayMessage('¡Registro exitoso! Ahora puedes iniciar sesión.');
    }
}

function displayMessage(message) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = message;
}


function clearMessage() {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = '';
}

function showLoginForm() {
    clearMessage(); 
    document.getElementById('loginForm').classList.remove('hidden');
    document.getElementById('registerForm').classList.add('hidden');
}

function showRegisterForm() {
    clearMessage(); 
    document.getElementById('registerForm').classList.remove('hidden');
    document.getElementById('loginForm').classList.add('hidden');
}
