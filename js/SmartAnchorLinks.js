function SmartAnchorLinks(config) {
    "use strict";
    config = $.extend({
        selectors : []
    },config);
    var selectors = config.selectors;
    init();
    return {

    };
    function init() {
        $.each(selectors, function (index, selector) {
            var waiting = false;
            $(window).scroll(function() {
                "use strict";
                if (waiting) {
                    return;
                }
                waiting = true;
                var hT = selector.offset().top,
                    hH = selector.outerHeight(),
                    wH = $(window).height(),
                    wS = $(self).scrollTop();
                if (wS > (hT+hH-wH)){
                    history.pushState(null, null, '#' + selector[0].id);
                }
                setTimeout(function () {
                    waiting = false;
                }, 50);
            });
        });
    }
}