// Animate Smooth Scroll
$('#goHome').on('click', function() {
    const images = $('#home').position().top;

    $('html, body').animate(
      {
        scrollTop: images
      },
      900
    );
  });
