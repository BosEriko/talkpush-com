$(document).ready(function(){
    
    var formData = new FormData();
var apiKey = "735d80bffe5525e86aa19a680b7a6ea7";
var apiSecret = "2d85fc3203979c704f86b9592a75b82a";
var host = "my.talkpush.com";
var pinNo = "";
var campaignID = "e3907969ae2be3c16cff8b3b6cdc97b8";
var dum = "20eaceb388b48322d444698e65a07ad0";

var stagingApiKey = "d4afe214add591bb66d6e25a56a2c1b1";
var stagingApiSecret = "551c1a40c74d4f7d11c2e6942933b2ad";
var stagingCampID = "1eed5d360259c27c9c11847f6626b33a";
var stagingURL = "staging.talkpush.com";
    
    
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


    $(".btnCompany").click(function(e){
        //console.log(e.currentTarget);
        //_fbq.push('track', 'ViewContent');
    });
    $(".btnFeatures").click(function(e){
        //console.log(e.currentTarget);
        //_fbq.push('track', 'ViewContent');
    });
    $(".btnBenefits").click(function(e){
        //console.log(e.currentTarget);
        //_fbq.push('track', 'ViewContent');
    });
    $(".btnBlog").click(function(e){
        //console.log(e.currentTarget);
        //_fbq.push('track', 'ViewContent');
    });
    $(".btnJob").click(function(e){
        //console.log(e.currentTarget);
        //_fbq.push('track', 'ViewContent');
    });
    $(".btnMytalkpush").click(function(e){
        //console.log(e.currentTarget);
        //_fbq.push('track', 'ViewContent');
    });
    $(".backtohome").click(function(e){
        //console.log(e.currentTarget);
        //_fbq.push('track', 'ViewContent');
    });
    $('.btnFreeTrial').click(function(){
      scrollTo('#contact-form-container');
      // ga('send', 'event', [eventCategory]*, [eventAction]*, [eventLabel], [eventValue], [fieldsObject]);
      ga('send', 'event', "signup", "clicked", "Signup-button(contact-form)",document.referrer);
    });
  $('.btnBenefits').click(function(){scrollTo('.keyBenefits')});
  $('.back-to-top').click(function(){scrollTo("body");});
  $('.btnFeatures').click(function(){scrollTo('.keyFeatures');});
  $('.btnUserCases').click(function(){scrollTo('#user-cases');});
  $('.btnViewPL').click(function(){
      scrollTo('#price');
      //_fbq.push('track', 'Lead');
  });
  $('.btnStartup').click(function(){
      //_fbq.push('track', 'Lead');
      scrollTo('.form-container');
      $('#message').val('I would like to schedule a demo of startup plan. ');
  });

  $('.btnSmallBiz').click(function(){
      //_fbq.push('track', 'Lead');
      scrollTo('.form-container');
      $('#message').val('I would like to schedule a demo of small business plan. ');
  });

  $('.btnEnterprise').click(function(){
      //_fbq.push('track', 'Lead');
      scrollTo('.form-container');
      $('#message').val('I would like to schedule a demo of enterprise plan. ');
  });

  $('.btnCustom').click(function(){
      //_fbq.push('track', 'Lead');
      scrollTo('.form-container');
      $('#message').val('I would like to know more detail of custom plan. ');
  });
  $('.sign-up').click(function(){
    scrollTo('#partnership-form');
    ga('send', 'event', "signup", "clicked", "Signup-button(partnership-form)",document.referrer);

  });
  $('.sign-up-sourcing').click(function(){
    scrollTo('#sourcing-form')
    ga('send', 'event', "signup", "clicked", "Signup-button(sourcing-form)",document.referrer);

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
 $('.apply4DMA').on('click',function(){
    var isVisible = $( ".form-apply" ).is( ":visible" );
    if(!isVisible){
      $(".form-apply").toggle();
    }
    positionName="DIGITAL HR MARKETING ANALYST";
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
        $(".form-message-box").html(err +" occurred! <br>Please send a email to <a href='mailto:hello@talkpush.com'>hello@talkpush.com</a>.");
        $(".form-message-box").animate({"opacity":"1","color":"red"},"slow").delay(15000).animate({"opacity":"0"},2000);
      },
      success: function(json) {
        ga('send', 'event', "signup", "submitted", "Signup-form(contact-form)",document.referrer);
        $("#contact-form")[0].reset()
        $(".form-message-box").html("Successful!");
        $(".form-message-box").animate({"opacity":"1"},"slow").delay(5000).animate({"opacity":"0"},2000);
          
        _fbq.push('track', 'CompleteRegistration');
      }
    })
  });
  $('#sourcing-form').on('submit', function(event) {
    $(".btn-form > span").hide();
    $(".btn-form > .sk-circle").show();
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
        $(".btn-form > span").show();
        $(".btn-form > .sk-circle").hide();
        console.log('error message: ' + err);
        $(".form-message-box").html(err +" occurred! <br>Please send a email to <a href='mailto:hello@talkpush.com'>hello@talkpush.com</a>.");
        $(".form-message-box").animate({"opacity":"1","color":"red"},"slow").delay(15000).animate({"opacity":"0"},2000);
      },
      success: function(json) {
        ga('send', 'event', "signup", "submitted", "Signup-form(sourcing-form)",document.referrer);
        $(".btn-form > span").show();
        $(".btn-form > .sk-circle").hide();
        $("#sourcing-form")[0].reset()
        $(".form-message-box").html("<br/>Successful!");
        $(".form-message-box").animate({"opacity":"1"},"slow").delay(5000).animate({"opacity":"0"},2000);
          
        _fbq.push('track', 'CompleteRegistration');
      }
    })
  }); 
  $('#partnership-form').on('submit', function(event) {
    $(".btn-form > span").hide();
    $(".btn-form > .sk-circle").show();
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
        $(".btn-form > span").show();
        $(".btn-form > .sk-circle").hide();
        console.log('error message: ' + err);
        $(".form-message-box").html(err +" occurred! <br>Please send a email to <a href='mailto:hello@talkpush.com'>hello@talkpush.com</a>.");
        $(".form-message-box").animate({"opacity":"1","color":"red"},"slow").delay(15000).animate({"opacity":"0"},2000);
      },
      success: function(json) {
        ga('send', 'event', "signup", "submitted", "Signup-form(partnership-form)",document.referrer);
        $(".btn-form > span").show();
        $(".btn-form > .sk-circle").hide();
        $("#partnership-form")[0].reset()
        $(".form-message-box").html("<br/>Successful!");
        $(".form-message-box").animate({"opacity":"1"},"slow").delay(5000).animate({"opacity":"0"},2000);
          
        _fbq.push('track', 'CompleteRegistration');
      }
    })
  });
  $('#application-form').on('submit', function(event) {
    event.preventDefault();
    var form = $(this);
    var fd = new FormData();
    if(typeof $("#cv-file")[0].files[0] !="undefined"){
        fd.append('file', $("#cv-file")[0].files[0] );
        fd.append("haveFile",true);
    }else{
        fd.append("haveFile",false);
    }
    fd.append("fullName", $("#fullName").val());
    fd.append("email", $("#email").val());
    fd.append("coverLetter", $("#cover-letter").val());
    fd.append("position", $("#position").val());

    $.ajax({
      url: form.attr('action'),
      processData: false,
      contentType: false,
      type: 'POST',
      data: fd,
      error: function(req, err){
        console.log('error message: ' + err);
        $(".form-message-box").html(err+" occurred! <br>Please send a email to <a href='mailto:hello@talkpush.com'>hello@talkpush.com</a>.");
        $(".form-message-box").animate({"opacity":"1","color":"red"},"slow").delay(15000).animate({"opacity":"0"},2000);
      },
      success: function(json) {
        $(".form-message-box").html("Successful! Thanks for your submission.");
        $(".form-message-box").animate({"opacity":"1"},"slow").delay(5000).animate({"opacity":"0"},2000);
        $("#application-form")[0].reset();
      }
    })
  });

