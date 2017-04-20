function initDescView(){

  if($('#descList').children().length == 0){

    for (var i = 0; i < dataList.length; i++) {


          if(dataList[i].website.length>0){
            website = ` (<a href="` + dataList[i].website  + `" target="_blank">website</a>)`

          }else {
            website = ``
          }

          descFull = `<div class="descriptionDiv element-itemDesc" data-acro=
          "`+dataList[i].acro+`" data-date="`+dataList[i].date+`" data-desc=
          "`+dataList[i].desc+`" data-members="`+dataList[i].members+`" data-name=
          "`+dataList[i].name+`" data-role="`+dataList[i].role+`" data-theme=
          "`+dataList[i].theme+`" data-theme2="`+dataList[i].theme2+`" data-theme3=
          "`+dataList[i].theme3+`" data-type="`+dataList[i].type+`">
              <p class="acronym">`+dataList[i].name+website+`</p>
              <p class="smalltext">Acronym: <b>` +dataList[i].acro+ `</b> Date: <b>` +dataList[i].date+ `</b> Members:
              <b>`+dataList[i].members+`</b> Institution:
              <b>`+dataList[i].actors+`</b> Type: <b>`+dataList[i].type+`</b></p>
              <p class="description">`+dataList[i].desc+`</p>
              <p class="acro displayNone">`+dataList[i].acro+`</p>
              <p class="name displayNone">`+dataList[i].name+`</p>
              <p class="date displayNone">`+dataList[i].date+`</p>
              <p class="members displayNone">`+dataList[i].members+`</p>
              <p class="actors displayNone">`+dataList[i].actors+`</p>
              <p class="type displayNone">`+dataList[i].type+`</p>
              <p class="role displayNone">`+dataList[i].role+`</p>
              <p class="theme displayNone">
              <span class="theme1">`+dataList[i].theme+`</span>
              <span class="theme2">`+dataList[i].theme2+`</span>
              <span class="theme3">`+dataList[i].theme3+`</span>
              </p>
          </div>`

          $('#descList').append(descFull)
    }

    layoutDesc()

  }

}



function layoutDesc() {
  $('#descList').isotope({
    itemSelector : '.element-itemDesc',
    layoutMode : 'fitRows',
    getSortData: {
      // zone:'.zone',
      acro:'.acro',
      name:'.name',
      date:'.date',
      role:'.role',
      type:'.type',
      theme: '.theme',
      members: function( itemElem ) {
        var membersSort = $( itemElem ).find('.members').text();
        return parseFloat( membersSort.replace( /[\(\)]/g, '') );
      },
      actors: function( itemElem ) {
        var actorsSort = $( itemElem ).find('.actors').text();
        return parseFloat( actorsSort.replace( /[\(\)]/g, '') );
      }
    }
  });

$('.sort-by-button-group').each(function(){
// console.log($(this).is(":checked"))
if($(this).is(":checked")){

  $('#descList').isotope({
    itemSelector : '.element-itemDesc',
    sortBy: $(this).attr('data-sort-by'), sortAscending:{
      name: true,
      members: false
    }
  });
}
})




  // sort items on button click
  $(document).on('click', '.sort-by-button-group', function() {
    $('.sort-by-button-group').not($(this)).removeAttr('checked');
    var sortByValue = $(this).attr('data-sort-by');
    console.log(sortByValue)
    $('#descList').isotope({
      itemSelector : '.element-itemDesc',
      sortBy: sortByValue, sortAscending:{
        name: true,
        members: false
      }
    });
  });

  $('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });

  window.setTimeout(function(){
    $('#descList').isotope()
  },500)
}
