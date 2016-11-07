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
        var waiting = false;
        $(window).scroll(function() {
            "use strict";
            if (waiting) {
                return;
            }
            waiting = true;
            var page = '';
            $.each(selectors, function (index, selector) {
                var hT = selector.offset().top,
                    hH = selector.outerHeight(),
                    wH = $(window).height(),
                    wS = $(self).scrollTop();
                if (wS > (hT + hH - wH)) {
                    page = selector[0].id;
                }
            });
            history.pushState(null, null, '#' + page);
            setTimeout(function () {
                waiting = false;
            }, 50);
        });
    }
}