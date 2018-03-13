var svg = document.getElementById("svg");
var clear_button = document.getElementById("clear");

var timerID = 0;

var clear_btn = function() {
    while(svg.firstChild){
	     svg.removeChild(svg.firstChild);
    }
    clearInterval(timerID);
}

var circle = function(e){
  clearInterval(timerID);
  var c1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  var xvel = Math.random() * 8 - 4;
  var yvel = Math.random() * 8 - 4;
  c1.setAttribute("cx", e.offsetX);
  c1.setAttribute("cy", e.offsetY);
  c1.setAttribute("xvel", xvel);
  c1.setAttribute("yvel", yvel);
  c1.setAttribute("r", "30");
  c1.setAttribute("fill", "yellow");
  c1.setAttribute("stroke", "yellow");
  svg.appendChild(c1);
}

var circle_bounce = function(){
  var x, y
  for (var i = 0; i < svg.children.length; i++){
    var circ = svg.children[i];
    x = Number(circ.getAttribute("cx"));
	  y = Number(circ.getAttribute("cy"));
    xvel = Number(circ.getAttribute("xvel"));
	  yvel = Number(circ.getAttribute("yvel"));
    x += xvel;
    y += yvel;
	  circ.setAttribute("cx", x);
	  circ.setAttribute("cy", y);
    if (x >= 470 || x <= 30) {
      xvel *= -1;
      circ.setAttribute("xvel", xvel);
    }
    if (y <= 30 || y >= 470){
      yvel *= -1;
      circ.setAttribute("yvel", yvel);
    }
  }
}

var bounce = function(e){
  circle(e)
  timerID = setInterval(circle_bounce, 10);
}

clear_button.addEventListener('click', clear_btn);
svg.addEventListener('click', bounce);
