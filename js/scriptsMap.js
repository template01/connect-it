var map = L.map('map', { zoomControl:false, attributionControl:false }).setView([50,0], 4);

var oms = new OverlappingMarkerSpiderfier(map, {});

var markerStart = false

var themeVarMap = '<div class="themeWrapper"><img class="themeImg1" src="./svg/theme1.svg"><img class="themeImg2" src="./svg/theme2.svg"><img class="themeImg3" src="./svg/theme3.svg"><img class="themeImg4" src="./svg/theme4.svg"><img class="themeImg5" src="./svg/theme5.svg"><img class="themeImg6" src="./svg/theme6.svg"><img class="themeImg7" src="./svg/theme7.svg"><img class="themeImg8" src="./svg/theme8.svg"><img class="themeImg9" src="./svg/theme9.svg"><img class="themeImg10" src="./svg/theme10.svg"><img class="themeImg11" src="./svg/theme11.svg"><img class="themeImg12" src="./svg/theme12.svg"><img class="themeImg13" src="./svg/theme13.svg"></div>'

function addMarkers(){

	if (markerStart == false){

		markerStart = true

		var iaddMarkersLoop = 0; 
		function addMarkersLoop() {           //  create a loop function
		   // setTimeout(function () {    //  call a 3s setTimeout when the loop is called
		      // alert('hello');          //  your code here
				dataMapacro = dataList[iaddMarkersLoop].acro
				// dataMapdesc = dataList[iaddMarkersLoop].desc
				dataMapname = dataList[iaddMarkersLoop].name

				if(dataList[iaddMarkersLoop].lon != "NA"){
					dataMaplon = parseInt(dataList[iaddMarkersLoop].lon)
				}else{
					dataMaplon = 99
				}

				if(dataList[iaddMarkersLoop].lat != "NA"){
					dataMaplat = parseInt(dataList[iaddMarkersLoop].lat)
				}else{
					dataMaplat = 99
				}
				


				var locMarker = L.divIcon({
				  // Specify a class name we can refer to in CSS.
				  className: 'dataList'+iaddMarkersLoop,
				  html:'<div data-website="'+dataList[iaddMarkersLoop].website+'" data-date="'+dataList[iaddMarkersLoop].date+'" data-acro="'+dataList[iaddMarkersLoop].acro+'" data-name="'+dataList[iaddMarkersLoop].name+'" data-theme="'+dataList[iaddMarkersLoop].theme+'" data-theme2="'+dataList[iaddMarkersLoop].theme2+'"  data-theme3="'+dataList[iaddMarkersLoop].theme3+'" data-desc="'+dataList[iaddMarkersLoop].desc+'" data-type="'+dataList[iaddMarkersLoop].type+'" data-role="'+dataList[iaddMarkersLoop].role+'" data-members="'+dataList[iaddMarkersLoop].members+'" data-members="'+dataList[iaddMarkersLoop].members+'" class="element-itemMarker">'+themeVarMap+'<p class="mapAcro">'+dataMapacro+'</p><p class="mapDate">'+dataList[iaddMarkersLoop].date+'</p></div>',
				  // Set marker width and height
				  iconSize: [36, 36]
				});

				// // WITH ORIGINAL POPUP
				// var marker = L.marker([dataMaplat, dataMaplon], {icon: locMarker, riseOnHover: true}).bindPopup('<h1>'+dataMapname+'</h1><p>'+dataMapdesc+'</p>').addTo(map);
		  //     iaddMarkersLoop++;


// for (var i = 0; i < window.mapData.length; i ++) {
//   var datum = window.mapData[i];
//   var loc = new L.LatLng(datum.lat, datum.lon);
//   var marker = new L.Marker(loc);
//   marker.desc = datum.d;
//   map.addLayer(marker);
//   oms.addMarker(marker);  // <-- here
// }



			// var loc = new L.LatLng(dataMaplat, dataMaplon);
			// var markerSpider = new L.Marker(loc);
				markerSpider = L.marker([dataMaplat, dataMaplon], {icon: locMarker, riseOnHover: true}).addTo(map)
				// map.addLayer(markerSpider);
				oms.addMarker(markerSpider)


				// var marker = L.marker([dataMaplat, dataMaplon], {icon: locMarker, riseOnHover: true}).addTo(map)
		      iaddMarkersLoop++;


		      if (iaddMarkersLoop < dataList.length) {            //  if the counter < 10, call the loop function
		         addMarkersLoop();             //  ..  again which will trigger another 
		      }


		      if (iaddMarkersLoop == dataList.length) {            //  if the counter < 10, call the loop function
		         checkChecks()
		      }


		    //   		          if ($('.showRole').is(":checked")) {
				  //    $('.element-itemMarker').addClass('roleElement')
				  // }
		    //   if (iaddMarkersLoop == dataList.length) {
		    //       if ($('.showRole').is(":checked")) {
				  //    $('.element-itemMarker').addClass('roleElement')
				  // }
		    //   }                        //  ..  setTimeout()
		   // }, 0)
		}

		addMarkersLoop ()


	}
}



