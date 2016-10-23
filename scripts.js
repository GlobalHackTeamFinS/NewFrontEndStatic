$(document).ready(function () {
  $(".shelter-toggle" ).click(function() {
  	var parentComponent = $(this).parents('.shelter-list-component');
  	if ($(this).text() === 'SHOW LESS'){
  		parentComponent.find('.more-info').slideToggle('fast');
  		$(this).text('SHOW MORE');
  	} else {
  		parentComponent.find('.more-info').slideToggle('slow');
  		$(this).text('SHOW LESS');
  	}
  });
});