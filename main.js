var $form = $('#formulario'),
	$titulo = $('#titulo'),
	$url = $('#url'),
	$publicar = $('#mostrar-form'),
	$list = $('#contenido'),
	$agregar = $('#agregar'),
	$post = $('.item').first();

	function mostrarFormulario(){
		$form.slideToggle();
		return false;
	}
	function agregarPost (){
		var url = $url.val(),
			titulo = $titulo.val(),
			$clone = $post.clone();
		$clone.find('.Article-title').text(titulo);
		$clone.find('.tag_item').attr('href', url);

		$clone.hide();
		$list.prepend($clone);
		$clone.fadeIn();
		return false;
	}

	//eventos
	$publicar.click(mostrarFormulario);
	$form.on('submit', agregarPost);
