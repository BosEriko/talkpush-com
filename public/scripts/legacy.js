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
        if (!tf) {
            scrollToClass('.contact-form');
        }
        return tf;
    }
var _mfq = _mfq || [];
(function() {
   var mf = document.createElement("script");
   mf.type = "text/javascript"; mf.async = true;
   mf.src = "//cdn.mouseflow.com/projects/98e6ad72-92b7-40ab-a5d1-36b3a2973c42.js";
   document.getElementsByTagName("head")[0].appendChild(mf);
})();
$(document).ready(function(){

    $('input[name="demo_phone_no"]').intlTelInput({
        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/10.0.6/js/utils.js",
        nationalMode: false,
        autoPlaceholder: false,
        preferredCountries: ["hk", "ph", "fr"]
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
//                    ga('send', 'event', "signup", "submitted", "Signup-form(contact-form)", document.referrer);
                    $("#contact-form")[0].reset()
                    $(".form-message-box").html("Successful!");
                    $(".form-message-box").animate({ "opacity": "1" }, "slow").delay(5000).animate({ "opacity": "0" }, 2000);

//                    _fbq.push('track', 'CompleteRegistration');
                }
            });
        }
    });
})
