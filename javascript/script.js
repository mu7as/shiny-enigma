$(document).ready(function(){

	// --- Mobile NAV -----------------------

	var mobNav = $("nav"),
		navOpen = $(".fa-align-justify"),
		navClose = $(".fa-close"),
		closeLi = $(".closeLi");

	$(navOpen).click(function(){
		$(this).css("transform","scale(0)");
		$(navClose).css("transform","scale(1)");
		$(mobNav).css({"left":"0px","boxShadow":"10px 10px 50px 10px #000"});
	});
	$(navClose).click(function(){
		$(this).css("transform","scale(0)");
		$(navOpen).css("transform","scale(1)");
		$(mobNav).css({"left":"-150px","boxShadow":"none"});
	});
	$(closeLi).click(function(){
		$(navClose).css("transform","scale(0)");
		$(navOpen).css("transform","scale(1)");
		$(mobNav).css({"left":"-150px","boxShadow":"none"});
	});

	
});