var formData = new FormData();
var apiKey = "735d80bffe5525e86aa19a680b7a6ea7";
var apiSecret = "2d85fc3203979c704f86b9592a75b82a";
var host = "my.talkpush.com";
var pinNo = "";
var campaignID = "e3907969ae2be3c16cff8b3b6cdc97b8";

$('input[name="demo_phone_no"], form.accelerate-form input.accelerate-phone').intlTelInput({
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/10.0.6/js/utils.js",
    nationalMode: false,
    autoPlaceholder: false,
    preferredCountries: ["hk", "ph", "fr"]
});

$(document).ready(function(){
    $('.btn-demo-call').on('click', function(e) {
        e.preventDefault();
        submitDemoPhone();
    });

    $('.btn-demo-submit').on('click', function(e) {
        e.preventDefault();
        submitDemoDetails();
    });
    // enter function (to submit demo form)
    $('input[name="demo_phone_no"]').bind('keyup', function(e) {
        var countryCode = $('input[name="demo_phone_no"]').intlTelInput("getSelectedCountryData");
        if ($(this).val().replace("+" + countryCode.dialCode, "") != "" && e.keyCode === 13) {
            submitDemoPhone();
        }
    });
    $('input[name="demo_name"], input[name="demo_email"]').bind('keyup', function(e) {
        if (e.keyCode === 13) {
            submitDemoDetails();
        }
    });
})

$('#demo_phone_no, form.accelerate-form input.accelerate-phone').intlTelInput({
    utilsScript: "js/utils.js?4",
    nationalMode: false,
    autoPlaceholder: false,
    preferredCountries: ["hk", "ph", "fr"]
});



function submitDemoPhone() {
    var countryCode = $('input[name="demo_phone_no"]').intlTelInput("getSelectedCountryData");
    var phoneNo = $('input[name="demo_phone_no"]').val().replace("+" + countryCode.dialCode, "");
    
    if ($('input[name="demo_phone_no"]').val() === "") {
        $('#demo_phone_no_error').text("Phone number must be not null and numeric only.");
        $('#demo_phone_no_error').show();
    } else {
        $('#demo_phone_no_error').hide();
        formData.append("api_key", apiKey);
        formData.append("api_secret", apiSecret);
        formData.append("campaign_invitation[user_phone_number]", phoneNo);
        formData.append("campaign_invitation[user_country_code]", countryCode.dialCode);
        $('.demo-phone .step-1').fadeOut(500);
        setTimeout(function() {
            $('.demo-phone .step-2').fadeIn(700);
        }, 500);
    }
}

function submitDemoDetails() {
    var nameArr = $("input[name='demo_name']").val().split(" ");
    var first_name = nameArr.shift();
    var last_name = nameArr.join(" ");
    if ($('input[name="demo_name"]').val() === "") {
        $('#demo_name_error').text("Name cannot be null");
        $('#demo_name_error').show();
    } else {
        $('#demo_name_error').hide();
        formData.append("campaign_invitation[first_name]", first_name);
        formData.append("campaign_invitation[last_name]", last_name);
        if ($('input[name="demo_email"]').val() !== "") {
            formData.append("campaign_invitation[email]", $("input[name='demo_email']").val());
        }
        submitData(campaignID);
        $('.demo-phone .step-2').fadeOut(500);
        setTimeout(function() {
            $('.demo-phone .step-3').fadeIn(700);
        }, 500);
        countToZero();
    }
}

function countToZero() {
    var count = 5;
    var counter = setInterval(function() {
        count -= 1;
        $('.demo-phone .step-3 #count').html(count);
        if (count === 0) {
            clearInterval(counter);
            $('.demo-phone .step-3').fadeOut(500);
            $('input[name="demo_name"], input[name="demo_phone_no"], input[name="demo_email"]').val("");
            setTimeout(function() {
                $('.demo-phone .step-1').fadeIn(700);
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
                $(".step-3 .message").text("This candidate was duplicated. Please try again after 15 mins.");
            } else {
                console.log(data);
                pinNo = data.pin;
                $(".step-3 .message").text("Thank you for your interest.");
            }
        },
        xhrFields: {
            withCredentials: false
        }
    });
}
