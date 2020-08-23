$(document).ready(function() {
$('.dropdown-menu').on('click', function (event) {
   event.stopPropagation();
});

$('body').on('click', function (e) {
    if (!$('.dropdown-menu').is(e.target) 
        && $('.dropdown-menu').has(e.target).length === 0 
        && $('.show').has(e.target).length === 0
    ) {
        $('.dropdown-menu').removeClass('show');
    }
});

$('#loginModal').modal('show')
});