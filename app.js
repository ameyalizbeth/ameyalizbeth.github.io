const button= document.querySelector(".change");
const input= document.querySelector(".input");
const list= document.querySelector(".list ");

button.addEventListener("click",function(){
const newli=document.createElement('LI');
const listcontent=document.createTextNode(input.value);
newli.appendChild(listcontent);
list.appendChild(newli);

});