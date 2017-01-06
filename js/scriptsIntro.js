function introNavigation() {


    // setTimeout(function() {
    // }, 5000);
    $('.section').css({'opacity':'1'})

    $('.splashContent').fadeIn(300)


    setTimeout(function() {
        $('.splashContent').find('.hyphen').addClass('hyphenCollapsed')

        setTimeout(function() {
            $('.splashContent').fadeOut(300)

            setTimeout(function() {
                $('.splashContent').empty().append('<h1 class="splashContentCentered">Visualizing global climate initiatives</h1>').fadeIn(200)

                setTimeout(function() {
                    // $('.splashContent').addClass('animated').addClass('slideOutUpHelper').addClass('slideOutUp').fadeOut(200)
                    $('.splashContent').fadeOut(300)
                    setTimeout(function() {
                        $('.aboutWrap').fadeIn(500)

                        setTimeout(function() {
                            $('.aboutSmall.animate').addClass('aboutSmallMoveUp')
                            $('.introFooter').addClass('navFooterHeight')
                            setTimeout(function() {
                                $('.splashContent').remove()
                                $('.introFooter span').addClass('introTextFade')
                            }, 1500);
                        }, 2000);

                    }, 500);
                }, 1600);
            }, 800);



        }, 200);


    }, 1700);

    setTimeout(function() {

        // $('.aboutSmall.animate').addClass('aboutSmallMoveUp')
        // $('.introFooter').addClass('navFooterHeight')
        // setTimeout(function() {
        //     $('.introFooter span').addClass('introTextFade')
        // }, 1500);
    }, 5000);

    //   $('.downloadHeaderLink').hover(
    //   function () {
    //     setTimeout(function(){ $('.downloadHeaderText').fadeIn(200); }, 200)
    //   },
    //   function () {
    //     setTimeout(function(){ $('.downloadHeaderText').fadeOut(200); }, 1200)
    //   }
    //    );
}
