
// ============= Variables ======================================

var canvas = document.getElementById('mycanvas');



// ========== FULL SCREEN Canvas ==============================================

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;




// ============ Sky-Gradient ==================================================
var c = canvas.getContext('2d');
var grd = c.createLinearGradient(0,0,0,window.innerHeight);
     grd.addColorStop(0, "#1e528e");
     grd.addColorStop(0.7, "#728a7c");
	 grd.addColorStop(1, "#e9ce5d");
     c.fillStyle = grd;
     c.fillRect(0,0,canvas.width,canvas.height);

// ============== place an image ===========================================
var c1 = canvas.getContext('2d');
 var pict = new Image();
     pict.src = "couple.png";
     pict.onload = function() {
          c1.drawImage(pict, 500, 240, pict.width*0.75, pict.height*0.75);
   }


  // ============== place an image ===========================================

  var c11 = canvas.getContext('2d');
 var pict1 = new Image();
     pict1.src = "heart.png";
     pict1.onload = function() {
          c11.drawImage(pict1, 748, 224, pict.width*0.09, pict.height*0.09);
   }

// ================ wine glassses ==============================================
  var c2 = canvas.getContext('2d');
   c2.beginPath();
   c2.arc(200,200,60,120,1.25 * Math.PI);
   c2.closePath();
  c2.strokeStyle = "black";
c2.stroke();

c2.beginPath();
   c2.arc(300,240,60,1.75 * Math.PI,0.75 * Math.PI);
   c2.closePath();
  c2.strokeStyle = "black";
c2.stroke();

c2.beginPath();
c2.arc(200,200,60,120,1.00 * Math.PI);

c2.fillStyle='#722F37';
    c2.fill();

  c2.beginPath();

c2.arc(300,240,60, 1.95*Math.PI,0.75 * Math.PI);
c2.fillStyle='#722F37';
    c2.fill();

  c2.beginPath();
  c2.moveTo(160,246);
  c2.lineTo(120,290);
  c2.closePath();
    c2.lineWidth = 8;
  c2.strokeStyle = "black";
  c2.stroke();

c2.beginPath();
  c2.moveTo(340,284);
  c2.lineTo(380,320);
c2.closePath();
    c2.lineWidth = 8;
  c2.strokeStyle = "black";
  c2.stroke();


  c2.beginPath();
  c2.moveTo(370,336);
  c2.lineTo(394,310);
c2.closePath();
    c2.lineWidth = 8;
  c2.strokeStyle = "black";
  c2.stroke();


  c2.beginPath();
  c2.moveTo(102,280);
  c2.lineTo(134,306);
c2.closePath();
    c2.lineWidth = 6;
  c2.strokeStyle = "black";
  c2.stroke();


// ===========  RING  ============================================================
  var c3 = canvas.getContext('2d');
  c3.beginPath();
c3.arc(400,100,38,0,2*Math.PI);

c3.strokeStyle = "#f4d03f";
c3.lineWidth = 2;
c3.stroke();

  c3.beginPath();

c3.arc(400,100,35,0,2*Math.PI);
c3.strokeStyle = "#f4d03f";
c3.lineWidth = 2;
c3.stroke();

   c.beginPath();

c3.arc(446,80,38,0,2*Math.PI);
c3.strokeStyle = "#f4d03f";
c3.lineWidth = 2;

c3.stroke();

c3.beginPath();

c3.arc(446,80,35,0,2*Math.PI);
c3.strokeStyle = "#f4d03f";
c3.lineWidth = 2;
c3.stroke();


   c3.beginPath();
  c3.moveTo(370,80);
c3.lineTo(370,40);
c3.lineTo(330,90);

c3.closePath();
c3.stroke();

c3.beginPath();
  c3.moveTo(370,37);
  c3.lineTo(360,30);
    c3.lineTo(316,84);
	c3.lineTo(328,92);
  c3.stroke();


// ===================  TEXT ==========================================================
  var c4 = canvas.getContext('2d');
c4.font =  'italic 80px "Arial"';
c4.fillText("Finally", 460,80);



