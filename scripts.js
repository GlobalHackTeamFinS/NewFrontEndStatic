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

  window.setInterval( function () {
  	$('span.minutes').each( function() {
  	
  		if( $(this).text() == 0 ) {
  			if( $(this).siblings('span.hours').length == 0 ) {
  				console.log(1);
  				$(this).prev('.unit-hr').remove();
  				$(this).next('.unit-min').remove();
  				$(this).parent().prepend('<span class="closed">Closed</span>');
  				$(this).remove();
  			} else if( $(this).siblings('.hours').text() == 1 ) {
  				console.log(2);
  				$(this).siblings('.hours').remove();
  				$(this).prev('.unit-hr').remove();
  				$(this).text(59);
  			} else {
  				console.log(3);
  				$(this).siblings('.hours').text( $(this).siblings('.hours').text() - 1 );
  				$(this).text(59);
  			}
  		} else {
  			$(this).text( $(this).text() - 1 );
  		}
  	});
  }, 60000);
});