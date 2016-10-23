$(document).ready(function () {
  $(".shelter-toggle" ).click(function() {
  	var parentComponent = $(this).parents('.shelter-list-component');
  	if (parentComponent.hasClass('open')){
  		parentComponent.removeClass('open');
  		$(this).text('SHOW MORE');
  	} else {
  		parentComponent.addClass('open');
  		$(this).text('SHOW LESS');
  	}
  });
});

console.log($(window).scrollTop());

// if (1 === 1) {


//   function toTop(callback) {
//     $("html, body").animate({ scrollTop: $(document).height() }, 10000);
//     toTop(function (){
//       if (scrollTop === $(document).height()) {
//         $("html, body").animate({ scrollTop: 0 }, 10000);
//       };
//     });
//   }
  
// }