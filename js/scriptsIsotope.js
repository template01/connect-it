// function addDataAttributes(){
//   for (counter = 0; counter < dataList.length; counter++) { 

//         var item = dataList[counter];

//         .attr("class", "node")
//         .attr('role',item.role)
//         .attr('data-members',item.members)
//         .attr('data-type',item.type)
//         .attr('data-theme',item.theme)
//         .attr('data-theme2',item.theme2)
//         .attr('data-theme3',item.theme3)
//         .attr('data-desc',item.desc)
//         .attr('data-name',item.name)
//         .attr('data-acro',item.acro)
//         .attr('data-date',item.date)

//   }

// } 

function typeElement() {
  $('.element-item').each(function(){
    $(this).addClass('typeElement')
    })
  }



function typeElementAll(){
  $('.element-itemMarker').addClass('typeElement')
  $('.element-itemMarker').addClass('typeElement')
  d3.selectAll(".node").classed("typeElement", true)
}


function typeElementAllOrg(){
  $('.element-itemMarker').removeClass('typeElement')
  d3.selectAll(".node").classed("typeElement", false)
}


function addD3themes(){

  d3.selectAll(".node").classed("themeElement", true)

  d3.select('#graph1').selectAll(".node").each(function(d) {
    d3.select(this).selectAll("text").attr('y',((d3.select(this).select('rect').attr('height')/2)-10))
  })

  d3.select('.triangle').selectAll(".node").each(function(d) {
    d3.select(this).selectAll("text").attr('y',((d3.select(this).select('rect').attr('height')/2)-4))
  })

  d3.selectAll(".node").each(function(d) {


  widthParentNode = d3.select(this).node().getBoundingClientRect().width
    themeWidthSingle = widthParentNode*0.40
    themeWidthTwo = widthParentNode*0.35
    themeWidthThree = widthParentNode*0.25

  themeCenterSingle = -1*themeWidthSingle/2

  themeCenterTwoLeft = -1*themeWidthTwo
  themeCenterTwoRight = themeCenterTwoLeft+themeWidthTwo

  themeCenterThreeMid = -1*themeWidthThree/2
  themeCenterThreeLeft = themeCenterThreeMid-themeWidthThree
  themeCenterThreeRight = themeCenterThreeMid-(-1*themeWidthThree)

  selected = d3.select(this)

  dataTheme = selected.attr('data-theme')
  dataTheme2 = selected.attr('data-theme2')
  dataTheme3 = selected.attr('data-theme3')

  function appendImage(selectedPara, dataThemePara, dataTheme2Para,dataTheme3Para,themeNumber){
    if(dataThemePara == themeNumber || dataTheme2Para == themeNumber || dataTheme3Para == themeNumber){
        selectedPara.append("image")
        .attr("xlink:href", "./svg/theme"+themeNumber+".svg")
        // .attr("xlink:href", "./svg/doiii.jpg")
        .attr("x", themeCenterSingle)
        .attr("y", themeCenterSingle)
        .attr("width", themeWidthSingle)
        .attr("height", themeWidthSingle)
        .attr("class",'themeImg'+themeNumber);

    }

  }



  appendImage(selected, dataTheme, dataTheme2, dataTheme3,1)
  appendImage(selected, dataTheme, dataTheme2, dataTheme3,2)
  appendImage(selected, dataTheme, dataTheme2, dataTheme3,3)
  appendImage(selected, dataTheme, dataTheme2, dataTheme3,4)
  appendImage(selected, dataTheme, dataTheme2, dataTheme3,5)
  appendImage(selected, dataTheme, dataTheme2, dataTheme3,6)
  appendImage(selected, dataTheme, dataTheme2, dataTheme3,7)
  appendImage(selected, dataTheme, dataTheme2, dataTheme3,8)
  appendImage(selected, dataTheme, dataTheme2, dataTheme3,9)
  appendImage(selected, dataTheme, dataTheme2, dataTheme3,10)
  appendImage(selected, dataTheme, dataTheme2, dataTheme3,11)

  })
}

function removePositionD3themes(){
  d3.selectAll(".node").classed("themeElement", false)
  d3.selectAll(".node image").remove()
}

function removeD3themes(){

  d3.selectAll(".node").selectAll("text").attr('y',0)
  d3.selectAll(".node").each(function(d) {
    d3.select(this).selectAll('rect').attr('rx',"500").attr('ry',"500")
  })
}

