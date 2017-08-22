$(function() {
  $('form.accelerate-form input.accelerate-phone').intlTelInput({
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/10.0.6/js/utils.js",
    nationalMode: false,
    autoPlaceholder: false,
    preferredCountries: ["hk", "ph", "fr"]
  });
  $('form.accelerate-form input.accelerate-phone').intlTelInput({
    utilsScript: "js/utils.js?4",
    nationalMode: false,
    autoPlaceholder: false,
    preferredCountries: ["hk", "ph", "fr"]
  });
});
