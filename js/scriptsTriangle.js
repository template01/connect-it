var fill = '#505050'

var triangleStart = false

function initTriangle(){

  if (triangleStart == false){

    triangleStart = true


// tip = d3.tip().attr('class', 'd3-tip').html(function(d) { return d.data-name; });

var nodes=[]


// var width = (window.innerWidth/3)*2,
// var width = ((window.innerWidth/3)*2)-300,
    // height = (width/5)*4;
var width = 700,
    height = 500

var smallTriangleWidth= ((width/2)/4)*3
var smallTriangleHeight= ((height/2)/4)*3

var zone1x = width/2
var zone1y = height/4
var zone3x = smallTriangleWidth/2
var zone3y = height-smallTriangleHeight/3
var zone2y = zone3y
var zone2x = width-smallTriangleWidth/2

var counter = 0;

// var fill = d3.scale.category10();


  compH = -1

    foci = [
      {x: 0, y: 0}, //redundant
      {x: width/2, y: height/(4+compH)}, //top
      {x: width-smallTriangleWidth/2, y: height-smallTriangleHeight/3}, //bottom-right
      {x: smallTriangleWidth/2, y: height-smallTriangleHeight/3},//bottom-left
      {x: width/2, y: height-smallTriangleHeight/3}, //bottom-mid
      {x:width-(width/2/2+smallTriangleWidth/4), y: height/1.8}, // mid-rigth
      {x:(width/2/2+smallTriangleWidth/4), y: height/1.8}, // mid-left
      {x: width/2, y: height-(height/3)}  //mid-mid
    ];

var svg =  d3.select(".triangle").append("svg")
    .attr("width", width)
    .attr("height", height+100)
    .attr("id","triangleData");


var node = svg.selectAll("rect");

function tick(e) {
  var k = .1 * e.alpha;

  nodes.forEach(function(o, i) {
    o.y += (foci[o.id].y - o.y) * k;
    o.x += (foci[o.id].x - o.x) * k;
  });

  node
      .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; })
}


var force = d3.layout.force()
    .nodes(nodes)
    .links([])
    .gravity(0)
    .charge(-30)
    .size([width, height])
    .on("tick", tick);


var tip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function(d) {
    return "<span>" + d.acro + "</span>";
  })

svg.call(tip)

for (counter = 0; counter < dataList.length; counter++) { 


  if (counter == dataList.length-1) { 
    // clearInterval(timer); 
    checkChecks()
    // return;

  }

  var item = dataList[counter];
  nodes.push({id: item.zone, r: item.r, acro: item.acro, role:item.role});
  force.start();

  node = node.data(nodes);

  var n = node.enter().append("g")
      .attr("class", "node")
      .attr('role',item.role)
      .attr('data-members',item.members)
      .attr('data-type',item.type)
      .attr('data-theme',item.theme)
      .attr('data-theme2',item.theme2)
      .attr('data-theme3',item.theme3)
      .attr('data-desc',item.desc)
      .attr('data-name',item.name)
      .attr('data-acro',item.acro)
      .attr('data-date',item.date)

      .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; })
      .style('cursor', 'pointer')
      .on('mousedown', function() {
         var sel = d3.select(this);
         sel.moveToFront();
      })
      .call(force.drag);

var circle = n.append("rect")
      .attr("rx",36)
      .attr("ry",36)
      .attr("x",-18)
      .attr("y",-18)
      .attr("width",36)
      .attr("height",36)
    .attr('fill', fill);
         circle.on('mouseover', tip.show).on('mouseover', function() {
         var selParent = d3.select(this.parentNode);
         selParent.moveToFront();
      })
      .on('mouseout', tip.hide).on('mouseout', function() {
         var selParent = d3.select(this.parentNode);
      })

var label = n.append("svg:text")
    .text(function (d) { return d.acro; })
    .style("text-anchor", "middle")
    .style("fill", "#fff")
    .style("font-family", "Arial")
    .style("font-size", "8px")
    .style("line-height", "25px");

}








function resize() {
  // alert('resize')
  width = window.innerWidth/3;
   // width = 500,
  force.size([width, height]);
  force.start();
}





d3.selection.prototype.moveToFront = function() {
  return this.each(function(){
    this.parentNode.appendChild(this);
  });
};






// d3.select(window).on('resize', resize);


