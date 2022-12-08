
var main = document.getElementById("container");

var label1 = document.createElement("LABEL");
label1.innerHTML = "Enter a number to display a multiplication table:";
main.appendChild(label1);

var input1=document.createElement("INPUT");
input1.setAttribute("type","number");
input1.setAttribute("min",1);
main.appendChild(input1);

var label2 = document.createElement("LABEL");
label2.innerHTML = "Enter a number to describe the range of a table:";
main.appendChild(label2);

var input2=document.createElement("INPUT");
input2.setAttribute("type","number");
input2.setAttribute("min",10);
main.appendChild(input2);

input2.addEventListener("input",()=>{
	if(input2.value<10){
		alert("enter after 10 in second input");
	}
	else{
		for (var j=1;j<=input2.value;j++){
		var para = document.createElement("P");
		para.innerHTML = j +" * "+input1.value+" = "+ j*input1.value;
		main.appendChild(para);
		}
	}
});


