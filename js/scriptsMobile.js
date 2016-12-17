
function checkMobile(){
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    $('.removeMobile').remove()
   	$('.showMobile').show()
   	$('body').css({'overflow':'auto'})
  }else{
     console.log('mobile')
  }
}

checkMobile()