$(".triangle").append('<svg class="noEvent" style="top:0; padding-top:120px; position:absolute; left: 50%; transform: translateX(-50%);" height="'+(height+200)+'px" width="'+(width+200)+'px"><polygon points="'+(zone1x+100)+','+(zone1y-125)+' '+(zone3x-100)+','+(zone3y+200)+' '+(zone2x+300)+','+(zone2y+200)+'" style="fill:transparent;stroke:#505050;stroke-width:1" /></svg>')

$(".triangle").append('<svg class="noEvent" style="top:0; padding-top:120px; position:absolute; left: 50%; transform: translateX(-50%);" height="'+(height+200)+'px" width="'+(width+200)+'px"><line x1="286" y1="250" x2="614" y2="250" style="stroke:#505050;stroke-width:1"></line></svg>')


// $(".triangle").append('<svg class="noEvent" style="top:0; padding-top:100px; position:absolute; left: 50%; transform: translateX(-50%);" height="'+(height+200)+'px" width="'+(width+200)+'px"><line x1="'+(zone3x-100)+'" y1="'+height/2+'" x2="'+(zone1x+zone2x-50)+'" y2="'+height/2+'" style="stroke:#505050;stroke-width:1" /></svg>')

$(".triangle").append('<svg class="noEvent" style="top:0; padding-top:120px; position:absolute; left: 50%; transform: translateX(-50%);" height="'+(height+200)+'px" width="'+(width+200)+'px"><line x1="155" y1="450" x2="745" y2="450" style="stroke:#505050;stroke-width:1"></line></svg>')
// $(".triangle").append('<svg class="noEvent" style="top:0; padding-top:100px; position:absolute; left: 50%; transform: translateX(-50%);" height="'+(height+200)+'px" width="'+(width+200)+'px"><line x1="'+(zone3x-100)+'" y1="'+(height/2)*1.8+'" x2="'+(zone1x+zone2x-50)+'" y2="'+(height/2)*1.8+'" style="stroke:#505050;stroke-width:1" /></svg>')


$(".triangle").append('<p id="labelPublic" >Public</p>')
$(".triangle").append('<p id="labelHybrid" >Private</p>')
$(".triangle").append('<p id="labelPrivate" >Hybrid</p>')

$(".triangle").append('<p id="labelPublicMain" >PUBLIC</p>')
$(".triangle").append('<p id="labelCsoMain" >CSO</p>')
$(".triangle").append('<p id="labelFirmMain" >FIRM</p>')





}





}


function removeTriangleGradients(){
  d3.selectAll('g.node').selectAll("rect").attr('fill', fill);
  // d3.selectAll('g.node') 
  //   .each(function(d) {
  //     d3.select(this).selectAll("rect").attr('fill', 'red !important');

  //   })
}

