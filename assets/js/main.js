$(document).ready(function () {
    $('.blurViewPort').height($('#mainCaption').height());
    $('.blurViewPort').width($('#mainCaption').width());

    $(window).scroll(function () {
      $('#blurBg').css('top', ($('#mainBg').position().top - $(window).scrollTop()));
    });

    $('.typingSpan').typed({
      // Waits 1000ms after typing "First"
      // strings: ["First ^1000 sentence.", "Second sentence."],
      // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
      stringsElement: $('#typed-strings'),
      // typing speed
      typeSpeed: 5,
      // time before typing starts
      startDelay: 0,
      // backspacing speed
      backSpeed: 0,
      // time before backspacing
      backDelay: 500,
      // loop
      loop: false,
      // false = infinite
      loopCount: false,
      // show cursor
      showCursor: true,
      // character for cursor
      cursorChar: "|",
      // attribute to type (null == text)
      attr: null,
      // either html or text
      contentType: 'html',
      // call when done callback function
      callback: function() {},
      // starting callback function before each string
      preStringTyped: function() {},
      //callback for every typed string
      onStringTyped: function() {},
      // callback for reset
      resetCallback: function() {}
    });
});
