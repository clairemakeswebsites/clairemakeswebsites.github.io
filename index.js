let copyEmail = document.getElementById("copy");

copyEmail.addEventListener("click", () => {
	navigator.clipboard.writeText("clairemakeswebsites@gmail.com");
	console.log("copied email to clipboard")
})

let first = "clairemakeswebsites";
let second = Math.pow(2,6);
let third = String.fromCharCode(second);
let fourth = "gmail.com";
let fifth = first + String.fromCharCode(second) + fourth;
document.getElementById("email").textContent = `${first}${third}${fourth}`;



let copyResumeEmail = document.getElementById('copy-resume')

copyResumeEmail.addEventListener("click", () => {
	navigator.clipboard.writeText("clairemakeswebsites@gmail.com");
	console.log("copied email to clipboard")
})