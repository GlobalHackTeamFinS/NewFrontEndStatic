$(document).ready(function () {
  $(".shelter-toggle" ).click(function() {
	  $( ".more-info" ).slideToggle( "slow");
	  var button = $(this);
	  button.text(button.text() === "SHOW LESS" ? "SHOW MORE" : "SHOW LESS");
  });
});


