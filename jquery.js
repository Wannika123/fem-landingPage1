$(document).ready(function() {
    $("#first-input").on('invalid', function() {
      $(".first-warning").text("Please check your email");
      $(this).css("border-color", "red");
    })
    $("#second-input").on('invalid', function() {
      $(".second-warning").text("Please check your email");
      $(this).css("border-color", "red");
    })
    $("input[type='email']").on('input', function() {
      if(/^\S+@\S+\.\S+$/.test($(this).val())) {
        $(".warning").text('');
        $(this).css("border-color", "black");
      }
    })
  })