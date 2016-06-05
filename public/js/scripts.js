function scrollToProjects() {
    document.getElementById('projects').scrollIntoView(true);
}

function scrollToTop() {
    document.getElementById('top').scrollIntoView(true);
}

$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
        $(this).collapse('hide');
    }
});
