const passwordGenrator = document.getElementById("password");
const ashu = 16;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "1234567890";
const symbol = "?<{:|@#$%^&*()";
const allCar = upperCase + lowerCase + number + symbol;

function createPassword() {
	let password = "";
	password += upperCase[Math.floor(Math.random() * upperCase.length)];
	password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
	password += number[Math.floor(Math.random() * number.length)];
	password += symbol[Math.floor(Math.random() * symbol.length)];

	while (ashu > password.length) {
		password += allCar[Math.floor(Math.random() * symbol.length)];
	}
	passwordGenrator.value = password;
}

document.getElementById("btn").addEventListener("click");
