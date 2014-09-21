if (window.innerWidth && window.innerWidth <= 480) {
	$(document).ready(function(){
		$('#header ul').addclass('hide');
		$('#header').append('<div class="leftbutton"
		$('#header').append('<div class="leftButton"
			onClick="toggleMenu()">Menu</div>');
		});
	function toggleMenu() {
		$('#header ul').toggleClass('hide');
		$('#header .leftButton').toggleClass('pressed');
	}
}