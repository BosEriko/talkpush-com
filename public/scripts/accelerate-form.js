$(function() {
  var accelerateCampaignID = "3327"
  var accelerateFormData = new FormData();
  $('form.accelerate-form').submit(function(e) {
    accelerateFormData.append("api_key", apiKey);
    accelerateFormData.append("api_secret", apiSecret);
    accelerateFormData.append("source", "Landing Page");
    accelerateFormData.append("campaign_invitation[first_name]", $("form.accelerate-form input[name='acc_firstName']").val());
    accelerateFormData.append("campaign_invitation[last_name]", $("form.accelerate-form input[name='acc_lastName']").val());
    accelerateFormData.append("campaign_invitation[email]", $("form.accelerate-form input[name='acc_email']").val());
    accelerateFormData.append("campaign_invitation[user_phone_number]", $("form.accelerate-form input[name='acc_phoneNumber']").val());
    console.log(accelerateFormData)
    $.ajax({
      url: "https://" + host + "/api/talkpush_services/campaigns/" + accelerateCampaignID + "/campaign_invitations",
      type: "POST",
      data: accelerateFormData,
      mimeType: "multipart/form-data",
      contentType: false,
      cache: false,
      processData: false,
      crossDomain: true,
      dataType: "json",
      success: function(data) {
        if (data.error === "duplicated") {
          console.log(data);
          $(".accelerate-error").show();
        } else {
          console.log(data);
          pinNo = data.pin;
          $(".accelerate-data").delay(500).fadeIn(500);
          $("form.accelerate-form").fadeOut(500);
        }
      },
      error: function(a, b, c) {
      },
      xhrFields: {
        withCredentials: false
      }
    });
    e.preventDefault();
  });
});
