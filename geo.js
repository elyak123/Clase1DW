var geo = navigator.geolocation;

var opciones = {}
function geo_error(){
	console.log("Hhhmm... this is akward.... isn't??")
}

function geo_exito(posicion){
	var lat = posicion.coords.latitude;
	var lon = posicion.coords.longitude;
	var mapa = new Image();
	mapa.src = "http//maps.google.com/maps/api/staticmap?zoom=13&size=200x200&sensor=false&center="+lat+","+lon;
}

geo.getCurrentPosition(geo_exito, geo_error, opciones);

