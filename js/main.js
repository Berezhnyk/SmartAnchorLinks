(function () {
    "use strict";
    $(document).ready(function () {
        init();
    });
    function init() {
        var dom = getDom();
        var sal = new SmartAnchorLinks({
            selectors:dom.pages
        });
    }
    function getDom() {
        return{
            menu        :   $('#menu'),
            container   :   $('#content'),
            pages       :   [
                $('#page1'),
                $('#page2'),
                $('#page3'),
                $('#page4'),
                $('#page5')
            ]
        }
    }
})();