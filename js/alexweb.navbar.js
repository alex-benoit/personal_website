$(document).ready(function(){
  var userHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  var startFade = userHeight - userHeight/2;
  var endFade = userHeight - 70;
  var $navbar = $('#navbar');
  var st = $(this).scrollTop();
  if ( st <= startFade ) {
    $navbar.css({ 'background' : 'rgba(29,45,76,0.0)' });
  } else if ( st > startFade && st < endFade ) {
    var transparancy = ((st/endFade - startFade/endFade) / (1 - startFade/endFade));
    $navbar.css({ 'background' : `rgba(29,45,76,${transparancy})` });
  } else {
    $navbar.css({ 'background' : 'rgba(29,45,76,1)' });
  }

  $(window).on('scroll', function() {
    var st = $(this).scrollTop();
    if ( st <= startFade ) {
      $navbar.css({ 'background' : 'rgba(29,45,76,0.0)' });
    } else if ( st > startFade && st < endFade ) {
      var transparancy = ((st/endFade - startFade/endFade) / (1 - startFade/endFade));
      $navbar.css({ 'background' : `rgba(29,45,76,${transparancy})` });
    } else {
      $navbar.css({ 'background' : 'rgba(29,45,76,1)' });
    }
  });
});

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

  $('#toWork').on('click', function() {
    event.preventDefault();
    var targetOffset = $('#work').offset().top - 70;
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