function positionD3themes(){

d3.selectAll(".node").each(function(d) {

    

    widthParentNode = d3.select(this).selectAll('rect').attr('width')
    themeWidthSingle = widthParentNode*0.45
    themeWidthTwo = widthParentNode*0.35
    themeWidthThree = widthParentNode*0.25

    themeCenterSingle = -1*themeWidthSingle/2

    themeCenterTwoLeft = -1*themeWidthTwo
    themeCenterTwoRight = themeCenterTwoLeft+themeWidthTwo

    themeCenterThreeMid = -1*themeWidthThree/2
    themeCenterThreeLeft = themeCenterThreeMid-themeWidthThree
    themeCenterThreeRight = themeCenterThreeMid-(-1*themeWidthThree)

    var isFirefox = typeof InstallTrigger !== 'undefined'; 

    if(isFirefox){

      if (d3.select(this).attr('data-theme') && d3.select(this).attr('data-theme2') && d3.select(this).attr('data-theme3')){

        d3.select(this).selectAll('image:nth-of-type(1)').attr('x',themeCenterThreeLeft).attr("width", themeWidthThree).attr("height", themeWidthThree).attr('y',-themeWidthThree/2)
        d3.select(this).selectAll('image:nth-of-type(2)').attr('x',themeCenterThreeMid).attr("width", themeWidthThree).attr("height", themeWidthThree).attr('y',-themeWidthThree/2)
        d3.select(this).selectAll('image:nth-of-type(3)').attr('x',themeCenterThreeRight).attr("width", themeWidthThree).attr("height", themeWidthThree).attr('y',-themeWidthThree/2)


      }else{
        if(d3.select(this).attr('data-theme') && d3.select(this).attr('data-theme2')){

          d3.select(this).selectAll('image:nth-of-type(1)').attr('x',themeCenterTwoLeft).attr("width", themeWidthTwo).attr("height", themeWidthTwo).attr('y',-themeWidthTwo/2)
          d3.select(this).selectAll('image:nth-of-type(2)').attr('x',themeCenterTwoRight).attr("width", themeWidthTwo).attr("height", themeWidthTwo).attr('y',-themeWidthTwo/2)


        }else if(d3.select(this).attr('data-theme') && d3.select(this).attr('data-theme3')){

          d3.select(this).selectAll('image:nth-of-type(1)').attr('x',themeCenterTwoLeft).attr("width", themeWidthTwo).attr("height", themeWidthTwo).attr('y',-themeWidthTwo/2)
          d3.select(this).selectAll('image:nth-of-type(2)').attr('x',themeCenterTwoRight).attr("width", themeWidthTwo).attr("height", themeWidthTwo).attr('y',-themeWidthTwo/2)

        }else if(d3.select(this).attr('data-theme2') && d3.select(this).attr('data-theme3')){

          d3.select(this).selectAll('image:nth-of-type(1)').attr('x',themeCenterTwoLeft).attr("width", themeWidthTwo).attr("height", themeWidthTwo).attr('y',-themeWidthTwo/2)
          d3.select(this).selectAll('image:nth-of-type(2)').attr('x',themeCenterTwoRight).attr("width", themeWidthTwo).attr("height", themeWidthTwo).attr('y',-themeWidthTwo/2)

        }else if(d3.select(this).attr('data-theme') || d3.select(this).attr('data-theme2') || d3.select(this).attr('data-theme3') ){

          d3.select(this).selectAll('image:nth-of-type(1)').attr('x',themeCenterSingle).attr("width", themeWidthSingle).attr("height", themeWidthSingle).attr('y',themeCenterSingle)

        }
      }


    }else{


      if (d3.select(this).attr('data-theme') && d3.select(this).attr('data-theme2') && d3.select(this).attr('data-theme3')){

        d3.select(this).selectAll('image:nth-of-type(1)').attr('x',themeCenterThreeLeft).style("width", themeWidthThree).style("height", themeWidthThree).attr('y',-themeWidthThree/2)
        d3.select(this).selectAll('image:nth-of-type(2)').attr('x',themeCenterThreeMid).style("width", themeWidthThree).style("height", themeWidthThree).attr('y',-themeWidthThree/2)
        d3.select(this).selectAll('image:nth-of-type(3)').attr('x',themeCenterThreeRight).style("width", themeWidthThree).style("height", themeWidthThree).attr('y',-themeWidthThree/2)


      }else{
        if(d3.select(this).attr('data-theme') && d3.select(this).attr('data-theme2')){

          d3.select(this).selectAll('image:nth-of-type(1)').attr('x',themeCenterTwoLeft).style("width", themeWidthTwo).style("height", themeWidthTwo).attr('y',-themeWidthTwo/2)
          d3.select(this).selectAll('image:nth-of-type(2)').attr('x',themeCenterTwoRight).style("width", themeWidthTwo).style("height", themeWidthTwo).attr('y',-themeWidthTwo/2)


        }else if(d3.select(this).attr('data-theme') && d3.select(this).attr('data-theme3')){

          d3.select(this).selectAll('image:nth-of-type(1)').attr('x',themeCenterTwoLeft).style("width", themeWidthTwo).style("height", themeWidthTwo).attr('y',-themeWidthTwo/2)
          d3.select(this).selectAll('image:nth-of-type(2)').attr('x',themeCenterTwoRight).style("width", themeWidthTwo).style("height", themeWidthTwo).attr('y',-themeWidthTwo/2)

        }else if(d3.select(this).attr('data-theme2') && d3.select(this).attr('data-theme3')){

          d3.select(this).selectAll('image:nth-of-type(1)').attr('x',themeCenterTwoLeft).style("width", themeWidthTwo).style("height", themeWidthTwo).attr('y',-themeWidthTwo/2)
          d3.select(this).selectAll('image:nth-of-type(2)').attr('x',themeCenterTwoRight).style("width", themeWidthTwo).style("height", themeWidthTwo).attr('y',-themeWidthTwo/2)

        }else if(d3.select(this).attr('data-theme') || d3.select(this).attr('data-theme2') || d3.select(this).attr('data-theme3') ){

          d3.select(this).selectAll('image:nth-of-type(1)').attr('x',themeCenterSingle).style("width", themeWidthSingle).style("height", themeWidthSingle).attr('y',themeCenterSingle)

        }
      }


    }


})

d3.select('#graph1').selectAll(".node").each(function(d) {
 d3.select(this).selectAll('rect').attr('rx',"10").attr('ry',"10")
})

d3.select('.triangle').selectAll(".node").each(function(d) {
 d3.select(this).selectAll('rect').attr('rx',"10").attr('ry',"10")
})


}

