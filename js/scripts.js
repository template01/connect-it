var removeNetworkCheck = 1
    // var initMarkersReady = false
var initMarkersReady

var isSort;
var isShowCheck;
var isDesc;
var isDisc

var isShowCheckName,
    isShowCheckDate,
    isShowCheckRole,
    isShowCheckMembers,
    isShowCheckType,
    isShowCheckTheme,
    isShowZoomPopUp;

// function ifSortMenu() {
//     if (isSort) {
//         $('#viewIsoMenu').fadeIn()
//     } else {
//         $('#viewIsoMenu').fadeOut()
//
//     }
// }
//
// function ifshowCheckMenu() {
//     if (isShowCheck) {
//         showCheckFilters()
//         $('#highlightIsoMenu').fadeIn()
//     } else {
//         $('#highlightIsoMenu').fadeOut()
//     }
// }

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

function showCheckFilters() {
    // if (isShowCheckName) {
    //     $('.showName').removeClass('checkNoAction')
    // } else {
    //     $('.showName').addClass('checkNoAction')
    //
    // }
    // if (isShowCheckDate) {
    //     $('.showDate').removeClass('checkNoAction')
    // } else {
    //     $('.showDate').addClass('checkNoAction')
    //
    // }
    //
    // if (isShowCheckRole) {
    //     $('.showRole').removeClass('checkNoAction')
    // } else {
    //     $('.showRole').addClass('checkNoAction')
    //
    // }
    //
    // if (isShowCheckMembers) {
    //     $('.showMembers').removeClass('checkNoAction')
    // } else {
    //     $('.showMembers').addClass('checkNoAction')
    //
    // }
    //
    // if (isShowCheckType) {
    //     $('.showType').removeClass('checkNoAction')
    // } else {
    //     $('.showType').addClass('checkNoAction')
    //
    // }
    //
    // if (isShowCheckTheme) {
    //     $('.showTheme').removeClass('checkNoAction')
    // } else {
    //     $('.showTheme').addClass('checkNoAction')
    //
    // }

}

function ifDescMenu() {
    if (isDesc) {
        $('.menuSortShowCheckWrapper').fadeOut(200)
        setTimeout(function() {
            $('.menuDescWrapper').fadeIn()
        }, 200);

    } else {
        $('.menuDescWrapper').fadeOut(200)
        setTimeout(function() {
            $('.menuSortShowCheckWrapper').fadeIn()
        }, 200)
    }
}

// alert('hey')


