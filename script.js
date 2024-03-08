function toggleMenu() {
	const menu = document.querySelector(".menu-links");
	const Icon = document.querySelector(".second-nav-icon ");
	menu.classList.toggle("open");
	Icon.classList.toggle("open");
}

const name = document.getElementById("name");
const password = document.getElementById("password");
const nameError = document.getElementById("name_error");
//    const submit=document.getElementById('submit')
const form = document.getElementById("login-form");
const passwordError = document.getElementById("pass-error");

form.addEventListener("submit", (e) => {
	var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
	if (name.value.trim() === "" || name.value == null) {
		e.preventDefault();
		nameError.innerHTML = " name field required";
		name.style.border = "1px solid red";
	} else {
		nameError.innerHTML = "";
		name.style.border = "1px solid black";
	}

	if (password.value.length <= 5) {
		e.preventDefault();
		passwordError.innerHTML = "Password must be At sleep 6 characters";
		password.style.border = "1px solid red";
	} else if (!password.value.match(passw)) {
		e.preventDefault();
		passwordError.innerHTML = "Format (Aa4)";
		password.style.border = "1px solid red";
	} else {
		passwordError = "";
		password.style.border = "1px solid black";
		window.location.href = "index.html";
	}
});

// contact form validation



console.log("Script file loaded successfully!");