function resizeElementD3(){

if (jQuery("#graph1").children().length>0){
  d3.select('#graph1').selectAll(".node").each(function(d) {

    size = d3.select(this).attr('data-members')
    // d3.selectAll(".node").attr('class','node resiz  ed')
    if(size<125){
      d3.select(this).selectAll('rect').attr("x",-36-((size/1)/2)).attr("y",-36-((size/1)/2)).attr("width",(size/1)+72).attr("height",(size/1)+72)
    }else{
      d3.select(this).selectAll('rect').attr("rx",250).attr("ry",250).attr("x",-250/2).attr("y",-250/2).attr("width",250).attr("height",250)
    }
  });

    // if(!typeof force === 'undefined'){
    if (jQuery("#graph1").children().length>0){
        force.linkDistance(400).start()
    // };
    }

  if(d3.selectAll(".node").classed("themeElement")){
    removeD3themes()
    removePositionD3themes()
    addD3themes()
    positionD3themes()
   }
  // 
  //   positionD3themes()
  // }

  }
}


function resizeElementD3Org(){
  if (jQuery("#graph1").children().length>0){

    // if(!typeof force === 'undefined'){
        force.linkDistance(200).start()
      d3.select('#graph1').selectAll('.node').selectAll('rect').attr("rx",72).attr("ry",72).attr("x",-36).attr("y",-36).attr("width",72).attr("height",72)

    };


    d3.select('.triangle').selectAll('.node').selectAll('rect').attr("rx",36).attr("ry",36).attr("x",-18).attr("y",-18).attr("width",36).attr("height",36)
    
    // if(d3.selectAll(".node").length > 1){
      if(d3.selectAll(".node").classed("themeElement")){
        removeD3themes()
        removePositionD3themes()
        addD3themes()
        positionD3themes()
      }
    // }

  // }
}



