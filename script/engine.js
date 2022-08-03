/*
	Mayank All Right Reserved
	Website 7 Browsor
	Script/engine.js
*/
try
{
	let main = document.getElementsByTagName('main');

	let h1 = document.getElementsByTagName('h1');

	let data = document.getElementById('data');

   	let fld = document.getElementById('search_fld');

   	let btn = document.getElementsByClassName('btn');
   
	var secure = false;

   	btn[0].onclick = function()
	{
		if(fld.value == "hallo")
		{
			const pass = prompt("Enter Passowrd :");

			if(pass == "alisha")
			{
				secure = true;
				document.getElementsByTagName('h5')[0].innerHTML = "---------------{ Welcome Master What I can do for You? }---------------";
				data.style.display = "grid";
			}
			else
			{
				alert("May You Evil");
			}
		}
		if(fld.value == "theme" && secure)
		{
			main[0].style.background = "#000";
			data.style.background = "#000";
			h1[0].style.color = "#fff";
			fld.style.color = "#fff";
		}
		if(!secure)
		{
			window.open(fld.value);
		}
	}
   	btn[1].onclick = function()
   	{
		fld.value = '';
		document.location.reload();
	}
}
catch(error)
{
    alert("Error : Search Engine Problem");
}