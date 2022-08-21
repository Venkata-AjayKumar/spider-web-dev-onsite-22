
document.getElementById("submit").addEventListener("click", myFunction);

function myFunction() {
    const text=file.textContent;
const fontstyle=document.getElementById("fontstyle").value;
const size =document.getElementById("size").value;
const color=document.getElementById("color").value;
const file=document.getElementById("myfile");

file.value=text;
file.style.color=color;
file.style.size=size;
file.style.fontStyle=fontstyle;



}