function validation() {
	const popup = document.getElementById("popup");
	const passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
	const form = document.forms["formfill"];
	const resultElement = document.getElementById("result");

	// Clear previous error messages
	resultElement.innerHTML = "";

	// Retrieve registered users from local storage
	const registeredUsers =
		JSON.parse(localStorage.getItem("registeredUsers")) || [];

	// Check if username or email already exists
	const existingUsername = registeredUsers.find(
		(user) => user.username === form.Username.value
	);
	const existingEmail = registeredUsers.find(
		(user) => user.email === form.Email.value
	);

	if (form.Username.value.trim() == "" || form.Username.value == null) {
		resultElement.innerHTML = "Enter Username*";
		return false;
	} else if (form.Username.value.length <= 6) {
		resultElement.innerHTML = "Username must be at least 6 characters*";
		return false;
	} else if (existingUsername) {
		resultElement.innerHTML = "Username already exists*";
		return false;
	} else if (form.Email.value == "") {
		resultElement.innerHTML = "Enter your Email*";
		return false;
	} else if (existingEmail) {
		resultElement.innerHTML = "Email already exists*";
		return false;
	} else if (form.Password.value == "") {
		resultElement.innerHTML = "Enter password*";
		return false;
	} else if (form.Password.value.length <= 6) {
		resultElement.innerHTML = "Password must be at least 7 characters*";
		return false;
	}
	else if (!form.Password.value.match(passw))
	{
		resultElement.innerHTML = "password must include one A-Z a-z 0-9*";
		return false
	}
	 else if (form.ConfirmPassword.value == "") {
		resultElement.innerHTML = "Enter Confirm password*";
		return false;
	} else if (form.ConfirmPassword.value !== form.Password.value) {
		resultElement.innerHTML = "Passwords don't match*";
		return false;
	} else {
		// Store user data in local storage after the validation
		const userData = {
			username: form.Username.value,
			email: form.Email.value,
			password: form.Password.value,
		};
		addUserToLocalStorage(userData);
		printRegisteredUsers();
		// Show popup message
		popup.classList.add("open-slide");

		// Clear form fields
		form.reset();

		// Clear error message after successful validation
		resultElement.innerHTML = "";

		return false;
	}
}

function closeSlide() {
	const popup = document.getElementById("popup");
	popup.classList.remove("open-slide");
}

// Function to add new registered user to local storage

function addUserToLocalStorage(user) {
	let users = JSON.parse(localStorage.getItem("registeredUsers")) || [];
	users.push(user);
	localStorage.setItem("registeredUsers", JSON.stringify(users));
}

// Function to print all registered users
function printRegisteredUsers() {
	let users = JSON.parse(localStorage.getItem("registeredUsers")) || [];
	console.log(users);
}

function loginValidation() {
	
	const form = document.forms["loginForm"];
	const resultElement = document.getElementById("login_result");

	// Example validation (check if email and password are not empty)
	if (form.Email.value == "") {
		resultElement.innerHTML = "Enter your Email*";
		return false;
	} else if (form.Password.value.trim() == "") {
		resultElement.innerHTML = "Enter password*";
		return false;
	}

	// Retrieve registered users from local storage
	const registeredUsers =
		JSON.parse(localStorage.getItem("registeredUsers")) || [];

	// Check if entered email and password match with any registered user
	const enteredEmail = form.Email.value;
	const enteredPassword = form.Password.value;
	const authenticatedUser = registeredUsers.find(
		(user) => user.email === enteredEmail && user.password === enteredPassword
	);

	// If authenticatedUser is found, show a success message and allow form submission
	if (!authenticatedUser) {
		resultElement.innerHTML = "Invalid email or password";
		return false;
	} else {
		resultElement.innerHTML = "";
		alert("You are authenticated!");
		
		setTimeout(function () {
			window.location.href = "DashBoardFiles/Dasboard.html"; // Redirect to the dashboard page
		}, 300);
		
		
		
		return false;
	}
}
