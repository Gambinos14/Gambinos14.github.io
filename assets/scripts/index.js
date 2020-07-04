/*!
    * Start Bootstrap - Agency v6.0.2 (https://startbootstrap.com/template-overviews/agency)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
    */
    (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 72,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 74,
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);


    let i = 0
    const header = 'Stefano Gambino'
    const timer = 600
    const lengthOfHeader = header.length
    let j = lengthOfHeader - 1
    const lastNameLength = header.split(' ')[1].length

    let random = Math.floor(Math.random() * lastNameLength + 1)
    while (random < 4) {
      random = Math.floor(Math.random() * lastNameLength + 1)
    }

    const displayName = () => {
      if (header[i] === ' ') {
        $(".masthead-heading").html($(".masthead-heading").html() + ' ')
        i++
        displayName()
      } else if (i < lengthOfHeader) {
        $(".masthead-heading").html($(".masthead-heading").html() + header[i])
        i++
        setTimeout(displayName, timer)
      } else if (i === lengthOfHeader && j > (lengthOfHeader - 1) - random) {
        const newString = $(".masthead-heading").html().substring(0, j)
        $(".masthead-heading").html(newString)
        j--
        setTimeout(displayName, 200)
      } else if (i === lengthOfHeader && j === (lengthOfHeader - 1) - random) {
        i = (lengthOfHeader - random)
        j = lengthOfHeader - 1
        random = Math.floor(Math.random() * lastNameLength + 1)
        while (random < 4) {
          random = Math.floor(Math.random() * lastNameLength + 1)
        }

        displayName()
      }
    }

    displayName()
})(jQuery); // End of use strict
