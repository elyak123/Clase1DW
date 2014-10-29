var $form = $('#formulario'),
	$titulo = $('#titulo'),
	$url = $('#url'),
	$publicar = $('#mostrar-form'),
	$list = $('#contenido'),
	$agregar = $('#agregar'),
	$post = $('.item').first();

	if (localStorage.getItem("autosave")) {
		$titulo.val(sessionStorage.getItem("titulo"));
		$url.val(sessionStorage.getItem("url"));
	};
	var id = setInterval( function (){
		sessionStorage.setItem("titulo", $titulo.val() );
		sessionStorage.setItem("url", $url.val() );
	}, 100);
	function mostrarFormulario(){
		//$list.slideToggle();
		$form.slideToggle();
		$list.fadeToggle();

		return false;
	}
	function agregarPost (){
		var url = $url.val(),
			titulo = $titulo.val(),
			$clone = $post.clone();
		$clone.find('.Article-title').text(titulo);
		$clone.find('.tag_item').attr('href', url);
		mostrarFormulario();
		$clone.hide();
		$list.prepend($clone);
		$clone.fadeIn();

		$titulo.val(" ");
		$url.val(" ");
		
		return false;

	}

	//eventos
	$publicar.click(mostrarFormulario);
	$form.on('submit', agregarPost);
