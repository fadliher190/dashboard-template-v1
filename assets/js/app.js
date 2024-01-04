let is_show_menu = false;
function openSidebar() {
    $(".sidebar").addClass('active');
}
function closeSidebar() {
    $(".sidebar").
    
    removeClass('active');
}
function toggleProfileMenu(element){
    const is_show = $(element).data('is_show');

    if (!is_show) {
        $(element).parent().find('.profile-menu').addClass("active");
        $(element).data('is_show', !is_show);
    }else{
        $(element).parent().find('.profile-menu').removeClass("active");
        $(element).data('is_show', !is_show);
    }
    
    
}

function blurProfileMenu(element){
    const is_show = $(element).data('is_show');
    $(element).data('is_show', false);
    $(element).parent().find('.profile-menu').removeClass("active");
}