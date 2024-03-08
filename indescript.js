








function toggleMenu() {
	const menu = document.querySelector(".menu-links");
	const Icon = document.querySelector(".second-nav-icon ");
	menu.classList.toggle("open");
	Icon.classList.toggle("open");
}












const contactForm = document.getElementById("contactForm");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const textArea= document.getElementById("message");

contactForm.addEventListener("submit", (e) => {
	e.preventDefault();
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	let nameCheck = /^[A-Z][A-Za-z]{4,19}$/;
    const phoneValid = /^\+250\d{9}$/;
	if (
		fname.value.trim() === "" ||
		fname.value == null ||
		!fname.value.match(nameCheck)
	) {
		e.preventDefault();
		alert(
			"Please enter a valid name starting with a capital letter, containing 5 to 20 characters, and consisting of letters only."
		);
		fname.placeholder = "Field required";
		fname.style.color = "red";
		fname.closest(".form-group").style.boxShadow =
			"inset 8px 8px 8px red, inset -8px -8px 8px #c9ebae33";
	} else {
        fname.style.color = "green";
		fname.closest(".form-group").style.boxShadow =
			"inset 8px 8px 8px #49525a, inset -8px -8px 8px #c9ebae33";
	}



if (
	lname.value.trim() === "" ||
	lname.value == null ||
	!lname.value.match(nameCheck)
) {
	e.preventDefault();
	alert(
		"Please enter a valid name starting with a capital letter, containing 5 to 20 characters, and consisting of letters only."
	);
	lname.placeholder = "Field required";
	lname.style.color = "red";
	lname.closest(".form-group").style.boxShadow =
		"inset 8px 8px 8px red, inset -8px -8px 8px #c9ebae33";
} else {
    lname.style.color = "green";
	lname.closest(".form-group").style.boxShadow =
		"inset 8px 8px 8px #49525a, inset -8px -8px 8px #c9ebae33";
}

if(!email.value.trim().match(emailValid)){
    e.preventDefault();

email.placeholder = "Field required";
email.style.color = "red";
	email.closest(".form-group").style.boxShadow =
		"inset 8px 8px 8px red, inset -8px -8px 8px #c9ebae33";
         alert("Please enter a valid email address. Example: example@example.com");
}else {
    email.style.color = "green";
	email.closest(".form-group").style.boxShadow =
		"inset 8px 8px 8px #49525a, inset -8px -8px 8px #c9ebae33";
}

if (!phone.value.trim().match(phoneValid)) {
	e.preventDefault();

	phone.placeholder = "Field required";
	phone.style.color = "red";
	phone.closest(".form-group").style.boxShadow =
		"inset 8px 8px 8px red, inset -8px -8px 8px #c9ebae33";
	alert("Please enter a valid phone number address. Example: +250786327085");
} else {
    phone.style.color = "green";
	phone.closest(".form-group").style.boxShadow =
		"inset 8px 8px 8px #49525a, inset -8px -8px 8px #c9ebae33";
}


if (
	textArea.value.trim() === "" ||
	textArea.value == null ||
	textArea.value.length > 300) {
	e.preventDefault();
	alert(
		"Please enter a valid Message containing not more than 300 words characters."
	);
	textArea.placeholder = "Field required";
	textArea.style.color = "red";
	textArea.closest(".form-group").style.boxShadow =
		"inset 8px 8px 8px red, inset -8px -8px 8px #c9ebae33";
} else {
	textArea.style.color = "green";
	textArea.closest(".form-group").style.boxShadow =
		"inset 8px 8px 8px #49525a, inset -8px -8px 8px #c9ebae33";
}


});

console.log("Script file loaded successfully!");
