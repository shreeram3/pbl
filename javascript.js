
const mainpage=()=>{
	const homepage = document.getElementById("homepage");
	homepage.style.display = "none";
}

const list = [
{
	"name":"shreeram",
	"home":"inhome",
	"color":"white"
},
{
	"name":"sahana",
	"home":"inhome",
	"color":"pink"
}

]
char  = document.getElementById("shri")
const deft =(list)=>{
	const flist = list.map((charaters) =>{
		return `
		<div class = "welcome-text">${charaters.name}</div>
		<div>${charaters.home}</div>
		`;
	}).join('');
	char.innerHTML = flist;
}

deft(list)