function fullPage() {
    $('#fullpage').fullpage({
        fitToSection: false,
        keyboardScrolling: false,
        anchors: ['introductionSlide', 'introductionSlide2', 'visualisation', 'download'],
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
            }

            if ($('.fp-section.active').index('.fp-section') == 1) {
                $.fn.fullpage.setAllowScrolling(true, 'down');


                setTimeout(function() {
                    $(".aboutHowSmall").each(function(index) {
                        $(this).delay(600 * index).fadeIn(800);
                    });
                }, 300);
            }

            if ($('.fp-section.active').index('.fp-section') != 2) {
                isShowZoomPopUp = false
                ifZoomPopUp()
                    // hide legend
                $('.headerDesc').hide()
                $(".toggleLegend").prop("checked", false);
            }


            if ($('.fp-section.active').index('.fp-section') == 2) {



                $.fn.fullpage.setAllowScrolling(false, 'down');

                isSort = $('.fp-slide.active.sortMenu').length > 0
                isShowCheck = $('.fp-slide.active.showCheckMenu').length > 0
                isDesc = $('.fp-slide.active.showDescMenu').length > 0
                console.log($('.fp-slide.active.sortMenu').length)
                    // alert('dadsd')

                isShowCheckName = $('.fp-slide.active.showCheckMenuName').length > 0
                isShowCheckDate = $('.fp-slide.active.showCheckMenuDate').length > 0
                isShowCheckMembers = $('.fp-slide.active.showCheckMenuMembers').length > 0
                isShowCheckType = $('.fp-slide.active.showCheckMenuType').length > 0
                isShowCheckRole = $('.fp-slide.active.showCheckMenuRole').length > 0
                isShowCheckTheme = $('.fp-slide.active.showCheckMenuTheme').length > 0
                isShowZoomPopUp = $('.fp-slide.active.showZoomPopUp').length > 0

                // alert(isShowZoomPopUp)

                // ifSortMenu()
                // ifshowCheckMenu()

                // ifZoomPopUp()


                setTimeout(function() {
                    $('.header').addClass('autoHeight').find('.headerBackground').addClass('headerBackgroundautoHeight')

                }, 100);



            }

            if ($('.fp-section.active').index('.fp-section') == 3) {
                $.fn.fullpage.setAllowScrolling(true, 'up');
            }



            // else if($('.fp-section.active').index('.fp-section') != 2){
            //     $('.header').removeClass('autoHeight')
            // }



        },

        afterSlideLoad: function(index, slideIndex, slideAnchor) {

            // removePopups()

            //check SortMenu
            isSort = $('.fp-slide.active.sortMenu').length > 0
            isShowCheck = $('.fp-slide.active.showCheckMenu').length > 0
            isDesc = $('.fp-slide.active.showDescMenu').length > 0
            isNetwork = $('.fp-slide.active.showNetworkMenu').length > 0

            isTriangle = $('.fp-slide.active#triangleView').length > 0
                // isDisc = $('.fp-slide.active#discView').length> 0
            isShowCheckName = $('.fp-slide.active.showCheckMenuName').length > 0
            isShowCheckDate = $('.fp-slide.active.showCheckMenuDate').length > 0
            isShowCheckMembers = $('.fp-slide.active.showCheckMenuMembers').length > 0
            isShowCheckType = $('.fp-slide.active.showCheckMenuType').length > 0
            isShowCheckRole = $('.fp-slide.active.showCheckMenuRole').length > 0
            isShowCheckTheme = $('.fp-slide.active.showCheckMenuTheme').length > 0
            isShowZoomPopUp = $('.fp-slide.active.showZoomPopUp').length > 0

            // ifSortMenu()
            // ifshowCheckMenu()
            // ifDescMenu()

            ifZoomPopUp()
                //
                // if(isTriangle){
                //
                //   var intervalTriangle = window.setInterval(function () {
                //     if (initMarkersReady == true){
                //       initTriangle()
                //       clearInterval(intervalTriangle);
                //     }
                //   }, 100);
                // }

            // if (slideAnchor == 3){
            // setTimeout(function(){

            // }, 2300);
            // }

            if (slideAnchor == 3) {
                // layoutDesc()
                initDescView()
                    // alert('hey')
            }

            if (slideAnchor == 4) {
                // console.log('graph')
                $('.graphWrap').show()

                if (done == 0) {
                    var loadingGraph = setInterval(function() {
                        if (done == 1) {
                            clearInterval(loadingGraph);
                            setTimeout(function() {
                                runNetwork()
                                $("#networkTip").removeClass('zoomPopUpHeight').addClass('zoomPopUpNoHeight')
                            }, 500);
                            removeNetworkCheck = 0

                        }

                    }, 300);

                } else {
                    setTimeout(function() {
                        runNetwork()
                        $("#networkTip").removeClass('zoomPopUpHeight').addClass('zoomPopUpNoHeight')
                    }, 500);
                    removeNetworkCheck = 0
                }
            } else if (slideAnchor == 0) {
                runMap()
                var intervalMarker = window.setInterval(function() {
                    if (initMarkersReady == true) {
                        addMarkers()
                        clearInterval(intervalMarker);
                    }
                }, 300);

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


            sidemenu.sidemenuSlideIn()


        },

        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex) {
            setTimeout(function() {
                removePopups()
            }, 350);


            if (window.location.hash != "#visualisation/5") {
                if (removeNetworkCheck == 0) {
                    setTimeout(function() {
                        // removeNetwork()
                    }, 300);
                    removNeetworkCheck = 1
                }
                $('.graphWrap').fadeOut(300)
            }


            mapPopup.closePopup()

            sidemenu.sidemenuSlideOut()



        },

        onLeave: function(index, nextIndex, direction) {
            setTimeout(function() {
                removePopups()
            }, 350);


            var leavingSection = $(this);

            if (index == 2) {
                runMap()

                window.setTimeout(function() {
                    sidemenu.sidemenuSlideIn()
                }, 2600)

                var intervalMarker = window.setInterval(function() {
                    if (initMarkersReady == true) {
                        addMarkers()
                        clearInterval(intervalMarker);
                    }
                }, 300);
            } else if ($('.fp-section.active').index('.fp-section') == 2) {
                $('.header').removeClass('autoHeight').find('.headerBackground').removeClass('headerBackgroundautoHeight')
            }


            if (window.location.hash != "#visualisation/5") {
                if (removeNetworkCheck == 0) {
                    setTimeout(function() {
                        // removeNetwork()
                    }, 300);
                    removNeetworkCheck = 1
                }
                $('.graphWrap').fadeOut(300)
            }


        }
    });
}





function checkChecks() {
    if ($('.showRole').is(":checked")) {
        addTriangleGradients()
        roleElement()
    }

    if ($('.showTheme').is(":checked")) {
        addD3themes()
        positionD3themes()
        // $('.element-itemMarker').addClass('themeElement')
        $('.mapPopupSingleInitiative').addClass('themeElement')

    }
    if ($('.showType').is(":checked")) {
        typeElementAll()
    }

    if ($('.showMembers').is(":checked")) {
        resizeElementD3()
        resizeElementMap()
    }



}




fullPage()
