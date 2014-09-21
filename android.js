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
$(document).ready(function(){
	loadPage();
});
function loadPage(url) {
	$('body').append('<div id="progress">Loading...</div>');
	if (url == undefined) {
		$('#container').load('index.html #header ul', hijackLinks);
	} else {
		$('#contianer').load(url + ' #content', hijackLinks);
	}
}
function hijackLinks() {
	$('#container a').click(function(e){
		e.prventDefault();
		loadPage(e.target.href);
	});
	var title = $('h2').html() || 'Hello!';
	$('h1').html(title);
	$('h2').remove();
	$('#progress').remove();
}
