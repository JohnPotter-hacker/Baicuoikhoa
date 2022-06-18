// Animate Smooth Scroll
$('#view-work').on('click', function() {
    const images = $('#place').position().top;

    $('html, body').animate(
      {
        scrollTop: images
      },
      900
    );
  });
