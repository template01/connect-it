networkJsonN = {
    "nodes": [],
    "links": []
}

networkJsonMember = {
    "member": []
}

var i = 0

var done = 0

function getItems() {
    Papa.parse("./datasets/memberNetwork.csv", {
        download: true,
        skipEmptyLines: true,
        step: function(row) {

            var columnTotal = row.data[0].length

            // console.log(columnTotal)

            if (i == 0) {

                for (i = 2; i < columnTotal; i++) {
                    // console.log(row.data[0][i])

                    networkJsonN['links'].push({
                        "source": i,
                        "target": i,
                        "value": 0
                    });
                    networkJsonN['nodes'].push({
                        "name": row.data[0][i],
                        "group": i - 1
                    });

                }

            } else {

                var isPushed = false

                function runColumn(column, institutionsTotal) {

                    selectedColumn = parseInt(row.data[0][column])

                    if (selectedColumn == 0) {
                        // LINK TO SELF (AKA DONT LINK)
                        selectedColumn = parseInt(row.data[0][0]) + institutionsTotal
                    } else {
                        // LINK TO INSTITUTION
                        selectedColumn = selectedColumn + (column - 3)

                        if (!isPushed) {


                            networkJsonN['nodes'].push({
                                "name": row.data[0][1],
                                "group": column - 1
                            });
                            isPushed = true


                            institutionsTotalLoop = []
                            for (var institutionsTotalInt = 0; institutionsTotalInt < institutionsTotal; ++institutionsTotalInt) {

                                if (row.data[0][2 + institutionsTotalInt] == 1) {
                                    institutionsTotalLoop.push(networkJsonN['nodes'][institutionsTotalInt].name)
                                        // institutionsTotalLoop.push()

                                }
                            }
                            networkJsonMember['member'].push({
                                "name": row.data[0][1],
                                "linksTo": institutionsTotalLoop
                            });


                        }

                        networkJsonN['links'].push({
                            "source": parseInt(row.data[0][0]) + institutionsTotal,
                            "target": selectedColumn,
                            "value": 1
                        });


                    }


                }

                for (i = 2; i < columnTotal; i++) {
                    runColumn(i, columnTotal - 3)
                }

            }
            i++
        },
        complete: function() {

            done = 1
            console.log('done')
                // runNetwork()

        }
    });


}

getItems()



var force

