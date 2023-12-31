
function enter(event,n,m){
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
			if(m==1){
				document.getElementById("notify").style.display="block";
			}
			else{
				document.getElementById("notify1").style.display="block";
			}
		}
		else{
			ele.parentElement.style.border="1px solid rgba(0,255,0,0.5)";
			if(m==1){
				document.getElementById("notify").style.display="none";
			}
			else{
				document.getElementById("notify1").style.display="none";
			}
		}

	}
}

var close_num=-1;
function detail_close(event,num){

	if(close_num==-1){
		event.target.parentElement.children[0].children[1].innerHTML="close";
		event.target.parentElement.children[2].style.display="block";
		close_num=num;
	}
	else if(close_num==num){
		event.target.parentElement.children[2].style.display="none";
		event.target.parentElement.children[0].children[1].innerHTML="add";
		close_num=-1;
	}
	else{
		event.target.parentElement.parentElement.children[close_num].children[2].style.display="none";
		event.target.parentElement.parentElement.children[close_num].children[0].children[1].innerHTML="add";
		event.target.parentElement.children[2].style.display="block";
		event.target.parentElement.children[0].children[1].innerHTML="close";
		close_num=num;
	}
}
