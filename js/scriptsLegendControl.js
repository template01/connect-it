
function toggleLegend() {
  // $('.toggleLegend').change(function(){
  //      if ($('.toggleLegend').is(":checked")) {
  //       $('.headerDesc').show()
        

  //         setTimeout(function(){ 
  //                $('.headerDesc').removeClass('headerDescNoHeight').addClass('headerDescHeight')
                  
  //       }, 100);
        
  //   } else {
  //     // $('.headerDesc').hide()
  //       $('.headerDesc').removeClass('headerDescHeight').addClass('headerDescNoHeight')

  //   }
  // })

  $(document).on('click','.toggleLegendWrapper',function(){
       if (!$('.toggleLegend').is(":checked")) {
        
        $( ".toggleLegend" ).prop( "checked", true );

        $('.headerDesc').show()

          setTimeout(function(){ 
                 $('.headerDesc').removeClass('headerDescNoHeight').addClass('headerDescHeight')
                  
        }, 100);
        
        } else {
          // $('.headerDesc').hide()
            $( ".toggleLegend" ).prop( "checked", false );

            $('.headerDesc').removeClass('headerDescHeight').addClass('headerDescNoHeight')

        }
  })
}

function closeButton() {
  $('.headerDesc>.close').click(function(){
    $('.headerDesc').removeClass('headerDescHeight').addClass('headerDescNoHeight');
    $( ".toggleLegend" ).prop( "checked", false );
  })
}

toggleLegend()
closeButton()