var slider = tns({
    container: '.wrap_img',
    items: 2,
    slideBy: 'page',
    autoplay: true,
    nav: false,    
    speed: 400,
    autoplayButtonOutput: false,
    mouseDrag: true,
    controlsContainer: '.foto_controls',
  });

  var slider = tns({
    container: '.patent',
    items: 2,
    slideBy: 'page',
    autoplay: true,
    nav: false,    
    speed: 400,
    autoplayButtonOutput: false,
    mouseDrag: true,
    controlsContainer: '.patent_controls',
  });

  var slider = tns({
    container: '.case_wrap',
    items: 1,
    slideBy: 'page',
    autoplay: true,
    nav: false,    
    speed: 400,
    autoplayButtonOutput: false,
    mouseDrag: true,
    controlsContainer: '.btn_adapt',
    responsive: {
        1024: {
            items: 2,
        }
    }
  });