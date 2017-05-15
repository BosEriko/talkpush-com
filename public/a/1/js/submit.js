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
                callNow(c);
            }
        },
        xhrFields: {
            withCredentials: false
        }
    });
}

function callNow(c) {
    debugger
    var countryCode = $('input[name="demo_phone_no"]').intlTelInput("getSelectedCountryData");
    var phoneNo = $('input[name="demo_phone_no"]').val().replace("+" + countryCode.dialCode, "");
    $.ajax({
        url: "https://" + host + "/api/talkpush_services/campaigns/" + c + "/campaign_invitations/call",
        type: "POST",
        data: { "api_key": apiKey, "api_secret": apiSecret, "pin": pinNo, "phone_no": phoneNo, "country_code": countryCode.dialCode },
        crossDomain: true,
        success: function() {
        }
    });
}