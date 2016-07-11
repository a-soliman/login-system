var users = [
{ 
 	name: "ahmed",
 	password: "123"
},
{
	name: "john",
	password: "234"
},
{
	name: "george",
	password: "567"
}
]


// the login system
function logIn() {
	// getting the data
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value

	// preparing the output 
	var logInOutput = document.getElementById('logInOutput')
	var h3 = document.createElement('h3')
	var p = document.createElement('p')
	var loggedStatus = document.createTextNode(', is logged in')
	var faildStatus = document.createTextNode('wrong username or password.')

	for (var i = 0; i < users.length; i++) {
		if ((username == users[i].name) && (password == users[i].password)) {
			console.log(users[i].name + " is logged in")
		
		//making text node of the matching name
		outputName = document.createTextNode(users[i].name)		
			//appending the maching name into h3
			h3.appendChild(outputName)
			// appending the success status to the p
			p.appendChild(loggedStatus)
			// appending the h3 and the p into the div
			logInOutput.appendChild(h3)
			logInOutput.appendChild(p)
			// changing the div dlass
			logInOutput.setAttribute('class', 'logInOutput')
			return 
		}
	} console.log('is not working')

		// appending the error status to the p
	  	p.appendChild(faildStatus)
	  	//appending the p to the div 
		logInOutput.appendChild(p)
		//changing the div class
		logInOutput.setAttribute('class', 'logInOutput')

}
//============================================================================
// the sign up

function signUp() {
	// getting the date.value
	var newUsername = document.getElementById('newUsername').value
	var newpassword = document.getElementById('newPassword').value


	var newusers = { 
		name: newUsername, 
		password: newpassword 
	}




	// checking if the username was already taken..
	for (var i = 0; i < users.length; i++) {
		if (newUsername == users[i].name) {
			Output.appendChild('the username: ' + newUsername + ' is already taken..TryAgain')
			console.log('the username: ' + newUsername + ' is already taken..TryAgain')
			return
		} 
		// checking if the password is at least 6 chracters
		else if(newpassword.length < 6 ) {
			console.log('your password is less the 6 chracters..')
			return
		}
		// otherwise it works
		} users.push(newusers )
			console.log(newUsername + ' is signed up and may log in')


	
	
}