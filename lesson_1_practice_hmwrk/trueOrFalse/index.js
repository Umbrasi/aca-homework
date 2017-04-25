console.log("Use 'check' function.  For example- check('true')");

function check(x){
	var t="true";
	var f="false";
	if(x===t){
		return true;
	}
	if(x===f){
		return false;
	}
	else{
		return "Wrong input";
	}
}