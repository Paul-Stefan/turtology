$(document).ready( function() {
    $(".like").on("ajax:success", function (e, data, status, xhr) {
        $(this).children('i').addClass('fa-heart').removeClass('fa-heart-o');
        $(this).addClass('disabled-link');
    });
    $("#project-form").on("ajax:success", function (e, data, status, xhr) {
        $('#save-project').removeClass('clicked');
    });
});
