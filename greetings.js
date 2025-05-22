const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting")

const HIDDEN_CLASS = "hidden"
const USERNAME_KEY = "username"

function paintGreetings(){
	const username = localStorage.getItem(USERNAME_KEY)
	greeting.innerText = `Hello ${username}!`;
	greeting.classList.remove(HIDDEN_CLASS);
}

function onLoginSubmit(event) {
	event.preventDefault();
	localStorage.setItem(USERNAME_KEY, loginInput.value);
	loginForm.classList.add(HIDDEN_CLASS)
	paintGreetings();
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null){
	loginForm.classList.remove(HIDDEN_CLASS);
	loginForm.addEventListener("submit", onLoginSubmit);
} else {
	paintGreetings();
}