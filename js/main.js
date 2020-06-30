$(document).ready(function() {
  console.log("READY 2")

  $( ".btn-navigate" ).click(function() {
    alert( "Handler for .click() called.", $(this).data('href') );

    // $(document).scrollTop( $("#header").offset().top ); 
  });
});
