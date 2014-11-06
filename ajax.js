$(function(){
	$.get('logos_footer.html', function(micodigo){
		$('footer').append(micodigo);
	});
	$.get('usuario.json', function(info){
		console.log(info)
	});
});