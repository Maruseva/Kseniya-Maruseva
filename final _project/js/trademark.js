var slider = tns({
    container: '.service_wrap',
    items: 1,
    slideBy: 'page',
    autoplay: true,
    nav: false,    
    speed: 400,
    autoplayButtonOutput: false,
    mouseDrag: true,
    controlsContainer: '.service_controls',
    responsive: {
        492: {
            items: 2,
        },
        1024: {
            items: 3,
        },
        1280: {
            items: 4,
        }
    }
  });