let latitudine = 41.89076874032245;
let longitudine = 12.492298596536404;

navigator.geolocation.getCurrentPosition(
	function(event)){
		console.log("L'utente ha accettato")
		console.log(event)
		latitudine = event.cords.latitude
		longitudine
}

let map = L.map('map').setView([51.505, -0.09], 16);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);