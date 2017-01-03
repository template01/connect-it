var mapPopup = (function() {
    renderContent = function(initiativeArray, countryInfo) {
        initiativeBlurb = ''
        initiativeArray.forEach(function(initiative) {
            initiativeSingle = `<div class='mapPopupSingleInitiative' data-category="` + initiative.category + `" data-website="` + initiative.website + `" data-name="` + initiative.name + `" data-date="` + initiative.date + `" data-members="` + initiative.members + `" data-acro="` + initiative.acro + `" data-desc="` + initiative.desc + `" data-type="` + initiative.type + `" data-role="` + initiative.role + `" data-theme="` + initiative.theme + `" data-theme2="` + initiative.theme2 + `" data-theme3="` + initiative.theme3 + `" >` + initiative.acro + `</div>`
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
