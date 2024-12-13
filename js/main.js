(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Date and time picker
    $('#date').datetimepicker({
        format: 'L'
    });
    $('#time').datetimepicker({
        format: 'LT'
    });


    // Service carousel
    $(".service-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 30,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Team carousel
    $(".team-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 30,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        center: true,
        autoplay: true,
        smartSpeed: 1000,
        margin: 30,
        dots: true,
        loop: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);
const swiper = new Swiper('.swiper', {
    slidesPerView: 4,
    spaceBetween: 15,
    loop: true,
    autoplay: {
        delay: 0, // No delay between transitions
        disableOnInteraction: false,
    },
    speed: 5000, // Adjust speed for continuous motion
});
let currentIndex = 0;

function moveCarousel() {
    const items = document.querySelectorAll('.carousel-item1');
    const totalItems = items.length;

    currentIndex = (currentIndex + 1) % totalItems;

    const carousel = document.querySelector('.carousel1');
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Change the carousel every 5 seconds
setInterval(moveCarousel, 5000);
const blogs = document.querySelectorAll('.blog');

const onScroll = () => {
    const triggerBottom = window.innerHeight / 5 * 4;

    blogs.forEach(blog => {
        const blogTop = blog.getBoundingClientRect().top;

        if (blogTop < triggerBottom) {
            blog.classList.add('show');
        } else {
            blog.classList.remove('show');
        }
    });
};

window.addEventListener('scroll', onScroll);

// Initial check
onScroll();
function showText(element) {
    const text = element.querySelector('.hover-text');
    text.style.visibility = 'visible';
    text.style.opacity = '1';
  }

  function hideText(element) {
    const text = element.querySelector('.hover-text');
    text.style.visibility = 'hidden';
    text.style.opacity = '0';
  }