(function(){

    function init(){



        c4.font = 'italic 40px "Arial"';

        var text = 'He put a ring on it !';
        var i=1;

        function draw(){
            c4.fillText(text.substr(0,i),500,130);
            i++;
            if(i < text.length){
                requestAnimationFrame(draw);
            }
        }

        requestAnimationFrame(draw);

    }

//invoke function init once document is fully loaded
    window.addEventListener('load',init,false);

}()); //self invoking function

// ==================== STARS ============================================================
  var c5 = canvas.getContext('2d');

  function drawStar(cx, cy, spikes, outerRadius, innerRadius) {
    var rot = Math.PI / 2 * 3;
    var x = cx;
    var y = cy;
    var step = Math.PI / spikes;

    c5.strokeSyle = "#f4d03f";
    c5.beginPath();
    c5.moveTo(cx, cy - outerRadius)
    for (i = 0; i < spikes; i++) {
        x = cx + Math.cos(rot) * outerRadius;
        y = cy + Math.sin(rot) * outerRadius;
        c5.lineTo(x, y)
        rot += step

        x = cx + Math.cos(rot) * innerRadius;
        y = cy + Math.sin(rot) * innerRadius;
        c5.lineTo(x, y)
        rot += step
    }
    c5.lineTo(cx, cy - outerRadius)
    c5.closePath();


    c5.fillStyle='#f4d03f';
    c5.fill();

}

drawStar(240, 180, 6, 15, 8);
drawStar(200, 140, 6, 10, 5);
drawStar(270, 150, 6, 10, 5);
drawStar(270, 240, 6, 10, 5);
drawStar(300, 200, 6, 15, 8);





// ================ Red Star on ring =================================================
 // var c6 = canvas.getContext('2d');
// drawStar(420, 54, 6, 12,6);
// c6.fillStyle='#722F37';
// c6.fill();


 //======= Rectangle for invite ====
var c7 = canvas.getContext('2d');
	 c7.fillStyle = '#966F33';
  c7.fillRect(900, 400, 200, 100);
  c7.fillRect(990, 500, 20, 126);


 // === text======
 var c8 = canvas.getContext('2d');
 c8.fillStyle = 'brown';

c8.font = '20px "Arial"';
c8.fillText('John & Roma', 940, 430);
c8.font = '15px "Arial"';
c8.fillText('are getting married !', 928, 450);
c8.fillText('We invite you to join them to', 910, 472);
c8.fillText('celebrate their Engagement', 908, 492);


//====== Star movement === //

// animation
            var c9 = canvas.getContext('2d');
            // x and y variables determine the position of the ball
            x = 740;
            y = 40;
            // change variable determines how far the ball moves during a redraw and which direction
            change = 1;

            // width and height determine the dimensions of the box.
            function animate() {



function drawStar(cx, cy, spikes, outerRadius, innerRadius) {
    var rot = Math.PI / 2 * 3;
    var x = cx;
    var y = cy;
    var step = Math.PI / spikes;

    c5.strokeSyle = "#f4d03f";
    c5.beginPath();
    c5.moveTo(cx, cy - outerRadius)
    for (i = 0; i < spikes; i++) {
        x = cx + Math.cos(rot) * outerRadius;
        y = cy + Math.sin(rot) * outerRadius;
        c5.lineTo(x, y)
        rot += step

        x = cx + Math.cos(rot) * innerRadius;
        y = cy + Math.sin(rot) * innerRadius;
        c5.lineTo(x, y)
        rot += step
    }
    c5.lineTo(cx, cy - outerRadius)
    c5.closePath();


    c5.fill();

}

                c9.fillStyle = grd;
                c9.fillRect(710,0,300,100);
                c9.fillStyle =  '#722f37';
                c9.beginPath();
                drawStar(x ,y, 6, 15, 8);
                c9.fill();
                if (x >= 800 || x<=724){//chcks ball position from left/right edges
                    change = -change // executed if condition is true, change switched to reverse direction of ball.
                }
                x = x + change; // updates horizontal position of ball
            }
            setInterval(animate, 80);
