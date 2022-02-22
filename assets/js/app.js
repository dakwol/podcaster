

$('.scrollto').on('click', function() {

    let href = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, {
        duration: 600,   // по умолчанию «400»
        easing: "linear" // по умолчанию «swing»
    });

    return false;
});

$(function() {
    let header = $('.header');
     
    $(window).scroll(function() {
      if($(this).scrollTop() > 1) {
       header.addClass('deactive');
      } else {
       header.removeClass('deactive');
      }
    });
   });

particlesJS("particles-js", {"particles":{"number":{"value":100,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":true,"anim":{"enable":true,"speed":0.24362316369040352,"opacity_min":0.1,"sync":true}},"size":{"value":5,"random":true,"anim":{"enable":true,"speed":5,"size_min":0.1,"sync":false}},"line_linked":{"enable":false,"distance":150,"color":"#ffffff","opacity":0.6814501258678471,"width":1},"move":{"enable":true,"speed":2,"direction":"none","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":true,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"window","events":{"onhover":{"enable":true,"mode":"bubble"},"onclick":{"enable":false,"mode":"bubble"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":219.26084732136317,"size":5,"duration":0.3,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});



