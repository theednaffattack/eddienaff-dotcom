    
    // width = parseInt(d3.select('.jumbotron').style('width'), 10),
    // width = width - margin.left - margin.right,
    // percent = d3.format('%');    


    // w = 960,
    // h = 500;
    // var margin = {top: 30, right: 10, bottom: 30, left: 10},
    w = parseInt(d3.select('.wrapper').style('width'), 10),
    h = parseInt(d3.select('.wrapper').style('height'), 10),
    // w = w - margin.left - margin.right,
    percent = d3.format('%');
    
    var svg = d3.select(".wrapper").append("svg:svg")
        .attr("width", w)
        .attr("height", h);
        // .attr("background-image", svg)
        // .attr("class", "img-responsive");
    
    var circle = svg.selectAll("circle")
        .data(d3.range(70).map(function(datum,interval) {
          return {
            x: interval*20,
            y: 0,
            dx: 5,
            dy: -3 * (Math.random()+1),
            mu: Math.random()*2
          };
        }))
      .enter().append("svg:circle")
        .attr("r", 2.5)
        .attr("fill","white")
        .attr("opacity",".3");
    
    // This appears to be a Frames Per Second meter. Don't need it
    // var text = svg.append("svg:text")
    //     .attr("x", 20)
    //     .attr("y", 20);
    
    var start = Date.now(),
        frames = 0;
    
    d3.timer(function() 
    {
      // See above, we don't need the FPS meter at all.
      // Update the FPS meter.
      // var now = Date.now(), duration = now - start;
      // text.text(~~(++frames * 1000 / duration));
      // if (duration >= 1000) frames = 0, start = now;
    
      // Update the circle positions.
      circle
          .attr("cx", function(d) { d.x += Math.random()*3*Math.sin(Math.random()*3*d.x + Math.random()*10); if (d.x > w) d.x -= w; else if (d.x < 0) d.x += w; return d.x; })
          .attr("cy", function(d) { d.y += d.dy ; if (d.y > h) d.y -= h; else if (d.y < 0) d.y += h; return d.y; })
          .attr("r",function(d)
          {
            return (d.y < 100) ? d3.select(this).attr("r") : d.mu*500/d.y;
          });
    });