(function ($) {
    $.fn.changeCursor = function (cursorPicUrl, dx, dy) {
        var elem = this;
        function inFunction(e) {
            $cursor.show();
            return false;
        }
        function outFunction(e) {
            $cursor.hide();
            return false;
        }
        function moveFunction(e) {
            var x = e.clientX;
            var y = e.clientY;
            $cursor.css({
                "transform": "translate(" + x + "px," + y + "px)"
            });
        }
        var $cursor = $('<div id="#custom-cursor"></div>').css({
            /*cursor: none;*/
            width:      '150px',
            height:     '150px',
            background: 'url("' + cursorPicUrl + '") no-repeat left top',
            position:   'absolute',
            top: '0',
            left: '0',
            display: 'none'
        });

        $('body').append( $cursor );
        elem.on( "mouseenter", inFunction )
          .on( "mouseleave", outFunction )
          .mousemove( moveFunction );
        return this;
    };

})(jQuery);
