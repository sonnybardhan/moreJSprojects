const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

function showError(input, msg) {
	const formControl = input.parentElement;
	formControl.className = 'form-control error';
	const small = formControl.querySelector('small');
	small.innerText = msg;
}

function showSuccess(input) {
	input.parentElement.className = 'form-control success';
}

function checkEmail(input) {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (re.test(input.value.trim())) {
		showSuccess(input);
	} else {
		showError(input, 'Invalid email ID');
	}
}

function capitalizeFirst(str) {
	return str[0].toUpperCase() + str.slice(1);
}

function checkInputLength(input, min, max) {
	if (input.value.length < min || input.value.length > 15)
		showError(input, `${capitalizeFirst(input.id)} should be min ${min} & max ${max} chars.`);
}
function checkPasswords(a, b) {
	if (a.value === b.value) {
		showSuccess(password);
		showSuccess(password2);
	} else {
		showError(password, '');
		showError(password2, 'Passwords do not match');
	}
}
function checkElements(arr) {
	arr.forEach((input) => {
		if (input.value.trim() === '') showError(input, `${capitalizeFirst(input.id)} is required`);
		else {
			showSuccess(input);
		}
	});
}
form.addEventListener('submit', function(e) {
	e.preventDefault();

	elementsArr = [ username, email, password, password2 ];

	checkElements(elementsArr);
	checkInputLength(username, 3, 3);
	checkInputLength(password, 6, 15);
	checkInputLength(password2, 6, 15);
	checkEmail(email);
	checkPasswords(password, password2);
});