function addTriangleGradients() {

console.log('triggar')

  d3.selectAll('g.node')
  // d3.select(".viewNetworkTarget").selectAll('g.node')  //here's how you get all the nodes
    .each(function(d) {

    if(d3.select(this).attr('role')){




      switch (d3.select(this).attr('role')) {
        case '1':

          svg = d3.select(this)

          gradient = svg.append("defs")
            .append("linearGradient")
            .attr("id", "gradient1")

            .attr("spreadMethod", "pad");

          gradient.append("svg:stop")
            .attr("offset", "50%")
            .attr("stop-color", "blue")
            .attr("stop-opacity", 1);

          gradient.append("svg:stop")
            .attr("offset", "50%")
            .attr("stop-color", "blue")
            .attr("stop-opacity", 1);

          d3.select(this).selectAll("rect").attr("fill", "url(#gradient1)");

        break;

        case '2':

          svg = d3.select(this)

          gradient = svg.append("defs")
            .append("linearGradient")
            .attr("id", "gradient2")

            .attr("spreadMethod", "pad");

          gradient.append("svg:stop")
              .attr("offset", "50%")
              .attr("stop-color", "#FF3A3A")
              .attr("stop-opacity", 1);

          gradient.append("svg:stop")
              .attr("offset", "50%")
              .attr("stop-color", "#FF3A3A")
              .attr("stop-opacity", 1);

          d3.select(this).selectAll("rect").attr("fill", "url(#gradient2)");

        break;

        case '3':

          svg = d3.select(this)

          gradient = svg.append("defs")
            .append("linearGradient")
            .attr("id", "gradient3")

            .attr("spreadMethod", "pad");

          gradient.append("svg:stop")
            .attr("offset", "50%")
            .attr("stop-color", "#00DCFF")
            .attr("stop-opacity", 1);

          gradient.append("svg:stop")
            .attr("offset", "50%")
            .attr("stop-color", "#00DCFF")
            .attr("stop-opacity", 1);

          d3.select(this).selectAll("rect").attr("fill", "url(#gradient3)");

        break;

        case '4':

          svg = d3.select(this)

          gradient = svg.append("defs")
            .append("linearGradient")
            .attr("id", "gradient4")

            .attr("spreadMethod", "pad");

          gradient.append("svg:stop")
              .attr("offset", "50%")
              .attr("stop-color", "#505050")
              .attr("stop-opacity", 1);

          gradient.append("svg:stop")
              .attr("offset", "50%")
              .attr("stop-color", "#505050")
              .attr("stop-opacity", 1);

          d3.select(this).selectAll("rect").attr("fill", "url(#gradient4)");

        break;


        case '5':

          svg = d3.select(this)

          gradient = svg.append("defs")
            .append("linearGradient")
            .attr("id", "gradient5")

            .attr("spreadMethod", "pad");

          gradient.append("svg:stop")
              .attr("offset", "50%")
              .attr("stop-color", "blue")
              .attr("stop-opacity", 1);

          gradient.append("svg:stop")
              .attr("offset", "50%")
              .attr("stop-color", "#FF3A3A")
              .attr("stop-opacity", 1);

          d3.select(this).selectAll("rect").attr("fill", "url(#gradient5)");

        break;

        case '6':

          svg = d3.select(this)

          gradient = svg.append("defs")
            .append("linearGradient")
            .attr("id", "gradient6")

            .attr("spreadMethod", "pad");

          gradient.append("svg:stop")
              .attr("offset", "50%")
              .attr("stop-color", "#FF3A3A")
              .attr("stop-opacity", 1);

          gradient.append("svg:stop")
              .attr("offset", "50%")
              .attr("stop-color", "#505050")
              .attr("stop-opacity", 1);


          d3.select(this).selectAll("rect").attr("fill", "url(#gradient6)");

        break;


        case '7':

          svg = d3.select(this)

          gradient = svg.append("defs")
            .append("linearGradient")
            .attr("id", "gradient7")

            .attr("spreadMethod", "pad");

          gradient.append("svg:stop")
              .attr("offset", "50%")
              .attr("stop-color", "#00DCFF")
              .attr("stop-opacity", 1);

          gradient.append("svg:stop")
              .attr("offset", "50%")
              .attr("stop-color", "#505050")
              .attr("stop-opacity", 1);

          d3.select(this).selectAll("rect").attr("fill", "url(#gradient7)");

        break;

        case '8':

          svg = d3.select(this)

          gradient = svg.append("defs")
            .append("linearGradient")
            .attr("id", "gradient8")

            .attr("spreadMethod", "pad");

          gradient.append("svg:stop")
              .attr("offset", "50%")
              .attr("stop-color", "blue")
              .attr("stop-opacity", 1);

          gradient.append("svg:stop")
              .attr("offset", "50%")
              .attr("stop-color", "#00DCFF")
              .attr("stop-opacity", 1);

          d3.select(this).selectAll("rect").attr("fill", "url(#gradient8)");

        break;

        case '9':

          svg = d3.select(this)

          gradient = svg.append("defs")
            .append("linearGradient")
            .attr("id", "gradient9")

            .attr("spreadMethod", "pad");

          gradient.append("svg:stop")
              .attr("offset", "50%")
              .attr("stop-color", "blue")
              .attr("stop-opacity", 1);

          gradient.append("svg:stop")
              .attr("offset", "50%")
              .attr("stop-color", "#505050")
              .attr("stop-opacity", 1);

          d3.select(this).selectAll("rect").attr("fill", "url(#gradient9)");

        break;

        case '10':

          svg = d3.select(this)

          gradient = svg.append("defs")
            .append("linearGradient")
            .attr("id", "gradient10")
            .attr("spreadMethod", "pad");

            gradient.append("svg:stop")
                .attr("offset", "50%")
                .attr("stop-color", "#FF3A3A")
                .attr("stop-opacity", 1);

            gradient.append("svg:stop")
                .attr("offset", "50%")
                .attr("stop-color", "#505050")
                .attr("stop-opacity", 1);


          d3.select(this).selectAll("rect").attr("fill", "url(#gradient10)");

        break;
      }


    } else{
      d3.select(this).selectAll("rect").attr('fill', fill)
    }

      
    });
}