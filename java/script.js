
function la() {
let laElement = document.querySelector("#la");
let laDateElement = laElement.querySelector(".date");
let laTimeElement = laElement.querySelector(".time");
laDateElement.innerHTML = moment().tz("America/Los_Angeles").format("MMMM d YYYY");
laTimeElement.innerHTML = moment().tz("America/Los_Angeles").format("hh:mm:ss [<small>]A[</small>]");
}

function paris() {
let parisElement = document.querySelector("#paris");
let parisDateElement = parisElement.querySelector(".date");
let parisTimeElement = parisElement.querySelector(".time");
parisDateElement.innerHTML = moment().tz("Europe/Paris").format("MMMM d YYYY");
parisTimeElement.innerHTML = moment().tz("Europe/Paris").format("hh:mm:ss [<small>]A[</small>]");
}
function updateCity(event) {
    let cityTimeZone = event.target.value;
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone).format("hh:mm:ss [<small>]A[</small>]");
    let cityDate = moment().tz(cityTimeZone).format("MMMM d YYYY");
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
    </div>`

}
paris();
la();
setInterval(paris, 1000);
setInterval(la, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);