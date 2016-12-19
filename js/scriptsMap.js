var map = L.map('map', {
    zoomControl: false,
    attributionControl: false
}).setView([50, 0], 4);

// var oms = new OverlappingMarkerSpiderfier(map, {});

var markerStart = false

var themeVarMap = '<div class="themeWrapper"><img class="themeImg1" src="./svg/theme1.svg"><img class="themeImg2" src="./svg/theme2.svg"><img class="themeImg3" src="./svg/theme3.svg"><img class="themeImg4" src="./svg/theme4.svg"><img class="themeImg5" src="./svg/theme5.svg"><img class="themeImg6" src="./svg/theme6.svg"><img class="themeImg7" src="./svg/theme7.svg"><img class="themeImg8" src="./svg/theme8.svg"><img class="themeImg9" src="./svg/theme9.svg"><img class="themeImg10" src="./svg/theme10.svg"><img class="themeImg11" src="./svg/theme11.svg"><img class="themeImg12" src="./svg/theme12.svg"><img class="themeImg13" src="./svg/theme13.svg"></div>'



var countriesPolygons = {"countries":[]}

function addMarkers() {

    if (markerStart == false) {

        markerStart = true

        var iaddMarkersLoop = 0;

        function addMarkersLoop() { //  create a loop function
            // setTimeout(function () {    //  call a 3s setTimeout when the loop is called
            // alert('hello');          //  your code here
            dataMapacro = dataList[iaddMarkersLoop].acro
                // dataMapdesc = dataList[iaddMarkersLoop].desc
            dataMapname = dataList[iaddMarkersLoop].name

            if (dataList[iaddMarkersLoop].lon != "NA") {
                dataMaplon = parseInt(dataList[iaddMarkersLoop].lon)
            } else {
                dataMaplon = 99
            }

            if (dataList[iaddMarkersLoop].lat != "NA") {
                dataMaplat = parseInt(dataList[iaddMarkersLoop].lat)
            } else {
                dataMaplat = 99
            }



            var locMarker = L.divIcon({
                // Specify a class name we can refer to in CSS.
                className: 'dataList' + iaddMarkersLoop,
                html: '<div data-website="' + dataList[iaddMarkersLoop].website + '" data-date="' + dataList[iaddMarkersLoop].date + '" data-acro="' + dataList[iaddMarkersLoop].acro + '" data-name="' + dataList[iaddMarkersLoop].name + '" data-theme="' + dataList[iaddMarkersLoop].theme + '" data-theme2="' + dataList[iaddMarkersLoop].theme2 + '"  data-theme3="' + dataList[iaddMarkersLoop].theme3 + '" data-desc="' + dataList[iaddMarkersLoop].desc + '" data-type="' + dataList[iaddMarkersLoop].type + '" data-role="' + dataList[iaddMarkersLoop].role + '" data-members="' + dataList[iaddMarkersLoop].members + '" data-members="' + dataList[iaddMarkersLoop].members + '" class="element-itemMarker">' + themeVarMap + '<p class="mapAcro">' + dataMapacro + '</p><p class="mapDate">' + dataList[iaddMarkersLoop].date + '</p></div>',
                // Set marker width and height
                iconSize: [36, 36]
            });
            //
            // markerSpider = L.marker([dataMaplat, dataMaplon], {icon: locMarker, riseOnHover: true}).addTo(map)
            //
            // map.addLayer(markerSpider);

            // if (countriesPolygons.indexOf(dataList[iaddMarkersLoop].hq) < 0) {
						search=JSON.search(countriesPolygons, '//*[ hq="'+dataList[iaddMarkersLoop].hq+'"]')
						if(search	.length === 0){
                countriesPolygons.countries.push({"hq":dataList[iaddMarkersLoop].hq,"color":1,"per_country":[dataList[iaddMarkersLoop]]})
							}else{
                search[0].color = search[0].color + 1
								search[0].per_country.push(dataList[iaddMarkersLoop])
							}
// JSON.parse(countriesPolygons).map(function(d) { return d['label']; }).indexOf('Whereee')

            // }






            // oms.addMarker(markerSpider)


            // var marker = L.marker([dataMaplat, dataMaplon], {icon: locMarker, riseOnHover: true}).addTo(map)
            iaddMarkersLoop++;


            if (iaddMarkersLoop < dataList.length) { //  if the counter < 10, call the loop function
                addMarkersLoop(); //  ..  again which will trigger another
            }


            if (iaddMarkersLoop == dataList.length) { //  if the counter < 10, call the loop function
                checkChecks()
            }

        }

        addMarkersLoop()


    }




		for (var i = 0; i < countriesPolygons.countries.length; i++) {


			var maxOpacity=0.8
			if(countriesPolygons.countries[i].color/10<maxOpacity){
				maxOpacity=countriesPolygons.countries[i].color/10
			}

			L.geoJSON(countryOverlay.features[countriesPolygons.countries[i].hq], {
					style: {
						"color": "blue",
						"weight": 0,
						"fillOpacity": maxOpacity
					}
			}).addTo(map);

		}

}



var countryOverlay;

function runMap() {

    map.invalidateSize()

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18,
        minZoom: 2,

        // center: L.latLng(58.66, 25.05),
        id: 'template.o4oj7e92',
        accessToken: 'pk.eyJ1IjoidGVtcGxhdGUiLCJhIjoiY2lndXBoMThtMDAxeHYwa3J2OGpqcndpdiJ9.kr9rJgm4EPP43YJNJZ2iHg'
    }).addTo(map);



    $.getJSON('./js/countrydata/custom.geodetail.json', function(json) {
        countryOverlay = json;
        // var myStyle = {
        //     "color": "blue",
        //     "weight": 0,
        //     "opacity": 0.65
        // };
        //
        // L.geoJSON(countryOverlay, {
        //     style: myStyle
        // }).addTo(map);
    });

}

function removeMap() {
    map.remove()
}
