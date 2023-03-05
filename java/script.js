
function la() {
let laElement = document.querySelector("#la");
let laDateElement = laElement.querySelector(".date");
let laTimeElement = laElement.querySelector(".time");
laDateElement.innerHTML = moment().tz("America/Los_Angeles").format("MMMM D YYYY");
laTimeElement.innerHTML = moment().tz("America/Los_Angeles").format("hh:mm:ss [<small>]A[</small>]");
}

function paris() {
let parisElement = document.querySelector("#paris");
let parisDateElement = parisElement.querySelector(".date");
let parisTimeElement = parisElement.querySelector(".time");
parisDateElement.innerHTML = moment().tz("Europe/Paris").format("MMMM D YYYY");
parisTimeElement.innerHTML = moment().tz("Europe/Paris").format("hh:mm:ss [<small>]A[</small>]");
}

function perth() {
let perthElement = document.querySelector("#perth");
let perthDateElement = perthElement.querySelector(".date");
let perthTimeElement = perthElement.querySelector(".time");
perthDateElement.innerHTML = moment().tz("Australia/Perth").format("MMMM D YYYY");
perthTimeElement.innerHTML = moment().tz("Australia/Perth").format("hh:mm:ss [<small>]A[</small>]");
}

function updateCity(event) {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone).format("hh:mm:ss [<small>]A[</small>]");
    let cityDate = moment().tz(cityTimeZone).format("MMMM D YYYY");
    let citiesElement = document.querySelector(".cities");
    citiesElement.innerHTML = `
    <div class="city">
        <div>
        <h2>${cityName}</h2>

            <div class="date">
                <h3>${cityDate}</h3>
            </div>
         </div>
         <div class="time">${cityTime}</div>
    </div>
    <a href="/">Back to Homepage</a>`

}

paris();
la();
perth();
setInterval(paris, 1000);
setInterval(la, 1000);
setInterval(perth, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);