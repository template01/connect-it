
// theme Parse

function parseTheme(themeNumber){

	// 1	Carbon Pricing and Trading
	// 2	Energy Access
	// 3	Energy Efficiency
	// 4	Climate finance
	// 5	Forest
	// 6	Mitigation (general)
	// 7	MRV
	// 8	Renewable Energy
	// 9	CCS
	// 10	Non-CO2 GHGs
	// 11	Urban climate action
	// 12	Sectoral

	if (themeNumber.indexOf(1) > -1) {
	return 'Carbon Pricing and Trading'
	}

	if (themeNumber.indexOf(2) > -1) {
	return 'Energy Access'
	}

	if (themeNumber.indexOf(3) > -1) {
	return 'Energy Efficiency'
	}

	if (themeNumber.indexOf(4) > -1) {
	return 'Climate finance'
	}

	if (themeNumber.indexOf(5) > -1) {
	return 'Forest'
	}

	if (themeNumber.indexOf(6) > -1) {
	return 'Mitigation (general)'
	}

	if (themeNumber.indexOf(7) > -1) {
	return 'MRV'
	}

	if (themeNumber.indexOf(8) > -1) {
	return 'Renewable Energy'
	}

	if (themeNumber.indexOf(9) > -1) {
	return 'CCS'
	}

	if (themeNumber.indexOf(10) > -1) {
	return 'Non-CO2 GHGs'
	}

	if (themeNumber.indexOf(11) > -1) {
	return 'Urban climate action'
	}

	if (themeNumber.indexOf(12) > -1) {
	return 'Sectoral'
	}

	// if (themeNumber.indexOf(13) > -1) {
	// return 'Transportation'
	// }

}



$(document).on('click','.element-itemMarker, .node, .element-item, .mapPopupSingleInitiative', function(){

	// alert('element')
	// alert($(this).attr('data-desc'))

	// small text elements
	acro = '<b>'+$(this).attr('data-acro')+'</b>'
	members = '<b>'+$(this).attr('data-members')+'</b>'
	type = '<b>'+$(this).attr('data-type')+'</b>'
	date = '<b>'+$(this).attr('data-date')+'</b>'
	theme = $(this).attr('data-theme')
	theme2 = $(this).attr('data-theme2')
	theme3 = $(this).attr('data-theme3')
	website = $(this).attr('data-website')
	name = '<h1>'+$(this).attr('data-name')+' (<a href="'+website+'" target="_blank">website</a>) </h1>'


	if(typeof theme != 'undefined'){

		if(typeof parseTheme(theme2) === 'undefined'){
		    parsedTheme = parseTheme(theme)
		}else{
			parsedTheme = parseTheme(theme)+' / '
		}

		if(typeof parseTheme(theme2) === 'undefined'){
		    parsedTheme2 = ''
		}else{
			parsedTheme2 = parseTheme(theme2)+' / '
		}

		if(typeof parseTheme(theme3) === 'undefined'){
		    parsedTheme3 = ''

			if(typeof parseTheme(theme2) === 'undefined'){
			    parsedTheme2 = ''
			}else{
				parsedTheme2 = parseTheme(theme2)
			}

		}else{
			parsedTheme3 = parseTheme(theme3)
		}
	} else{
		parsedTheme = 'undefined'
		parsedTheme2 = 'undefined'
		parsedTheme3 = 'undefined'

	}


	// description

	desc = '<p>'+$(this).attr('data-desc')+'</p>'

	$('.popUpWrapper').remove()

	$('#sidemenuItemInfo').append('<div class="popUpWrapper"><div class="close"><img src="./css/icons/close.svg"></div>'+name+'<p class="smalltext">Acronym: '+acro+' Date: '+date+' Members: '+members+' Type: '+type+' Theme: <b>'+parsedTheme+parsedTheme2+parsedTheme3+'</b></p>'+desc+'</div>')
	if($('.graphWrap').is(':visible')){
		$('.popUpWrapper').append('<div class="membersWrapper"><p class="smalltext">Member information:</p></div>')
		$('.membersWrapper').append('<p class="smalltext multipleMember"><b>Members with several connections:</b><br></p>')
	    $('.membersWrapper').append('<p class="smalltext singleMember"><b>Members only connecting to '+$(this).attr('data-acro')+':</b><br></p>')
	}



	// popUpWrapperTop = 64

	// if($('.headerDesc').is(':visible')){
	// 	$('.popUpWrapper').css({'top':popUpWrapperTop+$('.headerDesc').outerHeight()+'px','border-top':'2px solid blue'})
	// }else{
	// 	$('.popUpWrapper').css({'top':'','border-top':''})
	// }

	if(isNetwork){
		popUpNetwork($(this).attr('data-acro'))

	}

})

function removePopups(){
	$('.popUpWrapper').remove()
}

function closePopupClick(){
	$(document).on('click','.popUpWrapper .close', function(){
		removePopups()
	})
}

function popUpNetwork(nodeHandle){
	members = JSON.search( networkJsonMember, '//*[ linksTo="'+nodeHandle+'" ]' );
	// console.log(members)
	for (var i=0; i<members.length; i++) {

    	// $('.popUpWrapper').append(members[i].name)
    	membersConnectsTo =  members[i].linksTo

    	if(membersConnectsTo.length>1){
    		// if($('.multipleMember').length==0){
    		// 	$('.membersWrapper').append('<p class="smalltext multipleMember"><b>Members with several connections:</b><br></p>')
    		// }
    		$('.multipleMember').append('<span class="showConnections">'+members[i].name+'</span><span class="hideConnections"> → '+members[i].linksTo+'</span> <span class="showConnectionsLength">('+membersConnectsTo.length+')</span>, ')

    	}else{

    		// if($('.singleMember').length==0){
    		// 	$('.membersWrapper').append('<p class="smalltext singleMember"><b>Members only connecting to '+nodeHandle+':</b><br></p>')
    		// }
    		// $('.popUpWrapper').append('<p class="smalltext singleMember">Members w. 1 connection:<br></p>')
    		$('.singleMember').append(members[i].name+'<span class="hideConnections"> '+members[i].linksTo+'</span>, ')

    	}

	}

	if($('.singleMember').find('.hideConnections').length == 0){
		// console.log('remobe')
		$('.singleMember').remove()
	}

	if($('.multipleMember').find('.hideConnections').length == 0){
		$('.multipleMember').remove()
	}

}


$(document).on("click", ".showConnections", function() {
   // alert('mouseover works!!!!!!!!!');
   if (!$(this).next('.hideConnections').is(':visible')) {
   	// hide others
	$('.hideConnections').hide()
	$('.showConnections').removeClass('active')
	$('.showConnectionsLength').removeClass('active')
   	// Show selected
	$(this).next('.hideConnections').show()
	$(this).addClass('active')
	$(this).nextAll('.showConnectionsLength').first().addClass('active')


   }else{
	$(this).next('.hideConnections').hide()
	$(this).removeClass('active')
	$(this).nextAll('.showConnectionsLength').first().removeClass('active')

   }

});


closePopupClick()
