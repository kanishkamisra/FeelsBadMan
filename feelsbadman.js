$(document).ready(function(){
	$('body').each(function() {
		string = $(this).text('FeelsBadMan');
		string.replaceWith("<img src='replace.png'/>");
	});
});