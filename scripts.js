
$.getJSON( "shelters.json", function( data ) {

  $.each(data, function(index, element) {
        $('body').append($('<div>', {
            text: element.name
        }));
    });
});

console.log("test");
