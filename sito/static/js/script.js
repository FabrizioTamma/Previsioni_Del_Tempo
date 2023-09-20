let latitudine = 41.89076874032245;
let longitudine = 12.492298596536404;

navigator.geolocation.getCurrentPosition(
	function (event){
		console.log("L'utente ha accettato")
		console.log(event)
		latitudine = event.coords.latitude
		longitudine = event.coords.longitude
		createMap(latitudine,longitudine)
	
},
	
	function (event){
		console.log("L'utente non ha accettato")
		console.log(event)
		createMap(latitudine,longitudine)
		
}
)

function createMap(latitudine, longitudine){
	let map = L.map('map').setView([latitudine, longitudine], 16);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


let marker = L.marker([latitudine,longitudine]).addTo(map);

map.on("click", function(event){
	console.log(event)

	marker.remove()
	marker.L.marker([event.latling.lat, event.latling.lng]).addTo(map)

})

}