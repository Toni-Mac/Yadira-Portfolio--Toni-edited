(function($){

    const $sideBarNavLinks = $('#side-bar-nav a'); 
    const sideBarNavTopPos = $('#side-bar-nav').offset().top;
    const $bannerBottomBar = $('#banner-bottom');

    // Change the color of the links depending on the scroll position 
    $(window).scroll(function(){
        const barPos = $bannerBottomBar.offset().top - $(window).scrollTop();

        if(barPos < sideBarNavTopPos){
            $sideBarNavLinks.addClass('inverse');
        }else {
            $sideBarNavLinks.removeClass('inverse');
        }

    });

    // Make the current clicked link yellow (active style)
    $sideBarNavLinks.click(function(){
        $sideBarNavLinks.removeClass('active');
        $(this).addClass('active');

        if($(this).attr('href') === '#contactme'){
            console.log('contact section clicked...');
            // $aboutPic.removeClass('fixed');
            // $aboutPic.addClass('absolute');

        }

    });

    // Smooth Scroll Links
    // Select all links with hashes
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
    // On-page links
    if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
    ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
            return false;
            } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
            };
        });
        }
    }
    }); 


})(jQuery);

