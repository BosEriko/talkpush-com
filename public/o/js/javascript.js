<!-- Start of Smartsupp Live Chat script -->
var _smartsupp = _smartsupp || {};
_smartsupp.key = '24cb0f70c39995773a14b044623581688d760d60';
window.smartsupp || (function(d) {
    var s, c, o = smartsupp = function() { o._.push(arguments) };
    o._ = [];
    s = d.getElementsByTagName('script')[0];
    c = d.createElement('script');
    c.type = 'text/javascript';
    c.charset = 'utf-8';
    c.async = true;
    c.src = '//www.smartsuppchat.com/loader.js?';
    s.parentNode.insertBefore(c, s);
})(document);
//http://stackoverflow.com/questions/11381673/detecting-a-mobile-browser
window.mobilecheck = function() {
    var check = false;
    (function(a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
};
var _mfq = _mfq || [];
 (function() {
   var mf = document.createElement("script");
   mf.type = "text/javascript"; mf.async = true;
   mf.src = "//cdn.mouseflow.com/projects/98e6ad72-92b7-40ab-a5d1-36b3a2973c42.js";
   document.getElementsByTagName("head")[0].appendChild(mf);
 })();
$(document).ready(function() {

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


    $('#myModal').on('shown.bs.modal', function() {
        $('#myInput').focus();
    });

    $(".contact").hide();
    $(".trial").hide();
    $(".newsletter").hide();

    $("select").change(function() {
        $("select option:selected").each(function() {
            if ($(this).attr("value") == "contact") {
                $(".box").not(".contact").fadeOut(500);
                $(".contact").delay(500).fadeIn(500);
            } else if ($(this).attr("value") == "trial") {
                $(".box").not(".trial").fadeOut(500);
                $(".trial").delay(500).fadeIn(500);
            } else if ($(this).attr("value") == "newsletter") {
                $(".box").not(".newsletter").fadeOut(500);
                $(".newsletter").delay(500).fadeIn(500);
            } else {
                $(".box").not(".demo").fadeOut(500);
                $(".demo").delay(500).fadeIn(500);
            }
        });
    });

    $(".intro-button").click(function() {
        $('#myModal').modal('show');
    });


    $(".btnCompany").click(function(e) {
        //console.log(e.currentTarget);
        //_fbq.push('track', 'ViewContent');
    });
    $(".btnFeatures").click(function(e) {
        //console.log(e.currentTarget);
        //_fbq.push('track', 'ViewContent');
    });
    $(".btnBenefits").click(function(e) {
        //console.log(e.currentTarget);
        //_fbq.push('track', 'ViewContent');
    });
    $(".btnBlog").click(function(e) {
        //console.log(e.currentTarget);
        //_fbq.push('track', 'ViewContent');
    });
    $(".btnJob").click(function(e) {
        //console.log(e.currentTarget);
        //_fbq.push('track', 'ViewContent');
    });
    $(".btnMytalkpush").click(function(e) {
        //console.log(e.currentTarget);
        //_fbq.push('track', 'ViewContent');
    });
    $(".backtohome").click(function(e) {
        //console.log(e.currentTarget);
        //_fbq.push('track', 'ViewContent');
    });
    $('.btnFreeTrial').click(function() {
        scrollTo('#contact-form-container');
        // ga('send', 'event', [eventCategory]*, [eventAction]*, [eventLabel], [eventValue], [fieldsObject]);
        ga('send', 'event', "signup", "clicked", "Signup-button(contact-form)", document.referrer);
    });
    $('.btnBenefits').click(function() { scrollTo('.keyBenefits') });
    $('.back-to-top').click(function() { scrollTo("body"); });
    $('.btnFeatures').click(function() { scrollTo('.keyFeatures'); });
    $('.btnUserCases').click(function() { scrollTo('#user-cases'); });
    $('.btnViewPL').click(function() {
        scrollTo('#price');
        //_fbq.push('track', 'Lead');
    });
    $('.btnStartup').click(function() {
        //_fbq.push('track', 'Lead');
        scrollTo('.form-container');
        $('#message').val('I would like to schedule a demo of startup plan. ');
    });

    $('.btnSmallBiz').click(function() {
        //_fbq.push('track', 'Lead');
        scrollTo('.form-container');
        $('#message').val('I would like to schedule a demo of small business plan. ');
    });

    $('.btnEnterprise').click(function() {
        //_fbq.push('track', 'Lead');
        scrollTo('.form-container');
        $('#message').val('I would like to schedule a demo of enterprise plan. ');
    });

    $('.btnCustom').click(function() {
        //_fbq.push('track', 'Lead');
        scrollTo('.form-container');
        $('#message').val('I would like to know more detail of custom plan. ');
    });
    $('.sign-up').click(function() {
        scrollTo('#partnership-form');
        ga('send', 'event', "signup", "clicked", "Signup-button(partnership-form)", document.referrer);

    });
    $('.sign-up-sourcing').click(function() {
        scrollTo('#sourcing-form')
        ga('send', 'event', "signup", "clicked", "Signup-button(sourcing-form)", document.referrer);

    });

    function scrollTo(sectionClass) {
        $('html,body').animate({
            scrollTop: $(sectionClass).offset().top
        }, 'slow');
    }

    var positionName = "";
    var formStr = '';

    $('.apply4GH').on('click', function() {
        var isVisible = $(".form-apply").is(":visible");
        if (!isVisible) {
            $(".form-apply").toggle();
        }
        positionName = "Growth Hacking Intern";
        $("#position-name").html(positionName);
        $("#position").val(positionName);
        scrollTo(".form-apply");
    });
    $('.apply4SE').on('click', function() {
        var isVisible = $(".form-apply").is(":visible");
        if (!isVisible) {
            $(".form-apply").toggle();
        }
        positionName = "FullStack Developer";
        $("#position-name").html(positionName);
        $("#position").val(positionName);
        scrollTo(".form-apply");
    });
    $('.apply4DMA').on('click', function() {
        var isVisible = $(".form-apply").is(":visible");
        if (!isVisible) {
            $(".form-apply").toggle();
        }
        positionName = "DIGITAL HR MARKETING ANALYST";
        $("#position-name").html(positionName);
        $("#position").val(positionName);
        scrollTo(".form-apply");
    });

    $(".btnTrial").click(function() {
        scrollTo(".form-container");
    });

    $('.apply4AM').on('click', function() {
        var isVisible = $(".form-apply").is(":visible");
        if (!isVisible) {
            $(".form-apply").toggle();
        }
        positionName = "Account Manager";
        $("#position-name").html(positionName);
        $("#position").val(positionName);
        scrollTo(".form-apply");
    });
    $('.apply4MLE').on('click', function() {
        var isVisible = $(".form-apply").is(":visible");
        if (!isVisible) {
            $(".form-apply").toggle();
        }
        positionName = "Machine Learning Engineer";
        $("#position-name").html(positionName);
        $("#position").val(positionName);
        scrollTo(".form-apply");
    });
    $('.apply4CSE').on('click', function() {
        var isVisible = $(".form-apply").is(":visible");
        if (!isVisible) {
            $(".form-apply").toggle();
        }
        positionName = "Client Services Executive";
        $("#position-name").html(positionName);
        $("#position").val(positionName);
        scrollTo(".form-apply");
    });

    $('#cv').on('click', function() {
        $('#cv-file').click();
    });

    $('#cv-file').change(function() {
        if ($('#cv-file').val() === "") {
            $('.file-text').html("No File Selected");
        } else {
            $('.file-text').html($('#cv-file').val());
        }
    });

    $('#contact-form').on('submit', function(event) {

        event.preventDefault();
        if (checkSendMessageFields()) {

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
                data: JSON.stringify(data),
                accepts: "application/json",
                error: function(req, err) {
                    console.log('error message: ' + err);
                    $(".form-message-box").html(err + " occurred! <br>Please send a email to <a href='mailto:hello@talkpush.com'>hello@talkpush.com</a>.");
                    $(".form-message-box").animate({ "opacity": "1", "color": "red" }, "slow").delay(15000).animate({ "opacity": "0" }, 2000);
                },
                success: function(json) {
                    ga('send', 'event', "signup", "submitted", "Signup-form(contact-form)", document.referrer);
                    $("#contact-form")[0].reset()
                    $(".form-message-box").html("Successful!");
                    $(".form-message-box").animate({ "opacity": "1" }, "slow").delay(5000).animate({ "opacity": "0" }, 2000);

                    _fbq.push('track', 'CompleteRegistration');
                }
            });
        }
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
            data: JSON.stringify(data),
            accepts: "application/json",
            error: function(req, err) {
                $(".btn-form > span").show();
                $(".btn-form > .sk-circle").hide();
                console.log('error message: ' + err);
                $(".form-message-box").html(err + " occurred! <br>Please send a email to <a href='mailto:hello@talkpush.com'>hello@talkpush.com</a>.");
                $(".form-message-box").animate({ "opacity": "1", "color": "red" }, "slow").delay(15000).animate({ "opacity": "0" }, 2000);
            },
            success: function(json) {
                ga('send', 'event', "signup", "submitted", "Signup-form(sourcing-form)", document.referrer);
                $(".btn-form > span").show();
                $(".btn-form > .sk-circle").hide();
                $("#sourcing-form")[0].reset()
                $(".form-message-box").html("<br/>Successful!");
                $(".form-message-box").animate({ "opacity": "1" }, "slow").delay(5000).animate({ "opacity": "0" }, 2000);

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
            data: JSON.stringify(data),
            accepts: "application/json",
            error: function(req, err) {
                $(".btn-form > span").show();
                $(".btn-form > .sk-circle").hide();
                console.log('error message: ' + err);
                $(".form-message-box").html(err + " occurred! <br>Please send a email to <a href='mailto:hello@talkpush.com'>hello@talkpush.com</a>.");
                $(".form-message-box").animate({ "opacity": "1", "color": "red" }, "slow").delay(15000).animate({ "opacity": "0" }, 2000);
            },
            success: function(json) {
                ga('send', 'event', "signup", "submitted", "Signup-form(partnership-form)", document.referrer);
                $(".btn-form > span").show();
                $(".btn-form > .sk-circle").hide();
                $("#partnership-form")[0].reset()
                $(".form-message-box").html("<br/>Successful!");
                $(".form-message-box").animate({ "opacity": "1" }, "slow").delay(5000).animate({ "opacity": "0" }, 2000);

                _fbq.push('track', 'CompleteRegistration');
            }
        })
    });
    $('#application-form').on('submit', function(event) {
        event.preventDefault();
        var form = $(this);
        var fd = new FormData();
        if (typeof $("#cv-file")[0].files[0] != "undefined") {
            fd.append('file', $("#cv-file")[0].files[0]);
            fd.append("haveFile", true);
        } else {
            fd.append("haveFile", false);
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
            error: function(req, err) {
                console.log('error message: ' + err);
                $(".form-message-box").html(err + " occurred! <br>Please send a email to <a href='mailto:hello@talkpush.com'>hello@talkpush.com</a>.");
                $(".form-message-box").animate({ "opacity": "1", "color": "red" }, "slow").delay(15000).animate({ "opacity": "0" }, 2000);
            },
            success: function(json) {
                $(".form-message-box").html("Successful! Thanks for your submission.");
                $(".form-message-box").animate({ "opacity": "1" }, "slow").delay(5000).animate({ "opacity": "0" }, 2000);
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

    $('.demo .phone-row button').on('click', function() {
        submitDemoPhone();
    });

    $('.demo .input-row button').on('click', function() {
        submitDemoDetails();
    });

    // enter function (to submit demo form)
    $('input[name="demo_phone_no"]').bind('keyup', function(e) {
        var countryCode = $('#demo_phone_no').intlTelInput("getSelectedCountryData");
        if ($(this).val().replace("+" + countryCode.dialCode, "") != "" && e.keyCode === 13) {
            submitDemoPhone();
        }
    });


    $('input[name="demo_first_name"], input[name="demo_last_name"], input[name="demo_email"]').bind('keyup', function(e) {
        if (e.keyCode === 13) {
            submitDemoDetails();
        }
    });

    $('#demo_phone_no').intlTelInput({
        utilsScript: "js/utils.js?4",
        nationalMode: false,
        autoPlaceholder: false,
        preferredCountries: ["hk", "ph", "fr"]
    });


    function submitDemoPhone() {
        var countryCode = $('#demo_phone_no').intlTelInput("getSelectedCountryData");
        var phoneNo = $('input[name="demo_phone_no"]').val().replace("+" + countryCode.dialCode, "");

        if ($('input[name="demo_phone_no"]').val() === "") {
            $('span#demo_phone_no_error').show();
        } else {
            $('span#demo_phone_no_error').hide();
            formData.append("api_key", apiKey);
            formData.append("api_secret", apiSecret);

            formData.append("campaign_invitation[user_phone_number]", phoneNo);
            formData.append("campaign_invitation[user_country_code]", countryCode.dialCode);

            $('.demo .phone-row').fadeOut(500);
            setTimeout(function() {
                $('.demo .input-row').fadeIn(700);
            }, 500);

            scrollToClass('.demo');

        }
    }

    function submitDemoDetails() {
        if ($('input[name="demo_first_name"]').val() === "" || $('input[name="demo_last_name"]').val() === "") {
            $('span#demo_first_name_error, span#demo_last_name_error').show();
        } else {
            $('span#demo_first_name_error, span#demo_last_name_error').hide();
            formData.append("campaign_invitation[first_name]", $(".demo input[name='demo_first_name']").val());
            formData.append("campaign_invitation[last_name]", $(".demo input[name='demo_last_name']").val());
            if ($('input[name="demo_email"]').val() === "") {} else {
                formData.append("campaign_invitation[email]", $(".demo input[name='demo_email']").val());
            }
            submitData(campaignID);
            $('.demo .input-row').fadeOut(500);
            setTimeout(function() {
                $('.demo .thankyou-row').fadeIn(700);
            }, 500);
            countToZero();
            scrollToClass('.demo');
        }
    }

    function countToZero() {
        var count = 15;
        var counter = setInterval(function() {
            count -= 1;
            $('.demo .thankyou-row span#counter').html(count);
            if (count === 0) {
                clearInterval(counter);
                $('.demo .thankyou-row').fadeOut(500);
                $('input[name="demo_first_name"], input[name="demo_last_name"], input[name="demo_email"], input[name="demo_country_code"], input[name="demo_phone_no"]').val("");

                setTimeout(function() {
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
            success: function(data) {
                if (data.error === "duplicated") {
                    console.log(data);
                    $('.demo .thankyou-row .thankyou-text').hide();
                    $('.demo .thankyou-row .duplicate-text').show();
                } else {
                    console.log(data);
                    pinNo = data.pin;
                    $('.demo .thankyou-row .duplicate-text').hide();
                    $('.demo .thankyou-row .thankyou-text').show();
                    callNow(c);
                }
            },
            xhrFields: {
                withCredentials: false
            }
        });
    }

    function scrollToClass(sectionClass) {
        $('html,body').animate({ scrollTop: $(sectionClass).offset().top }, 'fast');
    }

    function callNow(a, b, c) {
        var countryCode = $('#demo_phone_no').intlTelInput("getSelectedCountryData");
        var phoneNo = $('input[name="demo_phone_no"]').val().replace("+" + countryCode.dialCode, "");
        $.ajax({
            url: "http://" + host + "/api/talkpush_services/campaigns/" + c + "/campaign_invitations/call",
            type: "POST",
            data: { "api_key": apiKey, "api_secret": apiSecret, "pin": pinNo, "phone_no": phoneNo, "country_code": countryCode.dialCode },
            crossDomain: true,
            success: function(data, b, c) {
                //                console.log(data);
                //                if (c.status === 200) {
                //                    $('.black-box').css('display', 'none');
                //                    if(isStaging()==="1"){
                //                        window.location.href = "thankyou.html?option=1&staging=1";
                //                    }else{
                //                        window.location.href = "thankyou.html?option=1";
                //                    }
                //                }
            }
        });
    }

    function checkSendMessageFields() {
        var tf = true;
        var emailReg = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;

        if ($('#fullName').val() === "") {
            $('span#fullName_error').show();
            tf = false;
        } else {
            $('span#fullName_error').hide();
        }

        if ($('#email').val() === "") {
            $('span#email_error').show();
            tf = false;
        } else {
            if (!emailReg.test($('#email').val())) {
                $('span#email_error').html('Please enter a valid E-mail address');
                $('span#email_error').show();
            } else {
                $('span#email_error').hide();
            }
        }
        //        if ($('#company').val() === "") {
        //            $('span#company_error').show();
        //            tf = false;
        //        }
        //
        //        if ($('#message').val() === "") {
        //            $('span#message_error').show();
        //            tf = false;
        //        }
        if (!tf) {
            scrollToClass('.contact-form');
        }
        return tf;
    }
    $(".carousel").owlCarousel({
        items: 8,
        lazyLoad: true,
        slideSpeed: 200,
        autoplay: true,
        autoplayTimeout: 5000,
        margin: 50,
        loop: true,
        autoWidth: false,
        autoplayHoverPause: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            479: {
                items: 3
            },
            768: {
                items: 4
            },
            979: {
                items: 6
            },
            1199: {
                items: 8
            },
            1441: {
                items: 10
            }
        },
        nav: false
    });
    $("#go-down").on("click", function() {
        scrollTo(".keyFeatures");
    })

});
