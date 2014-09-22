$(document).ready(function(){
	$('#settings form').submit(saveSettings);
	$('#settings').bind('pageAnimationStart', loadSettings);
	$('#dates li a').click(function(){
		var dayOffset = this.id;
		var date = new Date();
		date.setDate(date.getDate() - dayOffset);
		sessionStorage.currentDate = date.getMonth() + 1 + '/' +
									date.getDate() + '/' +
									date.fetFullYear();
		refreshEntries();
	});
});
