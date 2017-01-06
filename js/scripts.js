// var removeNetworkCheck = 1

var initMarkersReady

var isShowZoomPopUp;




function ifZoomPopUp() {

    if (isShowZoomPopUp) {
        setTimeout(function() {
            $('.zoomPopUp').removeClass('zoomPopUpNoHeight').addClass('zoomPopUpHeight')
        }, 2000);
    } else {
        $('.zoomPopUp').removeClass('zoomPopUpHeight').addClass('zoomPopUpNoHeight')
    }
}

function clickZoomPopUp() {
    $(document).on('click', '.zoomPopUp .close', function() {
        $(this).parent().removeClass('zoomPopUpHeight').addClass('zoomPopUpNoHeight')
    })
}

clickZoomPopUp()


function handleAboutGoto() {


    $(document).on('click', '.aboutGoTo', function() {

        // console.log($('.'+$(this).attr('data-goto')).position().top)

        $('.aboutHow').animate({
            scrollTop: $('.' + $(this).attr('data-goto')).position().top - 10 + 'px'
        }, 'fast');

    })
}
handleAboutGoto()


function fullPage() {
    $('#fullpage').fullpage({
        fitToSection: false,
        keyboardScrolling: false,
        anchors: ['introductionSlide', 'visualisation', 'about'],
        controlArrows: false,
        // animateAnchor: false,

        afterRender: function() {
            //disabling scrolling up on page load if we are in the 1st section
            if ($('.fp-section.active').index('.fp-section') === 0) {
                $.fn.fullpage.setAllowScrolling(false, 'up');
            }


        },
        afterLoad: function(anchorLink, index) {

            sidemenu.sidemenuInit()
                // console.log(anchorLink)
            if ($('.fp-section.active').index('.fp-section') !== 1) {
                //activating the scrolling up for any other section
                $.fn.fullpage.setAllowScrolling(false, 'up');
            } else {
                //disabling the scrolling up when reaching 1st section
                $.fn.fullpage.setAllowScrolling(true, 'up');
                $.fn.fullpage.setAllowScrolling(true, 'down');
            }

            if ($('.fp-section.active').index('.fp-section') == 0) {
                setTimeout(function() {
                    introNavigation()
                }, 2000);
                $('.graphWrap').fadeOut(300)

            }




            if ($('.fp-section.active').index('.fp-section') != 1) {
                isShowZoomPopUp = false
                ifZoomPopUp()
                    // hide legend
                $('.headerDesc').hide()
                $(".toggleLegend").prop("checked", false);

                $('#sidemenu').removeClass('sidemenuSlideIn').addClass('sidemenuSlideOut')


                $.fn.fullpage.setAllowScrolling(true, 'down');

            }

            if ($('.fp-section.active').index('.fp-section') == 1) {
                setTimeout(function() {
                    $('#sidemenu').removeClass('sidemenuSlideOut').addClass('sidemenuSlideIn')

                }, 500);

                $.fn.fullpage.setAllowScrolling(false, 'down');
                $.fn.fullpage.setAllowScrolling(false, 'up');



                console.log($('.fp-slide.active.sortMenu').length)

                setTimeout(function() {
                    $('.header').addClass('autoHeight').find('.headerBackground').addClass('headerBackgroundautoHeight')

                }, 100);



                window.setTimeout(function() {
                    if (window.location.hash == "#visualisation/4") {
                        $('.graphWrap').fadeIn(300)
                    }

                }, 100);


            }


            if ($('.fp-section.active').index('.fp-section') == 2) {
                $.fn.fullpage.setAllowScrolling(false, 'up');
                $('.graphWrap').fadeOut(300)


            }

        },

        afterSlideLoad: function(index, slideIndex, slideAnchor) {

            ifZoomPopUp()


            if (slideAnchor == 3) {
                // layoutDesc()
                initDescView()
                    // alert('hey')
            }

            if (slideAnchor == 4) {

                $('.graphWrap').fadeIn(300)

                if (done == 0) {
                    var loadingGraph = setInterval(function() {
                        if (done == 1) {
                            clearInterval(loadingGraph);
                            setTimeout(function() {
                                runNetwork()
                                $("#networkTip").removeClass('zoomPopUpHeight').addClass('zoomPopUpNoHeight')
                            }, 500);
                            // removeNetworkCheck = 0

                        }

                    }, 300);

                } else {
                    setTimeout(function() {
                        runNetwork()
                        $("#networkTip").removeClass('zoomPopUpHeight').addClass('zoomPopUpNoHeight')
                    }, 500);
                    // removeNetworkCheck = 0
                }
            } else if (slideAnchor == 0) {
                runMap()


            }

            if (slideAnchor == 5) {
                articleView.init()
            }



            // THIS IS THE WAY TO DETECT A 'DIRECT GO TO SLIDE FROM URL'
            else if ($('#listView.fp-slide.active').length > 0) {
                var intervalIso = window.setInterval(function() {
                    if ($('.grid').children().length > 0) {
                        layoutVertical();
                        clearInterval(intervalIso);
                    }
                })

            }


            sidemenu.sidemenuFadeContentIn()

        },

        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex) {
            setTimeout(function() {
                removePopups()
            }, 350);


            if (window.location.hash != "#visualisation/4") {
                $('.graphWrap').fadeOut(300)
            }


            mapPopup.closePopup()

            sidemenu.sidemenuFadeContentOut()



        },

        onLeave: function(index, nextIndex, direction) {
            setTimeout(function() {
                removePopups()
            }, 350);
            var leavingSection = $(this);

            if (index == 1) {
                runMap()

                window.setTimeout(function() {
                    sidemenu.sidemenuFadeContentIn()
                }, 2600)

            } else if ($('.fp-section.active').index('.fp-section') == 1) {
                $('.header').removeClass('autoHeight').find('.headerBackground').removeClass('headerBackgroundautoHeight')
                $('#sidemenu').removeClass('sidemenuSlideIn').addClass('sidemenuSlideOut')

            }

            if (window.location.hash != "#visualisation/4") {
                $('.graphWrap').fadeOut(300)
            }


        }
    });
}


fullPage()
