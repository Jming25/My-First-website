function validatePW(){
	var enteredPW = document.getElementById("login-pw").value;
	var correctPW = "0609";
	
	if (enteredPW == correctPW){
		window.location.href = "https://jming25.github.io/My-First-Website/mainpage.html";
	} else {
		alert("Incorrect password");
	}
}


function forgetPW(){
	alert("The password is 0609 😉");
}
