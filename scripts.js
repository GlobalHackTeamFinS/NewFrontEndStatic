$(document).ready(function () {
  $(".shelter-toggle" ).click(function() {
  	var parentComponent = $(this).parents('.shelter-list-component');
  	if (parentComponent.hasClass('open'))0{
  		parentComponent.removeClass('open');
  	} else {
  		parentComponent.addClass('open');
  	}
  });
});