document.addEventListener("DOMContentLoaded", () => {
	const loginForm = document.querySelector("#login");
	const mainForm = document.querySelector("#main");
	const loginForm = document.querySelector("#contact");
	const loginForm = document.querySelector("#updel");


	document.querySelector("#loginbutton").addEventListener("click", () => {
		loginForm.classList.add("form--hidden");
		mainForm.classList.remove("form--hidden");
	});

});