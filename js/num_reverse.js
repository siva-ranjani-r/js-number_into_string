var flex=document.createElement("div");
document.body.appendChild(flex);
flex.setAttribute("style","background-color:teal");
var input=document.createElement("input");
flex.appendChild(input);
input.setAttribute("id","num");
input.style.border="2px solid black";
input.style.backgroundColor="lightblue";
input.setAttribute("placeholder","enter number :");


var check_element=document.createElement("button")
flex.appendChild(check_element);
check_element.innerHTML="check";
check_element.setAttribute("type","button");
check_element.style.backgroundColor="pink";
check_element.style.border="2px solid black";
check_element.style.margin="50px";



check_element.onclick=function()
{
var number=document.getElementById("num").value;
			 while(number>0){
				 rem=number%10;
				 number=(number-rem)/10;
				 if (rem==1)
				 {
					 document.write("one")
				 }
				 else if (rem==2)
				 {
					 document.write("two")
				 }
				 else if (rem==3)
				 {
					 document.write("three")
				 }
				 else if (rem==4)
				 {
					 document.write("four")
				 }
				 else if (rem==5)
				 {
					 document.write("five")
				 }
				 else if (rem==6)
				 {
					 document.write("six")
				 }
				 else if (rem==7)
				 {
					 document.write("seven")
				 }
				 else if (rem==8)
				 {
					 document.write("eight")
				 }
				 else if (rem==9)
				 {
					 document.write("nine")
				 }
				 else
				 {
					 document.write("zero")
				 }
			 }
			
document.body.style.backgroundColor="gray";	
}