const signUpForm = document.querySelector('#signup-form');
const signUpMessage = document.querySelector('#login-message');

signUpForm?.addEventListener('submit', (event) => {
	event.preventDefault();
	const password = document.querySelector('#password')?.value;
	const confirmation = document.querySelector('#confirm-password')?.value;
	if (password !== confirmation) {
		signUpMessage.textContent = 'Please make sure both passwords match.';
		return;
	}
	signUpMessage.textContent = 'Your Aurelia account is ready.';
});