function resizeElementMap() {
  $('.element-itemMarker').each(function(){
    size = $(this).attr('data-members')
    $(this).addClass('resized')
    if(size<125){
      $(this).css({
      "height":(size/1)+36+"px",
      "width":(size/1)+36+"px",
      "line-height":(size/1)+36+"px",
      // "margin":"-"+((size/1)+36)/2+"px"
      })
    }else{
      $(this).css({
      "height":(size/1)+36+"px",
      "width":(size/1)+36+"px",
      // "margin":"-"+125/2+"px",
      "line-height":"125px"
      })
    }

  })
}

function resizeElementMapOrg() {
  $('.element-itemMarker').css({'width':'','height':'','margin':'','line-height':''})
   $('.element-itemMarker').removeClass('resized')
   $('.element-item').removeClass('resized')
}

function resizeElement() {
  $('.grid.row .element-item').each(function(){
    size = $(this).children('.members').text()
    $(this).addClass('resized')
    $(this).css({
    "height":(size/1)+120+"px",
    "width":(size/1)+120+"px"
    })
  })
  $('.grid').isotope()
}

function resizeElementOrg() {
  $('.element-item').css({'width':'','height':''})
  $('.element-item').removeClass('resized')
  $('.grid').isotope()
}

function resizeElementVert() {


  $('.vertical>.element-item').each(function(){
    size = $(this).children('.members').text()
    $(this).addClass('resizedVert')    
    if (size >= 1000) {
      $(this).children('p').addClass('vertSizeL');
    }
    if (size >= 100 && size < 1000) {
      $(this).children('p').addClass('vertSizeM');
    }
    if (size >= 10 && size < 100) {
      $(this).children('p').addClass('vertSizeS');
    }
    if (size >= 0 && size < 10) {
      $(this).children('p').addClass('vertSizeXS');
    }
  })
}

function toggleResizeElement() {
  $('.showMembers').change(function(){
       if ($('.showMembers').is(":checked")) {
      resizeElement()
      resizeElementMap()
      resizeElementD3()
    } else {
        resizeElementOrg()
        resizeElementMapOrg()
        resizeElementD3Org()

    }
  })
}

function toggleResizeElementVert() {
  $('.showMembers').change(function(){

    console.log('change')
    if($('.showMembers').is(":checked")){
      // alert('checled')
      resizeElementVert()
    } else {
      console.log('uncyheeked')

      $('.element-item').removeClass('resizedVert')
      $('.element-item').children('p').removeClass('vertSizeXS vertSizeS vertSizeM vertSizeL')
    }
  });
}

function roleElement() {
  $('.element-item').addClass('roleElement')
  // $('.element-item').css({'border':'none'})
  $('.element-itemMarker').addClass('roleElement')
  $('.grid').isotope()
  }

function tryScripts(){
  block = $('.element-item')

  $(block).click(function(){
    $(this).children('p').toggle();

  });
}

function isoLayoutComplete() {
  //   $('.grid').on( 'layoutComplete', function() {
  // });
}




function layoutVertical() {

  $('.grid').removeClass('row')
  if ($('.grid').find('.explainList').length == 0){
    var $newItems = $('<div class="element-item explainList hideWhenBubble"> <p class="themeCount">  </p><p class="acro"> Acronym </p><p class="name"> Name </p> <p class="date"> Date </p> <p class="members"> Members </p> <p class="actors"> Institutions </p> <p class="type"> Type </p> <p class="role"> Role </p><p class="theme"> Theme </p> </div>');
    $('.grid').prepend( $newItems).isotope( 'reloadItems' ).isotope({ sortBy: 'original-order' });       
  }

  $('#gridWrapper').appendTo('#listView .fp-tableCell')
  resizeElementOrg()
  $('.grid').addClass('vertical').isotope({  itemSelector : '.element-item', layoutMode : 'vertical'});
  $('.grid.vertical .date').show();
  // removeVertSortFilters()
  appendThemes()
  appendRoles()
  themeInList()

  $('.grid .members').show();
  $('.themeLegend').hide()
  if($('.showName').is(":checked") || $('.grid').hasClass('vertical')){
    $('.grid .name').show();
  }
  if($('.showMembers').is(":checked")){
    resizeElementVert()
  }else{
    $('.element-item').removeClass('resizedVert')
    $('.element-item').children('p').removeClass('vertSizeXS vertSizeS vertSizeM vertSizeL')
  }
}

function layoutRow() {
  $('#gridWrapper').appendTo('#discView .fp-tableCell')
  resizeElement()
  $('.grid').addClass('row').isotope({  itemSelector : '.element-item',
                          layoutMode : 'fitRows'});
  if (!$('.showDate').is(":checked")) {
    $('.grid.row .date').hide();
  }
}

