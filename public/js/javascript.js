$(document).ready(function(){
  $('#myModal').on('shown.bs.modal', function () {
    $('#myInput').focus();
  });

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
  });

  $(".intro-button").click(function() {
    $('#myModal').modal('show');
  });
  $('.btnBenefits').click(function(){scrollTo('.keyBenefits')});
  $('.back-to-top').click(function(){scrollTo("body");});
  $('.btnFeatures').click(function(){scrollTo('.keyFeatures');});
  $('.btnUserCases').click(function(){scrollTo('#user-cases');});
  $('.btnViewPL').click(function(){scrollTo('#price');});
  $('.btnStartup').click(function(){
      scrollTo('.form-container');
      $('#message').val('I would like to schedule a demo of startup plan. ');
  });
  $('.btnSmallBiz').click(function(){
      scrollTo('.form-container');
      $('#message').val('I would like to schedule a demo of small business plan. ');
  });
  $('.btnEnterprise').click(function(){
      scrollTo('.form-container');
      $('#message').val('I would like to schedule a demo of enterprise plan. ');
  });
  $('.btnCustom').click(function(){
      scrollTo('.form-container');
      $('#message').val('I would like to know more detail of custom plan. ');
  });
  function scrollTo(sectionClass){
    $('html,body').animate({
     scrollTop:$(sectionClass).offset().top},'slow');
  }
  var positionName = "";
  var formStr ='';

  $('.apply4SE').on('click',function(){
      var isVisible = $( ".form-apply" ).is( ":visible" );
      if(!isVisible){
          $(".form-apply").toggle();
      }
      positionName="Software Engineer";
      $("#position-name").html(positionName);
      $("#position").val(positionName);
      scrollTo(".form-apply");
  });
      $(".btnTrial").click(function(){

          scrollTo(".form-container");
      });
  $('.apply4AM').on('click',function(){
      var isVisible = $( ".form-apply" ).is( ":visible" );
      if(!isVisible){
          $(".form-apply").toggle();
      }
      positionName="Account Manager";
      $("#position-name").html(positionName);
      $("#position").val(positionName);
      scrollTo(".form-apply");
  });

  $('#cv').on('click',function(){
    $('#cv-file').click();
  });
  $('#cv-file').change(function(){
    if($('#cv-file').val()===""){
        $('.file-text').html("No File Selected");
    }else{
        $('.file-text').html($('#cv-file').val());
    }

  });

  $('#contact-form').on('submit', function(event) {
    event.preventDefault();
    var form = $(this);

    var data = {
      fullName: $("#fullName").val(),
      email: $("#email").val(),
      company: $("#company").val(),
      message: $("#message").val()
    };
    $.ajax({
      url: form.attr('action'),
      dataType: 'json',
      contentType: 'application/json',
      type: 'POST',
      data : JSON.stringify(data),
      accepts: "application/json",
      error: function(req, err){
        console.log('error message: ' + err);
        $(".form-message-box").html(err);
        $(".form-message-box").animate({"opacity":"1"},"slow").animate({"opacity":"0"},2000);
      },
      success: function(json) {
        $(".form-message-box").html("Successful!");
        $(".form-message-box").animate({"opacity":"1"},"slow").animate({"opacity":"0"},2000);
      }
    })
    this.reset()
  });

  $('#application-form').on('submit', function(event) {
    event.preventDefault();
    var form = $(this);
    var fd = new FormData();
    fd.append( 'file', $("#cv-file")[0].files[0] );
    fd.append("fullName", $("#fullName").val());
    fd.append("email", $("#email").val());
    fd.append("coverLetter", $("#cover-letter").val());
    fd.append("position", $("#position").val());

    $.ajax({
      url: form.attr('action'),
      // dataType: 'json',
      processData: false,
      contentType: false,
      type: 'POST',
      data: fd,
      // accepts: "application/json",
      error: function(req, err){
        console.log('error message: ' + err);
        $(".form-message-box").html(err);
        $(".form-message-box").animate({"opacity":"1"},"slow").animate({"opacity":"0"},2000);
      },
      success: function(json) {
        $(".form-message-box").html("Successful!");
        $(".form-message-box").animate({"opacity":"1"},"slow").animate({"opacity":"0"},2000);
      }
    })
    this.reset()
  });
});
