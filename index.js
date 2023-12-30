
function enter(event,n){
	let ele=event.target;
	if(n==1){
		ele.parentElement.style.outline="2px solid white";
		ele.previousElementSibling.style.top="30%";
		ele.previousElementSibling.style.fontSize="80%";
		
	}
	else{
		ele.parentElement.style.outline="none";
		if(ele.value==""){
			ele.parentElement.style.border="1px solid rgba(255,0,0,0.5)";
			ele.previousElementSibling.style.top="50%";
			ele.previousElementSibling.style.fontSize="100%";
			document.getElementById("notify").style.display="block";
		}
		else{
			ele.parentElement.style.border="1px solid rgba(0,255,0,0.5)";
			document.getElementById("notify").style.display="none";
		}

	}
}
