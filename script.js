const randomPass = document.getElementById("password");

const lenght = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "1234567890";
const symbol = "?<{:|@#$%^&*()";
const allChars = upperCase + lowerCase + number + symbol;

function createPassword() {
	let password = "";
	password += upperCase[Math.floor(Math.random() * upperCase.length)];
	password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
	password += number[Math.floor(Math.random() * number.length)];
	password += symbol[Math.floor(Math.random() * symbol.length)];

	while (lenght > password.length) {
		password += allChars[Math.floor(Math.random() * allChars.length)];
	}

	randomPass.value = password;
}

document.getElementById("btn").addEventListener("click", createPassword());

function copy() {
	randomPass.select();
	document.execCommand("copy");
}
