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
// Number counting animation
document.addEventListener('DOMContentLoaded', function() {
    const numbers = document.querySelectorAll('.number');
    
    // Function to animate number counting
    function animateNumber(numberElement) {
        const target = parseInt(numberElement.getAttribute('data-target'));
        let currentNumber = 0;
        const increment = target / 200; // Controls the speed of the animation
        const interval = setInterval(function() {
            currentNumber += increment;
            if (currentNumber >= target) {
                currentNumber = target;
                clearInterval(interval);
            }
            numberElement.innerText = Math.floor(currentNumber);
        }, 10); // Interval for updating the number
    }

    // Setup Intersection Observer to start animation when section is in view
    const options = {
        root: null, // Default: viewport
        threshold: 0.5 // Trigger when 50% of the section is in view
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                // When section comes into view, start the animation
                numbers.forEach(function(number) {
                    animateNumber(number);
                });
                observer.unobserve(entry.target); // Stop observing after the animation starts
            }
        });
    }, options);

    // Observe the section with the numbers
    const numberSection = document.querySelector('#number-counter');
    observer.observe(numberSection);
});
