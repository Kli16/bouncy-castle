var svg = document.getElementById("svg");
var bounce_button = document.getElementById("bounce");
var clear_button = document.getElementById("clear");

var timerID = 0;

var clear = function() {
  svg.innerHTML = "";
}

var clear_btn = function() {
  svg.innerHTML = "";
  stopit();
}

var bounce = function(e){
  clear();
  var x = 250;
  var y = 250;
  var xvel = Math.random() * 8 - 4;
  var yvel = Math.random() * 8 - 4;
  var circle_bounce = function(){
    clear();
    var c1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c1.setAttribute("cx", x);
    c1.setAttribute("cy", y);
    c1.setAttribute("r", "30");
    c1.setAttribute("fill", "yellow");
    c1.setAttribute("stroke", "yellow");
    svg.appendChild(c1);
    x += xvel;
    y += yvel;
    if (x >= 470 || x <= 30) {
      xvel *= -1;
    }
    if (y <= 30 || y >= 470){
      yvel *= -1;
    }
  }
  timerID = setInterval(circle_bounce, 15);
}

var stopit = function(){
  clearInterval(timerID);
}
clear_button.addEventListener('click', clear_btn);
