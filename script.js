var $form = $('form#test-form'),
    url = 'https://script.google.com/macros/s/AKfycbyZYqO5OyN2NwrGmBSMOCEZYoVrt07uZHUfAOxXLDpPE3RFFGc/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serialize()
  }).success(
    // do something
  );
})