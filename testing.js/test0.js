<!DOCTYPE html>
<html>
<body>

<h1>My First Web Page</h1>
<p>My First Paragraph</p>

c:
<p id="c"></p>

<script>
//TODO: define ARG var
	//#pixel
function init(){
	//TODO: make static vars below dynamically avaliable for user input///////////////
	var ARGrot = 0.0;
	var ARGwid = 2.0;
	var ARGheigh = 2.0;
	var ARGcenlarge = math.complex(0.0,0.0);
	var ARGcensmall = math.complex(.5,.5);
	var ARGfac = .25;	//range = [0.0,1.0]
	var ARGmode = 1; 
	
//////////////////////////////end
	var rot = ARGrot*pi/180;
	var plar = math.complex(0.0,0.0);
	var rad = 0;
	var radin = 0;
	var i = math.complex(0.0,1.0);
	//TODO: can complex numbers take one arg?
	var c = math.complex(ARGcenlarge + (ARGcensmall-ARGcenlarge) / (1-ARGfac*exp(i*rot));
	var plar=ARGcenlarge+ARGwid/2+i*ARGheigh/2;
	var rad= math.re(plar-c);
	var d = 1 / ARGfac;
	var m = math.complex(0,0);
	var alfa = 0;
	var sc = 0;

	/***var states: 0 = zero; 1 = alfa; 2 = 180 - alfa; 3 = 180; 4 = 180 + alfa; 5 = -alfa***/
	switch(ARGvar){
		case 0: //zero
			sc = 1;
			alfa = 0;
		break;

		case 1: //alfa
			m = 2*math.pi-rot+i*math.log(d);
		break;

		case 2: //180-alfa
			m = 2*math.pi-rot+i*math.log(d)
			//TODO: this doesnt take one value (below), but thats how it was in uf
			alfa=math.atan2(m);
			sc=math.cos(alfa)*2*math.pi/(2*math.pi-rot),alfa=math.pi+alfa;
		break;

		case 3: //180
			sc=1;
			alfa=math.pi;
		break;

		case 4: //180+alfa
			m = 2 * math.pi + rot + i * math.log(d);
			alfa=math.atan2(m);
			sc=math.cos(alfa)*2*math.pi/2*math.pi+rot);
			alfa=math.pi-alfa;
		break;

		case 5: //-alfa
			m = 2 * math.pi + rot + i * math.log(d);
			alfa = math.atan2(m);
			sc=math.cos(alfa)*2*math.pi/(2*math.pi+rot);
			alfa = 2*math.pi-alfa;
		break;
		var beta = math.atan(rot/math.log(d));
		//TODO: fix this complex on argument thing
		var scale = math.complex(d^(sc*math.exp(i*(alfa-beta)/math.cos(beta))));
	}
	 	var beta = math.atan(rot/math.log(d))
	 	//TODO: fix this complex on argument thing
		var scale = math.complex(d^(sc*math.exp(i*(alfa-beta)/math.cos(beta))));
		if(math.abs(scale) < 1){
			scale = 1/scale;
		}
		var scalesize = math.abs(scale)
		var scaleangle=atan2(scale)
		document.getElementById("c").innerHTML(c);
		//document.getElementById("scaleangle").innerHTML(c+(#center-c)/scale);
		//document.getElementById("newcenter").innerHTML(scalesize*#magn);
	}

	//c is a complex
	function transform(c){
		var dist = 0;
		var dik = ARGwid/100;
		var x = 0;
		var y = 0;
		var os - 0;
		var os1 = 0;
		var pt1 = 0;
		var pt2 = 0;
		var h1 = 0;
		var h2 = 0;
		var h3 = 0;
		var h4 = 0;
		var z = c;

		if(ARGmode == "Crop"){
			if ((math.abs(math.re(z-ARGcenlarge))<ARGwid/2 && math.abs(math.im(z-ARGcenlarge))<ARGheig/2 ) &&
			(math.abs(math.re((z-ARGcensmall)*math.exp(-i*rot)))>ARGwid*ARGfac/2 || \
			math.abs(math.im((z-ARGcensmall)*math.exp(-i*rot)))>ARGheig*ARGfac/2) ) || \
			(math.abs(math.re((z-ARGcensmall)*math.exp(-i*rot)))<ARGwid*ARGfac/2 && \
			math.abs(math.im((z-ARGcensmall)*math.exp(-i*rot)))<ARGheig*ARGfac/2 && \
			(math.abs(math.re(z-ARGcenlarge))>ARGwid/2 || math.abs(math.im(z-ARGcenlarge))>ARGheig/2 ))
			//TODO: fix this, need to get real(#screenpixel) + image(#screenpizel))%2 == 0)
					//need to get screen pixel
			if((math.re(c) + math.im(c)%2 == 0){
				//#solid = true?????
			}

		}

		var ptn = 0;
		ptn=ARGwid;
		var cnt = 1;

		while (cnt < 7){
			if (cnt==1){
				pt1=ARGcenlarge+ptn/25;
				pt2=ARGcenlarge-ptn/25;
			}else if (cnt==2){
				pt1=ARGcenlarge+i*ptn/25;
				pt2=ARGcenlarge-i*ptn/25;
			}else if(cnt==3){
				pt1=ARGcensmall+ptn/25;
				pt2=ARGcensmall-ptn/25;
			}else if (cnt==4){
				pt1=ARGcensmall+i*ptn/25;
				pt2=ARGcensmall-i*ptn/25;
			}else if (cnt==5){
				pt1=c+ptn/25;
				pt2=c-ptn/25;
			}else if (cnt==6){
				pt1=c+i*ptn/25;
				pt2=c-i*ptn/25;
			}
			test1 = (z-pt2)/(pt1-pt2);
			if(math.re(test1)<0){
				dist=math.abs(test1);
			}else if(math.re(test1)>1){
				dist=math.abs(test1-1);
			}else{
				dist=math.abs(im(test1));
			}
			dist=dist* math.abs(pt2-pt1);
			if(dist<dik/2){
				//TODO: ???
				//#solid = true
			}
			cnt = cnt + 1;

		}

	}
}


</script>

</body>
</html>
