var s = function(sketch) {

  var c;

  sketch.setup = function() {
    sketch.createCanvas(200, 200);
  };

  sketch.draw = function() {
  	sketch.background(125);
 		sketch.ellipse(sketch.mouseX, sketch.mouseY, 20, 20);
    console.log('mx:'+sketch.mouseX+' my:'+sketch.mouseY+' wmx:'+sketch.winMouseX+' wmy:'+sketch.winMouseY);
  };
};
 
var myp5 = new p5(s);