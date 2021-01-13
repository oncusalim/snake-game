
	var yilanx = [200, 180, 160, 140, 120];
	var yilany = [300, 300, 300, 300, 300];
    var yilanboyu = 5;
	var i; var x=200;
	var demo;	
	var ax=20; var ay=0;
	var hedefx = 440;  var hedefy = 300;
	
function myFunction() {
	
	var i ; 
	var demo; 
	yilanboyu = yilanx.length;
	
	for (i = yilanboyu; i>1; i--) {			
			yilanx[i-1] = yilanx[i-2];
			yilany[i-1] = yilany[i-2];
		}
	
	window.onkeydown=function(olay){
	
	 if (olay.keyCode==37 && ax != 20 && ax != -20) { ax = -20; ay = 0;}
	 else if (olay.keyCode==38 && ay != 20 && ay != -20) { ay = -20; ax = 0;}
	 else if (olay.keyCode==39 && ax != -20 && ax != 20) { ax = +20; ay = 0;}
	 else if (olay.keyCode==40 && ay != -20 && ay != 20) { ay = +20; ax = 0;}
	}
			
	
	yilanx[0] += ax; 
	yilany[0] += ay;

	for (i = 1; i<yilanboyu; i++) {			
			
		  if (yilanx[0] == yilanx[i] && yilany[0] == yilany[i]) { 
		   alert("Yandınız!!!! Skor = " + (yilanboyu * 10)); }
		}	
	
	document.getElementById("hedef").style.left =  hedefx + "px";	
	document.getElementById("hedef").style.top =  hedefy + "px";
	for (i=0; i<yilanboyu; i++) {
		demo = "demo" + (i+1) ; 
		
	document.getElementById(demo).style.left =  yilanx[i] + "px";	
	document.getElementById(demo).style.top =  yilany[i] + "px";
		
	}
	
	if (hedefx == yilanx[0] && hedefy == yilany[0]) {
			yilanboyu++ ;  x = x-1;
		    yilanx.push(hedefx);  yilany.push(hedefy); 
		    hedefx = 20 * Math.floor(Math.random() * 21) + 40 ;
			hedefy = 20 * Math.floor(Math.random() * 16) + 40 ;
		//var myVar = setInterval(myFunction, x);
		document.getElementById("seviye").innerHTML = "SEVİYE : " + yilanx.length;
		}
	else if (yilanx[0] == 0 || yilanx[0] == 500 || yilany[0] == 0 || yilany[0] == 400){
			alert("Yandınız!!!! Skor = " + (yilanboyu * 10));
		}
	
	{
			
		}
}
