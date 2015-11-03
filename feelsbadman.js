$(document).ready(function(){
	$('body').html(function(index, text) {
		this.innerHTML = text.replace("FeelsBadMan"g, "<img src='replace.png'/>")
	})
});