function metaDataDisplay() {
  $('.showDate').change(function(){
      $('.grid.row .date').toggle();
      $('.mapDate').toggleClass('showMapDetail');
  });

  $('.XXX').change(function(){
    alert('sjsks')
      $('.grid.row .members').toggle();
  });

  $('.showName').change(function(){
    if ($(this).is(":checked")) {
      $('.grid.row .name').fadeIn(200);
      $('.grid.row .element-item').addClass("elementDown")
      $('.grid').isotope();
    } else {
      $('.grid.row .name').fadeOut(200);
      $('.grid.row .element-item').removeClass("elementDown")
      $('.grid').isotope();
    }
  });
}

function toggleLayoutMode() {

  $('#viewIsoList, #linkIsoList').on("click",function(){


      layoutVertical();
      // alert('clickc')
      // removeVertSortFilters()
      // isShowCheckName = $('.fp-slide.active.showCheckMenuName').length> 0
      // isShowCheckDate = $('.fp-slide.active.showCheckMenuDate').length> 0
      // isShowCheckTheme = $('.fp-slide.active.showCheckMenuTheme').length> 0

      // $('.grid').removeClass('row')
      // if ($('.grid').find('.explainList').length == 0){
      //   var $newItems = $('<div class="element-item explainList hideWhenBubble"> <p class="acro"> Acronym </p><p class="name"> Name </p> <p class="date"> Date </p> <p class="members"> Members </p> <p class="actors"> Institutions </p> <p class="type"> Type </p> <p class="role"> Role </p><p class="theme"> Theme </p> </div>');
      //   $('.grid').prepend( $newItems).isotope( 'reloadItems' ).isotope({ sortBy: 'original-order' });       
      // }
      // layoutVertical();
      // $('.grid .members').show();
      // $('.themeLegend').hide()
      // if($('.showName').is(":checked") || $('.grid').hasClass('vertical')){
      //   $('.grid .name').show();
      // }
      // if($('.showMembers').is(":checked")){
      //   resizeElementVert()
      // }else{
      //   $('.element-item').removeClass('resizedVert')
      //   $('.element-item').children('p').removeClass('vertSizeXS vertSizeS vertSizeM vertSizeL')
      // }
      // $('.element-item').css({"height":"","width":""});
  })

  $('#viewIsoRow, #linkIsoRow').on("click",function(){
      if($('.showName').is(":checked")){
        $('.grid .name').show();
      } else {
        $('.grid .name').hide();
      }
      $('.grid').removeClass('vertical')
      $('.hideWhenBubble').remove()
      $('.grid').isotope( 'reloadItems' ).isotope({ sortBy: 'original-order' });
      layoutRow();
        $('.themeLegend').show()
      if($('.showMembers').is(":checked")){
        resizeElement()
        $('.grid.row .members').show();
      }else{
        resizeElementOrg()
        $('.grid.row .members').hide();

      }
      
      $('.element-item').children('p').removeClass('vertSizeL vertSizeM vertSizeS vertSizeXS')
  })

}


function toggleThemeElement() {
  $('.showTheme').change(function(){
    // $(this).toggleClass('sortHighlight')
    if ($('.element-item').hasClass('themeElement')){
      $('.element-item').removeClass('themeElement')
      $('.element-itemMarker').removeClass('themeElement')
      removePositionD3themes()  
      removeD3themes()
    } else {
      // themeElement()
        $('.element-item').addClass('themeElement')
        $('.element-itemMarker').addClass('themeElement') 
        addD3themes()
        positionD3themes()
        // d3.selectAll(".node").classed("themeElement", true)
    }
  });
}

function toggleRoleElement() {
  $('.showRole').change(function(){

    $(this).toggleClass('sortHighlight')

    if ($('.element-item').hasClass('roleElement')){
      $('.element-item').removeClass('roleElement')
      $('.element-itemMarker').removeClass('roleElement')
      removeTriangleGradients()
    } else {
      roleElement()
      addTriangleGradients()
    }

    if ($('.grid').hasClass('toggleRoleDesc')) {
      // $('.headerDesc').fadeOut(200)
      // $('.headerDescType').fadeOut(200)
      $('.grid').removeClass('toggleRoleDesc')
    } else {
      // $('.headerDesc').fadeIn(200)
      // $('.headerDescType').fadeIn(200)
      $('.grid').addClass('toggleRoleDesc')
      }

  });
}

