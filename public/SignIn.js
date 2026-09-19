const signInForm = document.querySelector('#signin-form');
const loginMessage = document.querySelector('#login-message');

signInForm?.addEventListener('submit', (event) => {
	event.preventDefault();
	loginMessage.textContent = 'Welcome back. Your collection awaits.';
});
