
function input_enter(event,id,focus_num){

	let ele=event.target;
	if(focus_num){
		ele.previousElementSibling.style.top="27%";
		ele.previousElementSibling.style.fontSize="75%";
		ele.parentElement.style.outline="2px solid white";
		document.getElementById(id).style.display="none";
		ele.parentElement.style.border="1px solid rgba(255,255,255,0.5)";
		if(id=="notify1"){
			ele.nextElementSibling.style.visibility="visible";
		}
		else if(id=="notify"){
			ele.parentElement.nextElementSibling.nextElementSibling.children[2].style.visibility="hidden";	
		}
	}
	else{
		ele.parentElement.style.outline="none";
		if(ele.value==""){
			ele.previousElementSibling.style.top="50%";
			ele.previousElementSibling.style.fontSize="100%";
			ele.parentElement.style.border="1px solid #eb3942";
			document.getElementById(id).style.display="block";
		}
		else{
			ele.previousElementSibling.style.top="27%";
			ele.previousElementSibling.style.fontSize="75%";
			ele.parentElement.style.border="1px solid rgba(255,255,255,0.5)";
			document.getElementById(id).style.display="none";
		}
	}
}

function visible(event){
	event.stopPropagation();
	let ele=document.getElementById("passwdiv");
	ele.children[1].type=ele.children[1].type=="password"?"text":"password";
	ele.children[2].innerHTML=ele.children[2].innerHTML=="visibility"?"visibility_off":"visibility";
	
	ele.children[1].click();
	ele.style.border="1px solid rgba(255,255,255,0.5)";
	ele.style.outline="2px solid white";
	ele.firstElementChild.style.top="27%";
	ele.firstElementChild.style.fontSize="75%";
	document.getElementById("notify1").style.display="none";
	
}

function remember_over(num){
	let ele=document.getElementById("checkb");
	if(ele.checked){
		if(num) ele.style.opacity="60%"; 
		else ele.style.opacity="100%";
	}
	else{
		if(num) ele.style.opacity="100%"; 
		else ele.style.opacity="40%";
	}

}




