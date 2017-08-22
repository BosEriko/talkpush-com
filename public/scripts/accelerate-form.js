$(function() {
  var accelerateCampaignID = "3327"
  var accelerateFormData = new FormData()
  $('form.accelerate-form').submit(function(e) {
    e.preventDefault
    accelerateFormData.append("api_key", apiKey);
    accelerateFormData.append("api_secret", apiSecret);
    accelerateFormData.append("campaign_invitation[first_name]", $("form.accelerate-form input[name='acc_firstName']").val());
    accelerateFormData.append("campaign_invitation[last_name]", $("form.accelerate-form input[name='acc_lastName']").val());
    accelerateFormData.append("campaign_invitation[email]", $("form.accelerate-form input[name='acc_email']").val());
    accelerateFormData.append("campaign_invitation[user_phone_number]", $("form.accelerate-form input[name='acc_phoneNumber']").val());
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
          console.log("This candidate was duplicated. Please try again after 15 mins.");
        } else {
          console.log(data);
          pinNo = data.pin;
          console.log("Thank you for your interest.");
        }
      },
      xhrFields: {
        withCredentials: false
      }
    });
  });
});
