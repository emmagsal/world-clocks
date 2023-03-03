let laElement = document.querySelector("#la");
let laDateElement = laElement.querySelector(".date");
let laTimeElement = laElement.querySelector(".time");
laDateElement.innerHTML = moment().tz("America/Los_Angeles").format("MMMM d YYYY");
laTimeElement.innerHTML = moment().tz("America/Los_Angeles").format("h:mm:ss [<small>]A[</small>]");

let parisElement = document.querySelector("#paris");
let parisDateElement = parisElement.querySelector(".date");
let parisTimeElement = parisElement.querySelector(".time");
parisDateElement.innerHTML = moment().tz("Europe/Paris").format("MMMM d YYYY");
parisTimeElement.innerHTML = moment().tz("Europe/Paris").format("h:mm:ss [<small>]A[</small>]");