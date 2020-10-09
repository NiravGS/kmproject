(function ($) {
   "use strict";

   $(document).ready(function () {
      $(".owl-carousel").owlCarousel({
         loop: true,
         margin: 10,
         responsiveClass: true,
         nav: true,
         dots: false,
         responsive: {
            320: {
               items: 1,
               nav: true,
            },
            768: {
               items: 2,
               nav: false,
            },
            992: {
               items: 3,
               nav: false,
            },
         },
      });
   });
   $(document).ready(function () {
      $("#clinet__rating_slider").owlCarousel({
         loop: true,
         margin: 50,
         responsiveClass: true,
         nav: true,
         dots: false,
         responsive: {
            320: {
               items: 1,
               nav: true,
            },
            768: {
               items: 2,
               nav: false,
            },
            992: {
               items: 3,
               nav: false,
            },
         },
      });
   });
})(jQuery);