function typeElement() {
  $('.element-item').each(function(){
    $(this).addClass('typeElement')
    })
  }

function toggleTypeElement() {
  $('.showType').change(function(){   
    if ($('.element-item').hasClass('typeElement')){
      $('.element-item').removeClass('typeElement')
      typeElementAllOrg()
    } else {
      typeElement()
      typeElementAll()
    }
  });
}

function countBubbles() {
  var val = 0

    $('.grid.row').children('.element-item').click(function(){

          // $(this).addClass("fadeIn animated");
        // setTimeout(function(){ $(this).removeClass("fadeIn animated");},100)

if($(this).attr('data-click-state') == 1) {
  $(this).attr('data-click-state', 0)
  $(this).removeClass('selectBubble')
  $(this).addClass('deselectBubble')
  $(this).children('.acro').removeClass('selectBubbleP')
  val = val-1
  $('.countBubbles').html('Selected items: '+val);


} else {
  $(this).attr('data-click-state', 1)
  $(this).removeClass('deselectBubble')
  $(this).addClass('selectBubble')
  $(this).children('.acro').addClass('selectBubbleP')
  val = val+1
  $('.countBubbles').html('Selected items: '+val);
}


     // $('.okdan').html(function(i, val) { return val*1+1 });
  })
}

function appendThemes() {
  $('.grid.vertical>.element-item>.theme>span').each(function(){
  
  if ($(this).is(':contains("1")')) {
     $(this).html('Carbon Pricing and Trading')
  }
  
  if ($(this).is(':contains("2")')) {
     $(this).html('Energy Access')
  }

  if ($(this).is(':contains("3")')) {
     $(this).html('Energy Efficiency')
  }

  if ($(this).is(':contains("4")')) {
     $(this).html('Financing')
  }

  if ($(this).is(':contains("5")')) {
     $(this).html('Forest')
  }

  if ($(this).is(':contains("6")')) {
     $(this).html('MRV')
  }

  if ($(this).is(':contains("7")')) {
     $(this).html('Mitigation')
  }

  if ($(this).is(':contains("8")')) {
     $(this).html('Renewable Energy')
  }

  if ($(this).is(':contains("9")')) {
     $(this).html('Resilience and Adaptation')
  }

  if ($(this).is(':contains("10")')) {
     $(this).html('Standard Setting')
  }

  if ($(this).is(':contains("11")')) {
     $(this).html('Transportation')
  }

})

}

function renameHybridType() {
   $('.grid>.element-item>.type').each(function(){
      if ($(this).is(':contains("State")')) {
        $(this).append('<span class="typeSort">1_State</span>')
      }
      if ($(this).is(':contains("Hybrid")')) {
        $(this).append('<span class="typeSort">2_Hybrid</span>')
      }
      if ($(this).is(':contains("Private")')) {
        $(this).append('<span class="typeSort">3_Private</span>')
      }
   })
}

function appendRoles() {
  $('.grid.vertical>.element-item>.role').each(function(){
  
  if ($(this).is(':contains("1")')) {
     $(this).html('Standards and Commitments')
  }
  
  if ($(this).is(':contains("2")')) {
     $(this).html('Operational')
  }

  if ($(this).is(':contains("3")')) {
     $(this).html('Information and Networking')
  }

  if ($(this).is(':contains("4")')) {
     $(this).html('Financing')
  }

  if ($(this).is(':contains("5")')) {
     $(this).html('Standards and Commitments, Operational')
  }

  if ($(this).is(':contains("6")')) {
     $(this).html('Operational, Information and Networking')
  }

  if ($(this).is(':contains("7")')) {
     $(this).html('Information and Networking, Financing')
  }

  if ($(this).is(':contains("8")')) {
     $(this).html('Standards and Commitments, Information and Networking')
  }

  if ($(this).is(':contains("9")')) {
     $(this).html('Standards and Commitments, Financing')
  }

  if ($(this).is(':contains("10")')) {
     $(this).html('Operational, Financing')
  }

})

}

var themeInListFirst = true;

function themeInList() {
  if ($('.grid.vertical') && themeInListFirst) {
    themeInListFirst = false;
    $('.grid.vertical>.element-item>.theme>.theme2, .grid.vertical>.element-item>.theme>.theme3').each(function(){
      if ($(this).html().length > 0) {
        $(this).prepend(' / ')
      }
    })

  }
}

