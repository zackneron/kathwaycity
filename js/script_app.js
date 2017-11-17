$(function(){
	$('.mobile-menu').on('click', function () {
        $('#mobile-menu__trigger').toggleClass('toogle-menu');
    });

    var banner_img = $('.banner__img img');
    banner_img.hide();
    banner_img.fadeIn(3000);

    $('.learn-more').on('click', function(){
    	$(this).hide();
    });
});