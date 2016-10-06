// NAVBAR DESIGN
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

// MENU LINKS TO SECTIONS
$(document).ready(function(){
  $('#navbar').on('click', '#toAbout', function() {
    event.preventDefault();
    var targetOffset = $('#about').offset().top - 70;
    $("html, body").animate({scrollTop: targetOffset}, 500);
  });

  $('#navbar').on('click', '#toResume', function() {
    event.preventDefault();
    var targetOffset = $('#resume').offset().top - 70;
    $("html, body").animate({scrollTop: targetOffset}, 500);
  });

  $('#navbar').on('click', '#toWork', function() {
    event.preventDefault();
    var targetOffset = $('#work').offset().top - 70;
    $("html, body").animate({scrollTop: targetOffset}, 500);
  });

  $('#navbar').on('click', '#toContact', function() {
    event.preventDefault();
    var targetOffset = $('#contact').offset().top - 70;
    $("html, body").animate({scrollTop: targetOffset}, 500);
  });

  $('#arrow-down-toAbout').on('click', function() {
    event.preventDefault();
    var targetOffset = $('#about').offset().top - 70;
    $("html, body").animate({scrollTop: targetOffset}, 500);
  });

  $('#button-toContact').on('click', function() {
    event.preventDefault();
    var targetOffset = $('#contact').offset().top - 70;
    $("html, body").animate({scrollTop: targetOffset}, 500);
  });
});

// MOBILE NAVBAR MENU
function openMenu() {
  document.getElementById("dropdown").classList.toggle("show");
}

$(document).ready(function(){
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {

      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  };
});
