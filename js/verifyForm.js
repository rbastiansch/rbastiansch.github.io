function colorFalse(element){
	document.getElementById(element).style.borderColor = 'red';
	document.getElementById(element).nextElementSibling.style.display = 'block';
	document.getElementById(element).nextElementSibling.style.color = 'red';
}

function colorTrue(element){
	document.getElementById(element).style.borderColor = '#00a076';
	document.getElementById(element).nextElementSibling.style.display = 'none';
	document.getElementById(element).nextElementSibling.style.color = 'red';
}

let verifyElements = true;
function validator(element){
	if (element == 'email') {
		const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		if(!document.getElementById(element).value.match(mailFormat)){
			colorFalse(element);
			verifyElements = false;
		}else{
			colorTrue(element);
		}
	}else{
		if(document.getElementById(element).value === "" && document.getElementById(element) != 'email'){
			colorFalse(element);
			verifyElements = false;
		}else{
			colorTrue(element);
			verifyElements = true;
		}
	}
}	

const elements = ['name','subject','email','message'];
function validatorFinal(){
	for (var i = 0; i < 4; i++) {
		validator(elements[i]);
		if(!verifyElements){
			return false;
		}
	}
}