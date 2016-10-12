(function($) {
    $(function() {
        var jcarousel = $('.jcarousel');

        jcarousel
            .on('jcarousel:reload jcarousel:create', function () {
                var carousel = $(this),
                    width = carousel.innerWidth();

                if (width >= 1200) {
                    width = width / 8;
                } else if (width >= 820) {
                    width = width / 7;
                } else if (width >= 750) {
                    width = width / 6;
                } else if (width >= 570) {
                    width = width / 5;
                } else if (width >= 450) {
                    width = width / 4;
                } else if (width >= 300) {
                    width = width / 3;
                } else if (width >= 200) {
                    width = width / 2;
                }

                carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
            })
            .jcarousel({
                wrap: 'circular'
            });

        $('.jcarousel-control-prev')
            .jcarouselControl({
                target: '-=4'
            });

        $('.jcarousel-control-next')
            .jcarouselControl({
                target: '+=4'
            });

        $('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .on('click', function(e) {
                e.preventDefault();
            })
            .jcarouselPagination({
                perPage: 4,
                item: function(page) {
                    return '<a href="#' + page + '">' + page + '</a>';
                }
            });
    });
})(jQuery);
