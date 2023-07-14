/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

const sum = 10 + 20;

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

const random = Math.floor(Math.random() * 21);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
const me = {
	name: "Vasil",
	surname: "Ivanov",
	age: "20",
};

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

delete me.age;

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

me.skills = ["PHP", "JavaScript"];

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

me.skills.push("nuovo oggetto");

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

me.skills.pop();

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
console.log("ESERCIZIO 1");

const dice = () => {
	const random = Math.floor(Math.random() * (7 - 1) + 1);
	return random;
};

console.log(dice());

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
console.log("ESERCIZIO 2");
const whoIsBigger = (param1, param2) => {
	return (result = param1 > param2 ? param1 : param2);
};

console.log(whoIsBigger(0, 9));

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
console.log("ESERCIZIO 3");
const splitMe = (myString) => myString.split(" ");
console.log(splitMe("ciao come va"));

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
console.log("ESERCIZIO 4");
const deleteOne = (myString, myBool) => (myBool === true ? myString.slice(1) : myString.slice(0, -1));
console.log(deleteOne("macchina", true));

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
console.log("ESERCIZIO 5");

const onlyLetters = (myString) => {
	const contString = myString;

	const position = contString.search(/[0-9]/g);
	console.log(position);
	if (position > 0) {
		contString.slice(7, 8);
	}

	console.log(contString);
	console.log(contString);
};

onlyLetters("I have 4 dogs");

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

console.log("ESERCIZIO 6");
const isThisAnEmail = (stringa) => {
	const regexExp =
		/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;

	return regexExp.test(stringa) ? "L'indirizzo email inserito è valido" : "L'indirizzo email inserito non è valido";
};

console.log(isThisAnEmail("ivanov.vasil235@gmail.com"));

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

const whatDayIsIt = function () {
	const giorniSettimana = ["Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato", "Domenica"];
	const dayOfMonth = new Date().getDay();

	return giorniSettimana[dayOfMonth - 1];
};

console.log(whatDayIsIt());

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
console.log("ESERCIZIO 8");
const rollTheDices = function (num) {
	const obj = { sum: 0, values: [] };

	for (let i = 0; i < num; i++) {
		const numDice = dice();
		obj.sum += numDice;
		obj.values.push(numDice);
	}
	return obj;
};
console.log(rollTheDices(3));

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
// console.log("ESERCIZIO 8");
// const howManyDays = function (paramData) {

// };

// console.log(howManyDays("20/10/2023"));

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
// console.log("ESERCIZIO 10");
// const isTodayMyBirthday = function (birthDate) {
// 	const contData = birthDate.split("/");
// 	const giorno = contData[0];

// 	contData[0] = contData[1];
// 	contData[0] = giorno;

// 	const birthDay = contData.join("/");
// 	const date = new Date();

// 	const birthDates = new Date(birthDate);
// 	if (date.getMonth() === birthDates.getMonth()) {
// 		console.log("ciao");
// 	}
// };

// isTodayMyBirthday("14/07/23");

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

const movies = [
	{
		Title: "The Lord of the Rings: The Fellowship of the Ring",
		Year: "2001",
		imdbID: "tt0120737",
		Type: "movie",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
	},

	{
		Title: "The Lord of the Rings: The Return of the King",
		Year: "2003",
		imdbID: "tt0167260",
		Type: "movie",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
	},
	{
		Title: "The Lord of the Rings: The Two Towers",
		Year: "2002",
		imdbID: "tt0167261",
		Type: "movie",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
	},
	{
		Title: "Lord of War",
		Year: "2005",
		imdbID: "tt0399295",
		Type: "movie",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
	},
	{
		Title: "Lords of Dogtown",
		Year: "2005",
		imdbID: "tt0355702",
		Type: "movie",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
	},
	{
		Title: "The Lord of the Rings",
		Year: "1978",
		imdbID: "tt0077869",
		Type: "movie",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
	},
	{
		Title: "Lord of the Flies",
		Year: "1990",
		imdbID: "tt0100054",
		Type: "movie",
		Poster: "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
	},
	{
		Title: "The Lords of Salem",
		Year: "2012",
		imdbID: "tt1731697",
		Type: "movie",
		Poster: "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
	},
	{
		Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
		Year: "1984",
		imdbID: "tt0087365",
		Type: "movie",
		Poster: "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
	},
	{
		Title: "Lord of the Flies",
		Year: "1963",
		imdbID: "tt0057261",
		Type: "movie",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
	},
	{
		Title: "The Avengers",
		Year: "2012",
		imdbID: "tt0848228",
		Type: "movie",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
	},
	{
		Title: "Avengers: Infinity War",
		Year: "2018",
		imdbID: "tt4154756",
		Type: "movie",
		Poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
	},
	{
		Title: "Avengers: Age of Ultron",
		Year: "2015",
		imdbID: "tt2395427",
		Type: "movie",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
	},
	{
		Title: "Avengers: Endgame",
		Year: "2019",
		imdbID: "tt4154796",
		Type: "movie",
		Poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
	},
];

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
console.log("ESERCIZIO 11");
const myObject = {
	nome: "Vasco",
	congnome: "Ivanov",
	età: "20",
};

