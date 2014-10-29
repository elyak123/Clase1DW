$(function(){
	$.get('logos_footer.html', function(micodigo){
		$('footer').append(micodigo);
	});
});