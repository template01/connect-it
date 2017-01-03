var mapPopup = (function() {
    renderContent = function(initiativeArray, countryInfo) {
        initiativeBlurb = ''
        initiativeArray.forEach(function(initiative) {
            initiativeSingle = `<div class='mapPopupSingleInitiative' data-category="` + initiative.category + `" data-website="` + initiative.website + `" data-name="` + initiative.name + `" data-date="` + initiative.date + `" data-members="` + initiative.members + `" data-acro="` + initiative.acro + `" data-desc="` + initiative.desc + `" data-type="` + initiative.type + `" data-role="` + initiative.role + `" data-theme="` + initiative.theme + `" data-theme2="` + initiative.theme2 + `" data-theme3="` + initiative.theme3 + `" ><div class="mapAcro">` + initiative.acro + `</div><div class="themeWrapper"><img class="themeImg1" src="./svg/theme1.svg"><img class="themeImg2" src="./svg/theme2.svg"><img class="themeImg3" src="./svg/theme3.svg"><img class="themeImg4" src="./svg/theme4.svg"><img class="themeImg5" src="./svg/theme5.svg"><img class="themeImg6" src="./svg/theme6.svg"><img class="themeImg7" src="./svg/theme7.svg"><img class="themeImg8" src="./svg/theme8.svg"><img class="themeImg9" src="./svg/theme9.svg"><img class="themeImg10" src="./svg/theme10.svg"><img class="themeImg11" src="./svg/theme11.svg"><img class="themeImg12" src="./svg/theme12.svg"><img class="themeImg13" src="./svg/theme13.svg"></div></div>`
            initiativeBlurb = initiativeBlurb + initiativeSingle
        })
        return "<div class='mapPopupInner'><div class='mapPopupInnerHeader'><p>Initiatives based in " + countryInfo + "</p><div onclick='mapPopup.closePopup()' class='close'><img src='./css/icons/close.svg'></div></div><div class='mapPopupInnerInitiatives'>" + initiativeBlurb + "</div></div>"

        // $('.leaflet-interactive').click(function(){$(this).remove()})
    }
    closePopup = function() {
        map.closePopup();
    }

    onPopupOpen = function() {
        map.on('popupopen', function(e) {
            filterShow(['showMembers', 'showType', 'showRole', 'showTheme'])
            if ($('.showMembers').is(":checked")) {
                resizeElementMap()
            } else {
                resizeElementMapOrg()
            }
            if ($('.showRole').is(":checked")) {
                $('.mapPopupSingleInitiative').addClass('roleElement')
            } else {
                $('.mapPopupSingleInitiative').removeClass('roleElement')
            }

            if ($('.showTheme').is(":checked")) {
                $('.mapPopupSingleInitiative').addClass('themeElement')
            } else {
                $('.mapPopupSingleInitiative').removeClass('themeElement')
            }

            if ($('.showType').is(":checked")) {
                $('.mapPopupSingleInitiative').addClass('typeElement')
            } else {
                $('.mapPopupSingleInitiative').removeClass('typeElement')
            }




        });
    }
    onPopupClose = function() {
        map.on('popupclose', function(e) {
            filterShow([])
        });
    }
    return {
        onPopupOpen: onPopupOpen,
        onPopupClose: onPopupClose,
        closePopup: closePopup,
        renderContent: renderContent
    };
})();

mapPopup.onPopupOpen()
mapPopup.onPopupClose()