const deleteProp = function (myObj, myString) {
	delete myObj[myString];
	return myObj;
};

console.log(deleteProp(myObject, "nome"));

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
console.log("ESERCIZIO 12");

const newestMovie = function (myObj) {
	let contatore = 0;
	let newEst = [];
	for (let i = 0; i < myObj.length; i++) {
		if (myObj[i].Year > contatore) {
			contatore = myObj[i].Year;
			newEst = myObj[i];
		}
	}
	return newEst;
};

console.log(newestMovie(movies));

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
console.log("ESERCIZIO 13");

const countMovies = function (movieList) {
	return "Numero film totali : " + movieList.length;
};

console.log(countMovies(movies));

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
console.log("ESERCIZIO 14");

const onlyTheYears = function (movieList) {
	const contYears = [];
	movieList.forEach((movie) => contYears.push(movie.Year));
	return contYears;
};
console.log(onlyTheYears(movies));

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
console.log("ESERCIZIO 15");
const onlyInLastMillennium = function (movieList) {
	const lastMillennium = movieList.filter((movie) => movie.Year < 2000);
	return lastMillennium;
};

console.log(onlyInLastMillennium(movies));

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
console.log("ESERCIZIO 16");

const sumAllTheYears = function (movieList) {
	let contatore = 0;

	movieList.forEach((element) => {
		contatore += parseInt(element.Year);
	});

	return contatore;
};
console.log(sumAllTheYears(movies));

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

console.log("ESERCIZIO 17");
const searchByTitle = function (movieList, titleMovie) {
	const contfilm = [];

	for (let i = 0; i < movieList.length; i++) {
		const result = movieList[i].Title.includes(titleMovie);
		if (result === true) {
			contfilm.push(movieList[i]);
		}
	}

	return contfilm;
};

console.log(searchByTitle(movies, "Flies"));

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

console.log("ESERCIZIO 18");
const searchAndDivide = function (movieList, titleMovie) {
	const searchResult = {
		match: [],
		unmatch: [],
	};

	for (let i = 0; i < movieList.length; i++) {
		const result = movieList[i].Title.includes(titleMovie);
		if (result === true) {
			searchResult.match.push(movieList[i]);
		} else {
			searchResult.unmatch.push(movieList[i]);
		}
	}

	return searchResult;
};

console.log(searchAndDivide(movies, "Flies"));

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

console.log("ESERCIZIO 18");
const removeIndex = function (movieList, num) {
	movieList.splice(num, 1);
	return movieList;
};

console.log(removeIndex(movies, 2));

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

const selectContainer = document.querySelector("#container");

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

const container = document.querySelectorAll("td");

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

const getValues = function () {
	const td = document.querySelectorAll("td");
	for (let i = 0; i < td.length; i++) {
		console.log(td[i].value);
	}
};

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

const changeBackground = (color) => {
	const body = document.querySelector("body");
	body.style.background = color;
};

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

const addLi = () => {
	const ul = document.querySelector("#myList");
	const li = document.createElement("li");
	li.innerText = "sono un nuovo elemento";
	ul.appendChild(li);
};

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

const addElement = function () {
	const ul = document.querySelector("#myList");
	const li = document.createElement("li");
	li.innerText = "sono un nuovo elemento";
	ul.appendChild(li);
};

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
const changeStyle = function () {
	const tr = document.querySelector("tr");
	tr.classList.add("test");
};

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

/* Questo array viene usato per gli esercizi. Non modificarlo. */