function runNetwork() {

    var width = window.innerWidth, // svg width
        height = window.innerHeight - $('.headerBackgroundautoHeight').outerHeight(), // svg height
        dr = 4, // default point radius
        off = 15, // cluster hull offset
        expand = {}, // expanded clusters
        data, net, linkg, link, nodeg, node;




    // var fill = d3.scale.category20();

    function noop() {
        return false;
    }

    function nodeid(n) {
        return n.size ? "_g_" + n.group : n.name;
    }

    function linkid(l) {
        var u = nodeid(l.source),
            v = nodeid(l.target);
        return u < v ? u + "|" + v : v + "|" + u;
    }

    function getGroup(n) {
        return n.group;
    }

    // Constructs the network to visualize
    //  Regenerates he nodes and links from the original data, based on the expand[]
    //  info, i.e. which group(s) should be shown in expanded form and which shouldn't.
    function network(data, prev, index, expand) {
        expand = expand || {};
        var gm = {}, // group map
            nm = {}, // node map
            lm = {}, // link map
            gn = {}, // previous group nodes
            gc = {}, // previous group centroids
            nodes = [], // output nodes
            links = []; // output links

        // process previous nodes for reuse or centroid calculation
        if (prev) {
            prev.nodes.forEach(function(n) {
                var i = index(n),
                    o;
                if (n.size > 0) {
                    gn[i] = n;
                    n.size = 0;
                } else {
                    o = gc[i] || (gc[i] = {
                        x: 0,
                        y: 0,
                        count: 0
                    });
                    o.x += n.x;
                    o.y += n.y;
                    o.count += 1;
                }
            });
        }

        // determine nodes
        for (var k = 0; k < networkJsonN.nodes.length; ++k) {
            var n = networkJsonN.nodes[k],
                i = index(n),
                l = gm[i] || (gm[i] = gn[i]) || (gm[i] = {
                    group: i,
                    size: 0,
                    nodes: []
                });

            if (expand[i]) {
                // the node should be directly visible
                nm[n.name] = nodes.length;
                nodes.push(n);
                if (gn[i]) {
                    // place new nodes at cluster location (plus jitter)
                    n.x = gn[i].x + Math.random();
                    n.y = gn[i].y + Math.random();
                }
            } else {
                // the node is part of a collapsed cluster
                if (l.size == 0) {
                    // if new cluster, add to set and position at centroid of leaf nodes
                    nm[i] = nodes.length;
                    nodes.push(l);
                    if (gc[i]) {
                        l.x = gc[i].x / gc[i].count;
                        l.y = gc[i].y / gc[i].count;
                    }
                }
                l.nodes.push(n);
            }
            // always count group size as we also use it to tweak the force graph strengths/distances
            l.size += 1;
            n.group_data = l;
        }

        for (i in gm) {
            gm[i].link_count = 0;
        }

        // determine links
        for (k = 0; k < networkJsonN.links.length; ++k) {
            var e = networkJsonN.links[k],
                u = index(e.source),
                v = index(e.target);
            if (u != v) {
                gm[u].link_count++;
                gm[v].link_count++;
            }
            u = expand[u] ? nm[e.source.name] : nm[u];
            v = expand[v] ? nm[e.target.name] : nm[v];
            var i = (u < v ? u + "|" + v : v + "|" + u),
                l = lm[i] || (lm[i] = {
                    source: u,
                    target: v,
                    size: 0
                });
            l.size += 1;
        }
        for (i in lm) {
            links.push(lm[i]);
        }

        return {
            nodes: nodes,
            links: links
        };
    }

    // --------------------------------------------------------

    var body = d3.select("#graph1");

    var vis = body.append("svg")
        .attr("width", width)
        .attr("height", height);




    for (var i = 0; i < networkJsonN.links.length; ++i) {
        o = networkJsonN.links[i];
        o.source = networkJsonN.nodes[o.source];
        o.target = networkJsonN.nodes[o.target];
    }

    hullg = vis.append("g");
    linkg = vis.append("g");
    nodeg = vis.append("g");

    vis.call(d3.behavior.zoom()
        .on("zoom", function() {
            nodeg.attr("transform", "translate(" + d3.event.translate[0] + "," + d3.event.translate[1] + ") scale(" + d3.event.scale + ")")
            linkg.attr("transform", "translate(" + d3.event.translate[0] + "," + d3.event.translate[1] + ") scale(" + d3.event.scale + ")")
        })
    )

    init();

    vis.attr("opacity", 1e-6)
        .transition()
        .duration(1000)
        .attr("opacity", 1);
    //});  // When reading in from file

    function init() {
        if (force) force.stop();

        net = network(data, net, getGroup, expand);

        // if ($('.showTheme').is(":checked")) {
        //   distance = 400
        // }else{
        //   distance = 400
        // }
        force = d3.layout.force()
            .nodes(net.nodes)
            .links(net.links)
            .size([width, height])
            .linkDistance(200)
            //   .linkDistance(function(l, i) {
            //   var n1 = l.source, n2 = l.target;
            // // larger distance for bigger groups:
            // // both between single nodes and _other_ groups (where size of own node group still counts),
            // // and between two group nodes.
            // //
            // // reduce distance for groups with very few outer links,
            // // again both in expanded and grouped form, i.e. between individual nodes of a group and
            // // nodes of another group or other group node or between two group nodes.
            // //
            // // The latter was done to keep the single-link groups ('blue', rose, ...) close.
            // return 120 +
            //   Math.min(160 * Math.min((n1.size || (n1.group != n2.group ? n1.group_data.size : 0)),
            //                          (n2.size || (n1.group != n2.group ? n2.group_data.size : 0))),
            //        -120 +
            //        120 * Math.min((n1.link_count || (n1.group != n2.group ? n1.group_data.link_count : 0)),
            //                      (n2.link_count || (n1.group != n2.group ? n2.group_data.link_count : 0))),
            //        200);
            //   //return 150;
            // })
            .linkStrength(function(l, i) {
                return 1;
            })
            .gravity(0.05) // gravity+charge tweaked to ensure good 'grouped' view (e.g. green group not smack between blue&orange, ...
            .charge(-10000) // ... charge is important to turn single-linked groups to the outside
            .friction(0.7) // friction adjusted to get dampened display: less bouncy bouncy ball [Swedish Chef, anyone?]
            .start();



        // root = nodes[0];

        // root.x = width / 2;
        // root.y = height / 2;
        // root.fixed = true;


        link = linkg.selectAll("line.link").data(net.links, linkid);
        link.exit().remove();
        link.enter().append("line")
            .attr("class", "link")
            .attr("x1", function(d) {
                return d.source.x;
            })
            .attr("y1", function(d) {
                return d.source.y;
            })
            .attr("x2", function(d) {
                return d.target.x;
            })
            .attr("y2", function(d) {
                return d.target.y;
            })
            .style("stroke-width", function(d) {
                if (d.size>72){
                  return 72;
                }else{
                  return d.size || 1;
                }
            });

        node = nodeg.selectAll("g.node").data(net.nodes, nodeid);
        node.exit().remove();
        var onEnter = node.enter();
        // var searchJson
        var g = onEnter
            .append("g")
            .attr("class", "node")
            .each(function(d, i) {
                // if(d.x == value) index = i;
                // console.log(i)
                var searchJson = JSON.search(dataList, '//*[ acro="' + networkJsonN.nodes[i].name + '" ]')

                if (searchJson.length > 0) {

                    d3.select(this).attr('role', searchJson[0].role)
                    d3.select(this).attr('data-members', searchJson[0].members)
                    d3.select(this).attr('data-website', searchJson[0].website)
                    d3.select(this).attr('data-date', searchJson[0].date)
                    d3.select(this).attr('data-type', searchJson[0].type)
                    d3.select(this).attr('data-theme', searchJson[0].theme)
                    d3.select(this).attr('data-theme2', searchJson[0].theme2)
                    d3.select(this).attr('data-theme3', searchJson[0].theme3)
                    d3.select(this).attr('data-desc', searchJson[0].desc)
                    d3.select(this).attr('data-name', searchJson[0].name)
                    d3.select(this).attr('data-acro', searchJson[0].acro)


                }


            })


        g.append("rect")
            .attr("rx", 72)
            .attr("ry", 72)
            .attr("x", -36)
            .attr("y", -36)
            .attr("width", 72)
            .attr("height", 72)
            .attr('fill', fill)

        g.append("text")
            .style("text-anchor", "middle")
            .style("fill", "#fff")
            .style("font-family", "'Work Sans', arial")
            .style("font-size", "14px")
            .style("line-height", "25px")
            .text(function(d, i) {
                return networkJsonN.nodes[i].name
            })


        g.attr("transform", function(d) {
            return "translate(" + d.x + "," + d.y + ")";
        });


        force.on("tick", function() {
            link.attr("x1", function(d) {
                    return d.source.x;
                })
                .attr("y1", function(d) {
                    return d.source.y;
                })
                .attr("x2", function(d) {
                    return d.target.x;
                })
                .attr("y2", function(d) {
                    return d.target.y;
                });

            node.attr("transform", function(d) {
                return "translate(" + d.x + "," + d.y + ")";
            });

        });

        // node.call(force.drag);

        //
        // node.on("mouseover", function(d) {
        //     link.style('stroke', function(l) {
        //         return 'red'
        //         // if (d === l.source || d === l.target)
        //         //     return 10;
        //         // else
        //         //     return 2;
        //     });
        //
        // })

  			node.on("mouseover", function (d) {
  				link.style('stroke', function(l) {
  				    if (d === l.source || d === l.target)
  				    return 'blue';
  				  // else
  				  //   return '#333';
  				});

  		 	})

        node.on("mouseout", function (d) {
 				     link.style('stroke', '#333');
        })





    }


}
