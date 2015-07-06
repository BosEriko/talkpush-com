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
    positionName="Software Engineer";
    formStr='<div class="wrap form-wrap"><div class="container form-container"><div class="row"><div class="col-md-8 col-md-offset-2 col-xs-12 interested-in"><h2>Apply for '+positionName+'</h2></div><div class="contact-form box"><div class="row"><div class="col-md-8 .col-xs-12 col-md-offset-2"><form class="job-form box" action="/job-form" method="POST"><div class="form-group"><input type="text" class="form-control" id="fullName" placeholder=" NAME"></div><div class="form-group"><input type="email" class="form-control" id="email" placeholder=" E-MAIL"></div><div class="form-group"><div class="form-control" id="cv" placeholder=" CV"><i class="fa fa-file-text"></i>&nbsp;&nbsp;UPLOAD YOUR CV</div></div><div class="form-group"><textarea rows="5" class="form-control" id="message" placeholder=" COVER LETTER"></textarea></div><div class="form-group"><div class="col-sm-offset-"><button type="submit" class="btn btn-form">Submit</button></div></div></form></div></div></div></div></div></div>';
    $('.form-SE').append(formStr);
    scrollTo(".form-SE");
    $('#cv').click(function(){alert("UPLOAD HERE B")});
});
    $(".btnTrial").click(function(){
        scrollTo(".form-container");
    });
$('.apply4AM').on('click',function(){
    positionName="Account Manager";
    formStr='<div class="wrap form-wrap"><div class="container form-container"><div class="row"><div class="col-md-8 col-md-offset-2 col-xs-12 interested-in"><h2>Apply for '+positionName+'</h2></div><div class="contact-form box"><div class="row"><div class="col-md-8 .col-xs-12 col-md-offset-2"><form class="job-form box" action="/job-form" method="POST"><div class="form-group"><input type="text" class="form-control" id="fullName" placeholder=" NAME"></div><div class="form-group"><input type="email" class="form-control" id="email" placeholder=" E-MAIL"></div><div class="form-group"><div class="form-control" id="cv" placeholder=" CV"><i class="fa fa-file-text"></i>&nbsp;&nbsp;UPLOAD YOUR CV</div></div><div class="form-group"><textarea rows="5" class="form-control" id="message" placeholder=" COVER LETTER"></textarea></div><div class="form-group"><div class="col-sm-offset-"><button type="submit" class="btn btn-form">Submit</button></div></div></form></div></div></div></div></div></div>';
    $('.form-AM').append(formStr);
    scrollTo(".form-AM");
    $('#cv').click(function(){alert("UPLOAD HERE")});
});
  $('form').on('submit', function(event) {
    event.preventDefault();
    var form = $(this);
    console.log(form);

    var data = {
      fullName: $("#fullName").val(),
      email: $("#email").val(),
      company: $("#company").val(),
      message: $("#message").val()
    }
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
  });

});


