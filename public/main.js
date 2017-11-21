$(document).ready(function(){
  $('input[type="submit"]').on("click", function(event) {
    event.preventDefault();
    var first_name = $('#first_name').val();
    var full_name = $('#full_name').val();
    var mail = $('#mail').val();
    var color = $('input[name="color"]:checked').val();
    var gender = $('input[name="gender"]:checked').val();
    var dedicacion = $('#dedicacion').val();
    var language = $('input[name="language"]:checked');
    var languages = new Array();

    for (var i = 0; i < language.length; i++) {
       var temp_language = language[i];
       languages.push(temp_language.value);
    }

    var payload = {
      'first_name': first_name,
      'full_name': full_name,
      'mail': mail,
      'color': color,
      'gender' : gender,
      'languages' : languages,
      'dedicacion':dedicacion
    };

    $.post('/find', payload);
    $.get('/find', payload);
  });
});