function runMap(){


	// console.log(map.getBounds())
	// map.setMaxBounds(mapboxap.getBounds())
	map.invalidateSize()

	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
	    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
	    maxZoom: 18,
	    minZoom: 2,

	    // center: L.latLng(58.66, 25.05),
	    id: 'template.o4oj7e92',
	    accessToken: 'pk.eyJ1IjoidGVtcGxhdGUiLCJhIjoiY2lndXBoMThtMDAxeHYwa3J2OGpqcndpdiJ9.kr9rJgm4EPP43YJNJZ2iHg'
	}).addTo(map);

	
	// for (var i = 1; i < dataList.length; i++) {
	// 	dataMapacro = dataMap[i].item
	// 	dataMaplon = parseInt(dataMap[i].lon)

	// 	dataMaplat = parseInt(dataMap[i].lat)
 //          var marker = L.marker([dataMaplat, dataMaplon], {icon: locMarker}).bindPopup(dataMapacro).addTo(map);
	// 	}
}

function spiderClick(){


      oms.addListener('click', function(marker) {

		// '<div data-website="'+dataList[iaddMarkersLoop].website+'" data-date="'+dataList[iaddMarkersLoop].date+'" data-acro="'+dataList[iaddMarkersLoop].acro+'" data-name="'+dataList[iaddMarkersLoop].name+'" data-theme="'+dataList[iaddMarkersLoop].theme+'" data-theme2="'+dataList[iaddMarkersLoop].theme2+'"  data-theme3="'+dataList[iaddMarkersLoop].theme3+'" data-desc="'+dataList[iaddMarkersLoop].desc+'" data-type="'+dataList[iaddMarkersLoop].type+'" data-role="'+dataList[iaddMarkersLoop].role+'" data-members="'+dataList[iaddMarkersLoop].members+'" data-members="'+dataList[iaddMarkersLoop].members+'" class="element-itemMarker">'+themeVarMap+'<p class="mapAcro">'+dataMapacro+'</p><p class="mapDate">'+dataList[iaddMarkersLoop].date+'</p></div>',	

        // popup.setContent(marker.desc);
        // popup.setLatLng(marker.getLatLng());
        // map.openPopup(popup);
        dataListNumberRaw = marker._icon.className
        dataListNumber = dataListNumberRaw.match(/dataList\d+/g)[0].match(/\d+/)[0]
        console.log(dataListNumber)
        // console.log(dataList[100].name)

        // acro = '<b>'+$(this).attr('data-acro')+'</b>'

			$('.popUpWrapper').remove()

			$('body').append('<div class="popUpWrapper"><div class="close"><img src="./css/icons/close.svg"></div>'+dataList[dataListNumber].name+'<p class="smalltext">Acronym: '+dataList[dataListNumber].acro+' Date: '+dataList[dataListNumber].date+' Members: '+dataList[dataListNumber].members+' Type: '+dataList[dataListNumber].type+' Theme: <b>'+"themes go here"+'</b></p>'+dataList[dataListNumber].desc+'</div>')


      });

}
	


var spiderFirstRun = false
function spiderfy(){
	// window.setTimeout(function(){
		var markers = oms.getMarkers();
		
		if(spiderFirstRun == false){
			$.each(markers, function (i, marker) {
			console.log(markers[i]._leaflet_id)
			map._layers[markers[i]._leaflet_id].fire('click');
			});
			spiderFirstRun = true
		}

		spiderClick()
	// },100)
}

function removeMap(){
	map.remove()
}


