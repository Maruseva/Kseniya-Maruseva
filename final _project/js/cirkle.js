var slider = tns({
    container: '.wrap_img',
    items: 1,
    slideBy: 'page',
    autoplay: true,
    nav: false,    
    speed: 400,
    autoplayButtonOutput: false,
    mouseDrag: true,
    controlsContainer: '.foto_controls',
    responsive: {
      492: {
          items: 2,
      }
    }
  });

  var slider = tns({
    container: '.patent',
    items: 1,
    slideBy: 'page',
    autoplay: true,
    nav: false,    
    speed: 400,
    autoplayButtonOutput: false,
    mouseDrag: true,
    controlsContainer: '.patent_controls',
    responsive: {
      492: {
          items: 2,
      }
    }
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