;(function(){
      var _cursore;

			// Menu settings
			$('#menuToggle, .menu-close').on('click', function(){
				$('#menuToggle').toggleClass('active');
				$('body').toggleClass('body-push-toleft');
				$('#theMenu').toggleClass('menu-open');
			});

      _cursore = function() {
        if($('#cursor').css('visibility') === "visible" ){
          $('#cursor').css('visibility', 'hidden')
        } else {
          $('#cursor').css('visibility', 'visible')
        }
      }; 
      setInterval(_cursore, 600);

})(jQuery)