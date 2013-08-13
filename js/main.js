/**
 * @author Iori
 */
(function(){
	var painter=document.getElementById('painter');
	var ctx=painter.getContext('2d');
	ctx.beginPath();
	ctx.arc(100 , 100, 10, 0, 2*Math.PI);
	ctx.fill();
	ctx.stroke();
	
	ctx.beginPath();
	ctx.moveTo(100,30);
	ctx.lineTo(100,100);
	ctx.strokeStyle='blue';
	ctx.lineWidth=3;
	
	ctx.strokeStyle='red';
	ctx.lineWidth=1;
	ctx.arcTo(100,150,150,150,50);
	ctx.lineTo(150, 50);
	ctx.stroke();
})()