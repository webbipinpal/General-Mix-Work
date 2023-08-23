$( document ).ready(function() {
$('.tab-btn li').click(function() {
    $('.tab-content > li:eq(' + $(this).index() + ')').show();
    $('.tab-content > li:not(:eq(' + $(this).index() + '))').hide();
	
	$('.tab-content > li:eq(' + $(this).index() + ')').addClass('current');
    $('.tab-content > li:not(:eq(' + $(this).index() + '))').removeClass('current');
	
    $('.tab-btn li').removeClass('current');
    $(this).addClass('current');
});
});