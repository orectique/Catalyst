var $form = $('form#contact_form'),
    url = 'https://script.google.com/macros/s/AKfycbyZYqO5OyN2NwrGmBSMOCEZYoVrt07uZHUfAOxXLDpPE3RFFGc/exec'

$('#form_button').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serialize()
  }).success(
    alert('Thank you! You have been logged.')
  );
})

