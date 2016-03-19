$(document).ready(function () {
  var trigger = $('.hamburger'),
      overlay = $('.overlay'),
     isClosed = false;

  trigger.click(function () {
    hamburger_cross();      
  });

  function hamburger_cross() {
    if (isClosed == true) {          
      overlay.hide();
      trigger.removeClass('is-open');
      trigger.addClass('is-closed');
      isClosed = false;
    } else {   
      overlay.show();
      trigger.removeClass('is-closed');
      trigger.addClass('is-open');
      isClosed = true;
    }
  }
  
  $('[data-toggle="offcanvas"]').click(function () {
    $('#wrapper').toggleClass('toggled');
  });  

  function closeSidebar() {
    overlay.hide();
    trigger.removeClass('is-open');
    trigger.addClass('is-closed');
    isClosed = false;
    $('#wrapper').toggleClass('toggled');
  }

  $(document).on('keydown', function (e) {
    if (e.keyCode === 27 && isClosed) {
      closeSidebar();
    }
  });

  $(document).on('click', function (e) {
    if ($(e.target).closest("nav.navbar, .hamburger, .hamb-top, .hamb-middle, .hamb-bottom").length === 0 && isClosed) {
      closeSidebar();
      e.stopPropagation();
    }
  });
});
