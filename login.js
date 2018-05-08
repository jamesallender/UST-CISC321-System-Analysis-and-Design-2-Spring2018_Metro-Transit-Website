function initialize() {
	var input = document.getElementById('username');
	var input2 = document.getElementById('password');
    var loginButton = document.getElementById('loginButton')

	input.addEventListener('keyup', function(event) {
    	if (event.keyCode === 13) {
            if(input.value.length<1||input2.value.length<1) {alert('Please enter an ID and Pin number!');}
    		else {document.location.href = 'Menu.html';}
    	}//if (event.keyCode === 13) {
 	});//input.addEventListener('keyup', function(event) {

    loginButton.addEventListener('click', function(event) {
        if(input.value.length<1||input2.value.length<1) {alert('Please enter an ID and Pin number!');
        } else {
            document.location.href = 'Menu.html';
        }//else
    });//loginButton.addEventListener('click', function(event) {

	input2.addEventListener('keyup', function(event) {    
    if (event.keyCode === 13) {
            if(input.value.length<1||input2.value.length<1) {alert('Please enter an ID and Pin number!');}
            else {document.location.href = 'Menu.html';}
        }//if (event.keyCode === 13)
 });//input2.addEventListener('keyup', function(event) {   
}