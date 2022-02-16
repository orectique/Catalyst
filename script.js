var $form = $('form#test-form'),
    url = 'https://script.google.com/macros/s/AKfycbx_M55LkCrI0ZURQfQjG-Lde-3OkJQOTkEP7mviEN20wYwusif8/exec'

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