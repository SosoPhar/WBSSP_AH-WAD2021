document.addEventListener("DOMContentLoaded", () => {
	const loginForm = document.getElementById("login");
	const mainForm = document.getElementById("main");
	const contactForm = document.getElementById("contact");
	const ownerofcontact = document.getElementById("ownerofcontact");


	const admingreeting = document.getElementById("admingreeting");
	const normalogreeting = document.getElementById("normalogreeting");
	const wrong = document.getElementById("wrong");


	var IsAdmin;
	var i = 0;
	var searchstring1;

	function adminLogin() {
		if (i === 0) {
			onstartLocalStorage();
			i+=1;
		}
		loginForm.classList.add("form--hidden");
		mainForm.classList.remove("form--hidden");
		admingreeting.classList.remove("form--hidden");
		IsAdmin = true;
		ownerofcontact.classList.remove("form--hidden");
	}

	function normaloLogin() {
		if (i === 0) {
			onstartLocalStorage();
			i+=1;
		}
		loginForm.classList.add("form--hidden");
		mainForm.classList.remove("form--hidden");
		normalogreeting.classList.remove("form--hidden");
		IsAdmin = false;
		ownerofcontact.classList.add("form--hidden");
	}

	function onstartLocalStorage() {
		let Kontakt1 = {
			name: "Aleks",
			lastname: "Hinze",
			streetnr: "Karl-Holtz-Strase 17",
			zipcode: "12687",
			city: "Berlin",
			state: "Berlin",
			country: "Deutschland",
			privatecheck: "Offen",
			ownerofcontact: "Admin"
		}
		let Kontakt2 = {
			name: "Max",
			lastname: "Mustermann",
			streetnr: "Karl-weit-Strase 17",
			zipcode: "12687",
			city: "Berlin",
			state: "Berlin",
			country: "Deutschland",
			privatecheck: "Privat",
			ownerofcontact: "Admin",
		}
		let Kontakt3 = {
			name: "Vanessa",
			lastname: "Boehm",
			streetnr: "Am Frankenfurter Tor 13",
			zipcode: "19287",
			city: "Berlin",
			state: "Berlin",
			country: "Deutschland",
			privatecheck: "Offen",
			ownerofcontact: "Normalo"
		}
		let Kontakt4 = {
			name: "Paul",
			lastname: "Urg",
			streetnr: "Mitte",
			zipcode: "12687",
			city: "Berlin",
			state: "Berlin",
			country: "Deutschland",
			privatecheck: "Privat",
			ownerofcontact: "Normalo"
		}

		KontaktGepackt1 = JSON.stringify(Kontakt1);
		localStorage.setItem(document.getElementById("name").value + ' ' + document.getElementById("lastname").value, KontaktGepackt1);
		var Kontakte = JSON.parse(localStorage[document.getElementById("name").value + ' ' + document.getElementById("lastname").value]);
		var  myH1= document.createElement('h4');
		var myText1 = document.createTextNode(Kontakte['name'] + ' ' + Kontakte['lastname'] + ' ' + Kontakte['streetnr'] + ' ' + Kontakte['zipcode'] + ' ' + Kontakte['city'] + ' ' + Kontakte['state'] + ' ' + Kontakte['country'] + ' ' + Kontakte['privatecheck'] + ' ' + Kontakte['ownerofcontact']);
		myH1.appendChild(myText1);
		var ausgabe = document.getElementById("ausgabe");
		ausgabe.appendChild(myH1);
		
		KontaktGepackt2 = JSON.stringify(Kontakt2);
		localStorage.setItem(document.getElementById("name").value + ' ' + document.getElementById("lastname").value, KontaktGepackt2);
		var Kontakte = JSON.parse(localStorage[document.getElementById("name").value + ' ' + document.getElementById("lastname").value]);
		var myH1 = document.createElement('h4');
		var myText2 = document.createTextNode(Kontakte['name'] + ' ' + Kontakte['lastname'] + ' ' + Kontakte['streetnr'] + ' ' + Kontakte['zipcode'] + ' ' + Kontakte['city'] + ' ' + Kontakte['state'] + ' ' + Kontakte['country'] + ' ' + Kontakte['privatecheck'] + ' ' + Kontakte['ownerofcontact']);
		myH1.appendChild(myText2);
		var ausgabe = document.getElementById("ausgabe");
		ausgabe.appendChild(myH1);
		
		KontaktGepackt3 = JSON.stringify(Kontakt3);
		localStorage.setItem(document.getElementById("name").value + ' ' + document.getElementById("lastname").value, KontaktGepackt3);
		var Kontakte = JSON.parse(localStorage[document.getElementById("name").value + ' ' + document.getElementById("lastname").value]);
		var myH1 = document.createElement('h4');
		var myText3 = document.createTextNode(Kontakte['name'] + ' ' + Kontakte['lastname'] + ' ' + Kontakte['streetnr'] + ' ' + Kontakte['zipcode'] + ' ' + Kontakte['city'] + ' ' + Kontakte['state'] + ' ' + Kontakte['country'] + ' ' + Kontakte['privatecheck'] + ' ' + Kontakte['ownerofcontact']);
		myH1.appendChild(myText3);
		var ausgabe = document.getElementById("ausgabe");
		ausgabe.appendChild(myH1);
		

		KontaktGepackt4 = JSON.stringify(Kontakt4);
		localStorage.setItem(document.getElementById("name").value + ' ' + document.getElementById("lastname").value, KontaktGepackt4);
		var Kontakte = JSON.parse(localStorage[document.getElementById("name").value + ' ' + document.getElementById("lastname").value]);
		var myH1 = document.createElement('h4');
		var myText4 = document.createTextNode(Kontakte['name'] + ' ' + Kontakte['lastname'] + ' ' + Kontakte['streetnr'] + ' ' + Kontakte['zipcode'] + ' ' + Kontakte['city'] + ' ' + Kontakte['state'] + ' ' + Kontakte['country'] + ' ' + Kontakte['privatecheck'] + ' ' + Kontakte['ownerofcontact']);
		myH1.appendChild(myText4);
		var ausgabe = document.getElementById("ausgabe");
		ausgabe.appendChild(myH1);

		result1 = JSON.stringify(Kontakt1).includes("Privat");
		result2 = JSON.stringify(Kontakt2).includes("Privat");
		result3 = JSON.stringify(Kontakt3).includes("Privat");
		result4 = JSON.stringify(Kontakt4).includes("Privat");

		
		
	}

	function addToLocalStorage() {
		let Kontakt = {
			name: document.getElementById("name").value,
			lastname: document.getElementById("lastname").value,
			streetnr: document.getElementById("streetnr").value,
			zipcode: document.getElementById("zipcode").value,
			city: document.getElementById("city").value,
			state: document.getElementById("state").value,
			country: document.getElementById("country").value,
			privatecheck: document.getElementById("privatecheck").value,
			ownerofcontact: document.getElementById("ownerofcontact").value
		}
		KontaktGepackt = JSON.stringify(Kontakt);

		localStorage.setItem(document.getElementById("name").value + ' ' + document.getElementById("lastname").value, KontaktGepackt);

		var Kontakte = JSON.parse(localStorage[document.getElementById("name").value + ' ' + document.getElementById("lastname").value]);

		var myH2 = document.createElement('h4');
		var myText = document.createTextNode(Kontakte['name'] + ' ' + Kontakte['lastname'] + ' ' + Kontakte['streetnr'] + ' ' + Kontakte['zipcode'] + ' ' + Kontakte['city'] + ' ' + Kontakte['state'] + ' ' + Kontakte['country'] + ' ' + Kontakte['privatecheck'] + ' ' + Kontakte['ownerofcontact']);
		myH2.appendChild(myText);
		var ausgabe = document.getElementById("ausgabe");
		ausgabe.appendChild(myH2);

		result = JSON.stringify(Kontakt).includes("Privat");
		
	}

	document.getElementById("loginbutton").addEventListener("click", e => {
		e.preventDefault();
		if (document.getElementById("username").value === "admin") {
			if (document.getElementById("password").value === "admin") {
				wrong.classList.add("form--hidden");
				adminLogin();
			} else {
				wrong.classList.remove("form--hidden");
			}
		} else if (document.getElementById("password").value === "normalo") {
			if (document.getElementById("password").value === "normalo") {
				wrong.classList.add("form--hidden");
				normaloLogin();
			} else {
				wrong.classList.remove("form--hidden");
			}
		} else {
			wrong.classList.remove("form--hidden");
		}
	});

	document.getElementById("logoutbutton").addEventListener("click", e => {
		e.preventDefault();
		loginForm.classList.remove("form--hidden");
		mainForm.classList.add("form--hidden");
		admingreeting.classList.add("form--hidden");
		normalogreeting.classList.add("form--hidden");
	});

	document.getElementById("addnewcontact").addEventListener("click", e => {
		e.preventDefault();
		mainForm.classList.add("form--hidden");
		contactForm.classList.remove("form--hidden");
	});

	document.getElementById("save").addEventListener("click", e => {
		e.preventDefault();
		mainForm.classList.remove("form--hidden");
		contactForm.classList.add("form--hidden");
		
	});

	document.getElementById("add").addEventListener("click", e => {
		e.preventDefault();
		addToLocalStorage();
	});

	document.getElementById("showallcontacts").addEventListener("click", e => {
		e.preventDefault();
		if (IsAdmin === true) {
			
		} else {
		}
	});

	document.getElementById("showmycontacts").addEventListener("click", e => {
		e.preventDefault();
		if (IsAdmin === true) {
	
		} else {

		}
	});
});