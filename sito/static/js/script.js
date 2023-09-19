let latitudine = 41.89076874032245;
let longitudine = 12.492298596536404;

navigator.geolocation.getCurrentPosition(
	function (event){
		console.log("L'utente ha accettato")
		console.log(event)
		createMap()
},
	
	function (event){
		console.log("L'utente non ha accettato")
		console.log(event)
}
	)

function createMap(){
	let map = L.map('map').setView([latitudine, longitudine], 16);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
}


let marker = L.marker([51.5, -0.09]).addTo(map);