//  $(".demo button").on("click",function(e){
//    alert($(".demo input[name='demo_country_code']").val()+$(".demo input[name='demo_phone_no']").val());
//    var env = "testing";
//    var campaignID = "86a305fb202533d6b0d66ac8fe471667";
//    var host = env != "production" ? "staging.talkpush.com" : "my.talkpush.com";
//    var application_url = "http://" + host + "/api/talkpush_services/campaigns/" + campaignID  + "/campaign_invitations";
//    console.log(host)
//
//    var productionApiKey = "735d80bffe5525e86aa19a680b7a6ea7";
//    var productionApiSecret = "2d85fc3203979c704f86b9592a75b82a";
//    var stagingApiKey = "d4afe214add591bb66d6e25a56a2c1b1";
//    var stagingApiSecret = "551c1a40c74d4f7d11c2e6942933b2ad";
//    var apiKey = env != "production" ? stagingApiKey:productionApiKey;
//    var apiSecret = env != "production" ? stagingApiSecret:productionApiSecret;
//    var formData = new FormData();
//    formData.append("api_key", apiKey);
//    formData.append("api_secret", apiSecret);
//    formData.append("campaign_invitation[user_phone_number]",$(".demo input[name='demo_phone_no']").val());
//    formData.append("campaign_invitation[user_country_code]",$(".demo input[name='demo_country_code']").val())
//    $.ajax({
//      url: application_url,
//      type: "POST",
//      data: formdata,
//      mimeType: "multipart/form-data",
//      contentType: false,
//      cache: false,
//      processData: false,
//      crossDomain: true,
//      success: function (data) {
//          handleFormFeedback(formName, "success", data, campaignID);
//      },
//      error: function (data) {
//          handleFormFeedback(formName, "error occured", data, campaignID);
//      }
//    });
//  });
    
    
    // demo section //
    
    $('.demo .phone-row button').on('click', function(){
        var countryCode = $('input[name="demo_country_code]').val();
        var phoneNo = $('input[name="demo_phone_no]').val();
        
        if ($('input[name="demo_country_code"]').val() === "" && $('input[name="demo_phone_no"]').val() === "") {
            $('span#demo_country_code_error, span#demo_phone_no_error').show();
        }
        else {
            $('span#demo_country_code_error, span#demo_phone_no_error').hide();
            formData.append("api_key", apiKey);
                formData.append("api_secret", apiSecret);
                
                formData.append("campaign_invitation[user_phone_number]",$(".demo input[name='demo_phone_no']").val());
                formData.append("campaign_invitation[user_country_code]",$(".demo input[name='demo_country_code']").val());
            
            $('.demo .phone-row').fadeOut(500);
           setTimeout(function(){
               $('.demo .input-row').fadeIn(700);
           }, 500);

        }
    
    });
    
    $('.demo .input-row button').on('click', function(){
        
        if ($('input[name="first_name"]').val() === "" && $('input[name="last_name"]').val() === "") {
            $('span#demo_first_name_error, span#demo_last_name_error').show();
        }
        else {
            $('span#demo_first_name_error, span#demo_last_name_error').hide();
            formData.append("campaign_invitation[first_name]",$(".demo input[name='first_name']").val());
        formData.append("campaign_invitation[last_name]",$(".demo input[name='last_name']").val());
        submitData(campaignID);
        
       $('.demo .input-row').fadeOut(500);
       setTimeout(function(){
           $('.demo .thankyou-row').fadeIn(700);
       }, 500);
        
       countToZero();
        }
        
        
    });
    
    function countToZero(){
        var count = 15;
         var counter = setInterval(function(){
           count -= 1;
             $('.demo .thankyou-row span#counter').html(count);
             if (count === 0) {
                 clearInterval(counter);
                 $('.demo .thankyou-row').fadeOut(500);
                 $('input[name="first_name"], input[name="last_name"], input[name="demo_country_code"], input[name="demo_phone_no"]').val("");
                 
                 setTimeout(function(){
                   $('.demo .phone-row').fadeIn(700);
               }, 500);
             }
       }, 1000);
    }
    
    
    function submitData(c) {
        $.ajax({
            url: "https://" + host + "/api/talkpush_services/campaigns/" + c + "/campaign_invitations",
            type: "POST",
            data: formData,
            mimeType: "multipart/form-data",
            contentType: false,
            cache: false,
            processData: false,
            crossDomain: true,
            dataType: "json",
            success: function (data) {
                pinNo = data.pin;
                callNow(c);
            },
            xhrFields: {
              withCredentials: false
           }
        });
    }
    
    
    
    function callNow(c){
       $.ajax({
            url: "http://" + host + "/api/talkpush_services/campaigns/" + c + "/campaign_invitations/call",
            type: "POST",
            data: {"api_key":apiKey,"api_secret":apiSecret,"pin":pinNo,"phone_no":$('input[name="demo_phone_no"]').val(),"country_code":$('input[name="demo_country_code"]').val()},
            crossDomain: true,
            success: function (data, b, c) {
                console.log(data);
                if (c.status === 200) {
                    $('.black-box').css('display', 'none');
                    if(isStaging()==="1"){
                        window.location.href = "thankyou.html?option=1&staging=1";
                    }else{
                        window.location.href = "thankyou.html?option=1";
                    }
                }
            }
        });
    }
});
