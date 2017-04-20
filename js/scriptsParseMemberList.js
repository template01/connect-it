var dataTriangle = []
var dataMap = []
var dataList = []




function parseMemberList(){
  var parseCnt = 0
  Papa.parse("./datasets/memberList.csv", {
      download: true,
      skipEmptyLines: true,
      delimiter: "=",
      quotes: true,
      step: function(row) {
          // console.log("Row:", row.data);
          // ZONE ACRONYM NAME DATE MEMBERS ACTORS TYPE ROLE
          if (parseCnt != 0){
            infoZone = row.data[0][0]
            infoAcro = row.data[0][1]
            infoName = row.data[0][2]
            infoDate = row.data[0][3]
            infoMembers = row.data[0][4]
            infoActors = row.data[0][5]
            infoType = row.data[0][6]
            infoRole = row.data[0][7]
            infoDesc = row.data[0][8]
            infoLon = row.data[0][9]
            infoLat = row.data[0][10]
            infoTheme = row.data[0][11]
            infoTheme2 = row.data[0][12]
            infoTheme3 = row.data[0][13]
            infoWebsite = row.data[0][14]
            infoHq = row.data[0][15]




            dataList.push({zone: infoZone, acro: infoAcro, role: infoRole, r: 18, date:infoDate, desc:infoDesc, lon: infoLon, lat: infoLat, members:infoMembers, type:infoType, desc:infoDesc, name:infoName, theme:infoTheme, theme2:infoTheme2, theme3:infoTheme3, actors:infoActors, website:infoWebsite, hq:infoHq });

            elements =  '<div class="element-item" data-category="" data-website="'+infoWebsite+'" data-name="'+infoName+'" data-date="'+infoDate+'" data-members="'+infoMembers+'" data-acro="'+infoAcro+'"  data-desc="'+infoDesc+'" data-type="'+infoType+'" data-role="'+infoRole+'" data-theme="'+infoTheme+'" data-theme2="'+infoTheme2+'" data-theme3="'+infoTheme3+'"><p class="acro">'+infoAcro+'</p><p class="name">'+infoName+'</p><p class="date">'+infoDate+'</p><p class="members">'+infoMembers+'</p><p class="actors">'+infoActors+'</p><p class="type">'+infoType+'</p><p class="role">'+infoRole+'</p><p class="theme"><span class="theme1">'+infoTheme+'</span><span class="theme2">'+infoTheme2+'</span><span class="theme3">'+infoTheme3+'</span></p><div class="themeWrapper"><img class="themeImg1" src="./svg/theme1.svg" /><img class="themeImg2" src="./svg/theme2.svg" /><img class="themeImg3" src="./svg/theme3.svg" /><img class="themeImg4" src="./svg/theme4.svg" /><img class="themeImg5" src="./svg/theme5.svg" /><img class="themeImg6" src="./svg/theme6.svg" /><img class="themeImg7" src="./svg/theme7.svg" /><img class="themeImg8" src="./svg/theme8.svg" /><img class="themeImg9" src="./svg/theme9.svg" /><img class="themeImg10" src="./svg/theme10.svg" /><img class="themeImg11" src="./svg/theme11.svg" /><img class="themeImg12" src="./svg/theme12.svg" /></div></div>'
            // elements =  '<div class="element-item" data-category=""><p class="zone">'+infoZone+'</p><p class="acro">'+infoAcro+'</p><p class="name">'+infoName+'</p></div>'
            // zone = <p class="zone">'+infoZone+'</p>
            $('.grid').append(elements)
          }
          parseCnt = parseCnt + 1



      },
      complete: function() {
         initIsotope()

         // TRIANGLE INIT
         // initTriangle()
         // MAP MARKERS INIT
         // addMarkers()
         console.log('s~t~a~r~t')
         initMarkersReady = true


      }
  });
}

function getCount(theme) {
    var count = 0;
    for (var i = 0; i < dataList.length; i++) {
        if (dataList[i].theme == theme) {
            count++;
        }
    }
    return count;
}

getCount(1)




parseMemberList()
