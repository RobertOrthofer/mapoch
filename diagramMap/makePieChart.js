// insert data array, returns piechart as canvas object
function makePieChart(dataArray){
    //var canvas = document.getElementById("can");
    var canvas = document.createElement('canvas');

    //https://stackoverflow.com/questions/2588181/canvas-is-stretched-when-using-css-but-normal-with-width-height-properties
    // these are the canvas height and width attributes (default 150/300) NOT the css attributes. setting the css attribute dynamically before drawing the circle will create distortion
    canvas.setAttribute('width','100');
    canvas.setAttribute('height','100');
    var ctx = canvas.getContext("2d");
    var lastend = - Math.PI / 2; //quarter circle in radians so piechart starts north
    var myColor = ['red', 'green', 'blue', 'yellow', 'orange']; // Colors of each slice

    var myTotal = 0;
    dataArray.forEach(function(value){
        myTotal += value;
    });

    var centerX = canvas.width / 2;
    var centerY = canvas.height / 2;
    for (var i = 0; i < data.length; i++) {
        ctx.fillStyle = myColor[i];
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        // Arc Parameters: x, y, radius, startingAngle (radians), endingAngle (radians), antiClockwise (boolean)
        ctx.arc(centerX, centerY, centerY, lastend, lastend + (Math.PI * 2 * (dataArray[i] / myTotal)), false);
        ctx.lineTo(centerX, centerY);
        ctx.fill();
        lastend += Math.PI * 2 * (data[i] / myTotal);
    };
    return(canvas);
}