function countThemes() {

  var themeParent = '.grid.row>.element-item>.theme>'
  $(themeParent+'.theme1, .theme2, .theme3').each(function(){

    $(this).filter(function() {
    return $(this).text() === "1";
    }).parents('.element-item').prepend('<p class="themeCount">'+getCount(1)+'</p>')

    $(this).filter(function() {
    return $(this).text() === "2";
    }).parents('.element-item').prepend('<p class="themeCount">'+getCount(2)+'</p>')

    $(this).filter(function() {
    return $(this).text() === "3";
    }).parents('.element-item').prepend('<p class="themeCount">'+getCount(3)+'</p>')

    $(this).filter(function() {
    return $(this).text() === "4";
    }).parents('.element-item').prepend('<p class="themeCount">'+getCount(4)+'</p>')

    $(this).filter(function() {
    return $(this).text() === "5";
    }).parents('.element-item').prepend('<p class="themeCount">'+getCount(5)+'</p>')

    $(this).filter(function() {
    return $(this).text() === "6";
    }).parents('.element-item').prepend('<p class="themeCount">'+getCount(6)+'</p>')

    $(this).filter(function() {
    return $(this).text() === "7";
    }).parents('.element-item').prepend('<p class="themeCount">'+getCount(7)+'</p>')

    $(this).filter(function() {
    return $(this).text() === "8";
    }).parents('.element-item').prepend('<p class="themeCount">'+getCount(8)+'</p>')

    $(this).filter(function() {
    return $(this).text() === "9";
    }).parents('.element-item').prepend('<p class="themeCount">'+getCount(9)+'</p>')

    $(this).filter(function() {
    return $(this).text() === "10";
    }).parents('.element-item').prepend('<p class="themeCount">'+getCount(10)+'</p>')

    $(this).filter(function() {
    return $(this).text() === "11";
    }).parents('.element-item').prepend('<p class="themeCount">'+getCount(11)+'</p>')

  })


  $('.element-item').each(function(){

  var max = 0;
  var removeMe

    $(this).find('.themeCount').each(function(){

      $this = parseInt( $(this).text() );
       if ($this > max) {
        max = $this
        removeMe = $(this)
      };

    })




    $(this).find('.themeCount').not(removeMe).remove()

    if ($(this).attr('data-theme2') != '' &&  $(this).attr('data-theme3') == ''){
      $(this).find('.themeCount').html($(this).find('.themeCount').html()-0.1)
    }

    if ($(this).attr('data-theme2') != '' &&  $(this).attr('data-theme3') != ''){
      $(this).find('.themeCount').html($(this).find('.themeCount').html()-0.2)
    }

  });

}



function iniIso(){
  $('.grid').isotope({
    itemSelector: '.element-item',
    layoutMode: 'fitRows',
    fitRows: {
      gutter: 5
    },
    getSortData: {
      // zone:'.zone',
      acro:'.acro',
      name:'.name',
      date:'.date',
      role:'.role',
      type:'.typeSort',
      // theme: '.theme',
      members: function( itemElem ) {
        var membersSort = $( itemElem ).find('.members').text();
        return parseFloat( membersSort.replace( /[\(\)]/g, '') );
      },
      actors: function( itemElem ) {
        var actorsSort = $( itemElem ).find('.actors').text();
        return parseFloat( actorsSort.replace( /[\(\)]/g, '') );
      },
      theme: function( itemElem ) {
        var themeSort = $( itemElem ).find('.themeCount').text();
        return parseFloat( themeSort.replace( /[\(\)]/g, '') );
      }
    }
  });
  // sort items on button click
  $('.sort-by-button-group').on( 'click', 'input', function() {
    $('.sort-by-button-group').not($(this)).removeAttr('checked');
    var sortByValue = $(this).attr('data-sort-by');
    $('.grid').isotope({ 
      sortBy: sortByValue, sortAscending:{
        name: true,
        members: false,
        theme: false
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



function initIsotope(){

toggleResizeElement()
toggleResizeElementVert()
toggleRoleElement()
toggleTypeElement()
toggleThemeElement()
toggleLayoutMode()
metaDataDisplay()
// countBubbles()
countThemes()
renameHybridType()
iniIso()
$('.element-item').last().remove()

}