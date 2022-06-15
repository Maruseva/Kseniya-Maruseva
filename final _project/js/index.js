var slider = tns({
    container: '.services_items',
    items: 1,
    slideBy: 'page',
    autoplay: true,
    nav: false,    
    speed: 400,
    autoplayButtonOutput: false,
    mouseDrag: true,
    controlsContainer: '.item_controls',
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

  var slider = tns({
    container: '.case_wrap',
    items: 1,
    slideBy: 'page',
    autoplay: true,
    nav: false,    
    speed: 400,
    autoplayButtonOutput: false,
    mouseDrag: true,
    controlsContainer: '.case_controls',
    responsive: {
        1024: {
            items: 2,
        }
    }
  });

  var slider = tns({
    container: '.team_content',
    items: 1,
    slideBy: 'page',
    autoplay: true,
    nav: false,    
    speed: 400,
    autoplayButtonOutput: false,
    mouseDrag: true,
    controlsContainer: '.team_controls',
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
