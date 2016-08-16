$(function () {
  $('form').parsley().on('field:validated', function() {
    var ok = $('.parsley-error').length === 0;
    $('.bs-callout-info').toggleClass('hidden', !ok);
    $('.bs-callout-warning').toggleClass('hidden', ok);
  })
  .on('form:submit', function() {
    var data = {
      fullName: $("input[name='first_name']").val()+" "+$("input[name='last_name']").val(),
      email: $("input[name='email']").val(),
      company: $("input[name='company']").val(),
      message: "Free demo request from Talkpush landing page"
    };
    $.ajax({
      url: "/contact-form",
      dataType: 'json',
      contentType: 'application/json',
      type: 'POST',
      data : JSON.stringify(data),
      accepts: "application/json",
      error: function(req, err){
        console.log('error message: ' + err);
        $(".form-message-box").html(err +" occurred! <br>Please send a email to <a href='mailto:hello@talkpush.com'>hello@talkpush.com</a>.");
        $(".form-message-box").animate({"opacity":"1","color":"red"},"slow").delay(15000).animate({"opacity":"0"},2000);
      },
      success: function(json) {
        $("form")[0].reset()
        $(".form-message-box").html("Request Sent! We will geet back to you as soon as possible.");
        $(".form-message-box").animate({"opacity":"1"},"slow").delay(15000).animate({"opacity":"0"},2000);      
      }
    });
    return false; // Don't submit form for this demo
  });
});
