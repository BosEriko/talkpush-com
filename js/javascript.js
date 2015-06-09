$(document).ready(function(){
  $('#myModal').on('shown.bs.modal', function () {
    $('#myInput').focus()
  })

  $(".contact").hide();
  $(".trial").hide();
  $(".newsletter").hide();

  $("select").change(function(){
    $( "select option:selected").each(function(){
      if($(this).attr("value")=="contact"){
        $(".box").not(".contact").fadeOut(500);
        $(".contact").delay(500).fadeIn(500);
      }
      else if($(this).attr("value")=="trial"){
        $(".box").not(".trial").fadeOut(500);
        $(".trial").delay(500).fadeIn(500);
      }
      else if($(this).attr("value")=="newsletter"){
        $(".box").not(".newsletter").fadeOut(500);
        $(".newsletter").delay(500).fadeIn(500);
      }
      else{
        $(".box").not(".demo").fadeOut(500);
        $(".demo").delay(500).fadeIn(500);
      }
    });
  })

  $(".intro-button").click(function() {
    $('#myModal').modal('show');
  });


// scroll up then open modal
  // $(".intro-button").click(function() {
  //   $('html, body').animate({
  //       scrollTop: $(".header-top").offset().top
  //   }, 1000  );
  //   $('#myModal').modal('show');
  // });
});


