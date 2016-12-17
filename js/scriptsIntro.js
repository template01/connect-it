function introNavigation() {
  $('.aboutSmall.animate').addClass('aboutSmallMoveUp')
  $('.introFooter').addClass('navFooterHeight')
      setTimeout(function(){ 
        $('.introFooter span').addClass('introTextFade')
          }, 1500);

//   $('.downloadHeaderLink').hover(
//   function () {
//     setTimeout(function(){ $('.downloadHeaderText').fadeIn(200); }, 200)
//   }, 
//   function () {
//     setTimeout(function(){ $('.downloadHeaderText').fadeOut(200); }, 1200)
//   }
//    );
}

