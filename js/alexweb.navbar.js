$(document).ready(function(){
  $('#arrow-down-toAbout').on('click', function() {
    event.preventDefault();
    var targetOffset = $('#about').offset().top - 70;
    $("html, body").animate({scrollTop: targetOffset}, 500);
  });

  $('#toAbout').on('click', function() {
    event.preventDefault();
    var targetOffset = $('#about').offset().top - 70;
    $("html, body").animate({scrollTop: targetOffset}, 500);
  });

  $('#toResume').on('click', function() {
    event.preventDefault();
    var targetOffset = $('#resume').offset().top - 70;
    $("html, body").animate({scrollTop: targetOffset}, 500);
  });

  $('#toProjects').on('click', function() {
    event.preventDefault();
    var targetOffset = $('#projects').offset().top - 70;
    $("html, body").animate({scrollTop: targetOffset}, 500);
  });

  $('#toContact').on('click', function() {
    event.preventDefault();
    var targetOffset = $('#contact').offset().top - 70;
    $("html, body").animate({scrollTop: targetOffset}, 500);
  });

  $('#button-toContact').on('click', function() {
    event.preventDefault();
    var targetOffset = $('#contact').offset().top - 70;
    $("html, body").animate({scrollTop: targetOffset}, 500);
  });
});
