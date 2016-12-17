// descView = {};

// var descCount = ''
// var i = 0

// function getDesc(){
//   Papa.parse("./datasets/memberList.csv", {
//       download: true,
//       skipEmptyLines: true,
//       delimiter: "=",
//       quotes: true,
//       step: function(row) {
//         acroSingle = row.data[0][1]
//         nameSingle = row.data[0][2]
//         dateSingle = row.data[0][3]
//       memberSingle = row.data[0][4]
//         instSingle = row.data[0][5]
//         typeSingle = row.data[0][6]

//         descSingle = row.data[0][8]
        
//         // console.log(row.data)
//         // console.log(descSingle)
//         descView[acroSingle] = descSingle;
        
//         descFull = '<div class="descriptionDiv element-itemDesc"><p class="acronym"> '+nameSingle+' ('+acroSingle+')</p> <p class ="smalltext">Date: <b>' +dateSingle+ '</b> Members: <b>'+memberSingle+'</b> Institution: <b>'+instSingle+'</b> Type: <b>'+typeSingle+'</b> </p><p class="description">'+descSingle+'</p></div>'
//         descCount = descCount + descSingle

//         $('#descList').append(descFull)

//         },
//       complete: function() {
//             // console.log('done')
//             // console.log(descView.WMCCC)
//             runWhenComplete()
//       }
//   });

// }

// getDesc()




// function getFrequentWords(string, cutOff){ { var cleanString = string.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g,""), words = cleanString.split(' '), frequencies = {}, word, frequency, i; for( i=0; i<words.length; i++ ) { word = words[i]; frequencies[word] = frequencies[word] || 0; frequencies[word]++; } words = Object.keys( frequencies ); return words.sort(function (a,b) { return frequencies[b] -frequencies[a];}).slice(0,cutOff).toString(); } ; 
// }

// var wordsArray = []

// function runWhenComplete() {
//   var wordsArray = getFrequentWords(descCount, 16).split(',');

//   Array.prototype.remove = function() {
//       var what, a = arguments, L = a.length, ax;
//       while (L && this.length) {
//           what = a[--L];
//           while ((ax = this.indexOf(what)) !== -1) {
//               this.splice(ax, 1);
//           }
//       }
//       return this;
//   };

//   // console.log(wordsArray)
//   wordsArray.remove("the", "The", "of", "a", "in", "that", "for", "For", "by", "it", "on", "is", "with", "from", "their", "as", "are", "It", "and", "to");
//   // console.log(wordsArray)

//   wordsArray.forEach(function(entry) {
//       $('#frequentWords').append('<a class="toggleFrequent">'+entry+'</a>&nbsp; ')
//   });

//   var toggleWords = []


//   $('.toggleFrequent').on({
//         firstClick : function()
//         {
            
//             toggleWords.push($(this).text())
//             // console.log(toggleWords);
//             findFrequentWordShow(toggleWords)  
//             $(this).data('nextClick', 'secondClick');
//         },
        
//         secondClick : function()
//         {
//             toggleWords.splice(toggleWords.indexOf($(this).text()), 1);
//              // console.log(toggleWords);
//             findFrequentWordHide(toggleWords)   
//             $(this).data('nextClick', 'firstClick');
//         },
    
//         click : function()
//         {
//             var nextClick = $(this).data('nextClick') || 'firstClick';
//             $(this).trigger( nextClick );
//         }
//     });

//   layoutDesc()

// }

// function layoutDesc() {
//   $('.descList').isotope({  itemSelector : '.element-itemDesc',
//                           layoutMode : 'fitRows'});
//   // if (!$('.showDate').is(":checked")) {
//   //   $('.grid.row .date').hide();
//   // }
// }



// function findFrequentWordShow(word) {
//   // if ($('.descriptionDiv').not(':contains('+word+')')) {
//     // $('.descriptionDiv').not(':contains('+word+')').hide()
//     $('#descList').highlight(word);
//     $('#viewDescMenu').highlight(word);


//      $('.connectionLine').remove();

//       word.forEach(function(entry) {
//      var end = [];
//      var i = 0
//               $('.highlight:contains("'+entry+'")').each(function(){
                  
//                  end.push([$(this).position().left,$(this).position().top]);

//                  if (end.length>2){
//                   $('body').line(end[i-1][0]+$('.highlight').width()/2,end[i-1][1]+$('.highlight').height()/2, end[i][0]+$('.highlight').width()/2, end[i][1]+$('.highlight').height()/2, {color:'white', stroke:2, zindex:-1});
//                  }
//                  i=i+1
//           //console.log($(this).position())
//             })

//       });


//      // $("#viewDescMenu").find('.toggleFrequent').each(function(){

//      //  end.push();
//      // })

//     // $('.descriptionDiv').hide()
//     // $('.highlight').parents('.descriptionDiv').show()
//     // console.log(word)

//   // }
// }

// function findFrequentWordHide(word) {
//   // if ($('.descriptionDiv').not(':contains('+word+')')) {
//     // $('.descriptionDiv').not(':contains('+word+')').show()
//     // $('#descList').removeHighlight(word);
//     $('.connectionLine').remove();
//     $('#descList').unhighlight(word);
//     $('#viewDescMenu').unhighlight(word);
//     $('#descList').highlight(word);
//     $('#viewDescMenu').highlight(word);
//     if(word.length == 0 ){
//       // $('.descriptionDiv').show()
//     }else{
//       // $('.descriptionDiv').hide()
//     }
//     // $('.highlight').parents('.descriptionDiv').show()

//     // $('.highlight').parents('.descriptionDiv').show()
//     // $('.descriptionDiv').hide()
//     // $('.highlight').parents('.descriptionDiv').show()
//     // console.log(word)
//   // }
// }


// function search(){
//   $( "#searchDescForm" ).submit(function( event ) {
//     event.preventDefault();
//   });
// }

// search()

// function OnSearch(input) {
//     if(input.value == "") {
//       $('.descriptionDiv').show()
//     }
//     else {
//         searchWord = input.value
//         $('.descriptionDiv').show()
//         $('.descriptionDiv').not(':contains('+searchWord+')').hide()
//         $('#descList').unhighlight();
//         $('#viewDescMenu').unhighlight();
//         $('#descList').highlight(searchWord);
//         $('#viewDescMenu').highlight(searchWord);

//     }
// }

// var descCount = ''


function initDescView(){

  if($('#descList').children().length == 0){

    for (var i = 1; i < dataList.length; i++) {

          descFull = `<div class="descriptionDiv element-itemDesc" data-acro=
          "`+dataList[i].acro+`" data-date="`+dataList[i].date+`" data-desc=
          "`+dataList[i].desc+`" data-members="`+dataList[i].members+`" data-name=
          "`+dataList[i].name+`" data-role="`+dataList[i].role+`" data-theme=
          "`+dataList[i].theme+`" data-theme2="`+dataList[i].theme2+`" data-theme3=
          "`+dataList[i].theme3+`" data-type="`+dataList[i].type+`">
              <p class="acronym">`+dataList[i].name+` (`+dataList[i].acro+`)</p>
              <p class="smalltext">Date: <b>` +dataList[i].date+ `</b> Members:
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
  $('.sort-by-button-group').on( 'click', 'input', function() {
    console.log('hey')
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
}

