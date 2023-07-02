alert("Hi");
let userEntryPassword=prompt("What is the traveller's passphrase? ");


if(userEntryPassword=="mintleaves"){
	alert("Welcome fellow traveller");
	window.location.replace("./hiddenSite.html");
}
else if(userEntryPassword!="mintleaves"){
	alert("Wrong Password!!");
	alert("This place is a rest for traveller's from the wild non-human landscape. Monsters are banished!!!!");
}

