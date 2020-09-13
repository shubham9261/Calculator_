var operand1=0;
var operand2=null;
var oper=null;
var display=document.querySelector(".display");
var cl=document.querySelectorAll(".col");
var ops=["%","/","*","-","+","="];
console.log(cl[0].innerHTML);
for(var i=0;i<19;i++)
{
	cl[i].addEventListener("click",function()
		{
			//cl[i].style.color="red";
			var value=this.getAttribute("data-value");
			if(value=="=")
			{
				var x=eval(display.innerHTML);
				display.innerText=x;

			}
			else if(value=="A/C" )
			{
				 display.innerHTML="0";
				 //display.innerHTML="0"
			}
			else if(ops.indexOf(value)!=-1)
			{
				display.innerText+=value;
			}
			else{
				display.innerText+=value;
			}
		}
	);
}
