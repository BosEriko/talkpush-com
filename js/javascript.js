$(document).ready(function(){
  $('#myModal').on('shown.bs.modal', function () {
    $('#myInput').focus()
  })

  $("select").change(function(){
    $( "select option:selected").each(function(){
      if($(this).attr("value")=="contact"){
        $(".box").not(".contact").hide();
        $(".contact").show();
      }
      else if($(this).attr("value")=="trial"){
        $(".box").not(".trial").hide();
        $(".trial").show();
      }
      else if($(this).attr("value")=="newsletter"){
        $(".box").not(".newsletter").hide();
        $(".newsletter").show();
      }
      else{
        $(".box").not(".newsletter").hide();
        $(".box").not(".contact").hide();
        $(".box").not(".trial").hide();
        $(".demo").show();
      }
    });
  }).change();
});