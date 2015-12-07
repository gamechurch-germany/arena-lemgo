$(function() {

    var $boxContent = $("#loadwrap");
    var URL = '';
    var $el;
    $('.navigate').click(function(event) {
        $el = $(this);
        $('#load').addClass('animate-out');
        URL = $el.attr("href");
        URL = URL + " #load";
        $boxContent.load(URL, function() {
            jQuery.getScript("js/ajax.js");
            $('#load').addClass('animate-in');
        });
        event.preventDefault();
    });
});
