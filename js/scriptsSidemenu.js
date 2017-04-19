var app = document.getElementById('app')

var visualisationDescriptions = [{
    name: "Geography view",
    desc: "The 'geography view' displays the headquarters of each institution",
    path: "./css/icons/map.svg"
}, {
    name: "Disc view",
    desc: "The 'disc view' provides a flat view with multiple options for analysis",
    path: "./css/icons/bubble.svg"
}, {
    name: "List view",
    desc: "Similar to the 'disc view' the 'list view' provides a flat view with multiple options for analysis",
    path: "./css/icons/list.svg"
}, {
    name: "Description view",
    desc: "The 'description view' displays the description of each institution in a collected overview",
    path: "./css/icons/desc.svg"
}, {
    name: "Network view",
    desc: "The 'network view' links institutions by shared members",
    path: "./css/icons/network.svg"
}, {
    name: "Article view",
    desc: "The 'article view' provides casestudies involving various members.<br><b>ATTENTION: This view is a proof of concept. Initiative information does not correspond with actual data.</b>",
    path: "./css/icons/network.svg"
}, ]

var sidemenu = (function() {
    var test = "teeest"
    var test = "teeest Private"
    var sidemenuTemplate = `
    <div id="sidemenu" class="">
      <div class="sidemenuItem" id="sidemenuDescription"></div>
      <div class="sidemenuItem" id="sidemenuItemInfo"></div>
      <div class="sidemenuItem" id="sidemenuFilters"></div>
      <div class="sidemenuItem sidemenuItemCollapsed" id="sidemenuLegend"></div>
    </div>
  `
    var sidemenuInit = function() {
        if ($("#sidemenu").length == 0) {
            $(app)
                .append(this.sidemenuTemplate)

            this.sidemenuLegend()
            this.sidemenuFiltersTemplate()
            this.sidemenuCollapsible()
        }
    }

    var sidemenuFadeContentIn = function() {
        $('#sidemenu').css({
            'opacity': 1
        })
        $('#sidemenu').children().css({
            'opacity': 1
        })

        sidemenu.sidemenuRenderContent()
    }

    var sidemenuFadeContentOut = function() {
        $('#sidemenu').children().css({
            'opacity': 0
        })
        window.setTimeout(function() {
            $('#sidemenu').children('#sidemenuDescription').find('*').not('.sidemenuCollapse').not('.sidemenuCollapse *').remove();
        }, 250)
    }

    var sidemenuRenderContent = function() {

        if (location.hash.lastIndexOf("/") === -1) {
            currentslide = 0
        } else {
            currentslide = parseInt(location.hash.substring(location.hash.lastIndexOf("/") + 1))
        }

        this.sidemenuGetDesc(currentslide)
        this.sidemenuGetFilters(currentslide)
    }

    var sidemenuGetDesc = function(currentslideParameter) {

        if ($('#sidemenuDescription').children(':not(.sidemenuCollapse)').length == 0) {
            $('#sidemenuDescription').append(
                "<p class='sidemenuItemTitle'>" + visualisationDescriptions[currentslideParameter].name + "</p>" +
                "<p>" + visualisationDescriptions[currentslideParameter].desc + "</p>"
            )
        }


    }



    var sidemenuGetFilters = function(currentslideParameter) {

        filterShow = function(optionsArray) {

            optionsArray.forEach(function(entry) {
                $('.' + entry).removeClass('checkNoAction')
            });

            allShowFilters = ['showName', 'showDate', 'showMembers', 'showType', 'showRole', 'showTheme']

            $(allShowFilters).not(optionsArray).get().forEach(function(entry) {
                $('.' + entry).addClass('checkNoAction')
            });

        }

        filterSort = function(toggle) {
            if (toggle === "show") {
                $('#sidemenuFiltersSort').find('label').removeClass('checkNoAction')
            }
            if (toggle === "hide") {
                $('#sidemenuFiltersSort').find('label').addClass('checkNoAction')
            }
        }

        toggleFilters = function(toggle) {
            if (toggle === "show") {
                $('#sidemenuFilters').show()
            }
            if (toggle === "hide") {
                $('#sidemenuFilters').hide()
            }
        }

        toggleLegend = function(toggle) {
            if (toggle === "show") {
                $('#sidemenuLegend').show()
            }
            if (toggle === "hide") {
                $('#sidemenuLegend').hide()
            }
        }

        switch (currentslideParameter) {
            case 0:
                toggleFilters('show')
                toggleLegend('show')
                filterShow([])
                filterSort('hide')
                break;

            case 1:
                toggleFilters('show')
                toggleLegend('show')
                filterSort('show')
                filterShow(['showName', 'showDate', 'showMembers', 'showType', 'showRole', 'showTheme'])
                break;

            case 2:
                toggleFilters('show')
                toggleLegend('show')
                filterSort('show')
                filterShow(['showMembers', 'showType', 'showRole'])
                break;

            case 3:
                toggleFilters('show')
                toggleLegend('show')
                filterSort('show')
                filterShow([])
                break;

            case 4:
                toggleFilters('show')
                toggleLegend('show')
                filterSort('hide')
                filterShow(['showMembers', 'showType', 'showRole', 'showTheme'])
                break;
            case 5:
                toggleFilters('show')
                toggleLegend('show')
                filterSort('hide')
                filterShow(['showMembers', 'showType', 'showRole', 'showTheme'])
                break;
        }



    }

    var sidemenuFiltersTemplate = function() {
        filterShow = `<div class="filterOptionWrapper"><p>Show:</p>
        <li><input type="checkbox" value="showName" class="checkSortShow showName" autocomplete="off" /><label class="checkSortShow showName"><span><span></span></span>Name</label></li>
        <li><input type="checkbox" value="showDate" class="checkSortShow showDate" autocomplete="off"/><label  class="checkSortShow showDate"><span><span></span></span>Date</label></li>
        <li><input type="checkbox" value="showMembers" class="checkSortShow showMembers" autocomplete="off"/><label class="checkSortShow showMembers"><span><span></span></span>Members</label></li>
        <li><input type="checkbox" value="showType" class="checkSortShow showType" autocomplete="off"/><label class="checkSortShow showType"><span><span></span></span>Type</label></li>
        <li><input type="checkbox" value="showRole" class="checkSortShow showRole" autocomplete="off"/><label class="checkSortShow showRole"><span><span></span></span>Role</label></li>
        <li><input type="checkbox" value="showTheme" class="checkSortShow showTheme" autocomplete="off"/><label class="checkSortShow showTheme"><span><span></span></span>Theme</label></li>
        </div>`

        filterSort = `<div class="filterOptionWrapper" id="sidemenuFiltersSort"><p>Sort:</p>
        <li><input data-sort-by="acro" type="checkbox" value="showName" class="sort-by-button-group" autocomplete="off"><label class=""><span><span></span></span>Acronym</label></li>
        <li><input data-sort-by="name" type="checkbox" value="showName" class="sort-by-button-group" autocomplete="off"><label class=""><span><span></span></span>Name</label></li>
        <li><input data-sort-by="date" type="checkbox" value="showDate" class="sort-by-button-group" autocomplete="off"><label class=""><span><span></span></span>Date</label></li>
        <li><input data-sort-by="members" type="checkbox" value="showName" class="sort-by-button-group" autocomplete="off"><label class=""><span><span></span></span>Members</label></li>
        <li><input data-sort-by="role" type="checkbox" value="showName" class="sort-by-button-group" autocomplete="off"><label class=""><span><span></span></span>Role</label></li>
        <li><input data-sort-by="type" type="checkbox" value="showName" class="sort-by-button-group" autocomplete="off"><label class=""><span><span></span></span>Type</label></li>
        <li><input data-sort-by="theme" type="checkbox" value="showName" class="sort-by-button-group" autocomplete="off"><label class=""><span><span></span></span>Theme</label></li>
        </div>`

        $('#sidemenuFilters').append("<p class='sidemenuItemTitle'>Tools</p>" + "<div class='filterOptionWrapperOuter'>" + filterShow + filterSort + "</div>")


    }

    var sidemenuLegend = function() {
        legend =
            `<p class='sidemenuItemTitle'>Legend</p>
            <div class="sidemenuLegendInner ">
            <div class="roleLegendInner ">
          <p><b>Role (color):</b></p>
          <div class="example stacom"><p>1</p></div> <p>&nbsp;Standards and Commitments&nbsp;</p>
          <div class="example opera"><p>2</p></div>  <p>&nbsp;Operational&nbsp;</p>
          <div class="example infonet"><p>3</p></div> <p>&nbsp;Information and Networking&nbsp;</p>
          <div class="example finan"><p>4</p></div> <p>&nbsp;Financing </p>
          </div>
          <div class="typeLegendInner ">
          <p class=""><b> Type (opacity):</b></p>
          <div class="example public"><p>1</p></div> <p>&nbsp;Public&nbsp;</p>
          <div class="example hybrid"><p>2</p></div>  <p>&nbsp;Hybrid&nbsp;</p>
          <div class="example private"><p>3</p></div> <p>&nbsp;Private&nbsp;</p>
          </div>
          <div class="themeLegendInner ">
          <p class=""> <b>Theme (icon): </b> </p>
          <div class="exampleTheme"><img class="themeImg" src="./svg/exampleicons/theme1.svg"/></div> <p>&nbsp;Carbon Pricing and Trading&nbsp;</p>
          <div class="exampleTheme"><img class="themeImg" src="./svg/exampleicons/theme2.svg"/><p></p></div>  <p>&nbsp;Energy Access&nbsp;</p>
          <div class="exampleTheme"><img class="themeImg" src="./svg/exampleicons/theme3.svg"/><p></p></div>  <p>&nbsp;Energy Efficiency&nbsp;</p>
          <div class="exampleTheme"><img class="themeImg" src="./svg/exampleicons/theme4.svg"/><p></p></div>  <p>&nbsp;Climate finance&nbsp;</p>
          <div class="exampleTheme"><img class="themeImg" src="./svg/exampleicons/theme5.svg"/><p></p></div>  <p>&nbsp;Forest&nbsp;</p>
          <div class="exampleTheme"><img class="themeImg" src="./svg/exampleicons/theme6.svg"/><p></p></div>  <p>&nbsp;Mitigation&nbsp;</p>
          <div class="exampleTheme"><img class="themeImg" src="./svg/exampleicons/theme7.svg"/><p></p></div>  <p>&nbsp;MRV&nbsp;</p>
          <div class="exampleTheme"><img class="themeImg" src="./svg/exampleicons/theme8.svg"/><p></p></div>  <p>&nbsp;Renewable Energy&nbsp;</p>
          <div class="exampleTheme"><img class="themeImg" src="./svg/exampleicons/theme9.svg"/><p></p></div>  <p>&nbsp;CCS&nbsp;</p>
          <div class="exampleTheme"><img class="themeImg" src="./svg/exampleicons/theme10.svg"/><p></p></div>  <p>&nbsp;Non-CO2 GHGs&nbsp;</p>
          <div class="exampleTheme"><img class="themeImg" src="./svg/exampleicons/theme11.svg"/><p></p></div>  <p>&nbsp;Urban climate action&nbsp;</p>
          <div class="exampleTheme"><img class="themeImg" src="./svg/exampleicons/theme12.svg"/><p></p></div>  <p>&nbsp;Sectoral&nbsp;</p>
          </div>
          <div>`

        $('#sidemenuLegend').append(legend)

    }

    var sidemenuCollapsible = function() {
        $('.sidemenuItem').not("#sidemenuItemInfo, #sidemenuLegend").prepend('<div class="sidemenuCollapse"><img class="sidemenuCollapseIcon" src="./css/icons/sideClose.svg"/></div>')
        $('#sidemenuLegend').prepend('<div class="sidemenuCollapse"><img class="sidemenuCollapseIcon" src="./css/icons/sideOpen.svg"/></div>')
        $(document).on('click', '.sidemenuCollapse', function() {
            // alert('hey!')
            $(this).parents('.sidemenuItem').toggleClass('sidemenuItemCollapsed')
            if ($(this).parents('.sidemenuItem').hasClass('sidemenuItemCollapsed')) {
                $(this).find('.sidemenuCollapseIcon').attr('src', './css/icons/sideOpen.svg')
            } else {
                $(this).find('.sidemenuCollapseIcon').attr('src', './css/icons/sideClose.svg')
            }

        })
    }

    return {
        test: test,
        sidemenuTemplate: sidemenuTemplate,
        sidemenuFadeContentIn: sidemenuFadeContentIn,
        sidemenuFadeContentOut: sidemenuFadeContentOut,
        sidemenuGetDesc: sidemenuGetDesc,
        sidemenuFiltersTemplate: sidemenuFiltersTemplate,
        sidemenuLegend: sidemenuLegend,
        sidemenuGetFilters: sidemenuGetFilters,
        sidemenuRenderContent: sidemenuRenderContent,
        sidemenuCollapsible: sidemenuCollapsible,
        sidemenuInit: sidemenuInit
    };
})();
