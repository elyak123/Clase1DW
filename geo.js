var geo = navigator.geolocation;

var opciones = {}
function geo_error(){
	console.log("Hhhmm... this is akward.... isn't??")
}

function geo_exito(posicion){
	var lat = posicion.coords.latitude;
	var lon = posicion.corrds.longitude;
	var mapa = new Image();
	mapa.src = "http//maps.google.com/maps/apu/staticmap?"
}

geo.getCurrentPosition(geo_exito, geo_error, opciones);

