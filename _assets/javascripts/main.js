$(document).ready(function($) {
    $("#nav-primary-toggle").click(function(e) {
        e.preventDefault();
        $(this).toggleClass("nav-toggle-active");
        $("#nav-primary").slideToggle(300);
    });
    $("#blog-share-toggle").click(function(f) {
        f.preventDefault();
        $("#blog-share-bar").slideToggle(300);
    });
});