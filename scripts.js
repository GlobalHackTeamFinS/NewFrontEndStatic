
$(document).ready(function () {
  $(".shelter-toggle" ).click(function() {
  $( ".more-info" ).slideToggle( "slow");
  var button = $(this);
  button.text(button.text() == "Show Less" ? "Show More" : "Show Less");
  });
});

// AIzaSyCu3xQs8gcQ8-ERXewawIlrAT4a1onxcfw
