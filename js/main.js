/**
 * @author Iori
 */
(function(){
	var painter=document.getElementById('painter');
	var ctx=painter.getContext('2d');
	ctx.beginPath();
	ctx.arc(100 , 100, 30, 0, 2*Math.PI);
	ctx.stroke();
})()