var in_count = document.getElementsByClassName("in_count");
var de_count = document.getElementsByClassName("de_count");
var zero = document.getElementsByClassName("zero");
var zero_facts = document.getElementsByClassName("zero_facts");
var why_in = document.getElementsByClassName("why_in");


in_count[0].addEventListener("click",myfunc1);
de_count[0].addEventListener("click",myfunc2);
zero_facts[0].addEventListener("click",myfunc3);
why_in[0].addEventListener("click",myfunc3);


var a = 0;
function myfunc1(){
a++;

zero[0]	.innerHTML = a;

if(zero[0].innerHTML == 0){
zero[0].style.color ="black";			
		}
if(zero[0].innerHTML > 0){
zero[0].style.color ="green"	;		
		}		

 }

function myfunc2(){		
a--;

zero[0]	.innerHTML = a;	
	
if(zero[0].innerHTML == 0){
zero[0].style.color ="black";			
		}
if(zero[0].innerHTML < 0){
zero[0].style.color ="red"	;		
		}				
		
	}

function myfunc3(){
	window.location.href="facts_of_zero.html"	
		}
