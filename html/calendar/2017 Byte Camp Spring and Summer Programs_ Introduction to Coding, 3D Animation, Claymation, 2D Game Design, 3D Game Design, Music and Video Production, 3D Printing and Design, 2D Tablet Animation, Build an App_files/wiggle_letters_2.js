



function goodAnim(ctl,x,y,scaleAmt,skew){

TweenLite.to(ctl, .4, {skewX:skew+"deg"});

TweenLite.to(ctl, .4, {left:x-skew,top:y,ease:Power4.easeIn});

TweenLite.to(ctl, .4, {scale:scaleAmt,ease:Power4.easeIn});

TweenLite.to(ctl, .1, {left:x+skew*2,skewX:(-skew/3)+"deg",scaleX:.95*scaleAmt,delay:.4});
TweenLite.to(ctl, .1, {left:x-skew,skewX:(skew/5)+"deg",scaleX:scaleAmt,delay:.5});
TweenLite.to(ctl, .1, {left:x+skew/10,skewX:(-skew/20)+"deg",delay:.6});
TweenLite.to(ctl, .1, {left:x,skewX:"0deg",delay:.7});

}

function goodAnimSlow(ctl,x,y,scaleAmt,skew){

TweenLite.to(ctl, 1.2, {skewX:skew+"deg"});

TweenLite.to(ctl, 1.2, {left:x-skew,top:y,ease:Power4.easeIn});

TweenLite.to(ctl, 1.2, {scale:scaleAmt,ease:Power4.easeIn});

TweenLite.to(ctl, .1, {left:x+skew*2,skewX:(-skew/3)+"deg",scaleX:.95*scaleAmt,delay:.4});
TweenLite.to(ctl, .1, {left:x-skew,skewX:(skew/5)+"deg",scaleX:scaleAmt,delay:.5});
TweenLite.to(ctl, .1, {left:x+skew/10,skewX:(-skew/20)+"deg",delay:.6});
TweenLite.to(ctl, .1, {left:x,skewX:"0deg",delay:.7});

}



function blur(ctl) {
var ctx=ctl.getContext("2d");
ctx.fillStyle = "rgba(0,0,0,.1)";
ctx.globalCompositeOperation = "destination-out";

}

function anistring_int(ctl,s,color,size,amt,width,dir,x,y) {


offset = .05*size;

if (s == "[LOGO]") {
   offset = 6.9*size*.5+size*.25;
} else if (s == "[LAPTOP]") {
   offset = 1*size*.5+size*.25;
} else {
	for (var i=0; i<s.length; i++)  {
	   chr = s.charAt(i);
	   offset = offset + letter(ctx,chr,'',0,0,0,0,0,0)*size*.5+size*.2;
	}
}

ctl.width  = offset+size*.05;
ctl.height = size*1.1;

var ctx=ctl.getContext("2d");

ctx.setTransform(1, 0, 0, 1, 0, 0);
ctx.clearRect(0, 0, ctl.width, ctl.height);


offset = .05*size;


if (s == "[LOGO]") {
   logo(ctx,"B",color,size,amt,width,0.05*size*.5,size*.05,0,1);
   logo(ctx,"Y",color,size,amt,width,1*size*.5,size*.05,0,1);
   logo(ctx,"T",color,size,amt,width,1.8*size*.5,size*.05,0,1);
   logo(ctx,"E",color,size,amt,width,2.5*size*.5,size*.05,0,1);
   logo(ctx,"C",color,size,amt,width,3.8*size*.5,size*.05,0,1);
   logo(ctx,"A",color,size,amt,width,4.6*size*.5,size*.05,0,1);
   logo(ctx,"M",color,size,amt,width,5.5*size*.5,size*.05,0,1);
   logo(ctx,"P",color,size,amt,width,6.65*size*.5,size*.05,0,1);
} else if (s == "[LAPTOP]") {
     logo(ctx,"*",color,size,amt,width,0.05*size,size*.05,0,1)*size*.5+size*.2
} else {
	for (var i=0; i<s.length; i++)  {
	   chr = s.charAt(i);
	   val = letter(ctx,chr,color,size,amt,width,offset,size*.05,0,1);
	   offset = offset + val*size*.5+size*.2;
	}
}

}

function logo(ctx,character,color,size,amt,width,originx,originy,tilt,visible) {

if (character =="B") {
	if (visible) logoB(ctx,size,amt,width,color,originx,originy,tilt); 
	return .5;
} else if (character =="Y"){
	if (visible) logoY(ctx,size,amt,width,color,originx,originy,tilt); 
	return .5;
} else if (character =="T"){
	if (visible) logoT(ctx,size,amt,width,color,originx,originy,tilt); 
	return .5;
} else if (character =="E"){
	if (visible) logoE(ctx,size,amt,width,color,originx,originy,tilt); 
	return .5;
} else if (character =="C"){
	if (visible) logoC(ctx,size,amt,width,color,originx,originy,tilt); 
	return .5;
} else if (character =="A"){
	if (visible) logoA(ctx,size,amt,width,color,originx,originy,tilt); 
	return .5;
} else if (character =="M"){
	if (visible) logoM(ctx,size,amt,width,color,originx,originy,tilt); 
	return .5;
} else if (character =="P"){
	if (visible) logoP(ctx,size,amt,width,color,originx,originy,tilt); 
	return .5;
} else if (character =="*"){
	if (visible) logoLaptop(ctx,size,amt,width,color,originx,originy,tilt); 
	return .5;
}
	
}


function letter(ctx,character,color,size,amt,width,originx,originy,tilt,visible) {

if (character =="A") {
	if (visible) A(ctx,size,amt,width,color,originx,originy,tilt); 
	return .5;
} else if (character =="B") {
	if (visible) B(ctx,size,amt,width,color,originx,originy,tilt); 
	return .6;
} else if (character =="C") {
	if (visible) C(ctx,size,amt,width,color,originx,originy,tilt); 
	return .7;
} else if (character =="D") {
	if (visible) D(ctx,size,amt,width,color,originx,originy,tilt); 
	return .6;
} else if (character =="E") {
	if (visible) E(ctx,size,amt,width,color,originx,originy,tilt); 
	return .5;
} else if (character =="F") {
	if (visible) F(ctx,size,amt,width,color,originx,originy,tilt); 
	return .6;
} else if (character =="G") {
	if (visible) G(ctx,size,amt,width,color,originx,originy,tilt); 
	return 1.1;
} else if (character =="H") {
	if (visible) H(ctx,size,amt,width,color,originx,originy,tilt); 
	return .8;
} else if (character =="I") {
	if (visible) I(ctx,size,amt,width,color,originx,originy,tilt); 
	return .3;
} else if (character =="J") {
	if (visible) J(ctx,size,amt,width,color,originx,originy,tilt); 
	return .4;
} else if (character =="K") {
	if (visible) K(ctx,size,amt,width,color,originx,originy,tilt); 
	return .7;
} else if (character =="L") {
	if (visible) L(ctx,size,amt,width,color,originx,originy,tilt); 
	return .5;
} else if (character =="M") {
	if (visible) M(ctx,size,amt,width,color,originx,originy,tilt); 
	return 1.1;
} else if (character =="N") {
	if (visible) N(ctx,size,amt,width,color,originx,originy,tilt); 
	return .8;
} else if (character =="O") {
	if (visible) O(ctx,size,amt,width,color,originx,originy,tilt); 
	return .6;
} else if (character =="P") {
	if (visible) P(ctx,size,amt,width,color,originx,originy,tilt); 
	return .6;
} else if (character =="Q") {
	if (visible) Q(ctx,size,amt,width,color,originx,originy,tilt); 
	return .9;
} else if (character =="R") {
	if (visible) R(ctx,size,amt,width,color,originx,originy,tilt); 
	return .5;
} else if (character =="S") {
	if (visible) S(ctx,size,amt,width,color,originx,originy,tilt); 
	return .8;
} else if (character =="T") {
	if (visible) T(ctx,size,amt,width,color,originx,originy,tilt); 
	return .7;
} else if (character =="U") {
	if (visible) U(ctx,size,amt,width,color,originx,originy,tilt); 
	return .8;
} else if (character =="V") {
	if (visible) V(ctx,size,amt,width,color,originx,originy,tilt); 
	return .7;
} else if (character =="W") {
	if (visible) W(ctx,size,amt,width,color,originx,originy,tilt); 
	return 1.3;
} else if (character =="X") {
	if (visible) X(ctx,size,amt,width,color,originx,originy,tilt); 
	return .5;
} else if (character =="Y") {
	if (visible) Y(ctx,size,amt,width,color,originx,originy,tilt); 
	return .4;
} else if (character =="Z") {
	if (visible) Z(ctx,size,amt,width,color,originx,originy,tilt); 
	return .7;
} else if (character =="a") {
	if (visible) la(ctx,size,amt,width,color,originx,originy,tilt); 
	return .5;
} else if (character =="b") {
	if (visible) lb(ctx,size,amt,width,color,originx,originy,tilt); 
	return .5;
} else if (character =="c") {
	if (visible) lc(ctx,size,amt,width,color,originx,originy,tilt); 
	return .5;
} else if (character =="d") {
	if (visible) ld(ctx,size,amt,width,color,originx,originy,tilt); 
	return .5;
} else if (character =="e") {
	if (visible) le(ctx,size,amt,width,color,originx,originy,tilt); 
	return .5;
} else if (character =="f") {
	if (visible) lf(ctx,size,amt,width,color,originx,originy,tilt); 
	return .3;
} else if (character =="g") {
	if (visible) lg(ctx,size,amt,width,color,originx,originy,tilt); 
	return .5;
} else if (character =="h") {
	if (visible) lh(ctx,size,amt,width,color,originx,originy,tilt); 
	return .5;
} else if (character =="i") {
	if (visible) li(ctx,size,amt,width,color,originx,originy,tilt); 
	return .1;
} else if (character =="j") {
	if (visible) lj(ctx,size,amt,width,color,originx,originy,tilt); 
	return .2;
} else if (character =="k") {
	if (visible) lk(ctx,size,amt,width,color,originx,originy,tilt); 
	return .7;
} else if (character =="l") {
	if (visible) ll(ctx,size,amt,width,color,originx,originy,tilt); 
	return .2;
} else if (character =="m") {
	if (visible) lm(ctx,size,amt,width,color,originx,originy,tilt); 
	return 1;
} else if (character =="n") {
	if (visible) ln(ctx,size,amt,width,color,originx,originy,tilt); 
	return .5;
} else if (character =="o") {
	if (visible) lo(ctx,size,amt,width,color,originx,originy,tilt); 
	return .5;
} else if (character =="p") {
	if (visible) lp(ctx,size,amt,width,color,originx,originy,tilt); 
	return .5;
} else if (character =="q") {
	if (visible) lq(ctx,size,amt,width,color,originx,originy,tilt); 
	return .6;
} else if (character =="r") {
	if (visible) lr(ctx,size,amt,width,color,originx,originy,tilt); 
	return .4;
} else if (character =="s") {
	if (visible) ls(ctx,size,amt,width,color,originx,originy,tilt); 
	return .5;
} else if (character =="t") {
	if (visible) lt(ctx,size,amt,width,color,originx,originy,tilt); 
	return .4;
} else if (character =="u") {
	if (visible) lu(ctx,size,amt,width,color,originx,originy,tilt); 
	return .5;
} else if (character =="v") {
	if (visible) lv(ctx,size,amt,width,color,originx,originy,tilt); 
	return .5;
} else if (character =="w") {
	if (visible) lw(ctx,size,amt,width,color,originx,originy,tilt); 
	return .6;
} else if (character =="x") {
	if (visible) lx(ctx,size,amt,width,color,originx,originy,tilt); 
	return .5;
} else if (character =="y") {
	if (visible) ly(ctx,size,amt,width,color,originx,originy,tilt); 
	return .5;
} else if (character =="z") {
	if (visible) lz(ctx,size,amt,width,color,originx,originy,tilt); 
	return .5;
} else if (character =="0") {
	if (visible) n0(ctx,size,amt,width,color,originx,originy,tilt); 
	return .7;
} else if (character =="1") {
	if (visible) n1(ctx,size,amt,width,color,originx,originy,tilt); 
	return .2;
} else if (character =="2") {
	if (visible) n2(ctx,size,amt,width,color,originx,originy,tilt); 
	return .6;
} else if (character =="3") {
	if (visible) n3(ctx,size,amt,width,color,originx,originy,tilt); 
	return .5;
} else if (character =="4") {
	if (visible) n4(ctx,size,amt,width,color,originx,originy,tilt); 
	return .5;
} else if (character =="5") {
	if (visible) n5(ctx,size,amt,width,color,originx,originy,tilt); 
	return .6;
} else if (character =="6") {
	if (visible) n6(ctx,size,amt,width,color,originx,originy,tilt); 
	return .6;
} else if (character =="7") {
	if (visible) n7(ctx,size,amt,width,color,originx,originy,tilt); 
	return .6;
} else if (character =="8") {
	if (visible) n8(ctx,size,amt,width,color,originx,originy,tilt); 
	return .6;
} else if (character =="9") {
	if (visible) n9(ctx,size,amt,width,color,originx,originy,tilt); 
	return .6;
} else if (character =="&") {
	if (visible) p_ampersand(ctx,size,amt,width,color,originx,originy,tilt); 
	return .6;	
} else if (character =="*") {
	if (visible) p_asterix(ctx,size,amt,width,color,originx,originy,tilt); 
	return .6;	
} else if (character =="@") {
	if (visible) p_at(ctx,size,amt,width,color,originx,originy,tilt); 
	return .6;	
} else if (character =='\\') {
	if (visible) p_back_slash(ctx,size,amt,width,color,originx,originy,tilt); 
	return .6;	
} else if (character ==":") {
	if (visible) p_colon(ctx,size,amt,width,color,originx,originy,tilt); 
	return .6;	
} else if (character =="$") {
	if (visible) p_dollar(ctx,size,amt,width,color,originx,originy,tilt); 
	return .6;	
} else if (character =='"') {
	if (visible) p_double_quote(ctx,size,amt,width,color,originx,originy,tilt); 
	return .6;	
} else if (character =="!") {
	if (visible) p_exclamation(ctx,size,amt,width,color,originx,originy,tilt); 
	return .6;	
} else if (character =="/") {
	if (visible) p_forward_slash(ctx,size,amt,width,color,originx,originy,tilt); 
	return .6;	
} else if (character =="#") {
	if (visible) p_hash(ctx,size,amt,width,color,originx,originy,tilt); 
	return .6;	
} else if (character =="(") {
	if (visible) p_left_bracket(ctx,size,amt,width,color,originx,originy,tilt); 
	return .6;	
} else if (character =="-") {
	if (visible) p_minus(ctx,size,amt,width,color,originx,originy,tilt); 
	return .6;	
} else if (character =="%") {
	if (visible) p_percent(ctx,size,amt,width,color,originx,originy,tilt); 
	return .6;	
} else if (character ==".") {
	if (visible) p_period(ctx,size,amt,width,color,originx,originy,tilt); 
	return .6;	
} else if (character =="+") {
	if (visible) p_plus(ctx,size,amt,width,color,originx,originy,tilt); 
	return .6;	
} else if (character =="?") {
	if (visible) p_question_mark(ctx,size,amt,width,color,originx,originy,tilt); 
	return .6;	
} else if (character ==")") {
	if (visible) p_right_bracket(ctx,size,amt,width,color,originx,originy,tilt); 
	return .6;	
} else if (character =="=") {
	if (visible) p_menu(ctx,size,amt,width,color,originx,originy,tilt); 
	return .6;
} else if (character == String.fromCharCode(39)) {
	if (visible) p_single_quote(ctx,size,amt,width,color,originx,originy,tilt); 
	return .6;	
} else  {
	return .3;
}

}

function adj(size,amt,val) {
noise = .025*amt;
var newval = val/100*size+(Math.random()-.5)*(noise*size*val/100);
return newval;

}



function Z(ctx,size,amt,width,color,x,y,tilt){
ctx.strokeStyle = 'rgba(0,0,0,0)';
ctx.lineCap = 'butt';
ctx.lineJoin = 'miter';
ctx.miterLimit = 4;
ctx.save();
ctx.restore();
ctx.save();
ctx.restore();
ctx.save();

ctx.save();
ctx.fillStyle = "rgba(0, 0, 0, 0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();ctx.moveTo(adj(size,amt,7.1428571,tilt),adj(size,amt,13.214286));
ctx.bezierCurveTo(adj(size,amt,7.1428571),adj(size,amt,13.214286),adj(size,amt,23.617252),adj(size,amt,14.234233999999999),adj(size,amt,31.785714000000002),adj(size,amt,15.357142999999999));
ctx.bezierCurveTo(adj(size,amt,38.146742),adj(size,amt,16.231586),adj(size,amt,50.714286),adj(size,amt,18.928570999999998),adj(size,amt,50.714286),adj(size,amt,18.928570999999998));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.save();
ctx.fillStyle = "rgba(0, 0, 0, 0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,51.785714),adj(size,amt,16.071429));
ctx.bezierCurveTo(adj(size,amt,51.785714),adj(size,amt,16.071429),adj(size,amt,36.499802),adj(size,amt,30.796022999999998),adj(size,amt,29.285714),adj(size,amt,38.571428999999995));
ctx.bezierCurveTo(adj(size,amt,20.099239),adj(size,amt,48.47269),adj(size,amt,2.8571429),adj(size,amt,69.285714),adj(size,amt,2.8571429),adj(size,amt,69.285714));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.save();
ctx.fillStyle = "rgba(0, 0, 0, 0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,1.7857143),adj(size,amt,69.285714));
ctx.bezierCurveTo(adj(size,amt,1.7857143),adj(size,amt,69.285714),adj(size,amt,18.698503),adj(size,amt,69.561451),adj(size,amt,27.142857),adj(size,amt,70));
ctx.bezierCurveTo(adj(size,amt,35.01191),adj(size,amt,70.408671),adj(size,amt,50.714286),adj(size,amt,71.785714),adj(size,amt,50.714286),adj(size,amt,71.785714));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();
ctx.restore();
}

function Y(ctx,size,amt,width,color,x,y,tilt){
ctx.strokeStyle = 'rgba(0,0,0,0)';
ctx.lineCap = 'butt';
ctx.lineJoin = 'miter';
ctx.miterLimit = 4;
ctx.save();
ctx.restore();
ctx.save();
ctx.restore();
ctx.save();

ctx.save();
ctx.fillStyle = "rgba(0, 0, 0, 0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,4.2857143),adj(size,amt,11.071429));
ctx.bezierCurveTo(adj(size,amt,4.2857143),adj(size,amt,11.071429),adj(size,amt,9.1526758),adj(size,amt,24.921767000000003),adj(size,amt,12.5),adj(size,amt,31.428570999999998));
ctx.bezierCurveTo(adj(size,amt,15.340215),adj(size,amt,36.949614999999994),adj(size,amt,18.963226),adj(size,amt,43.80361),adj(size,amt,21.785714),adj(size,amt,47.142857));
ctx.bezierCurveTo(adj(size,amt,21.198509),adj(size,amt,56.429664),adj(size,amt,18.960497),adj(size,amt,67.685226),adj(size,amt,20),adj(size,amt,73.928572));
ctx.bezierCurveTo(adj(size,amt,20.187313),adj(size,amt,75.19699800000001),adj(size,amt,21.428571),adj(size,amt,79.285714),adj(size,amt,21.428571),adj(size,amt,79.285714));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.save();
ctx.fillStyle = "rgba(0, 0, 0, 0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,42.857143),adj(size,amt,15));
ctx.bezierCurveTo(adj(size,amt,42.857143),adj(size,amt,15),adj(size,amt,40.320545),adj(size,amt,17.243426),adj(size,amt,39.285714),adj(size,amt,18.571429000000002));
ctx.bezierCurveTo(adj(size,amt,32.722485),adj(size,amt,26.994045),adj(size,amt,22.857142999999997),adj(size,amt,46.071429),adj(size,amt,22.857142999999997),adj(size,amt,46.071429));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();
ctx.restore();
}

function X(ctx,size,amt,width,color,x,y,tilt){
ctx.strokeStyle = 'rgba(0,0,0,0)';
ctx.lineCap = 'butt';
ctx.lineJoin = 'miter';
ctx.miterLimit = 4;
ctx.save();
ctx.restore();
ctx.save();
ctx.restore();
ctx.save();

ctx.save();
ctx.fillStyle = "rgba(0, 0, 0, 0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,3.5714286),adj(size,amt,78.571429));
ctx.bezierCurveTo(adj(size,amt,3.5714286),adj(size,amt,78.571429),adj(size,amt,4.7388047),adj(size,amt,73.71495999999999),adj(size,amt,5.7142857),adj(size,amt,71.42857099999999));
ctx.bezierCurveTo(adj(size,amt,11.40457),adj(size,amt,58.091351),adj(size,amt,20.112148),adj(size,amt,46.253301),adj(size,amt,27.142857),adj(size,amt,33.571429));
ctx.bezierCurveTo(adj(size,amt,31.740363),adj(size,amt,25.278526),adj(size,amt,40.714286),adj(size,amt,8.5714286),adj(size,amt,40.714286),adj(size,amt,8.5714286));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.save();
ctx.fillStyle = "rgba(0, 0, 0, 0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,4.6428571),adj(size,amt,15.357143));
ctx.bezierCurveTo(adj(size,amt,4.6428571),adj(size,amt,15.357143),adj(size,amt,11.249378),adj(size,amt,30.870496000000003),adj(size,amt,15.357143),adj(size,amt,38.214286));
ctx.bezierCurveTo(adj(size,amt,20.43455),adj(size,amt,47.291586),adj(size,amt,27.68715),adj(size,amt,55.065415),adj(size,amt,32.5),adj(size,amt,64.285714));
ctx.bezierCurveTo(adj(size,amt,34.279938),adj(size,amt,67.695661),adj(size,amt,36.785714),adj(size,amt,75),adj(size,amt,36.785714),adj(size,amt,75));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();
ctx.restore();
}

function W(ctx,size,amt,width,color,x,y,tilt){
ctx.strokeStyle = 'rgba(0,0,0,0)';
ctx.lineCap = 'butt';
ctx.lineJoin = 'miter';
ctx.miterLimit = 4;
ctx.save();
ctx.restore();
ctx.save();
ctx.restore();
ctx.save();

ctx.save();
ctx.fillStyle = "rgba(0, 0, 0, 0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
 ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,3.5714286),adj(size,amt,10.714286));
ctx.bezierCurveTo(adj(size,amt,3.5714286),adj(size,amt,10.714286),adj(size,amt,2.956566),adj(size,amt,19.093235999999997),adj(size,amt,3.5714286),adj(size,amt,23.214286));
ctx.bezierCurveTo(adj(size,amt,6.4000149),adj(size,amt,42.172579999999996),adj(size,amt,20.357143),adj(size,amt,78.214286),adj(size,amt,20.357143),adj(size,amt,78.214286));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.save();
ctx.fillStyle = "rgba(0, 0, 0, 0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,13.928571),adj(size,amt,80));
ctx.bezierCurveTo(adj(size,amt,13.928571),adj(size,amt,80),adj(size,amt,26.315126),adj(size,amt,62.877109000000004),adj(size,amt,30.357143),adj(size,amt,53.214286));
ctx.bezierCurveTo(adj(size,amt,34.379532),adj(size,amt,43.598387),adj(size,amt,35.036149),adj(size,amt,35.385353),adj(size,amt,37.857143),adj(size,amt,22.857143));
ctx.bezierCurveTo(adj(size,amt,45.01575),adj(size,amt,33.233435),adj(size,amt,51.472623),adj(size,amt,44.24538),adj(size,amt,56.785714),adj(size,amt,55.714286));
ctx.bezierCurveTo(adj(size,amt,60.188882),adj(size,amt,63.060408),adj(size,amt,65),adj(size,amt,78.571429),adj(size,amt,65),adj(size,amt,78.571429));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.save();
ctx.fillStyle = "rgba(0, 0, 0, 0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,77.857143),adj(size,amt,12.142857));
ctx.bezierCurveTo(adj(size,amt,77.857143),adj(size,amt,12.142857),adj(size,amt,80.662301),adj(size,amt,15.375032999999998),adj(size,amt,80.71428599999999),adj(size,amt,18.214285));
ctx.bezierCurveTo(adj(size,amt,80.97691599999999),adj(size,amt,32.558392),adj(size,amt,73.864173),adj(size,amt,43.883774),adj(size,amt,70.35714299999998),adj(size,amt,56.428571000000005));
ctx.bezierCurveTo(adj(size,amt,68.38236099999997),adj(size,amt,63.492453000000005),adj(size,amt,65.35714299999998),adj(size,amt,77.85714300000001),adj(size,amt,65.35714299999998),adj(size,amt,77.85714300000001));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();
ctx.restore();

}

function V(ctx,size,amt,width,color,x,y,tilt){
ctx.strokeStyle = 'rgba(0,0,0,0)';
ctx.lineCap = 'butt';
ctx.lineJoin = 'miter';
ctx.miterLimit = 4;
ctx.save();
ctx.restore();
ctx.save();
ctx.restore();
ctx.save();

ctx.save();
ctx.fillStyle = "rgba(0, 0, 0, 0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,2.5),adj(size,amt,17.142857));
ctx.bezierCurveTo(adj(size,amt,2.5),adj(size,amt,17.142857),adj(size,amt,10.272252),adj(size,amt,35.351082),adj(size,amt,14.642857),adj(size,amt,48.214286));
ctx.bezierCurveTo(adj(size,amt,19.439088),adj(size,amt,62.330157),adj(size,amt,22.5),adj(size,amt,71.785714),adj(size,amt,22.5),adj(size,amt,71.785714));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.save();
ctx.fillStyle = "rgba(0, 0, 0, 0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,51.785714),adj(size,amt,12.857143));
ctx.bezierCurveTo(adj(size,amt,51.785714),adj(size,amt,12.857143),adj(size,amt,43.325948),adj(size,amt,29.172871),adj(size,amt,38.214286),adj(size,amt,36.785714));
ctx.bezierCurveTo(adj(size,amt,27.655405),adj(size,amt,52.511148),adj(size,amt,18.928571),adj(size,amt,73.571429),adj(size,amt,18.928571),adj(size,amt,73.571429));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();
ctx.restore();
}

function U(ctx,size,amt,width,color,x,y,tilt){
ctx.strokeStyle = 'rgba(0,0,0,0)';
ctx.lineCap = 'butt';
ctx.lineJoin = 'miter';
ctx.miterLimit = 4;
ctx.save();
ctx.restore();
ctx.save();
ctx.restore();
ctx.save();

ctx.save();
ctx.fillStyle = "rgba(0, 0, 0, 0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,6.5659916),adj(size,amt,12.621805));
ctx.bezierCurveTo(adj(size,amt,6.5659916),adj(size,amt,12.621805),adj(size,amt,3.8323404),adj(size,amt,29.755747),adj(size,amt,4.0406102),adj(size,amt,38.380695));
ctx.bezierCurveTo(adj(size,amt,4.319950599999999),adj(size,amt,49.948849),adj(size,amt,5.9131482),adj(size,amt,69.20583400000001),adj(size,amt,10.606601999999999),adj(size,amt,73.230957));
ctx.bezierCurveTo(adj(size,amt,15.633951),adj(size,amt,77.54243100000001),adj(size,amt,22.369279),adj(size,amt,79.318735),adj(size,amt,28.789347),adj(size,amt,77.271568));
ctx.bezierCurveTo(adj(size,amt,38.446795),adj(size,amt,74.192098),adj(size,amt,46.279146),adj(size,amt,66.123859),adj(size,amt,47.477169),adj(size,amt,56.058365));
ctx.bezierCurveTo(adj(size,amt,49.006287),adj(size,amt,43.211099000000004),adj(size,amt,50.002551000000004),adj(size,amt,13.126881000000004),adj(size,amt,50.002551000000004),adj(size,amt,13.126881000000004));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();
ctx.restore();

}

function T(ctx,size,amt,width,color,x,y,tilt){
ctx.strokeStyle = 'rgba(0,0,0,0)';
ctx.lineCap = 'butt';
ctx.lineJoin = 'miter';
ctx.miterLimit = 4;
ctx.save();
ctx.restore();
ctx.save();
ctx.restore();
ctx.save();

ctx.save();
ctx.fillStyle = "rgba(0, 0, 0, 0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,4.5456865),adj(size,amt,17.672569));
ctx.bezierCurveTo(adj(size,amt,4.5456865),adj(size,amt,17.672569),adj(size,amt,5.8852108),adj(size,amt,19.027704),adj(size,amt,30.304575999999997),adj(size,amt,17.167491));
ctx.bezierCurveTo(adj(size,amt,39.445530999999995),adj(size,amt,16.471152999999997),adj(size,amt,55.558389999999996),adj(size,amt,14.137032999999999),adj(size,amt,55.558389999999996),adj(size,amt,14.137032999999999));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.save();
ctx.fillStyle = "rgba(0, 0, 0, 0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,28.789348),adj(size,amt,12.116729));
ctx.bezierCurveTo(adj(size,amt,28.789348),adj(size,amt,12.116729),adj(size,amt,26.659543),adj(size,amt,41.441193),adj(size,amt,26.263966),adj(size,amt,54.543136));
ctx.bezierCurveTo(adj(size,amt,25.96241),adj(size,amt,64.530992),adj(size,amt,23.233508999999998),adj(size,amt,81.31217799999999),adj(size,amt,23.233508999999998),adj(size,amt,81.31217799999999));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();
ctx.restore();
}

function S(ctx,size,amt,width,color,x,y,tilt){
ctx.strokeStyle = 'rgba(0,0,0,0)';
ctx.lineCap = 'butt';
ctx.lineJoin = 'miter';
ctx.miterLimit = 4;
ctx.save();
ctx.restore();
ctx.save();
ctx.restore();
ctx.save();

ctx.save();
ctx.fillStyle = "rgba(0, 0, 0, 0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,41.785714),adj(size,amt,28.928571));
ctx.bezierCurveTo(adj(size,amt,41.785714),adj(size,amt,28.928571),adj(size,amt,44.097058),adj(size,amt,24.795207),adj(size,amt,41.071429),adj(size,amt,21.785714000000002));
ctx.bezierCurveTo(adj(size,amt,37.198943),adj(size,amt,17.93388),adj(size,amt,27.754343),adj(size,amt,17.437044),adj(size,amt,22.5),adj(size,amt,18.928571));
ctx.bezierCurveTo(adj(size,amt,12.19994),adj(size,amt,21.852403),adj(size,amt,1.7639353),adj(size,amt,34.691236),adj(size,amt,3.9285714),adj(size,amt,40.714286));
ctx.bezierCurveTo(adj(size,amt,8.2118527),adj(size,amt,52.632416),adj(size,amt,31.947394),adj(size,amt,37.382446),adj(size,amt,41.785714000000006),adj(size,amt,45.357142));
ctx.bezierCurveTo(adj(size,amt,46.90572100000001),adj(size,amt,49.50729200000001),adj(size,amt,48.925945000000006),adj(size,amt,57.101845000000004),adj(size,amt,45.71428600000001),adj(size,amt,62.85714300000001));
ctx.bezierCurveTo(adj(size,amt,40.16240700000001),adj(size,amt,72.80611800000001),adj(size,amt,31.345945000000007),adj(size,amt,78.58024700000001),adj(size,amt,20.71428600000001),adj(size,amt,78.21428600000002));
ctx.bezierCurveTo(adj(size,amt,15.002143000000007),adj(size,amt,78.01766400000001),adj(size,amt,7.082409200000008),adj(size,amt,74.24943200000001),adj(size,amt,6.428571400000008),adj(size,amt,68.57142800000001));
ctx.bezierCurveTo(adj(size,amt,6.283803000000008),adj(size,amt,67.31424200000001),adj(size,amt,8.928571400000008),adj(size,amt,66.78571400000001),adj(size,amt,8.928571400000008),adj(size,amt,66.78571400000001));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();
ctx.restore();
}

function R(ctx,size,amt,width,color,x,y,tilt){
ctx.strokeStyle = 'rgba(0,0,0,0)';
ctx.lineCap = 'butt';
ctx.lineJoin = 'miter';
ctx.miterLimit = 4;
ctx.save();
ctx.restore();
ctx.save();
ctx.restore();
ctx.save();

ctx.save();
ctx.fillStyle = "rgba(0, 0, 0, 0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,9.2857143),adj(size,amt,72.857143));
ctx.bezierCurveTo(adj(size,amt,9.2857143),adj(size,amt,72.857143),adj(size,amt,7.8867111),adj(size,amt,54.28339199999999),adj(size,amt,7.1428571000000005),adj(size,amt,44.99999999999999));
ctx.bezierCurveTo(adj(size,amt,6.2268772),adj(size,amt,33.568454),adj(size,amt,3.8216124),adj(size,amt,20.391525),adj(size,amt,4.2857143),adj(size,amt,10.714286));
ctx.bezierCurveTo(adj(size,amt,12.436074),adj(size,amt,10.749748),adj(size,amt,22.690213),adj(size,amt,10.024283),adj(size,amt,30.357143),adj(size,amt,14.285714));
ctx.bezierCurveTo(adj(size,amt,35.899458),adj(size,amt,17.366243),adj(size,amt,42.833096),adj(size,amt,22.596434),adj(size,amt,42.5),adj(size,amt,28.928571));
ctx.bezierCurveTo(adj(size,amt,42.132942),adj(size,amt,35.906319),adj(size,amt,34.08055),adj(size,amt,41.221947),adj(size,amt,27.5),adj(size,amt,43.571429));
ctx.bezierCurveTo(adj(size,amt,21.084849),adj(size,amt,45.861858),adj(size,amt,7.1428571),adj(size,amt,41.785714),adj(size,amt,7.1428571),adj(size,amt,41.785714));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.save();
ctx.fillStyle = "rgba(0, 0, 0, 0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,24.285714),adj(size,amt,41.785714));
ctx.bezierCurveTo(adj(size,amt,24.285714),adj(size,amt,41.785714),adj(size,amt,28.463341),adj(size,amt,53.793538),adj(size,amt,31.428570999999998),adj(size,amt,60.714286));
ctx.bezierCurveTo(adj(size,amt,34.029281999999995),adj(size,amt,66.78426),adj(size,amt,40.714286),adj(size,amt,78.214286),adj(size,amt,40.714286),adj(size,amt,78.214286));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();
ctx.restore();

}

function Q(ctx,size,amt,width,color,x,y,tilt){
ctx.strokeStyle = 'rgba(0,0,0,0)';
ctx.lineCap = 'butt';
ctx.lineJoin = 'miter';
ctx.miterLimit = 4;
ctx.save();
ctx.restore();
ctx.save();
ctx.restore();
ctx.save();

ctx.save();
ctx.fillStyle = "rgba(0, 0, 0, 0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,15.909903),adj(size,amt,10.6015));
ctx.bezierCurveTo(adj(size,amt,15.909903),adj(size,amt,10.6015),adj(size,amt,29.796588999999997),adj(size,amt,2.0796984),adj(size,amt,36.112954),adj(size,amt,4.0355082));
ctx.bezierCurveTo(adj(size,amt,55.691546),adj(size,amt,10.097856),adj(size,amt,59.904135),adj(size,amt,18.791774),adj(size,amt,59.851539),adj(size,amt,28.026631));
ctx.bezierCurveTo(adj(size,amt,59.786979),adj(size,amt,39.361944),adj(size,amt,55.691542),adj(size,amt,53.776136),adj(size,amt,45.204326),adj(size,amt,58.07867));
ctx.bezierCurveTo(adj(size,amt,30.342049),adj(size,amt,64.176137),adj(size,amt,19.527038),adj(size,amt,65.645473),adj(size,amt,10.354064),adj(size,amt,55.30075));
ctx.bezierCurveTo(adj(size,amt,4.773281),adj(size,amt,49.007083),adj(size,amt,2.5208371),adj(size,amt,39.027342),adj(size,amt,4.2931483),adj(size,amt,30.804551));
ctx.bezierCurveTo(adj(size,amt,6.6438684),adj(size,amt,19.898182),adj(size,amt,15.152288),adj(size,amt,15.399724),adj(size,amt,15.152288),adj(size,amt,15.399724));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.save();
ctx.fillStyle = "rgba(0, 0, 0, 0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,29.294424),adj(size,amt,33.329932));
ctx.bezierCurveTo(adj(size,amt,29.294424),adj(size,amt,33.329932),adj(size,amt,38.369533),adj(size,amt,47.279387),adj(size,amt,43.43656),adj(size,amt,54.543135));
ctx.bezierCurveTo(adj(size,amt,47.083175),adj(size,amt,59.770677),adj(size,amt,54.043161),adj(size,amt,70.45303799999999),adj(size,amt,54.043161),adj(size,amt,70.45303799999999));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();
ctx.restore();
};

function P(ctx,size,amt,width,color,x,y,tilt){
ctx.strokeStyle = 'rgba(0,0,0,0)';
ctx.lineCap = 'butt';
ctx.lineJoin = 'miter';
ctx.miterLimit = 4;
ctx.save();
ctx.restore();
ctx.save();
ctx.restore();
ctx.save();

ctx.save();
ctx.fillStyle = "rgba(0, 0, 0, 0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,9.6428576),adj(size,amt,5.7142857));
ctx.bezierCurveTo(adj(size,amt,9.6428576),adj(size,amt,5.7142857),adj(size,amt,12.935293999999999),adj(size,amt,26.193917999999996),adj(size,amt,11.428571999999999),adj(size,amt,38.571428999999995));
ctx.bezierCurveTo(adj(size,amt,10.261923),adj(size,amt,48.155288999999996),adj(size,amt,11.927041999999998),adj(size,amt,57.14398299999999),adj(size,amt,11.428571),adj(size,amt,66.785714));
ctx.bezierCurveTo(adj(size,amt,11.266883),adj(size,amt,69.913191),adj(size,amt,10),adj(size,amt,76.071429),adj(size,amt,10),adj(size,amt,76.071429));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.save();
ctx.fillStyle = "rgba(0, 0, 0, 0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,5.3571428),adj(size,amt,16.071429));
ctx.bezierCurveTo(adj(size,amt,5.3571428),adj(size,amt,16.071429),adj(size,amt,19.331842),adj(size,amt,11.115260999999999),adj(size,amt,28.571427999999997),adj(size,amt,12.142857));
ctx.bezierCurveTo(adj(size,amt,37.441342999999996),adj(size,amt,13.129339),adj(size,amt,47.22704),adj(size,amt,22.504365999999997),adj(size,amt,47.14285699999999),adj(size,amt,31.428570999999998));
ctx.bezierCurveTo(adj(size,amt,47.08409699999999),adj(size,amt,37.657568),adj(size,amt,40.014582999999995),adj(size,amt,43.314581),adj(size,amt,33.92857099999999),adj(size,amt,44.642857));
ctx.bezierCurveTo(adj(size,amt,25.24341899999999),adj(size,amt,46.538396999999996),adj(size,amt,8.928571399999992),adj(size,amt,35.357143),adj(size,amt,8.928571399999992),adj(size,amt,35.357143));
ctx.lineTo(adj(size,amt,8.928571399999992),adj(size,amt,35.357143));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();
ctx.restore();

};

function O(ctx,size,amt,width,color,x,y,tilt){
ctx.strokeStyle = 'rgba(0,0,0,0)';
ctx.lineCap = 'butt';
ctx.lineJoin = 'miter';
ctx.miterLimit = 4;
ctx.save();
ctx.restore();
ctx.save();
ctx.restore();
ctx.save();

ctx.save();
ctx.fillStyle = "rgba(0, 0, 0, 0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,6.7857143),adj(size,amt,12.142857));
ctx.bezierCurveTo(adj(size,amt,6.7857143),adj(size,amt,12.142857),adj(size,amt,13.256877),adj(size,amt,7.333298999999999),adj(size,amt,21.673761),adj(size,amt,5.809985599999999));
ctx.bezierCurveTo(adj(size,amt,33.073169),adj(size,amt,3.7468858),adj(size,amt,47.445641),adj(size,amt,6.5198206),adj(size,amt,48.571429),adj(size,amt,24.285714));
ctx.bezierCurveTo(adj(size,amt,49.657757),adj(size,amt,41.428883),adj(size,amt,41.973636),adj(size,amt,63.088246),adj(size,amt,22.142857),adj(size,amt,63.571428));
ctx.bezierCurveTo(adj(size,amt,11.322551),adj(size,amt,63.835068),adj(size,amt,3.6678124),adj(size,amt,47.242582),adj(size,amt,3.2142857),adj(size,amt,36.428571));
ctx.bezierCurveTo(adj(size,amt,2.9888707),adj(size,amt,31.053713),adj(size,amt,10),adj(size,amt,21.785714),adj(size,amt,10),adj(size,amt,21.785714));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();
ctx.restore();
};






function N(ctx,size,amt,width,color,x,y,tilt){
ctx.strokeStyle = 'rgba(0,0,0,0)';
ctx.lineCap = 'butt';
ctx.lineJoin = 'miter';
ctx.miterLimit = 4;
ctx.save();
ctx.restore();
ctx.save();
ctx.restore();
ctx.save();

ctx.save();
ctx.fillStyle = "rgba(0, 0, 0, 0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,3.2142857),adj(size,amt,73.214286));
ctx.bezierCurveTo(adj(size,amt,3.2142857),adj(size,amt,73.214286),adj(size,amt,4.3764445),adj(size,amt,58.701194),adj(size,amt,4.6428572),adj(size,amt,51.428571000000005));
ctx.bezierCurveTo(adj(size,amt,5.2050641),adj(size,amt,36.081261),adj(size,amt,5.3472804),adj(size,amt,20.313613),adj(size,amt,5.3571429),adj(size,amt,6.0714284));
ctx.bezierCurveTo(adj(size,amt,13.583032),adj(size,amt,19.34953),adj(size,amt,24.794223),adj(size,amt,31.763295),adj(size,amt,33.571429),adj(size,amt,45.714286));
ctx.bezierCurveTo(adj(size,amt,38.792979),adj(size,amt,54.013716),adj(size,amt,44.771483),adj(size,amt,64.514465),adj(size,amt,48.214286),adj(size,amt,72.142857));
ctx.bezierCurveTo(adj(size,amt,47.667342),adj(size,amt,62.373436000000005),adj(size,amt,48.511902),adj(size,amt,59.28654100000001),adj(size,amt,48.571429),adj(size,amt,52.85714300000001));
ctx.bezierCurveTo(adj(size,amt,48.711402),adj(size,amt,37.73874300000001),adj(size,amt,48.214286),adj(size,amt,6.785714100000007),adj(size,amt,48.214286),adj(size,amt,6.785714100000007));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();
ctx.restore();
};



function M(ctx,size,amt,width,color,x,y,tilt){
ctx.strokeStyle = 'rgba(0,0,0,0)';
ctx.lineCap = 'butt';
ctx.lineJoin = 'miter';
ctx.miterLimit = 4;
ctx.save();
ctx.restore();
ctx.save();
ctx.restore();
ctx.save();

ctx.save();
ctx.fillStyle = "rgba(0, 0, 0, 0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,5.3571429),adj(size,amt,66.785714));
ctx.bezierCurveTo(adj(size,amt,5.3571429),adj(size,amt,66.785714),adj(size,amt,4.989224200000001),adj(size,amt,62.550653),adj(size,amt,4.6428572),adj(size,amt,61.071428999999995));
ctx.bezierCurveTo(adj(size,amt,4.2964902),adj(size,amt,59.59220499999999),adj(size,amt,12.007218),adj(size,amt,17.38219099999999),adj(size,amt,12.857143),adj(size,amt,7.142856999999992));
ctx.bezierCurveTo(adj(size,amt,12.992782),adj(size,amt,5.474951499999992),adj(size,amt,14.158764000000001),adj(size,amt,7.893236999999992),adj(size,amt,15.357143),adj(size,amt,8.214285599999993));
ctx.bezierCurveTo(adj(size,amt,15.357143),adj(size,amt,8.214285599999993),adj(size,amt,24.684681),adj(size,amt,32.894088999999994),adj(size,amt,29.642857),adj(size,amt,43.571428999999995));
ctx.bezierCurveTo(adj(size,amt,34.601032),adj(size,amt,54.248768999999996),adj(size,amt,34.432646),adj(size,amt,65.040491),adj(size,amt,38.214286),adj(size,amt,71.42857099999999));
ctx.bezierCurveTo(adj(size,amt,41.638783),adj(size,amt,65.673794),adj(size,amt,41.995932),adj(size,amt,65.995318),adj(size,amt,46.785714),adj(size,amt,55));
ctx.bezierCurveTo(adj(size,amt,51.575496),adj(size,amt,44.004682),adj(size,amt,61.848934),adj(size,amt,8.3760466),adj(size,amt,62.857143),adj(size,amt,6.4285713));
ctx.bezierCurveTo(adj(size,amt,63.865351),adj(size,amt,4.481096),adj(size,amt,64.26839),adj(size,amt,1.2296921),adj(size,amt,64.285715),adj(size,amt,8.2142855));
ctx.bezierCurveTo(adj(size,amt,64.303035),adj(size,amt,15.198878),adj(size,amt,70.762926),adj(size,amt,34.252374),adj(size,amt,72.857143),adj(size,amt,44.642857));
ctx.bezierCurveTo(adj(size,amt,74.95136),adj(size,amt,55.033339999999995),adj(size,amt,76.785714),adj(size,amt,71.071429),adj(size,amt,76.785714),adj(size,amt,71.071429));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();
ctx.restore();


};


function L(ctx,size,amt,width,color,x,y,tilt){
ctx.strokeStyle = 'rgba(0,0,0,0)';
ctx.lineCap = 'butt';
ctx.lineJoin = 'miter';
ctx.miterLimit = 4;
ctx.save();
ctx.restore();
ctx.save();
ctx.restore();
ctx.save();

ctx.save();
ctx.fillStyle = "rgba(0, 0, 0, 0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,3.2142857),adj(size,amt,63.214286));
ctx.bezierCurveTo(adj(size,amt,3.2142857),adj(size,amt,63.214286),adj(size,amt,12.847043),adj(size,amt,61.115177),adj(size,amt,18.928571),adj(size,amt,60.714286));
ctx.bezierCurveTo(adj(size,amt,24.531875),adj(size,amt,60.344919000000004),adj(size,amt,36.785714),adj(size,amt,61.785714),adj(size,amt,36.785714),adj(size,amt,61.785714));
ctx.moveTo(adj(size,amt,4.6428572),adj(size,amt,4.642857));
ctx.bezierCurveTo(adj(size,amt,4.6428572),adj(size,amt,4.642857),adj(size,amt,7.6911275),adj(size,amt,43.855924),adj(size,amt,6.4285714),adj(size,amt,64.285715));
ctx.bezierCurveTo(adj(size,amt,6.3124667),adj(size,amt,66.16443799999999),adj(size,amt,8.2142857),adj(size,amt,69.64285699999999),adj(size,amt,8.2142857),adj(size,amt,69.64285699999999));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();
ctx.restore();

};


function K(ctx,size,amt,width,color,x,y,tilt){
ctx.strokeStyle = 'rgba(0,0,0,0)';
ctx.lineCap = 'butt';
ctx.lineJoin = 'miter';
ctx.miterLimit = 4;
ctx.save();
ctx.restore();
ctx.save();
ctx.restore();
ctx.save();

ctx.save();
ctx.fillStyle = "rgba(0, 0, 0, 0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,47.857143),adj(size,amt,14.642857));
ctx.bezierCurveTo(adj(size,amt,45.357143),adj(size,amt,16.071428),adj(size,amt,30.823747),adj(size,amt,28.211989),adj(size,amt,21.071428),adj(size,amt,35));
ctx.bezierCurveTo(adj(size,amt,15.540719),adj(size,amt,38.849599),adj(size,amt,2.5),adj(size,amt,47.142857),adj(size,amt,2.5),adj(size,amt,47.142857));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.save();
ctx.fillStyle = "rgba(0, 0, 0, 0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.moveTo(adj(size,amt,3.9285714),adj(size,amt,42.857143));
ctx.bezierCurveTo(adj(size,amt,3.9285714),adj(size,amt,42.857143),adj(size,amt,17.766822),adj(size,amt,50.424581),adj(size,amt,24.642857),adj(size,amt,54.285714));
ctx.bezierCurveTo(adj(size,amt,31.33787),adj(size,amt,58.045198),adj(size,amt,44.642857),adj(size,amt,65.714286),adj(size,amt,44.642857),adj(size,amt,65.714286));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.save();
ctx.fillStyle = "rgba(0, 0, 0, 0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,8.5714286),adj(size,amt,11.785714));
ctx.bezierCurveTo(adj(size,amt,8.5714286),adj(size,amt,11.785714),adj(size,amt,7.575944000000001),adj(size,amt,35.834264),adj(size,amt,7.857142900000001),adj(size,amt,47.857143));
ctx.bezierCurveTo(adj(size,amt,8.066376400000001),adj(size,amt,56.803087000000005),adj(size,amt,9.6428571),adj(size,amt,74.64285699999999),adj(size,amt,9.6428571),adj(size,amt,74.64285699999999));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();
ctx.restore();
};


function J(ctx,size,amt,width,color,x,y,tilt){
ctx.strokeStyle = 'rgba(0,0,0,0)';
ctx.lineCap = 'butt';
ctx.lineJoin = 'miter';
ctx.miterLimit = 4;
ctx.save();
ctx.restore();
ctx.save();
ctx.restore();
ctx.save();

ctx.save();
ctx.fillStyle = "rgba(0, 0, 0, 0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,29.285714),adj(size,amt,8.9285713));
ctx.bezierCurveTo(adj(size,amt,29.285714),adj(size,amt,8.9285713),adj(size,amt,29.438543),adj(size,amt,46.314609000000004),adj(size,amt,25.714285999999998),adj(size,amt,61.071429));
ctx.bezierCurveTo(adj(size,amt,24.699697999999998),adj(size,amt,65.09158500000001),adj(size,amt,20.209526999999998),adj(size,amt,68.669374),adj(size,amt,16.071429),adj(size,amt,68.928571));
ctx.bezierCurveTo(adj(size,amt,11.587844),adj(size,amt,69.209408),adj(size,amt,7.0345727),adj(size,amt,65.58849),adj(size,amt,4.6428572),adj(size,amt,61.785714));
ctx.bezierCurveTo(adj(size,amt,3.4949906),adj(size,amt,59.960631),adj(size,amt,3.9285715),adj(size,amt,55.357143),adj(size,amt,3.9285715),adj(size,amt,55.357143));
ctx.moveTo(adj(size,amt,16.428572),adj(size,amt,13.571429));
ctx.bezierCurveTo(adj(size,amt,16.428572),adj(size,amt,13.571429),adj(size,amt,27.114528),adj(size,amt,12.840663),adj(size,amt,32.5),adj(size,amt,11.785714));
ctx.bezierCurveTo(adj(size,amt,34.716642),adj(size,amt,11.351502),adj(size,amt,38.928572),adj(size,amt,9.642857000000001),adj(size,amt,38.928572),adj(size,amt,9.642857000000001));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();
ctx.restore();
};


function I(ctx,size,amt,width,color,x,y,tilt){
ctx.strokeStyle = 'rgba(0,0,0,0)';
ctx.lineCap = 'butt';
ctx.lineJoin = 'miter';
ctx.miterLimit = 4;
ctx.save();
ctx.restore();
ctx.save();
ctx.restore();
ctx.save();

ctx.save();
ctx.fillStyle = "rgba(0, 0, 0, 0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,14.642857),adj(size,amt,7.4999999));
ctx.bezierCurveTo(adj(size,amt,14.642857),adj(size,amt,7.4999999),adj(size,amt,15.472021),adj(size,amt,34.641255),adj(size,amt,15.357142999999999),adj(size,amt,48.214286));
ctx.bezierCurveTo(adj(size,amt,15.298672999999999),adj(size,amt,55.122904),adj(size,amt,14.642857),adj(size,amt,68.928571),adj(size,amt,14.642857),adj(size,amt,68.928571));
ctx.moveTo(adj(size,amt,25.714286),adj(size,amt,8.9285713));
ctx.bezierCurveTo(adj(size,amt,25.714286),adj(size,amt,8.9285713),adj(size,amt,18.085476),adj(size,amt,9.5507417),adj(size,amt,14.285714),adj(size,amt,9.999999899999999));
ctx.bezierCurveTo(adj(size,amt,10.94183),adj(size,amt,10.395358),adj(size,amt,4.2857143),adj(size,amt,11.428571),adj(size,amt,4.2857143),adj(size,amt,11.428571));
ctx.moveTo(adj(size,amt,2.8571429),adj(size,amt,70.714286));
ctx.bezierCurveTo(adj(size,amt,2.8571429),adj(size,amt,70.714286),adj(size,amt,12.53976),adj(size,amt,67.94095),adj(size,amt,17.5),adj(size,amt,67.142857));
ctx.bezierCurveTo(adj(size,amt,20.447786),adj(size,amt,66.668564),adj(size,amt,26.428570999999998),adj(size,amt,66.428571),adj(size,amt,26.428570999999998),adj(size,amt,66.428571));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();
ctx.restore();

}

function H(ctx,size,amt,width,color,x,y,tilt){
ctx.strokeStyle = 'rgba(0,0,0,0)';
ctx.lineCap = 'butt';
ctx.lineJoin = 'miter';
ctx.miterLimit = 4;
ctx.save();
ctx.restore();
ctx.save();
ctx.restore();
ctx.save();

ctx.save();
ctx.fillStyle = "rgba(0, 0, 0, 0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,51.428572),adj(size,amt,35.714286));
ctx.bezierCurveTo(adj(size,amt,51.428572),adj(size,amt,35.714286),adj(size,amt,34.036393000000004),adj(size,amt,36.968546),adj(size,amt,27.142857000000003),adj(size,amt,37.5));
ctx.bezierCurveTo(adj(size,amt,17.836047),adj(size,amt,38.217505),adj(size,amt,2.5),adj(size,amt,39.642857),adj(size,amt,2.5),adj(size,amt,39.642857));
ctx.moveTo(adj(size,amt,42.5),adj(size,amt,3.571428400000002));
ctx.bezierCurveTo(adj(size,amt,43.571429),adj(size,amt,10.714286000000001),adj(size,amt,42.252763),adj(size,amt,22.384202000000002),adj(size,amt,42.5),adj(size,amt,31.785714000000002));
ctx.bezierCurveTo(adj(size,amt,42.797722),adj(size,amt,43.106977),adj(size,amt,44.285714),adj(size,amt,68.57142900000001),adj(size,amt,44.285714),adj(size,amt,68.57142900000001));
ctx.moveTo(adj(size,amt,7.1428572),adj(size,amt,8.2142856));
ctx.bezierCurveTo(adj(size,amt,7.1428572),adj(size,amt,8.2142856),adj(size,amt,7.1050172),adj(size,amt,30.837215),adj(size,amt,6.7857142999999995),adj(size,amt,42.14285700000001));
ctx.bezierCurveTo(adj(size,amt,6.4930072999999995),adj(size,amt,52.506809000000004),adj(size,amt,5.3571428999999995),adj(size,amt,73.214286),adj(size,amt,5.3571428999999995),adj(size,amt,73.214286));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();
ctx.restore();
};

function G(ctx,size,amt,width,color,x,y,tilt){
ctx.strokeStyle = 'rgba(0,0,0,0)';
ctx.lineCap = 'butt';
ctx.lineJoin = 'miter';
ctx.miterLimit = 4;
ctx.save();
ctx.restore();
ctx.save();
ctx.restore();
ctx.save();

ctx.save();
ctx.fillStyle = "rgba(0, 0, 0, 0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,30),adj(size,amt,37.857143));
ctx.bezierCurveTo(adj(size,amt,30),adj(size,amt,37.857143),adj(size,amt,44.873148),adj(size,amt,38.96604),adj(size,amt,52.857143),adj(size,amt,39.285714));
ctx.bezierCurveTo(adj(size,amt,58.687020000000004),adj(size,amt,39.519138999999996),adj(size,amt,68.571429),adj(size,amt,39.642857),adj(size,amt,68.571429),adj(size,amt,39.642857));
ctx.moveTo(adj(size,amt,66.785714),adj(size,amt,24.285714));
ctx.bezierCurveTo(adj(size,amt,66.785714),adj(size,amt,24.285714),adj(size,amt,66.33714),adj(size,amt,19.634276),adj(size,amt,65),adj(size,amt,17.857142));
ctx.bezierCurveTo(adj(size,amt,59.537242),adj(size,amt,10.59683),adj(size,amt,51.210228),adj(size,amt,4.4198002),adj(size,amt,41.785714),adj(size,amt,3.5714284));
ctx.bezierCurveTo(adj(size,amt,13.875147),adj(size,amt,1.0589873),adj(size,amt,4.3092202),adj(size,amt,20.20351),adj(size,amt,3.5714285),adj(size,amt,37.142857));
ctx.bezierCurveTo(adj(size,amt,2.9192585),adj(size,amt,52.116374),adj(size,amt,17.198056),adj(size,amt,64.9381),adj(size,amt,32.142857),adj(size,amt,66.071428));
ctx.bezierCurveTo(adj(size,amt,41.28405),adj(size,amt,66.764644),adj(size,amt,49.044534),adj(size,amt,61.450006),adj(size,amt,54.285714),adj(size,amt,53.928571));
ctx.bezierCurveTo(adj(size,amt,56.567552),adj(size,amt,50.653984),adj(size,amt,60),adj(size,amt,41.428571),adj(size,amt,60),adj(size,amt,41.428571));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();
ctx.restore();
};

function F(ctx,size,amt,width,color,x,y,tilt){
ctx.strokeStyle = 'rgba(0,0,0,0)';
ctx.lineCap = 'butt';
ctx.lineJoin = 'miter';
ctx.miterLimit = 4;
ctx.save();
ctx.restore();
ctx.save();
ctx.restore();
ctx.save();

ctx.save();
ctx.fillStyle = "rgba(0, 0, 0, 0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,7.1428572),adj(size,amt,33.571428));
ctx.bezierCurveTo(adj(size,amt,7.1428572),adj(size,amt,33.571428),adj(size,amt,22.384642),adj(size,amt,34.621727),adj(size,amt,30),adj(size,amt,34.285714));
ctx.bezierCurveTo(adj(size,amt,32.994629),adj(size,amt,34.153582),adj(size,amt,38.928571),adj(size,amt,33.214286),adj(size,amt,38.928571),adj(size,amt,33.214286));
ctx.moveTo(adj(size,amt,3.2142857),adj(size,amt,7.8571427));
ctx.bezierCurveTo(adj(size,amt,3.2142857),adj(size,amt,7.8571427),adj(size,amt,16.780647000000002),adj(size,amt,7.4501517999999995),adj(size,amt,23.563828),adj(size,amt,7.2466564));
ctx.bezierCurveTo(adj(size,amt,28.685409),adj(size,amt,7.093009),adj(size,amt,38.928571),adj(size,amt,6.7857141),adj(size,amt,38.928571),adj(size,amt,6.7857141));
ctx.moveTo(adj(size,amt,5.7142857),adj(size,amt,1.4285713));
ctx.bezierCurveTo(adj(size,amt,5.7142857),adj(size,amt,1.4285713),adj(size,amt,7.3790681),adj(size,amt,23.079571),adj(size,amt,7.5),adj(size,amt,33.928571));
ctx.bezierCurveTo(adj(size,amt,7.6221415),adj(size,amt,44.886093),adj(size,amt,6.4285714),adj(size,amt,66.785714),adj(size,amt,6.4285714),adj(size,amt,66.785714));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();
ctx.restore();
};

function E(ctx,size,amt,width,color,x,y,tilt){
ctx.strokeStyle = 'rgba(0,0,0,0)';
ctx.lineCap = 'butt';
ctx.lineJoin = 'miter';
ctx.miterLimit = 4;
ctx.save();
ctx.restore();
ctx.save();
ctx.restore();
ctx.save();

ctx.save();
ctx.fillStyle = "rgba(0, 0, 0, 0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,4.6428572),adj(size,amt,67.857143));
ctx.bezierCurveTo(adj(size,amt,4.6428572),adj(size,amt,67.857143),adj(size,amt,19.440396999999997),adj(size,amt,68.94842),adj(size,amt,26.785714),adj(size,amt,68.21428599999999));
ctx.bezierCurveTo(adj(size,amt,30.665986999999998),adj(size,amt,67.82646899999999),adj(size,amt,38.214286),adj(size,amt,65.71428599999999),adj(size,amt,38.214286),adj(size,amt,65.71428599999999));
ctx.moveTo(adj(size,amt,39.285714),adj(size,amt,31.07142799999999));
ctx.bezierCurveTo(adj(size,amt,39.285714),adj(size,amt,31.07142799999999),adj(size,amt,29.573956),adj(size,amt,33.07950999999999),adj(size,amt,24.642857),adj(size,amt,33.21428599999999));
ctx.bezierCurveTo(adj(size,amt,19.385125),adj(size,amt,33.35799),adj(size,amt,8.9285714),adj(size,amt,31.785714),adj(size,amt,8.9285714),adj(size,amt,31.785714));
ctx.moveTo(adj(size,amt,1.7857143),adj(size,amt,7.8571427));
ctx.bezierCurveTo(adj(size,amt,1.7857143),adj(size,amt,7.8571427),adj(size,amt,17.945259999999998),adj(size,amt,5.6222534),adj(size,amt,26.071429),adj(size,amt,5.7142856));
ctx.bezierCurveTo(adj(size,amt,30.383239999999997),adj(size,amt,5.7631186),adj(size,amt,38.928571),adj(size,amt,7.142857),adj(size,amt,38.928571),adj(size,amt,7.142857));
ctx.moveTo(adj(size,amt,5.7142857),adj(size,amt,1.0714284));
ctx.bezierCurveTo(adj(size,amt,5.7142857),adj(size,amt,1.0714284),adj(size,amt,8.5810987),adj(size,amt,40.154269),adj(size,amt,7.1428571),adj(size,amt,59.642857));
ctx.bezierCurveTo(adj(size,amt,6.9108765),adj(size,amt,62.786260999999996),adj(size,amt,6.428571399999999),adj(size,amt,68.928571),adj(size,amt,6.428571399999999),adj(size,amt,68.928571));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();
ctx.restore();
};

function D(ctx,size,amt,width,color,x,y,tilt){
ctx.strokeStyle = 'rgba(0,0,0,0)';
ctx.lineCap = 'butt';
ctx.lineJoin = 'miter';
ctx.miterLimit = 4;
ctx.save();
ctx.restore();
ctx.save();
ctx.restore();
ctx.save();

ctx.save();
ctx.fillStyle = "rgba(0, 0, 0, 0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,1.4285714),adj(size,amt,8.9285712));
ctx.bezierCurveTo(adj(size,amt,1.4285714),adj(size,amt,8.9285712),adj(size,amt,14.240914),adj(size,amt,6.7697856000000005),adj(size,amt,20.714285999999998),adj(size,amt,6.4285712));
ctx.bezierCurveTo(adj(size,amt,44.486624),adj(size,amt,5.1755206),adj(size,amt,59.684029),adj(size,amt,23.682045),adj(size,amt,53.571429),adj(size,amt,42.142857));
ctx.bezierCurveTo(adj(size,amt,47.298121),adj(size,amt,61.089027),adj(size,amt,35.501529),adj(size,amt,66.500464),adj(size,amt,21.785714),adj(size,amt,66.785714));
ctx.bezierCurveTo(adj(size,amt,16.176512),adj(size,amt,66.90237),adj(size,amt,4.2857143),adj(size,amt,63.214286),adj(size,amt,4.2857143),adj(size,amt,63.214286));
ctx.moveTo(adj(size,amt,8.2142857),adj(size,amt,2.142857));
ctx.lineTo(adj(size,amt,8.9285714),adj(size,amt,38.214286));
ctx.lineTo(adj(size,amt,7.5),adj(size,amt,66.785714));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();
ctx.restore();
};

function C(ctx,size,amt,width,color,x,y,tilt){
ctx.strokeStyle = 'rgba(0,0,0,0)';
ctx.lineCap = 'butt';
ctx.lineJoin = 'miter';
ctx.miterLimit = 4;
ctx.save();
ctx.restore();
ctx.save();
ctx.restore();
ctx.save();

ctx.save();
ctx.fillStyle = "rgba(0, 0, 0, 0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,45),adj(size,amt,13.571428));
ctx.bezierCurveTo(adj(size,amt,45),adj(size,amt,13.571428),adj(size,amt,43.310097999999996),adj(size,amt,7.968748799999999),adj(size,amt,41.071429),adj(size,amt,6.4285711999999995));
ctx.bezierCurveTo(adj(size,amt,27.912296),adj(size,amt,-2.624755),adj(size,amt,16.940801),adj(size,amt,3.5845169),adj(size,amt,9.2857143),adj(size,amt,11.071428));
ctx.bezierCurveTo(adj(size,amt,2.6395728),adj(size,amt,17.571559),adj(size,amt,1.4611919),adj(size,amt,33.407875),adj(size,amt,4.6428572),adj(size,amt,42.142857));
ctx.bezierCurveTo(adj(size,amt,8.2269161),adj(size,amt,51.982575),adj(size,amt,16.315191),adj(size,amt,58.397788),adj(size,amt,26.785715),adj(size,amt,58.214285));
ctx.bezierCurveTo(adj(size,amt,31.839522),adj(size,amt,58.125715),adj(size,amt,37.394961),adj(size,amt,54.071008),adj(size,amt,41.1023),adj(size,amt,49.451528999999994));
ctx.bezierCurveTo(adj(size,amt,42.833892),adj(size,amt,47.29390399999999),adj(size,amt,43.571429),adj(size,amt,43.571428),adj(size,amt,43.571429),adj(size,amt,43.571428));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();
ctx.restore();
};

function B(ctx,size,amt,width,color,x,y,tilt){
ctx.strokeStyle = 'rgba(0,0,0,0)';
ctx.lineCap = 'butt';
ctx.lineJoin = 'miter';
ctx.miterLimit = 4;
ctx.save();
ctx.restore();
ctx.save();
ctx.restore();
ctx.save();

ctx.save();
ctx.fillStyle = "rgba(0, 0, 0, 0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x+size/12,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,4.2857143),adj(size,amt,70.714286));
ctx.bezierCurveTo(adj(size,amt,4.2857143),adj(size,amt,70.714286),adj(size,amt,6.1473242),adj(size,amt,67.366406),adj(size,amt,6.071428600000001),adj(size,amt,65.714286));
ctx.bezierCurveTo(adj(size,amt,5.1794647),adj(size,amt,46.297738),adj(size,amt,6.6515138),adj(size,amt,28.786311),adj(size,amt,6.7857143),adj(size,amt,7.4999999));
ctx.bezierCurveTo(adj(size,amt,6.7917652),adj(size,amt,6.5402264),adj(size,amt,4.4405121),adj(size,amt,5.2845869),adj(size,amt,5.3571429),adj(size,amt,4.9999998));
ctx.bezierCurveTo(adj(size,amt,10.540129),adj(size,amt,3.390834),adj(size,amt,11.695025),adj(size,amt,2.3809506),adj(size,amt,19.642857),adj(size,amt,1.7857141));
ctx.bezierCurveTo(adj(size,amt,26.712143),adj(size,amt,1.2562745),adj(size,amt,35.703934),adj(size,amt,10.490776),adj(size,amt,34.642857),adj(size,amt,17.5));
ctx.bezierCurveTo(adj(size,amt,31.377592),adj(size,amt,39.069577),adj(size,amt,13.39326),adj(size,amt,36.042422),adj(size,amt,2.8571429),adj(size,amt,39.285715));
ctx.bezierCurveTo(adj(size,amt,11.198595),adj(size,amt,38.547115000000005),adj(size,amt,27.480594),adj(size,amt,41.253724000000005),adj(size,amt,31.428572),adj(size,amt,48.928571000000005));
ctx.bezierCurveTo(adj(size,amt,34.536391),adj(size,amt,54.970156),adj(size,amt,34.790555),adj(size,amt,65.493976),adj(size,amt,28.928570999999998),adj(size,amt,68.928571));
ctx.bezierCurveTo(adj(size,amt,17.088745),adj(size,amt,75.865643),adj(size,amt,7.1428572),adj(size,amt,67.5),adj(size,amt,7.1428572),adj(size,amt,67.5));
ctx.lineTo(adj(size,amt,7.1428572),adj(size,amt,67.5));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();
ctx.restore();
};

function A(ctx,size,amt,width,color,x,y,tilt){
ctx.strokeStyle = 'rgba(0,0,0,0)';
ctx.lineCap = 'butt';
ctx.lineJoin = 'miter';
ctx.miterLimit = 4;
ctx.save();
ctx.restore();
ctx.save();
ctx.restore();
ctx.save();

ctx.save();
ctx.fillStyle = "rgba(0, 0, 0, 0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x-size/20,y-size/12);

ctx.beginPath();

ctx.moveTo(adj(size,amt,3.9285715),adj(size,amt,79.642857));
ctx.bezierCurveTo(adj(size,amt,3.9285715),adj(size,amt,79.642857),adj(size,amt,6.055741599999999),adj(size,amt,72.29992700000001),adj(size,amt,7.5),adj(size,amt,68.214286));
ctx.bezierCurveTo(adj(size,amt,14.300613),adj(size,amt,48.976133),adj(size,amt,21.024618),adj(size,amt,26.254677),adj(size,amt,26.428571),adj(size,amt,10));
ctx.bezierCurveTo(adj(size,amt,33.873329),adj(size,amt,22.372196000000002),adj(size,amt,35.981665),adj(size,amt,36.815435),adj(size,amt,40.357143),adj(size,amt,50.357143));
ctx.bezierCurveTo(adj(size,amt,43.14782),adj(size,amt,58.994035),adj(size,amt,48.214286),adj(size,amt,76.428571),adj(size,amt,48.214286),adj(size,amt,76.428571));

ctx.fill();
ctx.stroke();
ctx.restore();
ctx.save();
ctx.fillStyle = "rgba(0, 0, 0, 0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x-size/20,y-size/12);
ctx.beginPath();
ctx.moveTo(adj(size,amt,47.142857),adj(size,amt,42.857143));
ctx.bezierCurveTo(adj(size,amt,47.142857),adj(size,amt,42.857143),adj(size,amt,40.714022),adj(size,amt,41.426209),adj(size,amt,37.5),adj(size,amt,41.785714));
ctx.bezierCurveTo(adj(size,amt,20.706488),adj(size,amt,43.664154),adj(size,amt,15.961669),adj(size,amt,45.019956),adj(size,amt,16.071429),adj(size,amt,45));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();
ctx.restore();
};





function la(ctx,size,amt,width,color,x,y,tilt){
ctx.strokeStyle = 'rgba(0,0,0,0)';
ctx.lineCap = 'butt';
ctx.lineJoin = 'miter';
ctx.miterLimit = 4;
ctx.save();
ctx.restore();
ctx.save();
ctx.restore();
ctx.save();
ctx.save();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,30.714286),adj(size,amt,33.571429));
ctx.bezierCurveTo(adj(size,amt,30.714286),adj(size,amt,33.571429),adj(size,amt,25.636304000000003),adj(size,amt,29.164981),adj(size,amt,22.5),adj(size,amt,28.928571));
ctx.bezierCurveTo(adj(size,amt,17.164611),adj(size,amt,28.526397),adj(size,amt,11.264463),adj(size,amt,30.84063),adj(size,amt,7.5),adj(size,amt,34.642857));
ctx.bezierCurveTo(adj(size,amt,3.3924302),adj(size,amt,38.791633),adj(size,amt,1.2460882),adj(size,amt,46.016809),adj(size,amt,2.1428571),adj(size,amt,51.785715));
ctx.bezierCurveTo(adj(size,amt,3.3024086),adj(size,amt,59.245098),adj(size,amt,8.1871319),adj(size,amt,67.283634),adj(size,amt,15.714286),adj(size,amt,67.857142));
ctx.bezierCurveTo(adj(size,amt,24.36337),adj(size,amt,68.516132),adj(size,amt,30.731488),adj(size,amt,58.983976),adj(size,amt,34.285714),adj(size,amt,51.071429));
ctx.bezierCurveTo(adj(size,amt,37.555407),adj(size,amt,43.792321),adj(size,amt,34.164757),adj(size,amt,33.052332),adj(size,amt,35),adj(size,amt,27.142857));
ctx.bezierCurveTo(adj(size,amt,36.069788),adj(size,amt,36.653286),adj(size,amt,34.702382),adj(size,amt,49.285234),adj(size,amt,34.642857),adj(size,amt,60.357143));
ctx.bezierCurveTo(adj(size,amt,34.626857),adj(size,amt,63.33329),adj(size,amt,34.642857),adj(size,amt,69.285714),adj(size,amt,34.642857),adj(size,amt,69.285714));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();
ctx.restore();
}


function lb(ctx,size,amt,width,color,x,y,tilt){
ctx.strokeStyle = 'rgba(0,0,0,0)';
ctx.lineCap = 'butt';
ctx.lineJoin = 'miter';
ctx.miterLimit = 4;
ctx.save();
ctx.restore();
ctx.save();
ctx.restore();
ctx.save();
ctx.save();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,10.714286),adj(size,amt,3.5714286));
ctx.bezierCurveTo(adj(size,amt,10.714286),adj(size,amt,3.5714286),adj(size,amt,9.6972246),adj(size,amt,14.189681),adj(size,amt,9.285714599999999),adj(size,amt,17.857143));
ctx.bezierCurveTo(adj(size,amt,8.3872544),adj(size,amt,25.864404),adj(size,amt,6.4850423),adj(size,amt,30.236109),adj(size,amt,5.3571429),adj(size,amt,38.214286));
ctx.bezierCurveTo(adj(size,amt,3.904946),adj(size,amt,48.486376),adj(size,amt,3.5714286),adj(size,amt,69.285714),adj(size,amt,3.5714286),adj(size,amt,69.285714));
ctx.lineTo(adj(size,amt,3.5714286),adj(size,amt,69.285714));

ctx.fill();
ctx.stroke();
ctx.restore();
ctx.save();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,6.7857143),adj(size,amt,35.357143));
ctx.bezierCurveTo(adj(size,amt,6.7857143),adj(size,amt,35.357143),adj(size,amt,15.011839),adj(size,amt,27.294766000000003),adj(size,amt,20.357143),adj(size,amt,26.428570999999998));
ctx.bezierCurveTo(adj(size,amt,25.830098),adj(size,amt,25.54169),adj(size,amt,32.931699),adj(size,amt,28.554623),adj(size,amt,36.428571000000005),adj(size,amt,32.857143));
ctx.bezierCurveTo(adj(size,amt,41.917957),adj(size,amt,39.611236),adj(size,amt,43.960756),adj(size,amt,45.657376),adj(size,amt,37.14285700000001),adj(size,amt,56.428571000000005));
ctx.bezierCurveTo(adj(size,amt,33.12754600000001),adj(size,amt,62.77212300000001),adj(size,amt,25.304066000000006),adj(size,amt,64.40492400000001),adj(size,amt,17.857143000000008),adj(size,amt,65.35714300000001));
ctx.bezierCurveTo(adj(size,amt,15.192997000000007),adj(size,amt,65.6978),adj(size,amt,8.571428600000008),adj(size,amt,65.35714300000001),adj(size,amt,8.571428600000008),adj(size,amt,65.35714300000001));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();
ctx.restore();
}


function lc(ctx,size,amt,width,color,x,y,tilt){
ctx.strokeStyle = 'rgba(0,0,0,0)';
ctx.lineCap = 'butt';
ctx.lineJoin = 'miter';
ctx.miterLimit = 4;
ctx.save();
ctx.restore();
ctx.save();
ctx.restore();
ctx.save();
ctx.save();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,32.857143),adj(size,amt,33.928571));
ctx.bezierCurveTo(adj(size,amt,32.857143),adj(size,amt,33.928571),adj(size,amt,28.612193),adj(size,amt,26.872068),adj(size,amt,20.714285),adj(size,amt,26.428572));
ctx.bezierCurveTo(adj(size,amt,11.711446),adj(size,amt,25.923029),adj(size,amt,4.1142849),adj(size,amt,32.456576),adj(size,amt,2.5),adj(size,amt,45.714285));
ctx.bezierCurveTo(adj(size,amt,1.2336686),adj(size,amt,56.11434),adj(size,amt,9.1713614),adj(size,amt,68.235994),adj(size,amt,19.642857),adj(size,amt,68.571428));
ctx.bezierCurveTo(adj(size,amt,28.264080999999997),adj(size,amt,68.847593),adj(size,amt,31.071429000000002),adj(size,amt,63.928571),adj(size,amt,31.071429000000002),adj(size,amt,63.928571));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();
ctx.restore();
}


function ld(ctx,size,amt,width,color,x,y,tilt){
ctx.strokeStyle = 'rgba(0,0,0,0)';
ctx.lineCap = 'butt';
ctx.lineJoin = 'miter';
ctx.miterLimit = 4;
ctx.save();
ctx.restore();
ctx.save();
ctx.restore();
ctx.save();
ctx.save();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,37.142857),adj(size,amt,47.142857));
ctx.bezierCurveTo(adj(size,amt,37.142857),adj(size,amt,47.142857),adj(size,amt,37.535182999999996),adj(size,amt,37.330121),adj(size,amt,30.714286),adj(size,amt,32.142857));
ctx.bezierCurveTo(adj(size,amt,23.789126),adj(size,amt,26.876301),adj(size,amt,12.216352),adj(size,amt,29.988463),adj(size,amt,6.7857142),adj(size,amt,36.785714));
ctx.bezierCurveTo(adj(size,amt,2.4655737),adj(size,amt,42.193013),adj(size,amt,1.1347484),adj(size,amt,51.694846),adj(size,amt,4.2857143),adj(size,amt,57.857143));
ctx.bezierCurveTo(adj(size,amt,7.158222),adj(size,amt,63.474864),adj(size,amt,14.452433),adj(size,amt,67.917001),adj(size,amt,20.714285),adj(size,amt,67.142857));
ctx.bezierCurveTo(adj(size,amt,37.711844),adj(size,amt,65.041474),adj(size,amt,37.857143),adj(size,amt,47.5),adj(size,amt,37.857143),adj(size,amt,47.5));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.save();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,42.142857),adj(size,amt,6.0714286));
ctx.bezierCurveTo(adj(size,amt,42.857143),adj(size,amt,7.5),adj(size,amt,43.057549),adj(size,amt,14.369831),adj(size,amt,41.785714),adj(size,amt,18.214286));
ctx.bezierCurveTo(adj(size,amt,37.937265),adj(size,amt,29.847233000000003),adj(size,amt,38.5873),adj(size,amt,29.060078),adj(size,amt,36.785714),adj(size,amt,49.64285700000001));
ctx.bezierCurveTo(adj(size,amt,36.26659),adj(size,amt,55.573752),adj(size,amt,37.142857),adj(size,amt,67.5),adj(size,amt,37.142857),adj(size,amt,67.5));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();
ctx.restore();
}


function le(ctx,size,amt,width,color,x,y,tilt){
ctx.strokeStyle = 'rgba(0,0,0,0)';
ctx.lineCap = 'butt';
ctx.lineJoin = 'miter';
ctx.miterLimit = 4;
ctx.save();
ctx.restore();
ctx.save();
ctx.restore();
ctx.save();
ctx.save();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,31.785714),adj(size,amt,70));
ctx.bezierCurveTo(adj(size,amt,31.785714),adj(size,amt,70),adj(size,amt,23.226369),adj(size,amt,74.236168),adj(size,amt,18.928570999999998),adj(size,amt,73.214286));
ctx.bezierCurveTo(adj(size,amt,11.127335999999998),adj(size,amt,71.359397),adj(size,amt,5.271546799999998),adj(size,amt,66.119746),adj(size,amt,3.9285713999999974),adj(size,amt,58.214286));
ctx.bezierCurveTo(adj(size,amt,2.410131299999997),adj(size,amt,49.275948),adj(size,amt,6.571632299999997),adj(size,amt,42.190724),adj(size,amt,13.571427999999997),adj(size,amt,36.428571000000005));
ctx.bezierCurveTo(adj(size,amt,17.553448999999997),adj(size,amt,33.150617000000004),adj(size,amt,23.269759999999998),adj(size,amt,28.889782000000004),adj(size,amt,28.214284999999997),adj(size,amt,30.357142000000003));
ctx.bezierCurveTo(adj(size,amt,33.57951799999999),adj(size,amt,31.949355000000004),adj(size,amt,39.237375),adj(size,amt,36.719222),adj(size,amt,37.85714299999999),adj(size,amt,42.14285700000001));
ctx.bezierCurveTo(adj(size,amt,36.450005),adj(size,amt,47.672216),adj(size,amt,29.25158),adj(size,amt,48.3903),adj(size,amt,23.571429),adj(size,amt,48.928571));
ctx.bezierCurveTo(adj(size,amt,19.20075),adj(size,amt,49.342752),adj(size,amt,10.357143),adj(size,amt,46.785715),adj(size,amt,10.357143),adj(size,amt,46.785715));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();
ctx.restore();
}



function lf(ctx,size,amt,width,color,x,y,tilt){
ctx.strokeStyle = 'rgba(0,0,0,0)';
ctx.lineCap = 'butt';
ctx.lineJoin = 'miter';
ctx.miterLimit = 4;
ctx.save();
ctx.restore();
ctx.save();
ctx.restore();
ctx.save();
ctx.save();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,29.285714),adj(size,amt,25.357143));
ctx.bezierCurveTo(adj(size,amt,29.285714),adj(size,amt,25.357143),adj(size,amt,27.035345),adj(size,amt,7.476994400000002),adj(size,amt,20),adj(size,amt,11.071429));
ctx.bezierCurveTo(adj(size,amt,13.267261000000001),adj(size,amt,14.511258),adj(size,amt,13.427935),adj(size,amt,30.128408),adj(size,amt,12.857143),adj(size,amt,40.714286));
ctx.bezierCurveTo(adj(size,amt,12.4381),adj(size,amt,48.485834000000004),adj(size,amt,14.497547),adj(size,amt,56.193349),adj(size,amt,15.357143),adj(size,amt,63.928571000000005));
ctx.bezierCurveTo(adj(size,amt,16.09771),adj(size,amt,70.59268200000001),adj(size,amt,15.714285),adj(size,amt,74.28571400000001),adj(size,amt,15.714285),adj(size,amt,74.28571400000001));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.save();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,3.5714286),adj(size,amt,43.214286));
ctx.bezierCurveTo(adj(size,amt,3.5714286),adj(size,amt,43.214286),adj(size,amt,10.833711000000001),adj(size,amt,41.299728),adj(size,amt,14.285715),adj(size,amt,40.714286));
ctx.bezierCurveTo(adj(size,amt,18.982047),adj(size,amt,39.917811),adj(size,amt,27.857143),adj(size,amt,39.642857),adj(size,amt,27.857143),adj(size,amt,39.642857));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();
ctx.restore();
}



function lg(ctx,size,amt,width,color,x,y,tilt){
ctx.strokeStyle = 'rgba(0,0,0,0)';
ctx.lineCap = 'butt';
ctx.lineJoin = 'miter';
ctx.miterLimit = 4;
ctx.save();
ctx.restore();
ctx.save();
ctx.restore();
ctx.save();
ctx.save();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,39.285714),adj(size,amt,30.714286));
ctx.bezierCurveTo(adj(size,amt,39.285714),adj(size,amt,30.714286),adj(size,amt,37.495267999999996),adj(size,amt,47.261522),adj(size,amt,36.785714),adj(size,amt,56.071428));
ctx.bezierCurveTo(adj(size,amt,36.066633),adj(size,amt,64.999614),adj(size,amt,37.773759),adj(size,amt,75.411773),adj(size,amt,35),adj(size,amt,83.928571));
ctx.bezierCurveTo(adj(size,amt,30.949892),adj(size,amt,96.364388),adj(size,amt,25.980823),adj(size,amt,98.686409),adj(size,amt,18.571429),adj(size,amt,97.5));
ctx.bezierCurveTo(adj(size,amt,3.3166482),adj(size,amt,95.057368),adj(size,amt,2.5),adj(size,amt,88.214286),adj(size,amt,2.5),adj(size,amt,88.214286));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.save();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,37.142857),adj(size,amt,35.357143));
ctx.bezierCurveTo(adj(size,amt,37.142857),adj(size,amt,35.357143),adj(size,amt,29.327139),adj(size,amt,30.047941),adj(size,amt,25.357143),adj(size,amt,31.071429000000002));
ctx.bezierCurveTo(adj(size,amt,15.373905),adj(size,amt,33.645164),adj(size,amt,6.8638519),adj(size,amt,37.064618),adj(size,amt,3.571428600000001),adj(size,amt,45.357142));
ctx.bezierCurveTo(adj(size,amt,0.7472238100000008),adj(size,amt,52.470379),adj(size,amt,3.582052600000001),adj(size,amt,60.61110000000001),adj(size,amt,9.2857143),adj(size,amt,65.714286));
ctx.bezierCurveTo(adj(size,amt,12.698837000000001),adj(size,amt,68.768079),adj(size,amt,18.415019),adj(size,amt,68.25757300000001),adj(size,amt,22.857143),adj(size,amt,67.142857));
ctx.bezierCurveTo(adj(size,amt,27.637554),adj(size,amt,65.943251),adj(size,amt,32.857143),adj(size,amt,60.00000000000001),adj(size,amt,32.857143),adj(size,amt,60.00000000000001));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();
ctx.restore();
}


function lh(ctx,size,amt,width,color,x,y,tilt){
ctx.strokeStyle = 'rgba(0,0,0,0)';
ctx.lineCap = 'butt';
ctx.lineJoin = 'miter';
ctx.miterLimit = 4;
ctx.save();
ctx.restore();
ctx.save();
ctx.restore();
ctx.save();
ctx.save();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,5),adj(size,amt,5.7142857));
ctx.bezierCurveTo(adj(size,amt,5),adj(size,amt,7.1428572),adj(size,amt,3.5444516),adj(size,amt,28.208907),adj(size,amt,3.5714286),adj(size,amt,40));
ctx.bezierCurveTo(adj(size,amt,3.5948667),adj(size,amt,50.244296),adj(size,amt,4.6428571),adj(size,amt,70.714286),adj(size,amt,4.6428571),adj(size,amt,70.714286));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.save();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,3.5714286),adj(size,amt,37.5));
ctx.bezierCurveTo(adj(size,amt,3.5714286),adj(size,amt,37.5),adj(size,amt,11.981061),adj(size,amt,29.734085999999998),adj(size,amt,17.142857),adj(size,amt,30));
ctx.bezierCurveTo(adj(size,amt,23.80494),adj(size,amt,30.343202),adj(size,amt,28.678427),adj(size,amt,34.299223),adj(size,amt,32.142858),adj(size,amt,40));
ctx.bezierCurveTo(adj(size,amt,36.943393),adj(size,amt,47.899359),adj(size,amt,36.071428),adj(size,amt,68.571428),adj(size,amt,36.071428),adj(size,amt,68.571428));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();
ctx.restore();
}


function li(ctx,size,amt,width,color,x,y,tilt){
ctx.strokeStyle = 'rgba(0,0,0,0)';
ctx.lineCap = 'butt';
ctx.lineJoin = 'miter';
ctx.miterLimit = 4;
ctx.save();
ctx.restore();
ctx.save();
ctx.restore();
ctx.save();
ctx.save();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,3.5714286),adj(size,amt,35));
ctx.bezierCurveTo(adj(size,amt,3.5714286),adj(size,amt,35),adj(size,amt,3.0946743),adj(size,amt,49.526028),adj(size,amt,3.3928572),adj(size,amt,56.785714));
ctx.bezierCurveTo(adj(size,amt,3.648595),adj(size,amt,63.012012999999996),adj(size,amt,4.4642857),adj(size,amt,75.178572),adj(size,amt,4.4642857),adj(size,amt,75.178572));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.save();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,7.1428571),adj(size,amt,6.6071429));
ctx.bezierCurveTo(adj(size,amt,5.1359374),adj(size,amt,6.0512583),adj(size,amt,3.6201225),adj(size,amt,12.368868),adj(size,amt,5),adj(size,amt,13.928571));
ctx.bezierCurveTo(adj(size,amt,5.776901),adj(size,amt,14.806717),adj(size,amt,7.4860981),adj(size,amt,12.679547),adj(size,amt,8.125),adj(size,amt,11.696429));
ctx.bezierCurveTo(adj(size,amt,8.8385774),adj(size,amt,10.598403),adj(size,amt,8.4048648),adj(size,amt,6.9566988),adj(size,amt,7.1428571),adj(size,amt,6.6071429));
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();
ctx.restore();
}


function lj(ctx,size,amt,width,color,x,y,tilt){
ctx.strokeStyle = 'rgba(0,0,0,0)';
ctx.lineCap = 'butt';
ctx.lineJoin = 'miter';
ctx.miterLimit = 4;
ctx.save();
ctx.restore();
ctx.save();
ctx.restore();
ctx.save();
ctx.save();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,12.879445),adj(size,amt,33.835008));
ctx.bezierCurveTo(adj(size,amt,12.879445),adj(size,amt,33.835008),adj(size,amt,12.341222),adj(size,amt,49.322255),adj(size,amt,12.374369),adj(size,amt,57.068517));
ctx.bezierCurveTo(adj(size,amt,12.410048999999999),adj(size,amt,65.406025),adj(size,amt,14.924443),adj(size,amt,73.927164),adj(size,amt,13.131983),adj(size,amt,82.069792));
ctx.bezierCurveTo(adj(size,amt,12.484513),adj(size,amt,85.011064),adj(size,amt,11.653272),adj(size,amt,88.567672),adj(size,amt,9.0913729),adj(size,amt,90.151013));
ctx.bezierCurveTo(adj(size,amt,6.7283333999999995),adj(size,amt,91.611451),adj(size,amt,3.3486405999999995),adj(size,amt,91.152721),adj(size,amt,0.7576143900000005),adj(size,amt,90.15101200000001));
ctx.bezierCurveTo(adj(size,amt,-0.4096090299999995),adj(size,amt,89.69975600000001),adj(size,amt,-2.0203050999999994),adj(size,amt,87.62563100000001),adj(size,amt,-2.0203050999999994),adj(size,amt,87.62563100000001));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.save();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,16.103793),adj(size,amt,6.0251753));
ctx.bezierCurveTo(adj(size,amt,13.835101),adj(size,amt,6.0578933),adj(size,amt,12.772616),adj(size,amt,10.271466),adj(size,amt,13.637058999999999),adj(size,amt,12.369267));
ctx.bezierCurveTo(adj(size,amt,13.952927999999998),adj(size,amt,13.135808),adj(size,amt,13.863644999999998),adj(size,amt,15.217500000000001),adj(size,amt,15.909903),adj(size,amt,13.379419));
ctx.bezierCurveTo(adj(size,amt,16.81308),adj(size,amt,12.568127),adj(size,amt,17.816057999999998),adj(size,amt,11.557636),adj(size,amt,17.930208),adj(size,amt,10.348962));
ctx.bezierCurveTo(adj(size,amt,18.077316),adj(size,amt,8.7913228),adj(size,amt,17.6682),adj(size,amt,6.0026142),adj(size,amt,16.103793),adj(size,amt,6.0251753));
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();
ctx.restore();
}


function lk(ctx,size,amt,width,color,x,y,tilt){
ctx.strokeStyle = 'rgba(0,0,0,0)';
ctx.lineCap = 'butt';
ctx.lineJoin = 'miter';
ctx.miterLimit = 4;
ctx.save();
ctx.restore();
ctx.save();
ctx.restore();
ctx.save();
ctx.save();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,11.785714),adj(size,amt,3.0357142));
ctx.bezierCurveTo(adj(size,amt,11.785714),adj(size,amt,3.0357142),adj(size,amt,11.563278),adj(size,amt,11.628807000000002),adj(size,amt,11.071428000000001),adj(size,amt,15.892857));
ctx.bezierCurveTo(adj(size,amt,9.4577817),adj(size,amt,29.88223),adj(size,amt,4.1718948),adj(size,amt,43.424191),adj(size,amt,3.75),adj(size,amt,57.5));
ctx.bezierCurveTo(adj(size,amt,3.6405042),adj(size,amt,61.153141),adj(size,amt,5),adj(size,amt,68.392857),adj(size,amt,5),adj(size,amt,68.392857));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.save();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,7.1428572),adj(size,amt,40.714286));
ctx.bezierCurveTo(adj(size,amt,7.1428572),adj(size,amt,40.714286),adj(size,amt,11.432725),adj(size,amt,37.878834),adj(size,amt,31.785714),adj(size,amt,25.892857));
ctx.bezierCurveTo(adj(size,amt,34.476881999999996),adj(size,amt,24.308014),adj(size,amt,44.107143),adj(size,amt,22.678570999999998),adj(size,amt,44.107143),adj(size,amt,22.678570999999998));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.save();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,15.714285),adj(size,amt,36.428571));
ctx.bezierCurveTo(adj(size,amt,17.857143),adj(size,amt,41.25),adj(size,amt,29.216217),adj(size,amt,52.440602999999996),adj(size,amt,36.071428),adj(size,amt,60.35714299999999));
ctx.bezierCurveTo(adj(size,amt,39.135835),adj(size,amt,63.895982999999994),adj(size,amt,45.35714299999999),adj(size,amt,70.89285699999999),adj(size,amt,45.35714299999999),adj(size,amt,70.89285699999999));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();
ctx.restore();
}


function ll(ctx,size,amt,width,color,x,y,tilt){
ctx.strokeStyle = 'rgba(0,0,0,0)';
ctx.lineCap = 'butt';
ctx.lineJoin = 'miter';
ctx.miterLimit = 4;
ctx.save();
ctx.restore();
ctx.save();
ctx.restore();
ctx.save();
ctx.save();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,6.0609153),adj(size,amt,1.2575887));
ctx.bezierCurveTo(adj(size,amt,6.0609153),adj(size,amt,1.2575887),adj(size,amt,4.9953128),adj(size,amt,20.952876),adj(size,amt,4.5456864999999995),adj(size,amt,30.804551));
ctx.bezierCurveTo(adj(size,amt,4.065563299999999),adj(size,amt,41.324437),adj(size,amt,4.3551174999999995),adj(size,amt,51.863983000000005),adj(size,amt,3.2829957999999992),adj(size,amt,62.371818000000005));
ctx.bezierCurveTo(adj(size,amt,3.0835219999999994),adj(size,amt,64.32685500000001),adj(size,amt,4.2931482999999995),adj(size,amt,68.180195),adj(size,amt,4.2931482999999995),adj(size,amt,68.180195));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();
ctx.restore();
}


function lm(ctx,size,amt,width,color,x,y,tilt){
ctx.strokeStyle = 'rgba(0,0,0,0)';
ctx.lineCap = 'butt';
ctx.lineJoin = 'miter';
ctx.miterLimit = 4;
ctx.save();
ctx.restore();
ctx.save();
ctx.restore();
ctx.save();
ctx.save();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,5.8083771),adj(size,amt,70.705576));
ctx.bezierCurveTo(adj(size,amt,5.8083771),adj(size,amt,70.705576),adj(size,amt,5.398409300000001),adj(size,amt,60.934918999999994),adj(size,amt,5.0507627),adj(size,amt,56.058364));
ctx.bezierCurveTo(adj(size,amt,4.6540638),adj(size,amt,50.493737),adj(size,amt,4.374047),adj(size,amt,44.906221),adj(size,amt,3.5355339),adj(size,amt,39.390847));
ctx.bezierCurveTo(adj(size,amt,3.1732195),adj(size,amt,37.007701),adj(size,amt,2.1927027),adj(size,amt,39.40934),adj(size,amt,2.0203051),adj(size,amt,32.319779));
ctx.bezierCurveTo(adj(size,amt,4.2128678),adj(size,amt,35.872515),adj(size,amt,1.4603284999999997),adj(size,amt,33.733044),adj(size,amt,3.7880719999999997),adj(size,amt,39.390846999999994));
ctx.bezierCurveTo(adj(size,amt,7.4087143),adj(size,amt,36.467431999999995),adj(size,amt,12.137535),adj(size,amt,29.589026999999994),adj(size,amt,17.67767),adj(size,amt,30.046935999999995));
ctx.bezierCurveTo(adj(size,amt,24.393852),adj(size,amt,30.602047999999996),adj(size,amt,33.196573),adj(size,amt,36.702352999999995),adj(size,amt,32.829958),adj(size,amt,43.431456999999995));
ctx.bezierCurveTo(adj(size,amt,32.138929999999995),adj(size,amt,56.115055),adj(size,amt,32.830231),adj(size,amt,55.70750399999999),adj(size,amt,32.324881),adj(size,amt,68.432733));
ctx.bezierCurveTo(adj(size,amt,33.166975),adj(size,amt,55.620467),adj(size,amt,33.032250999999995),adj(size,amt,49.089772999999994),adj(size,amt,33.082496),adj(size,amt,40.400999999999996));
ctx.bezierCurveTo(adj(size,amt,33.118055999999996),adj(size,amt,34.251771999999995),adj(size,amt,42.330473999999995),adj(size,amt,31.534476999999995),adj(size,amt,47.729708),adj(size,amt,31.562164999999997));
ctx.bezierCurveTo(adj(size,amt,53.360221),adj(size,amt,31.591034999999998),adj(size,amt,56.785393),adj(size,amt,35.425934),adj(size,amt,59.851538000000005),adj(size,amt,40.148461999999995));
ctx.bezierCurveTo(adj(size,amt,62.99584300000001),adj(size,amt,44.991370999999994),adj(size,amt,63.57702700000001),adj(size,amt,50.287372999999995),adj(size,amt,63.387072),adj(size,amt,56.058364));
ctx.bezierCurveTo(adj(size,amt,63.231743),adj(size,amt,60.777364),adj(size,amt,60.609153000000006),adj(size,amt,69.94796199999999),adj(size,amt,60.609153000000006),adj(size,amt,69.94796199999999));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();
ctx.restore();
}


function ln(ctx,size,amt,width,color,x,y,tilt){
ctx.strokeStyle = 'rgba(0,0,0,0)';
ctx.lineCap = 'butt';
ctx.lineJoin = 'miter';
ctx.miterLimit = 4;
ctx.save();
ctx.restore();
ctx.save();
ctx.restore();
ctx.save();
ctx.save();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,5.555839),adj(size,amt,71.210652));
ctx.bezierCurveTo(adj(size,amt,5.555839),adj(size,amt,71.210652),adj(size,amt,5.498882),adj(size,amt,65.14459099999999),adj(size,amt,5.3033009),adj(size,amt,62.119279999999996));
ctx.bezierCurveTo(adj(size,amt,4.6591701),adj(size,amt,52.155681),adj(size,amt,2.2728432),adj(size,amt,32.319779),adj(size,amt,2.2728432),adj(size,amt,32.319779));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.save();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,5.3033008),adj(size,amt,40.148462));
ctx.bezierCurveTo(adj(size,amt,5.3033008),adj(size,amt,40.148462),adj(size,amt,12.561615),adj(size,amt,30.609638000000004),adj(size,amt,18.435284),adj(size,amt,30.804551000000004));
ctx.bezierCurveTo(adj(size,amt,24.870226),adj(size,amt,31.018089000000003),adj(size,amt,31.948135),adj(size,amt,37.751867000000004),adj(size,amt,31.819806),adj(size,amt,44.189072));
ctx.bezierCurveTo(adj(size,amt,31.631921),adj(size,amt,53.613739),adj(size,amt,29.546962),adj(size,amt,68.432733),adj(size,amt,29.546962),adj(size,amt,68.432733));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();
ctx.restore();
}


function lo(ctx,size,amt,width,color,x,y,tilt){
ctx.strokeStyle = 'rgba(0,0,0,0)';
ctx.lineCap = 'butt';
ctx.lineJoin = 'miter';
ctx.miterLimit = 4;
ctx.save();
ctx.restore();
ctx.save();
ctx.restore();
ctx.save();
ctx.save();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,6.5659915),adj(size,amt,43.178919));
ctx.bezierCurveTo(adj(size,amt,6.5659915),adj(size,amt,43.178919),adj(size,amt,3.0487064),adj(size,amt,47.941215),adj(size,amt,2.5253813999999997),adj(size,amt,50.755063));
ctx.bezierCurveTo(adj(size,amt,2.2814126999999997),adj(size,amt,61.991462999999996),adj(size,amt,5.335663499999999),adj(size,amt,67.155742),adj(size,amt,14.142136),adj(size,amt,69.695424));
ctx.bezierCurveTo(adj(size,amt,27.365433000000003),adj(size,amt,69.137266),adj(size,amt,31.655016),adj(size,amt,60.482787),adj(size,amt,33.840111),adj(size,amt,52.017755));
ctx.bezierCurveTo(adj(size,amt,35.613948),adj(size,amt,45.14593),adj(size,amt,33.747021000000004),adj(size,amt,38.686202),adj(size,amt,26.263966),adj(size,amt,34.845161000000004));
ctx.bezierCurveTo(adj(size,amt,22.291986),adj(size,amt,32.80634800000001),adj(size,amt,17.385399),adj(size,amt,32.730402000000005),adj(size,amt,13.131983),adj(size,amt,34.087546));
ctx.bezierCurveTo(adj(size,amt,10.351596),adj(size,amt,34.974688),adj(size,amt,5.8083771),adj(size,amt,38.885771000000005),adj(size,amt,5.8083771),adj(size,amt,38.885771000000005));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();
ctx.restore();
}


function lp(ctx,size,amt,width,color,x,y,tilt){
ctx.strokeStyle = 'rgba(0,0,0,0)';
ctx.lineCap = 'butt';
ctx.lineJoin = 'miter';
ctx.miterLimit = 4;
ctx.save();
ctx.restore();
ctx.save();
ctx.restore();
ctx.save();
ctx.save();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,1.5152288),adj(size,amt,37.62308));
ctx.bezierCurveTo(adj(size,amt,1.5152288),adj(size,amt,37.62308),adj(size,amt,16.118282),adj(size,amt,31.685919000000002),adj(size,amt,23.233508999999998),adj(size,amt,33.58247));
ctx.bezierCurveTo(adj(size,amt,30.388606999999997),adj(size,amt,35.489649),adj(size,amt,39.089853999999995),adj(size,amt,40.649027000000004),adj(size,amt,40.153564),adj(size,amt,47.977144));
ctx.bezierCurveTo(adj(size,amt,41.490992000000006),adj(size,amt,57.190964),adj(size,amt,38.844107),adj(size,amt,64.423512),adj(size,amt,29.041885),adj(size,amt,65.402275));
ctx.bezierCurveTo(adj(size,amt,15.180908),adj(size,amt,66.786309),adj(size,amt,5.3033009),adj(size,amt,58.836284),adj(size,amt,5.3033009),adj(size,amt,58.836284));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.save();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,6.3134534),adj(size,amt,25.50125));
ctx.bezierCurveTo(adj(size,amt,6.0609153),adj(size,amt,27.016479),adj(size,amt,5.5683015),adj(size,amt,37.786265),adj(size,amt,5.555839),adj(size,amt,43.936534));
ctx.bezierCurveTo(adj(size,amt,5.5374039999999995),adj(size,amt,53.034121),adj(size,amt,6.3393029),adj(size,amt,62.115871),adj(size,amt,6.5659915),adj(size,amt,71.21065200000001));
ctx.bezierCurveTo(adj(size,amt,6.7296123),adj(size,amt,77.77514400000001),adj(size,amt,6.8185297),adj(size,amt,90.90862700000001),adj(size,amt,6.8185297),adj(size,amt,90.90862700000001));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();
ctx.restore();
}


function lq(ctx,size,amt,width,color,x,y,tilt){
ctx.strokeStyle = 'rgba(0,0,0,0)';
ctx.lineCap = 'butt';
ctx.lineJoin = 'miter';
ctx.miterLimit = 4;
ctx.save();
ctx.restore();
ctx.save();
ctx.restore();
ctx.save();
ctx.save();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,38.638335),adj(size,amt,26.763941));
ctx.bezierCurveTo(adj(size,amt,38.638335),adj(size,amt,26.763941),adj(size,amt,37.219100999999995),adj(size,amt,51.50356),adj(size,amt,36.870568),adj(size,amt,63.887046999999995));
ctx.bezierCurveTo(adj(size,amt,36.643235),adj(size,amt,71.964255),adj(size,amt,35.362626),adj(size,amt,77.761066),adj(size,amt,36.365491999999996),adj(size,amt,88.383246));
ctx.bezierCurveTo(adj(size,amt,36.668445),adj(size,amt,91.592069),adj(size,amt,39.493919),adj(size,amt,95.212961),adj(size,amt,42.678945),adj(size,amt,95.706852));
ctx.bezierCurveTo(adj(size,amt,45.218479),adj(size,amt,96.10064799999999),adj(size,amt,49.244937),adj(size,amt,91.666242),adj(size,amt,49.244937),adj(size,amt,91.666242));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.save();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,37.123106),adj(size,amt,47.21953));
ctx.bezierCurveTo(adj(size,amt,37.967779),adj(size,amt,46.247578),adj(size,amt,35.047243),adj(size,amt,33.867526),adj(size,amt,29.294424),adj(size,amt,31.057089));
ctx.bezierCurveTo(adj(size,amt,22.92795),adj(size,amt,27.946862),adj(size,amt,13.321494),adj(size,amt,31.086138),adj(size,amt,8.0812204),adj(size,amt,35.855314));
ctx.bezierCurveTo(adj(size,amt,3.1594198),adj(size,amt,40.334647),adj(size,amt,1.573455),adj(size,amt,48.111494),adj(size,amt,3.2829958),adj(size,amt,54.543136));
ctx.bezierCurveTo(adj(size,amt,5.1973151),adj(size,amt,61.745197),adj(size,amt,13.079062),adj(size,amt,68.228886),adj(size,amt,20.455589),adj(size,amt,67.170042));
ctx.bezierCurveTo(adj(size,amt,36.876251),adj(size,amt,64.812982),adj(size,amt,37.123106),adj(size,amt,47.21953),adj(size,amt,37.123106),adj(size,amt,47.21953));
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();
ctx.restore();
}


function lr(ctx,size,amt,width,color,x,y,tilt){
ctx.strokeStyle = 'rgba(0,0,0,0)';
ctx.lineCap = 'butt';
ctx.lineJoin = 'miter';
ctx.miterLimit = 4;
ctx.save();
ctx.restore();
ctx.save();
ctx.restore();
ctx.save();
ctx.save();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,2.2728432),adj(size,amt,29.036784));
ctx.bezierCurveTo(adj(size,amt,2.2728432),adj(size,amt,29.036784),adj(size,amt,3.6361843),adj(size,amt,36.2443),adj(size,amt,3.788072),adj(size,amt,39.895924));
ctx.bezierCurveTo(adj(size,amt,4.0403438000000005),adj(size,amt,45.960941),adj(size,amt,3.0027985),adj(size,amt,52.014878),adj(size,amt,3.2829958),adj(size,amt,58.078669000000005));
ctx.bezierCurveTo(adj(size,amt,3.4676351000000003),adj(size,amt,62.074476000000004),adj(size,amt,4.0406102),adj(size,amt,71.21065300000001),adj(size,amt,4.0406102),adj(size,amt,71.21065300000001));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.save();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,4.0406102),adj(size,amt,38.633233));
ctx.bezierCurveTo(adj(size,amt,5.555839),adj(size,amt,38.128156999999995),adj(size,amt,11.258184),adj(size,amt,32.440912999999995),adj(size,amt,16.667517),adj(size,amt,32.06724199999999));
ctx.bezierCurveTo(adj(size,amt,19.881849),adj(size,amt,31.845197999999993),adj(size,amt,25.514988000000002),adj(size,amt,31.823256999999995),adj(size,amt,27.526657),adj(size,amt,34.340084999999995));
ctx.bezierCurveTo(adj(size,amt,28.797862),adj(size,amt,35.930507999999996),adj(size,amt,28.284271),adj(size,amt,40.400999999999996),adj(size,amt,28.284271),adj(size,amt,40.400999999999996));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();
ctx.restore();
}


function ls(ctx,size,amt,width,color,x,y,tilt){
ctx.strokeStyle = 'rgba(0,0,0,0)';
ctx.lineCap = 'butt';
ctx.lineJoin = 'miter';
ctx.miterLimit = 4;
ctx.save();
ctx.restore();
ctx.save();
ctx.restore();
ctx.save();
ctx.save();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,2.2728432),adj(size,amt,66.664966));
ctx.bezierCurveTo(adj(size,amt,2.2728432),adj(size,amt,66.664966),adj(size,amt,2.4061559),adj(size,amt,70.799648),adj(size,amt,7.5761441000000005),adj(size,amt,72.22080500000001));
ctx.bezierCurveTo(adj(size,amt,15.187402),adj(size,amt,74.31303500000001),adj(size,amt,21.603928),adj(size,amt,75.41873300000002),adj(size,amt,29.294424),adj(size,amt,70.95811400000001));
ctx.bezierCurveTo(adj(size,amt,34.787181),adj(size,amt,67.772222),adj(size,amt,38.673868),adj(size,amt,59.288561),adj(size,amt,35.1028),adj(size,amt,54.038059));
ctx.bezierCurveTo(adj(size,amt,32.524996),adj(size,amt,50.247941),adj(size,amt,18.090358),adj(size,amt,55.285305),adj(size,amt,11.869292),adj(size,amt,51.260139));
ctx.bezierCurveTo(adj(size,amt,8.417018),adj(size,amt,49.026443),adj(size,amt,7.8809826),adj(size,amt,46.264147),adj(size,amt,9.343911),adj(size,amt,42.421305));
ctx.bezierCurveTo(adj(size,amt,11.36677),adj(size,amt,37.10763),adj(size,amt,18.842627),adj(size,amt,34.185982),adj(size,amt,24.496199),adj(size,amt,33.58247));
ctx.bezierCurveTo(adj(size,amt,28.881672000000002),adj(size,amt,33.114326),adj(size,amt,37.375644),adj(size,amt,38.128157),adj(size,amt,37.375644),adj(size,amt,38.128157));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();
ctx.restore();
}


function lt(ctx,size,amt,width,color,x,y,tilt){
ctx.strokeStyle = 'rgba(0,0,0,0)';
ctx.lineCap = 'butt';
ctx.lineJoin = 'miter';
ctx.miterLimit = 4;
ctx.save();
ctx.restore();
ctx.save();
ctx.restore();
ctx.save();
ctx.save();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,2.2728433),adj(size,amt,30.046936));
ctx.bezierCurveTo(adj(size,amt,2.2728433),adj(size,amt,30.046936),adj(size,amt,9.8553991),adj(size,amt,30.230486),adj(size,amt,15.657364),adj(size,amt,30.804551));
ctx.bezierCurveTo(adj(size,amt,24.538682),adj(size,amt,31.683297),adj(size,amt,27.526657),adj(size,amt,29.54186),adj(size,amt,27.526657),adj(size,amt,29.54186));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.save();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,15.909903),adj(size,amt,7.5710421));
ctx.bezierCurveTo(adj(size,amt,15.909903),adj(size,amt,7.5710421),adj(size,amt,14.29666),adj(size,amt,10.694871),adj(size,amt,14.394674),adj(size,amt,12.369267));
ctx.bezierCurveTo(adj(size,amt,15.055676),adj(size,amt,23.661318),adj(size,amt,14.965852),adj(size,amt,28.890241),adj(size,amt,14.647212),adj(size,amt,36.865466));
ctx.bezierCurveTo(adj(size,amt,14.134412),adj(size,amt,49.700291),adj(size,amt,11.671212),adj(size,amt,56.77607999999999),adj(size,amt,12.121831),adj(size,amt,67.675119));
ctx.bezierCurveTo(adj(size,amt,12.25493),adj(size,amt,70.89436099999999),adj(size,amt,16.98243),adj(size,amt,72.88442599999999),adj(size,amt,20.203051000000002),adj(size,amt,72.978419));
ctx.bezierCurveTo(adj(size,amt,23.407142),adj(size,amt,73.071929),adj(size,amt,28.536809),adj(size,amt,68.180195),adj(size,amt,28.536809),adj(size,amt,68.180195));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();
ctx.restore();
}


function lu(ctx,size,amt,width,color,x,y,tilt){
ctx.strokeStyle = 'rgba(0,0,0,0)';
ctx.lineCap = 'butt';
ctx.lineJoin = 'miter';
ctx.miterLimit = 4;
ctx.save();
ctx.restore();
ctx.save();
ctx.restore();
ctx.save();
ctx.save();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,4.2931483),adj(size,amt,29.794398));
ctx.bezierCurveTo(adj(size,amt,4.2931483),adj(size,amt,29.794398),adj(size,amt,4.604487300000001),adj(size,amt,38.584708),adj(size,amt,4.040610200000001),adj(size,amt,42.926381));
ctx.bezierCurveTo(adj(size,amt,3.0667172000000007),adj(size,amt,50.425046),adj(size,amt,1.9679625000000005),adj(size,amt,51.172519),adj(size,amt,3.0304576000000005),adj(size,amt,57.826131));
ctx.bezierCurveTo(adj(size,amt,3.9413597000000005),adj(size,amt,63.530429),adj(size,amt,9.662112800000001),adj(size,amt,68.313301),adj(size,amt,15.404826),adj(size,amt,68.93781));
ctx.bezierCurveTo(adj(size,amt,20.95908),adj(size,amt,69.541824),adj(size,amt,28.354475),adj(size,amt,63.401531),adj(size,amt,30.052038),adj(size,amt,58.078669));
ctx.bezierCurveTo(adj(size,amt,32.647854),adj(size,amt,49.939254999999996),adj(size,amt,32.170177),adj(size,amt,46.418426),adj(size,amt,31.819805),adj(size,amt,37.370542));
ctx.bezierCurveTo(adj(size,amt,31.746965),adj(size,amt,35.489643),adj(size,amt,31.819805),adj(size,amt,28.531707),adj(size,amt,31.819805),adj(size,amt,28.531707));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();
ctx.restore();
}


function lv(ctx,size,amt,width,color,x,y,tilt){
ctx.strokeStyle = 'rgba(0,0,0,0)';
ctx.lineCap = 'butt';
ctx.lineJoin = 'miter';
ctx.miterLimit = 4;
ctx.save();
ctx.restore();
ctx.save();
ctx.restore();
ctx.save();
ctx.save();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,2.2728433),adj(size,amt,33.329932));
ctx.bezierCurveTo(adj(size,amt,2.2728433),adj(size,amt,33.329932),adj(size,amt,4.460036499999999),adj(size,amt,38.054261),adj(size,amt,5.8083772),adj(size,amt,40.653538));
ctx.bezierCurveTo(adj(size,amt,11.619643),adj(size,amt,51.856262),adj(size,amt,17.172593),adj(size,amt,65.65481299999999),adj(size,amt,17.172593),adj(size,amt,65.65481299999999));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.save();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,32.324881),adj(size,amt,37.370542));
ctx.bezierCurveTo(adj(size,amt,32.324881),adj(size,amt,37.370542),adj(size,amt,24.607422),adj(size,amt,53.798942),adj(size,amt,20.455588999999996),adj(size,amt,61.866741000000005));
ctx.bezierCurveTo(adj(size,amt,19.007666999999998),adj(size,amt,64.680329),adj(size,amt,15.909902999999996),adj(size,amt,70.2005),adj(size,amt,15.909902999999996),adj(size,amt,70.2005));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();
ctx.restore();
}


function lw(ctx,size,amt,width,color,x,y,tilt){
ctx.strokeStyle = 'rgba(0,0,0,0)';
ctx.lineCap = 'butt';
ctx.lineJoin = 'miter';
ctx.miterLimit = 4;
ctx.save();
ctx.restore();
ctx.save();
ctx.restore();
ctx.save();
ctx.save();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,2.7779195),adj(size,amt,24.238559));
ctx.bezierCurveTo(adj(size,amt,3.5355339),adj(size,amt,26.258864),adj(size,amt,3.5655883),adj(size,amt,33.024651999999996),adj(size,amt,4.2931483),adj(size,amt,37.370542));
ctx.bezierCurveTo(adj(size,amt,5.972609500000001),adj(size,amt,47.402364),adj(size,amt,7.5548106),adj(size,amt,54.055350000000004),adj(size,amt,10.85914),adj(size,amt,67.170042));
ctx.bezierCurveTo(adj(size,amt,15.448885),adj(size,amt,54.106995999999995),adj(size,amt,16.120131),adj(size,amt,56.60261),adj(size,amt,17.930208),adj(size,amt,51.00760199999999));
ctx.bezierCurveTo(adj(size,amt,19.520952),adj(size,amt,46.09055999999999),adj(size,amt,18.915157),adj(size,amt,43.89712599999999),adj(size,amt,21.213203),adj(size,amt,35.855312999999995));
ctx.bezierCurveTo(adj(size,amt,24.648906),adj(size,amt,43.613482999999995),adj(size,amt,29.377555),adj(size,amt,47.47914299999999),adj(size,amt,33.082496),adj(size,amt,53.532982999999994));
ctx.bezierCurveTo(adj(size,amt,35.796942),adj(size,amt,57.968363),adj(size,amt,37.533818),adj(size,amt,60.852954),adj(size,amt,40.65864),adj(size,amt,67.170042));
ctx.bezierCurveTo(adj(size,amt,41.842639999999996),adj(size,amt,54.52860799999999),adj(size,amt,43.628212),adj(size,amt,53.35097699999999),adj(size,amt,45.204325999999995),adj(size,amt,46.46191499999999));
ctx.bezierCurveTo(adj(size,amt,46.420145),adj(size,amt,41.14767299999999),adj(size,amt,48.992397999999994),adj(size,amt,30.552012999999988),adj(size,amt,48.992397999999994),adj(size,amt,30.552012999999988));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();
ctx.restore();
}


function lx(ctx,size,amt,width,color,x,y,tilt){
ctx.strokeStyle = 'rgba(0,0,0,0)';
ctx.lineCap = 'butt';
ctx.lineJoin = 'miter';
ctx.miterLimit = 4;
ctx.save();
ctx.restore();
ctx.save();
ctx.restore();
ctx.save();
ctx.save();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,3.535534),adj(size,amt,34.340084));
ctx.bezierCurveTo(adj(size,amt,4.5456865),adj(size,amt,35.855312999999995),adj(size,amt,16.54721),adj(size,amt,47.996634),adj(size,amt,22.728431999999998),adj(size,amt,55.04821199999999));
ctx.bezierCurveTo(adj(size,amt,25.949655999999997),adj(size,amt,58.72300499999999),adj(size,amt,29.255305999999997),adj(size,amt,62.32350699999999),adj(size,amt,32.57742),adj(size,amt,65.90735199999999));
ctx.bezierCurveTo(adj(size,amt,34.075188999999995),adj(size,amt,67.52312199999999),adj(size,amt,37.12310599999999),adj(size,amt,70.705576),adj(size,amt,37.12310599999999),adj(size,amt,70.705576));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.save();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,37.123106),adj(size,amt,37.875618));
ctx.bezierCurveTo(adj(size,amt,33.84011),adj(size,amt,38.128157),adj(size,amt,25.358484),adj(size,amt,47.811961),adj(size,amt,19.697975),adj(size,amt,53.027907));
ctx.bezierCurveTo(adj(size,amt,16.06451),adj(size,amt,56.376008),adj(size,amt,12.402048),adj(size,amt,59.714371),adj(size,amt,9.0913729),adj(size,amt,63.38197));
ctx.bezierCurveTo(adj(size,amt,6.642436),adj(size,amt,66.094927),adj(size,amt,2.2728432),adj(size,amt,71.968267),adj(size,amt,2.2728432),adj(size,amt,71.968267));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();
ctx.restore();
}


function ly(ctx,size,amt,width,color,x,y,tilt){
ctx.strokeStyle = 'rgba(0,0,0,0)';
ctx.lineCap = 'butt';
ctx.lineJoin = 'miter';
ctx.miterLimit = 4;
ctx.save();
ctx.restore();
ctx.save();
ctx.restore();
ctx.save();
ctx.save();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,3.2829958),adj(size,amt,35.602775));
ctx.bezierCurveTo(adj(size,amt,7.8286822),adj(size,amt,42.421305000000004),adj(size,amt,12.706743),adj(size,amt,50.193637),adj(size,amt,17.67767),adj(size,amt,57.321055));
ctx.bezierCurveTo(adj(size,amt,20.415731),adj(size,amt,61.246944),adj(size,amt,26.516503999999998),adj(size,amt,68.685271),adj(size,amt,26.516503999999998),adj(size,amt,68.685271));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.save();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,37.123106),adj(size,amt,35.097699));
ctx.bezierCurveTo(adj(size,amt,37.123106),adj(size,amt,35.097699),adj(size,amt,32.663617),adj(size,amt,48.629811),adj(size,amt,22.980971),adj(size,amt,67.675118));
ctx.bezierCurveTo(adj(size,amt,20.383153),adj(size,amt,72.784903),adj(size,amt,15.500349),adj(size,amt,81.47961699999999),adj(size,amt,12.121831),adj(size,amt,86.11040299999999));
ctx.bezierCurveTo(adj(size,amt,10.646689),adj(size,amt,88.13231499999999),adj(size,amt,7.8286822),adj(size,amt,91.666242),adj(size,amt,7.8286822),adj(size,amt,91.666242));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();
ctx.restore();
}


function lz(ctx,size,amt,width,color,x,y,tilt){
ctx.strokeStyle = 'rgba(0,0,0,0)';
ctx.lineCap = 'butt';
ctx.lineJoin = 'miter';
ctx.miterLimit = 4;
ctx.save();
ctx.restore();
ctx.save();
ctx.restore();
ctx.save();
ctx.save();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,1.5152288),adj(size,amt,37.370542));
ctx.bezierCurveTo(adj(size,amt,1.5152288),adj(size,amt,37.370542),adj(size,amt,20.203051),adj(size,amt,37.875618),adj(size,amt,21.213203),adj(size,amt,37.875618));
ctx.bezierCurveTo(adj(size,amt,22.223356),adj(size,amt,37.875618),adj(size,amt,25.650514),adj(size,amt,38.358737000000005),adj(size,amt,28.789347),adj(size,amt,37.623081000000006));
ctx.bezierCurveTo(adj(size,amt,23.980480999999997),adj(size,amt,40.52751200000001),adj(size,amt,22.517201999999997),adj(size,amt,44.34672200000001),adj(size,amt,19.192898),adj(size,amt,48.482220000000005));
ctx.bezierCurveTo(adj(size,amt,15.22615),adj(size,amt,53.41693000000001),adj(size,amt,14.863202999999999),adj(size,amt,54.746190000000006),adj(size,amt,11.111678),adj(size,amt,59.84643700000001));
ctx.bezierCurveTo(adj(size,amt,9.6153184),adj(size,amt,61.88075700000001),adj(size,amt,9.0422224),adj(size,amt,65.76973500000001),adj(size,amt,2.2728433),adj(size,amt,69.44288600000002));
ctx.bezierCurveTo(adj(size,amt,8.1484662),adj(size,amt,68.60011500000002),adj(size,amt,8.5568919),adj(size,amt,68.85192400000001),adj(size,amt,11.111678),adj(size,amt,68.68527100000001));
ctx.bezierCurveTo(adj(size,amt,18.340145),adj(size,amt,68.21374500000002),adj(size,amt,32.829958),adj(size,amt,69.44288600000002),adj(size,amt,32.829958),adj(size,amt,69.44288600000002));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();
ctx.restore();
}



function n0(ctx,size,amt,width,color,x,y,tilt){
ctx.strokeStyle = 'rgba(0,0,0,0)';
ctx.lineCap = 'butt';
ctx.lineJoin = 'miter';
ctx.miterLimit = 4;
ctx.save();
ctx.restore();
ctx.save();
ctx.restore();
ctx.save();
ctx.save();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,15.657364),adj(size,amt,14.64211));
ctx.bezierCurveTo(adj(size,amt,15.657364),adj(size,amt,14.64211),adj(size,amt,21.785635),adj(size,amt,12.913075000000001),adj(size,amt,24.496198999999997),adj(size,amt,13.884496));
ctx.bezierCurveTo(adj(size,amt,31.488113),adj(size,amt,16.390281),adj(size,amt,35.696324),adj(size,amt,28.115205),adj(size,amt,35.860414999999996),adj(size,amt,34.592623));
ctx.bezierCurveTo(adj(size,amt,37.03567),adj(size,amt,49.021498),adj(size,amt,35.593725),adj(size,amt,68.993469),adj(size,amt,16.667517),adj(size,amt,71.715729));
ctx.bezierCurveTo(adj(size,amt,6.39852),adj(size,amt,68.92944),adj(size,amt,0.84892721),adj(size,amt,50.693042),adj(size,amt,2.2728432),adj(size,amt,40.148462));
ctx.bezierCurveTo(adj(size,amt,4.727915),adj(size,amt,21.967824),adj(size,amt,13.384521),adj(size,amt,18.430182),adj(size,amt,13.384521),adj(size,amt,18.430182));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();
ctx.restore();
}


function n1(ctx,size,amt,width,color,x,y,tilt){
ctx.strokeStyle = 'rgba(0,0,0,0)';
ctx.lineCap = 'butt';
ctx.lineJoin = 'miter';
ctx.miterLimit = 4;
ctx.save();
ctx.restore();
ctx.save();
ctx.restore();
ctx.save();
ctx.save();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,4.2931483),adj(size,amt,7.5710421));
ctx.bezierCurveTo(adj(size,amt,4.2931483),adj(size,amt,7.5710421),adj(size,amt,2.7233964000000004),adj(size,amt,28.945565),adj(size,amt,2.5253814000000006),adj(size,amt,39.138309));
ctx.bezierCurveTo(adj(size,amt,2.3273664000000007),adj(size,amt,49.331053),adj(size,amt,3.0304576000000005),adj(size,amt,68.685271),adj(size,amt,3.0304576000000005),adj(size,amt,68.685271));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();
ctx.restore();
}


function n2(ctx,size,amt,width,color,x,y,tilt){
ctx.strokeStyle = 'rgba(0,0,0,0)';
ctx.lineCap = 'butt';
ctx.lineJoin = 'miter';
ctx.miterLimit = 4;
ctx.save();
ctx.restore();
ctx.save();
ctx.restore();
ctx.save();
ctx.save();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,3.0304576),adj(size,amt,31.814704));
ctx.bezierCurveTo(adj(size,amt,3.788072),adj(size,amt,30.046937),adj(size,amt,3.6863084),adj(size,amt,27.447374),adj(size,amt,5.555839),adj(size,amt,25.753788));
ctx.bezierCurveTo(adj(size,amt,9.7399589),adj(size,amt,21.963442),adj(size,amt,15.836122),adj(size,amt,19.52001),adj(size,amt,21.465742),adj(size,amt,19.945411));
ctx.bezierCurveTo(adj(size,amt,34.204603),adj(size,amt,20.90802),adj(size,amt,37.903908),adj(size,amt,35.642084),adj(size,amt,32.829958),adj(size,amt,42.673843));
ctx.bezierCurveTo(adj(size,amt,20.127017),adj(size,amt,60.278275),adj(size,amt,14.182788),adj(size,amt,58.361084),adj(size,amt,3.788072),adj(size,amt,71.968267));
ctx.bezierCurveTo(adj(size,amt,3.4648787),adj(size,amt,72.391343),adj(size,amt,2.7506151),adj(size,amt,70.457227),adj(size,amt,3.2829958),adj(size,amt,70.453038));
ctx.bezierCurveTo(adj(size,amt,11.258151),adj(size,amt,70.39027800000001),adj(size,amt,17.288823),adj(size,amt,73.11601),adj(size,amt,23.991123),adj(size,amt,73.230958));
ctx.bezierCurveTo(adj(size,amt,27.022304000000002),adj(size,amt,73.282948),adj(size,amt,33.082496000000006),adj(size,amt,72.978419),adj(size,amt,33.082496000000006),adj(size,amt,72.978419));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();
ctx.restore();
}


function n3(ctx,size,amt,width,color,x,y,tilt){
ctx.strokeStyle = 'rgba(0,0,0,0)';
ctx.lineCap = 'butt';
ctx.lineJoin = 'miter';
ctx.miterLimit = 4;
ctx.save();
ctx.restore();
ctx.save();
ctx.restore();
ctx.save();
ctx.save();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,4.0406102),adj(size,amt,26.511402));
ctx.bezierCurveTo(adj(size,amt,4.0406102),adj(size,amt,26.511402),adj(size,amt,2.1978532),adj(size,amt,20.929665),adj(size,amt,3.5355339),adj(size,amt,18.68272));
ctx.bezierCurveTo(adj(size,amt,6.0017192999999995),adj(size,amt,14.540189),adj(size,amt,11.931847999999999),adj(size,amt,11.718440999999999),adj(size,amt,16.667517),adj(size,amt,12.621805));
ctx.bezierCurveTo(adj(size,amt,23.97831),adj(size,amt,14.016393),adj(size,amt,31.642452),adj(size,amt,22.683879),adj(size,amt,30.557114),adj(size,amt,30.046937));
ctx.bezierCurveTo(adj(size,amt,29.314662),adj(size,amt,38.475876),adj(size,amt,18.395438999999996),adj(size,amt,42.299993),adj(size,amt,9.848987299999997),adj(size,amt,41.411152));
ctx.bezierCurveTo(adj(size,amt,14.707579999999997),adj(size,amt,41.179398),adj(size,amt,25.471166999999998),adj(size,amt,42.887162000000004),adj(size,amt,29.041885999999998),adj(size,amt,48.48222));
ctx.bezierCurveTo(adj(size,amt,33.173857999999996),adj(size,amt,54.95672),adj(size,amt,30.345093),adj(size,amt,66.283051),adj(size,amt,23.738584999999997),adj(size,amt,70.2005));
ctx.bezierCurveTo(adj(size,amt,15.958272999999997),adj(size,amt,73.561199),adj(size,amt,8.208499099999997),adj(size,amt,76.920996),adj(size,amt,3.2829957999999984),adj(size,amt,68.18019500000001));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();
ctx.restore();
}


function n4(ctx,size,amt,width,color,x,y,tilt){
ctx.strokeStyle = 'rgba(0,0,0,0)';
ctx.lineCap = 'butt';
ctx.lineJoin = 'miter';
ctx.miterLimit = 4;
ctx.save();
ctx.restore();
ctx.save();
ctx.restore();
ctx.save();
ctx.save();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,4.7982246),adj(size,amt,19.692873));
ctx.bezierCurveTo(adj(size,amt,4.5456865),adj(size,amt,20.955564),adj(size,amt,3.4343958),adj(size,amt,30.359413),adj(size,amt,3.0304576),adj(size,amt,36.36039));
ctx.bezierCurveTo(adj(size,amt,2.7759875),adj(size,amt,40.140842),adj(size,amt,1.9570558),adj(size,amt,44.207596),adj(size,amt,2.7779195),adj(size,amt,47.724606));
ctx.bezierCurveTo(adj(size,amt,5.7186067),adj(size,amt,45.714155),adj(size,amt,11.840799),adj(size,amt,46.144371),adj(size,amt,16.414979),adj(size,amt,45.704301));
ctx.bezierCurveTo(adj(size,amt,22.034701),adj(size,amt,45.163642),adj(size,amt,33.335034),adj(size,amt,44.946686),adj(size,amt,33.335034),adj(size,amt,44.946686));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.save();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,26.263966),adj(size,amt,23.228407));
ctx.bezierCurveTo(adj(size,amt,26.263966),adj(size,amt,24.238559000000002),adj(size,amt,26.121274),adj(size,amt,40.139843),adj(size,amt,26.263966),adj(size,amt,49.239835));
ctx.bezierCurveTo(adj(size,amt,26.383107),adj(size,amt,56.837925999999996),adj(size,amt,28.031733),adj(size,amt,71.968267),adj(size,amt,28.031733),adj(size,amt,71.968267));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();
ctx.restore();
}


function n5(ctx,size,amt,width,color,x,y,tilt){
ctx.strokeStyle = 'rgba(0,0,0,0)';
ctx.lineCap = 'butt';
ctx.lineJoin = 'miter';
ctx.miterLimit = 4;
ctx.save();
ctx.restore();
ctx.save();
ctx.restore();
ctx.save();
ctx.save();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,34.345187),adj(size,amt,19.440335));
ctx.bezierCurveTo(adj(size,amt,34.345187),adj(size,amt,19.440335),adj(size,amt,24.379758000000002),adj(size,amt,19.792614),adj(size,amt,19.445436),adj(size,amt,20.450487000000003));
ctx.bezierCurveTo(adj(size,amt,15.190762000000001),adj(size,amt,21.017745),adj(size,amt,6.818529700000001),adj(size,amt,22.975868000000002),adj(size,amt,6.818529700000001),adj(size,amt,22.975868000000002));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.save();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,10.354064),adj(size,amt,21.965716));
ctx.bezierCurveTo(adj(size,amt,10.354064),adj(size,amt,21.965716),adj(size,amt,4.919655199999999),adj(size,amt,32.574844999999996),adj(size,amt,1.5152287999999992),adj(size,amt,44.189071999999996));
ctx.bezierCurveTo(adj(size,amt,8.248410999999999),adj(size,amt,44.56293899999999),adj(size,amt,17.914884999999998),adj(size,amt,38.420395),adj(size,amt,23.991122999999998),adj(size,amt,40.653538));
ctx.bezierCurveTo(adj(size,amt,32.287403),adj(size,amt,43.702594),adj(size,amt,35.110842999999996),adj(size,amt,50.53575),adj(size,amt,34.345186999999996),adj(size,amt,59.341359999999995));
ctx.bezierCurveTo(adj(size,amt,33.855104),adj(size,amt,64.977674),adj(size,amt,29.6487),adj(size,amt,72.732036),adj(size,amt,23.991123),adj(size,amt,72.725881));
ctx.bezierCurveTo(adj(size,amt,4.2858681),adj(size,amt,72.704444),adj(size,amt,3.5355339),adj(size,amt,61.866741),adj(size,amt,3.5355339),adj(size,amt,61.866741));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();
ctx.restore();
}


function n6(ctx,size,amt,width,color,x,y,tilt){
ctx.strokeStyle = 'rgba(0,0,0,0)';
ctx.lineCap = 'butt';
ctx.lineJoin = 'miter';
ctx.miterLimit = 4;
ctx.save();
ctx.restore();
ctx.save();
ctx.restore();
ctx.save();
ctx.save();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,28.284271),adj(size,amt,2.5202794));
ctx.bezierCurveTo(adj(size,amt,28.284271),adj(size,amt,2.5202794),adj(size,amt,13.204585),adj(size,amt,10.804026),adj(size,amt,6.818529699999999),adj(size,amt,25.753788));
ctx.bezierCurveTo(adj(size,amt,1.1983188),adj(size,amt,38.910705),adj(size,amt,0.00824312),adj(size,amt,49.157606),adj(size,amt,4.0406102),adj(size,amt,59.34136));
ctx.bezierCurveTo(adj(size,amt,6.6833749),adj(size,amt,66.015669),adj(size,amt,13.406317),adj(size,amt,71.303828),adj(size,amt,20.455589),adj(size,amt,69.947961));
ctx.bezierCurveTo(adj(size,amt,32.073656),adj(size,amt,67.713326),adj(size,amt,38.572914),adj(size,amt,53.479443),adj(size,amt,35.102801),adj(size,amt,42.168767));
ctx.bezierCurveTo(adj(size,amt,33.468569),adj(size,amt,36.842062),adj(size,amt,27.03598),adj(size,amt,32.449966),adj(size,amt,21.465742),adj(size,amt,32.319779));
ctx.bezierCurveTo(adj(size,amt,16.757494),adj(size,amt,32.209738),adj(size,amt,8.5862966),adj(size,amt,38.128157),adj(size,amt,8.5862966),adj(size,amt,38.128157));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();
ctx.restore();
}


function n7(ctx,size,amt,width,color,x,y,tilt){
ctx.strokeStyle = 'rgba(0,0,0,0)';
ctx.lineCap = 'butt';
ctx.lineJoin = 'miter';
ctx.miterLimit = 4;
ctx.save();
ctx.restore();
ctx.save();
ctx.restore();
ctx.save();
ctx.save();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,2.2728432),adj(size,amt,12.621805));
ctx.bezierCurveTo(adj(size,amt,2.2728432),adj(size,amt,12.621805),adj(size,amt,17.072967),adj(size,amt,14.045871),adj(size,amt,24.496199),adj(size,amt,14.389572000000001));
ctx.bezierCurveTo(adj(size,amt,30.887539),adj(size,amt,14.685496),adj(size,amt,43.689098),adj(size,amt,14.64211),adj(size,amt,43.689098),adj(size,amt,14.64211));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.save();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,46.467017),adj(size,amt,10.854038));
ctx.bezierCurveTo(adj(size,amt,46.467017),adj(size,amt,10.854038),adj(size,amt,32.064215),adj(size,amt,38.794033999999996),adj(size,amt,26.011428),adj(size,amt,53.280445));
ctx.bezierCurveTo(adj(size,amt,23.014101999999998),adj(size,amt,60.454081),adj(size,amt,18.182745999999998),adj(size,amt,75.251263),adj(size,amt,18.182745999999998),adj(size,amt,75.251263));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();
ctx.restore();
}


function n8(ctx,size,amt,width,color,x,y,tilt){
ctx.strokeStyle = 'rgba(0,0,0,0)';
ctx.lineCap = 'butt';
ctx.lineJoin = 'miter';
ctx.miterLimit = 4;
ctx.save();
ctx.restore();
ctx.save();
ctx.restore();
ctx.save();
ctx.save();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,12.626906),adj(size,amt,19.440334));
ctx.bezierCurveTo(adj(size,amt,12.626906),adj(size,amt,19.440334),adj(size,amt,20.010364),adj(size,amt,15.599439),adj(size,amt,23.486046),adj(size,amt,16.914953));
ctx.bezierCurveTo(adj(size,amt,29.187779000000003),adj(size,amt,19.073007),adj(size,amt,35.639541),adj(size,amt,25.302833),adj(size,amt,34.597725000000004),adj(size,amt,31.309627));
ctx.bezierCurveTo(adj(size,amt,33.440447),adj(size,amt,37.982137),adj(size,amt,24.571076),adj(size,amt,44.253232),adj(size,amt,17.930208),adj(size,amt,42.926381));
ctx.bezierCurveTo(adj(size,amt,9.3960268),adj(size,amt,41.221244),adj(size,amt,4.65654),adj(size,amt,35.807735),adj(size,amt,4.2931483),adj(size,amt,28.784246));
ctx.bezierCurveTo(adj(size,amt,4.1175955),adj(size,amt,25.391231),adj(size,amt,10.101525),adj(size,amt,20.450487),adj(size,amt,10.101525),adj(size,amt,20.450487));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.save();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,23.233509),adj(size,amt,43.936534));
ctx.bezierCurveTo(adj(size,amt,23.233509),adj(size,amt,43.936534),adj(size,amt,38.054358),adj(size,amt,41.718328),adj(size,amt,40.658640000000005),adj(size,amt,53.027906));
ctx.bezierCurveTo(adj(size,amt,42.566887),adj(size,amt,61.31482),adj(size,amt,34.825358),adj(size,amt,71.266417),adj(size,amt,26.769043),adj(size,amt,73.988572));
ctx.bezierCurveTo(adj(size,amt,5.7303621),adj(size,amt,81.097352),adj(size,amt,-0.24401431),adj(size,amt,70.129346),adj(size,amt,2.7779195),adj(size,amt,61.614203));
ctx.bezierCurveTo(adj(size,amt,8.6722319),adj(size,amt,45.005331),adj(size,amt,17.172594),adj(size,amt,46.209377),adj(size,amt,17.172594),adj(size,amt,46.209377));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();
ctx.restore();
}


function n9(ctx,size,amt,width,color,x,y,tilt){
ctx.strokeStyle = 'rgba(0,0,0,0)';
ctx.lineCap = 'butt';
ctx.lineJoin = 'miter';
ctx.miterLimit = 4;
ctx.save();
ctx.restore();
ctx.save();
ctx.restore();
ctx.save();
ctx.save();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,29.546962),adj(size,amt,44.44161));
ctx.bezierCurveTo(adj(size,amt,13.709227),adj(size,amt,50.209676),adj(size,amt,2.686159),adj(size,amt,41.358348),adj(size,amt,2.2728432),adj(size,amt,27.774093));
ctx.bezierCurveTo(adj(size,amt,2.298552),adj(size,amt,20.398467),adj(size,amt,9.8771488),adj(size,amt,12.949085),adj(size,amt,17.172593),adj(size,amt,11.86419));
ctx.bezierCurveTo(adj(size,amt,26.019734999999997),adj(size,amt,10.548546),adj(size,amt,34.971585),adj(size,amt,18.938944),adj(size,amt,36.365492),adj(size,amt,27.774093));
ctx.bezierCurveTo(adj(size,amt,38.493694000000005),adj(size,amt,41.263503),adj(size,amt,35.811902),adj(size,amt,52.654085),adj(size,amt,28.031733000000003),adj(size,amt,62.876894));
ctx.bezierCurveTo(adj(size,amt,19.276659000000002),adj(size,amt,74.380686),adj(size,amt,9.596448900000002),adj(size,amt,77.776644),adj(size,amt,9.596448900000002),adj(size,amt,77.776644));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();
ctx.restore();
}



function p_ampersand(ctx,size,amt,width,color,x,y,tilt){
ctx.strokeStyle = 'rgba(0,0,0,0)';
ctx.lineCap = 'butt';
ctx.lineJoin = 'miter';
ctx.miterLimit = 4;
ctx.save();
ctx.restore();
ctx.save();
ctx.restore();
ctx.save();
ctx.save();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,44.107143),adj(size,amt,72.142857));
ctx.bezierCurveTo(adj(size,amt,44.107143),adj(size,amt,72.142857),adj(size,amt,35.633789),adj(size,amt,61.46675200000001),adj(size,amt,31.25),adj(size,amt,56.25000000000001));
ctx.bezierCurveTo(adj(size,amt,20.5288),adj(size,amt,43.491665),adj(size,amt,12.608603),adj(size,amt,39.305379),adj(size,amt,6.6071428),adj(size,amt,28.392857));
ctx.bezierCurveTo(adj(size,amt,1.1961344),adj(size,amt,18.55396),adj(size,amt,6.3745705),adj(size,amt,11.587664),adj(size,amt,12.857144),adj(size,amt,11.071428));
ctx.bezierCurveTo(adj(size,amt,19.638079),adj(size,amt,10.531432),adj(size,amt,28.104365),adj(size,amt,16.006517),adj(size,amt,24.107143),adj(size,amt,26.607142));
ctx.bezierCurveTo(adj(size,amt,20.010542),adj(size,amt,37.471319),adj(size,amt,3.2088457),adj(size,amt,42.340156),adj(size,amt,2.1428571),adj(size,amt,53.75));
ctx.bezierCurveTo(adj(size,amt,1.4913679),adj(size,amt,60.723236),adj(size,amt,5.5416356),adj(size,amt,70.098112),adj(size,amt,12.5),adj(size,amt,70.892857));
ctx.bezierCurveTo(adj(size,amt,19.527394),adj(size,amt,71.695486),adj(size,amt,27.319128),adj(size,amt,63.426711),adj(size,amt,33.214285),adj(size,amt,57.321428));
ctx.bezierCurveTo(adj(size,amt,37.37112),adj(size,amt,53.016429),adj(size,amt,40.178572),adj(size,amt,46.428571),adj(size,amt,40.178572),adj(size,amt,46.428571));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();
ctx.restore();
}


function p_asterix(ctx,size,amt,width,color,x,y,tilt){
ctx.strokeStyle = 'rgba(0,0,0,0)';
ctx.lineCap = 'butt';
ctx.lineJoin = 'miter';
ctx.miterLimit = 4;
ctx.save();
ctx.restore();
ctx.save();
ctx.restore();
ctx.save();
ctx.save();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,9.6428571),adj(size,amt,6.9642857));
ctx.lineTo(adj(size,amt,17.678571),adj(size,amt,22.142857));
ctx.lineTo(adj(size,amt,27.678571),adj(size,amt,35));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.save();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,25.357143),adj(size,amt,6.9642857));
ctx.lineTo(adj(size,amt,15.178571),adj(size,amt,23.214286));
ctx.lineTo(adj(size,amt,6.7857143),adj(size,amt,34.821429));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.save();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,1.7857143),adj(size,amt,21.964286));
ctx.lineTo(adj(size,amt,16.428570999999998),adj(size,amt,20.714286));
ctx.lineTo(adj(size,amt,31.25),adj(size,amt,20.357143));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();
ctx.restore();
}


function p_at(ctx,size,amt,width,color,x,y,tilt){
ctx.strokeStyle = 'rgba(0,0,0,0)';
ctx.lineCap = 'butt';
ctx.lineJoin = 'miter';
ctx.miterLimit = 4;
ctx.save();
ctx.restore();
ctx.save();
ctx.restore();
ctx.save();
ctx.save();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,31.428571),adj(size,amt,35.357143));
ctx.bezierCurveTo(adj(size,amt,31.428571),adj(size,amt,35.357143),adj(size,amt,28.417058),adj(size,amt,30.852652),adj(size,amt,26.25),adj(size,amt,31.25));
ctx.bezierCurveTo(adj(size,amt,19.161127),adj(size,amt,32.549804),adj(size,amt,11.791078),adj(size,amt,47.124936),adj(size,amt,16.964285),adj(size,amt,52.142858000000004));
ctx.bezierCurveTo(adj(size,amt,19.918121),adj(size,amt,55.008027000000006),adj(size,amt,29.771501),adj(size,amt,42.53894100000001),adj(size,amt,33.214286),adj(size,amt,32.5));
ctx.bezierCurveTo(adj(size,amt,31.971851),adj(size,amt,41.119158),adj(size,amt,29.457988),adj(size,amt,48.163849),adj(size,amt,32.142857),adj(size,amt,55.178571000000005));
ctx.bezierCurveTo(adj(size,amt,36.616244),adj(size,amt,55.97953400000001),adj(size,amt,42.980311),adj(size,amt,48.821744),adj(size,amt,44.642857),adj(size,amt,43.035714000000006));
ctx.bezierCurveTo(adj(size,amt,46.863549),adj(size,amt,35.307208),adj(size,amt,45.688037),adj(size,amt,25.426988000000005),adj(size,amt,38.928571),adj(size,amt,21.071428000000004));
ctx.bezierCurveTo(adj(size,amt,31.911238),adj(size,amt,16.549708),adj(size,amt,18.102684),adj(size,amt,18.7687),adj(size,amt,13.214286),adj(size,amt,25.535714));
ctx.bezierCurveTo(adj(size,amt,3.6069703),adj(size,amt,38.835131),adj(size,amt,-1.8551405),adj(size,amt,51.248064),adj(size,amt,4.8214286),adj(size,amt,62.321429));
ctx.bezierCurveTo(adj(size,amt,12.992929),adj(size,amt,75.874198),adj(size,amt,39.107143),adj(size,amt,63.214286),adj(size,amt,39.107143),adj(size,amt,63.214286));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();
ctx.restore();
}


function p_back_slash(ctx,size,amt,width,color,x,y,tilt){
ctx.strokeStyle = 'rgba(0,0,0,0)';
ctx.lineCap = 'butt';
ctx.lineJoin = 'miter';
ctx.miterLimit = 4;
ctx.save();
ctx.restore();
ctx.save();
ctx.restore();
ctx.save();
ctx.save();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,2.3214285),adj(size,amt,4.1071428));
ctx.bezierCurveTo(adj(size,amt,2.5),adj(size,amt,5.8928571),adj(size,amt,5.9816946),adj(size,amt,10.263031),adj(size,amt,8.5714281),adj(size,amt,15.714286));
ctx.bezierCurveTo(adj(size,amt,12.069499),adj(size,amt,23.077545),adj(size,amt,19.329203),adj(size,amt,35.418003),adj(size,amt,23.035715),adj(size,amt,42.678571));
ctx.bezierCurveTo(adj(size,amt,26.26816),adj(size,amt,49.010505),adj(size,amt,28.545367),adj(size,amt,54.426047),adj(size,amt,31.071429),adj(size,amt,61.071429));
ctx.bezierCurveTo(adj(size,amt,32.724506),adj(size,amt,65.420226),adj(size,amt,35),adj(size,amt,74.464286),adj(size,amt,35),adj(size,amt,74.464286));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();
ctx.restore();
}


function p_colon(ctx,size,amt,width,color,x,y,tilt){
ctx.strokeStyle = 'rgba(0,0,0,0)';
ctx.lineCap = 'butt';
ctx.lineJoin = 'miter';
ctx.miterLimit = 4;
ctx.save();
ctx.restore();
ctx.save();
ctx.restore();
ctx.save();
ctx.save();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,5.8928571),adj(size,amt,32.678571));
ctx.bezierCurveTo(adj(size,amt,5.052563599999999),adj(size,amt,32.628330999999996),adj(size,amt,4.3100589),adj(size,amt,33.647315),adj(size,amt,4.1071428999999995),adj(size,amt,34.464286));
ctx.bezierCurveTo(adj(size,amt,3.9119846999999996),adj(size,amt,35.250024),adj(size,amt,4.073444899999999),adj(size,amt,36.475889),adj(size,amt,4.821428599999999),adj(size,amt,36.785714));
ctx.bezierCurveTo(adj(size,amt,5.879236799999999),adj(size,amt,37.223872),adj(size,amt,7.619624299999999),adj(size,amt,36.298626999999996),adj(size,amt,7.8571428999999995),adj(size,amt,35.178571));
ctx.bezierCurveTo(adj(size,amt,8.0769928),adj(size,amt,34.141833999999996),adj(size,amt,6.950759499999999),adj(size,amt,32.741817999999995),adj(size,amt,5.8928571),adj(size,amt,32.678571));
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.save();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,5.7142857),adj(size,amt,70.178571));
ctx.bezierCurveTo(adj(size,amt,4.8716655),adj(size,amt,70.103111),adj(size,amt,4.185868),adj(size,amt,71.300536),adj(size,amt,4.1071429),adj(size,amt,72.142857));
ctx.bezierCurveTo(adj(size,amt,4.0377384),adj(size,amt,72.885452),adj(size,amt,4.4877501),adj(size,amt,73.82602),adj(size,amt,5.1785714),adj(size,amt,74.107143));
ctx.bezierCurveTo(adj(size,amt,5.9284686),adj(size,amt,74.412307),adj(size,amt,7.1977452),adj(size,amt,74.143931),adj(size,amt,7.5),adj(size,amt,73.392857));
ctx.bezierCurveTo(adj(size,amt,7.9575834),adj(size,amt,72.255806),adj(size,amt,6.9350705),adj(size,amt,70.287897),adj(size,amt,5.7142857),adj(size,amt,70.178571));
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();
ctx.restore();
}


function p_dollar(ctx,size,amt,width,color,x,y,tilt){
ctx.strokeStyle = 'rgba(0,0,0,0)';
ctx.lineCap = 'butt';
ctx.lineJoin = 'miter';
ctx.miterLimit = 4;
ctx.save();
ctx.restore();
ctx.save();
ctx.restore();
ctx.save();
ctx.save();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,25.178571),adj(size,amt,4.9999999));
ctx.bezierCurveTo(adj(size,amt,25.178571),adj(size,amt,4.9999999),adj(size,amt,26.043175),adj(size,amt,13.806677999999998),adj(size,amt,26.428571),adj(size,amt,18.214286));
ctx.bezierCurveTo(adj(size,amt,27.14119),adj(size,amt,26.364196),adj(size,amt,28.00061),adj(size,amt,34.506974),adj(size,amt,28.392857000000003),adj(size,amt,42.678571000000005));
ctx.bezierCurveTo(adj(size,amt,29.114994000000003),adj(size,amt,57.722655),adj(size,amt,29.107142000000003),adj(size,amt,87.85714300000001),adj(size,amt,29.107142000000003),adj(size,amt,87.85714300000001));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.save();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,42.321428),adj(size,amt,27.5));
ctx.bezierCurveTo(adj(size,amt,42.321428),adj(size,amt,27.5),adj(size,amt,42.456305),adj(size,amt,20.83649),adj(size,amt,40),adj(size,amt,19.642857));
ctx.bezierCurveTo(adj(size,amt,28.129689),adj(size,amt,13.87452),adj(size,amt,5.7575263),adj(size,amt,23.64335),adj(size,amt,4.6428571),adj(size,amt,36.964285));
ctx.bezierCurveTo(adj(size,amt,3.4942202),adj(size,amt,50.691155),adj(size,amt,32.199115),adj(size,amt,34.591783),adj(size,amt,42.142857),adj(size,amt,42.678572));
ctx.bezierCurveTo(adj(size,amt,45.879359),adj(size,amt,45.717297),adj(size,amt,47.949105),adj(size,amt,54.937766),adj(size,amt,45.357143),adj(size,amt,60.714286));
ctx.bezierCurveTo(adj(size,amt,41.5445),adj(size,amt,69.211253),adj(size,amt,31.067792),adj(size,amt,76.474359),adj(size,amt,21.785714000000002),adj(size,amt,75.714286));
ctx.bezierCurveTo(adj(size,amt,11.839034),adj(size,amt,74.899792),adj(size,amt,8.9285714),adj(size,amt,65),adj(size,amt,8.9285714),adj(size,amt,65));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();
ctx.restore();
}


function p_double_quote(ctx,size,amt,width,color,x,y,tilt){
ctx.strokeStyle = 'rgba(0,0,0,0)';
ctx.lineCap = 'butt';
ctx.lineJoin = 'miter';
ctx.miterLimit = 4;
ctx.save();
ctx.restore();
ctx.save();
ctx.restore();
ctx.save();
ctx.save();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,8.9285714),adj(size,amt,1.6071428));
ctx.bezierCurveTo(adj(size,amt,8.9285714),adj(size,amt,1.6071428),adj(size,amt,7.086101299999999),adj(size,amt,7.2747859),adj(size,amt,5.892857099999999),adj(size,amt,10));
ctx.bezierCurveTo(adj(size,amt,5.166744499999998),adj(size,amt,11.658347),adj(size,amt,3.3928570999999987),adj(size,amt,14.821429),adj(size,amt,3.3928570999999987),adj(size,amt,14.821429));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.save();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,22.857143),adj(size,amt,4.6428571));
ctx.bezierCurveTo(adj(size,amt,22.678571),adj(size,amt,6.6071428),adj(size,amt,21.713955000000002),adj(size,amt,8.9866391),adj(size,amt,20.892857),adj(size,amt,11.071428999999998));
ctx.bezierCurveTo(adj(size,amt,19.897804),adj(size,amt,13.597893999999998),adj(size,amt,17.321429),adj(size,amt,18.392857),adj(size,amt,17.321429),adj(size,amt,18.392857));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();
ctx.restore();
}


function p_exclamation(ctx,size,amt,width,color,x,y,tilt){
ctx.strokeStyle = 'rgba(0,0,0,0)';
ctx.lineCap = 'butt';
ctx.lineJoin = 'miter';
ctx.miterLimit = 4;
ctx.save();
ctx.restore();
ctx.save();
ctx.restore();
ctx.save();
ctx.save();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,3.5714286),adj(size,amt,1.6071428));
ctx.bezierCurveTo(adj(size,amt,3.75),adj(size,amt,2.4999999),adj(size,amt,3.7417875),adj(size,amt,25.53658),adj(size,amt,3.9285714),adj(size,amt,37.5));
ctx.bezierCurveTo(adj(size,amt,4.0159384000000005),adj(size,amt,43.095822),adj(size,amt,4.2857143),adj(size,amt,54.285714),adj(size,amt,4.2857143),adj(size,amt,54.285714));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.save();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,3.3928571),adj(size,amt,70.178571));
ctx.bezierCurveTo(adj(size,amt,2.6087431),adj(size,amt,70.547758),adj(size,amt,2.3888216),adj(size,amt,71.861761),adj(size,amt,2.6785714),adj(size,amt,72.678571));
ctx.bezierCurveTo(adj(size,amt,2.9214830000000003),adj(size,amt,73.36334400000001),adj(size,amt,3.7481678),adj(size,amt,74.05143100000001),adj(size,amt,4.4642857),adj(size,amt,73.928571));
ctx.bezierCurveTo(adj(size,amt,5.4736251),adj(size,amt,73.755404),adj(size,amt,6.5222362),adj(size,amt,72.41581000000001),adj(size,amt,6.25),adj(size,amt,71.428571));
ctx.bezierCurveTo(adj(size,amt,5.973656),adj(size,amt,70.42643600000001),adj(size,amt,4.3333623),adj(size,amt,69.73575000000001),adj(size,amt,3.3928571),adj(size,amt,70.178571));
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();
ctx.restore();
}


function p_forward_slash(ctx,size,amt,width,color,x,y,tilt){
ctx.strokeStyle = 'rgba(0,0,0,0)';
ctx.lineCap = 'butt';
ctx.lineJoin = 'miter';
ctx.miterLimit = 4;
ctx.save();
ctx.restore();
ctx.save();
ctx.restore();
ctx.save();
ctx.save();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,35.535714),adj(size,amt,3.0357142));
ctx.bezierCurveTo(adj(size,amt,35.535714),adj(size,amt,3.0357142),adj(size,amt,31.969006999999998),adj(size,amt,12.767679000000001),adj(size,amt,26.607143),adj(size,amt,22.678571));
ctx.bezierCurveTo(adj(size,amt,20.766938),adj(size,amt,33.47363),adj(size,amt,15.851113),adj(size,amt,44.745915),adj(size,amt,10.714286),adj(size,amt,55.892857));
ctx.bezierCurveTo(adj(size,amt,7.8256419),adj(size,amt,62.16123),adj(size,amt,2.3214286),adj(size,amt,74.821429),adj(size,amt,2.3214286),adj(size,amt,74.821429));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();
ctx.restore();
}


function p_hash(ctx,size,amt,width,color,x,y,tilt){
ctx.strokeStyle = 'rgba(0,0,0,0)';
ctx.lineCap = 'butt';
ctx.lineJoin = 'miter';
ctx.miterLimit = 4;
ctx.save();
ctx.restore();
ctx.save();
ctx.restore();
ctx.save();
ctx.save();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,1.9642857),adj(size,amt,26.428571));
ctx.bezierCurveTo(adj(size,amt,2.6785714),adj(size,amt,26.428571),adj(size,amt,11.195189),adj(size,amt,24.661185000000003),adj(size,amt,15.714286),adj(size,amt,23.392857000000003));
ctx.bezierCurveTo(adj(size,amt,20.136408),adj(size,amt,22.151746000000003),adj(size,amt,24.35739),adj(size,amt,20.270398000000004),adj(size,amt,28.75),adj(size,amt,18.928571));
ctx.bezierCurveTo(adj(size,amt,31.815612),adj(size,amt,17.992107),adj(size,amt,38.035714),adj(size,amt,16.428571),adj(size,amt,38.035714),adj(size,amt,16.428571));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.save();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,41.428571),adj(size,amt,32.142857));
ctx.bezierCurveTo(adj(size,amt,41.428571),adj(size,amt,32.142857),adj(size,amt,29.766576999999998),adj(size,amt,35.3742),adj(size,amt,23.928570999999998),adj(size,amt,36.964286));
ctx.bezierCurveTo(adj(size,amt,19.289387),adj(size,amt,38.227851),adj(size,amt,14.745172),adj(size,amt,39.938424),adj(size,amt,10),adj(size,amt,40.714286));
ctx.bezierCurveTo(adj(size,amt,7.116166),adj(size,amt,41.185809),adj(size,amt,1.25),adj(size,amt,41.25),adj(size,amt,1.25),adj(size,amt,41.25));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.save();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,15.535714),adj(size,amt,8.0357142));
ctx.bezierCurveTo(adj(size,amt,15.535714),adj(size,amt,8.0357142),adj(size,amt,14.300441000000001),adj(size,amt,14.674091999999998),adj(size,amt,14.107143),adj(size,amt,18.035714));
ctx.bezierCurveTo(adj(size,amt,13.601233),adj(size,amt,26.833922),adj(size,amt,14.840021),adj(size,amt,35.651565),adj(size,amt,14.821429),adj(size,amt,44.464286));
ctx.bezierCurveTo(adj(size,amt,14.813429000000001),adj(size,amt,48.275661),adj(size,amt,14.464286),adj(size,amt,55.892857),adj(size,amt,14.464286),adj(size,amt,55.892857));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.save();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,28.035714),adj(size,amt,8.2142856));
ctx.bezierCurveTo(adj(size,amt,28.035714),adj(size,amt,8.2142856),adj(size,amt,27.567705999999998),adj(size,amt,21.8472),adj(size,amt,27.857142999999997),adj(size,amt,28.75));
ctx.bezierCurveTo(adj(size,amt,28.059375999999997),adj(size,amt,33.573066),adj(size,amt,28.364131999999998),adj(size,amt,38.391435),adj(size,amt,28.571429),adj(size,amt,43.214286));
ctx.bezierCurveTo(adj(size,amt,28.78117),adj(size,amt,48.093998),adj(size,amt,29.107142999999997),adj(size,amt,57.857143),adj(size,amt,29.107142999999997),adj(size,amt,57.857143));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();
ctx.restore();
}


function p_left_bracket(ctx,size,amt,width,color,x,y,tilt){
ctx.strokeStyle = 'rgba(0,0,0,0)';
ctx.lineCap = 'butt';
ctx.lineJoin = 'miter';
ctx.miterLimit = 4;
ctx.save();
ctx.restore();
ctx.save();
ctx.restore();
ctx.save();
ctx.save();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,18.035714),adj(size,amt,2.3214285));
ctx.bezierCurveTo(adj(size,amt,18.035714),adj(size,amt,2.3214285),adj(size,amt,8.470044999999999),adj(size,amt,11.651947),adj(size,amt,4.1071428999999995),adj(size,amt,28.214285));
ctx.bezierCurveTo(adj(size,amt,1.4838228999999994),adj(size,amt,38.172866),adj(size,amt,1.2407561999999994),adj(size,amt,49.930071),adj(size,amt,4.1071428999999995),adj(size,amt,59.821429));
ctx.bezierCurveTo(adj(size,amt,11.058509),adj(size,amt,83.80927700000001),adj(size,amt,26.428570999999998),adj(size,amt,91.428571),adj(size,amt,26.428570999999998),adj(size,amt,91.428571));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();
ctx.restore();
}


function p_minus(ctx,size,amt,width,color,x,y,tilt){
ctx.strokeStyle = 'rgba(0,0,0,0)';
ctx.lineCap = 'butt';
ctx.lineJoin = 'miter';
ctx.miterLimit = 4;
ctx.save();
ctx.restore();
ctx.save();
ctx.restore();
ctx.save();
ctx.save();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,2.8571428),adj(size,amt,47.857143));
ctx.bezierCurveTo(adj(size,amt,2.8571428),adj(size,amt,47.857143),adj(size,amt,11.923338),adj(size,amt,47.679614),adj(size,amt,16.607143),adj(size,amt,47.321429));
ctx.bezierCurveTo(adj(size,amt,20.583628),adj(size,amt,47.017334000000005),adj(size,amt,28.571429000000002),adj(size,amt,46.964286),adj(size,amt,28.571429000000002),adj(size,amt,46.964286));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();
ctx.restore();
}



function p_menu(ctx,size,amt,width,color,x,y,tilt){
ctx.strokeStyle = 'rgba(0,0,0,0)';
ctx.lineCap = 'butt';
ctx.lineJoin = 'miter';
ctx.miterLimit = 4;
ctx.save();
ctx.restore();
ctx.save();
ctx.restore();
ctx.save();
ctx.save();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1.5,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,2.8571428),adj(size,amt,47.857143));
ctx.bezierCurveTo(adj(size,amt,2.8571428),adj(size,amt,47.857143),adj(size,amt,11.923338),adj(size,amt,47.679614),adj(size,amt,16.607143),adj(size,amt,47.321429));
ctx.bezierCurveTo(adj(size,amt,20.583628),adj(size,amt,47.017334000000005),adj(size,amt,28.571429000000002),adj(size,amt,46.964286),adj(size,amt,28.571429000000002),adj(size,amt,46.964286));
ctx.fill();
ctx.stroke();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1.5,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,2.8571428),adj(size,amt,27.857143));
ctx.bezierCurveTo(adj(size,amt,2.8571428),adj(size,amt,27.857143),adj(size,amt,11.923338),adj(size,amt,27.679614),adj(size,amt,16.607143),adj(size,amt,27.321429));
ctx.bezierCurveTo(adj(size,amt,20.583628),adj(size,amt,27.017334000000005),adj(size,amt,28.571429000000002),adj(size,amt,26.964286),adj(size,amt,28.571429000000002),adj(size,amt,26.964286));
ctx.fill();
ctx.stroke();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1.5,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,2.8571428),adj(size,amt,67.857143));
ctx.bezierCurveTo(adj(size,amt,2.8571428),adj(size,amt,67.857143),adj(size,amt,11.923338),adj(size,amt,67.679614),adj(size,amt,16.607143),adj(size,amt,67.321429));
ctx.bezierCurveTo(adj(size,amt,20.583628),adj(size,amt,67.017334000000005),adj(size,amt,28.571429000000002),adj(size,amt,66.964286),adj(size,amt,28.571429000000002),adj(size,amt,66.964286));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();
ctx.restore();
}


function p_percent(ctx,size,amt,width,color,x,y,tilt){
ctx.strokeStyle = 'rgba(0,0,0,0)';
ctx.lineCap = 'butt';
ctx.lineJoin = 'miter';
ctx.miterLimit = 4;
ctx.save();
ctx.restore();
ctx.save();
ctx.restore();
ctx.save();
ctx.save();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,39.285714),adj(size,amt,15.178571));
ctx.bezierCurveTo(adj(size,amt,36.785714),adj(size,amt,20.178570999999998),adj(size,amt,30.550228999999998),adj(size,amt,26.013647),adj(size,amt,22.857142999999997),adj(size,amt,40.535714));
ctx.bezierCurveTo(adj(size,amt,19.252173),adj(size,amt,47.340736),adj(size,amt,15.003477999999998),adj(size,amt,53.802769999999995),adj(size,amt,11.607142999999997),adj(size,amt,60.714286));
ctx.bezierCurveTo(adj(size,amt,9.807794599999998),adj(size,amt,64.375946),adj(size,amt,6.785714299999997),adj(size,amt,71.964286),adj(size,amt,6.785714299999997),adj(size,amt,71.964286));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.save();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,13.392857),adj(size,amt,9.4642857));
ctx.bezierCurveTo(adj(size,amt,10.173615),adj(size,amt,8.8204374),adj(size,amt,3.5519234),adj(size,amt,13.799587),adj(size,amt,2.6785714),adj(size,amt,16.964286));
ctx.bezierCurveTo(adj(size,amt,0.95892068),adj(size,amt,23.195653),adj(size,amt,8.293488),adj(size,amt,29.606383),adj(size,amt,14.642857),adj(size,amt,28.392857));
ctx.bezierCurveTo(adj(size,amt,19.124538),adj(size,amt,27.536293999999998),adj(size,amt,20.461885),adj(size,amt,21.730032),adj(size,amt,19.464286),adj(size,amt,15.535713999999999));
ctx.bezierCurveTo(adj(size,amt,19.009207),adj(size,amt,12.710026),adj(size,amt,16.199376),adj(size,amt,10.025588999999998),adj(size,amt,13.392857000000001),adj(size,amt,9.464285699999998));
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.save();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,37.142858),adj(size,amt,52.5));
ctx.bezierCurveTo(adj(size,amt,37.142858),adj(size,amt,52.5),adj(size,amt,28.525180999999996),adj(size,amt,56.578874),adj(size,amt,27.499999999999996),adj(size,amt,60));
ctx.bezierCurveTo(adj(size,amt,26.338002999999997),adj(size,amt,63.877696),adj(size,amt,27.800075999999997),adj(size,amt,70.052706),adj(size,amt,31.607142999999997),adj(size,amt,71.428571));
ctx.bezierCurveTo(adj(size,amt,37.45406199999999),adj(size,amt,73.541634),adj(size,amt,45.895126),adj(size,amt,68.515534),adj(size,amt,46.428571),adj(size,amt,62.32142900000001));
ctx.bezierCurveTo(adj(size,amt,47.256006),adj(size,amt,52.71364900000001),adj(size,amt,40.714286),adj(size,amt,51.07142900000001),adj(size,amt,40.714286),adj(size,amt,51.07142900000001));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();
ctx.restore();
}


function p_period(ctx,size,amt,width,color,x,y,tilt){
ctx.strokeStyle = 'rgba(0,0,0,0)';
ctx.lineCap = 'butt';
ctx.lineJoin = 'miter';
ctx.miterLimit = 4;
ctx.save();
ctx.restore();
ctx.save();
ctx.restore();
ctx.save();
ctx.save();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,4.6428571),adj(size,amt,1022.1836));
ctx.bezierCurveTo(adj(size,amt,2.9909236999999997),adj(size,amt,1022.6024),adj(size,amt,2.9883936999999996),adj(size,amt,1025.3193999999999),adj(size,amt,4.6205611),adj(size,amt,1025.8211999999999));
ctx.bezierCurveTo(adj(size,amt,6.6631781),adj(size,amt,1026.4288999999999),adj(size,amt,6.6174139),adj(size,amt,1022.0383999999999),adj(size,amt,4.7749064),adj(size,amt,1023.5438999999999));
ctx.lineTo(adj(size,amt,4.6620433),adj(size,amt,1023.8362999999999));
ctx.lineTo(adj(size,amt,4.642863299999999),adj(size,amt,1024.147));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();
ctx.restore();
}


function p_plus(ctx,size,amt,width,color,x,y,tilt){
ctx.strokeStyle = 'rgba(0,0,0,0)';
ctx.lineCap = 'butt';
ctx.lineJoin = 'miter';
ctx.miterLimit = 4;
ctx.save();
ctx.restore();
ctx.save();
ctx.restore();
ctx.save();
ctx.save();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,2.1428571),adj(size,amt,48.392857));
ctx.bezierCurveTo(adj(size,amt,2.1428571),adj(size,amt,48.392857),adj(size,amt,13.926514000000001),adj(size,amt,47.769791),adj(size,amt,19.821429000000002),adj(size,amt,47.857143));
ctx.bezierCurveTo(adj(size,amt,25.78386),adj(size,amt,47.945493),adj(size,amt,37.678571000000005),adj(size,amt,48.928571),adj(size,amt,37.678571000000005),adj(size,amt,48.928571));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.save();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,18.571429),adj(size,amt,31.964286));
ctx.bezierCurveTo(adj(size,amt,18.75),adj(size,amt,32.678572),adj(size,amt,18.736482),adj(size,amt,42.010936),adj(size,amt,18.75),adj(size,amt,46.964286));
ctx.bezierCurveTo(adj(size,amt,18.76466),adj(size,amt,52.337588000000004),adj(size,amt,18.928571),adj(size,amt,64.10714300000001),adj(size,amt,18.928571),adj(size,amt,64.10714300000001));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();
ctx.restore();
}


function p_question_mark(ctx,size,amt,width,color,x,y,tilt){
ctx.strokeStyle = 'rgba(0,0,0,0)';
ctx.lineCap = 'butt';
ctx.lineJoin = 'miter';
ctx.miterLimit = 4;
ctx.save();
ctx.restore();
ctx.save();
ctx.restore();
ctx.save();
ctx.save();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,3.5714286),adj(size,amt,27.5));
ctx.bezierCurveTo(adj(size,amt,3.5714286),adj(size,amt,27.5),adj(size,amt,2.5189063999999997),adj(size,amt,22.91529),adj(size,amt,3.3928571),adj(size,amt,20.892857));
ctx.bezierCurveTo(adj(size,amt,4.8478033),adj(size,amt,17.525927),adj(size,amt,8.7691003),adj(size,amt,15.556121999999998),adj(size,amt,12.321429),adj(size,amt,14.642858));
ctx.bezierCurveTo(adj(size,amt,16.460942),adj(size,amt,13.578634000000001),adj(size,amt,21.952376),adj(size,amt,14.860457),adj(size,amt,25),adj(size,amt,17.857142));
ctx.bezierCurveTo(adj(size,amt,31.032269),adj(size,amt,23.788587),adj(size,amt,35.121696),adj(size,amt,34.256198999999995),adj(size,amt,28.75),adj(size,amt,39.821428999999995));
ctx.bezierCurveTo(adj(size,amt,21.936654),adj(size,amt,45.772408999999996),adj(size,amt,17.849305),adj(size,amt,43.770123999999996),adj(size,amt,12.678571000000002),adj(size,amt,46.964285999999994));
ctx.bezierCurveTo(adj(size,amt,13.542397000000001),adj(size,amt,50.682683999999995),adj(size,amt,14.107143),adj(size,amt,59.821428999999995),adj(size,amt,14.107143),adj(size,amt,59.821428999999995));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.save();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,14.821429),adj(size,amt,70.535714));
ctx.bezierCurveTo(adj(size,amt,14.046522),adj(size,amt,71.129523),adj(size,amt,12.433398),adj(size,amt,71.34744),adj(size,amt,12.5),adj(size,amt,72.321429));
ctx.bezierCurveTo(adj(size,amt,12.56548),adj(size,amt,73.27898499999999),adj(size,amt,14.04568),adj(size,amt,73.85234399999999),adj(size,amt,15),adj(size,amt,73.75));
ctx.bezierCurveTo(adj(size,amt,15.796245),adj(size,amt,73.66461),adj(size,amt,16.804566),adj(size,amt,72.943446),adj(size,amt,16.785714),adj(size,amt,72.142857));
ctx.bezierCurveTo(adj(size,amt,16.765804),adj(size,amt,71.297099),adj(size,amt,16.203039999999998),adj(size,amt,69.476989),adj(size,amt,14.821428999999998),adj(size,amt,70.53571400000001));
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();
ctx.restore();
}


function p_right_bracket(ctx,size,amt,width,color,x,y,tilt){
ctx.strokeStyle = 'rgba(0,0,0,0)';
ctx.lineCap = 'butt';
ctx.lineJoin = 'miter';
ctx.miterLimit = 4;
ctx.save();
ctx.restore();
ctx.save();
ctx.restore();
ctx.save();
ctx.save();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,1.9642857),adj(size,amt,1.2499999));
ctx.bezierCurveTo(adj(size,amt,1.9642857),adj(size,amt,1.2499999),adj(size,amt,14.542848),adj(size,amt,11.015748),adj(size,amt,18.75),adj(size,amt,17.321427999999997));
ctx.bezierCurveTo(adj(size,amt,23.9351),adj(size,amt,25.092854999999997),adj(size,amt,27.028102),adj(size,amt,35.354958999999994),adj(size,amt,28.035714),adj(size,amt,44.64285699999999));
ctx.bezierCurveTo(adj(size,amt,29.125200999999997),adj(size,amt,54.68545799999999),adj(size,amt,26.091499),adj(size,amt,67.27820399999999),adj(size,amt,22.678572),adj(size,amt,76.78571399999998));
ctx.bezierCurveTo(adj(size,amt,20.205589),adj(size,amt,83.67478699999998),adj(size,amt,12.678571),adj(size,amt,91.78571399999998),adj(size,amt,12.678571),adj(size,amt,91.78571399999998));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();
ctx.restore();
}


function p_single_quote(ctx,size,amt,width,color,x,y,tilt){
ctx.strokeStyle = 'rgba(0,0,0,0)';
ctx.lineCap = 'butt';
ctx.lineJoin = 'miter';
ctx.miterLimit = 4;
ctx.save();
ctx.restore();
ctx.save();
ctx.restore();
ctx.save();
ctx.save();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,8.9285714),adj(size,amt,2.3214285));
ctx.bezierCurveTo(adj(size,amt,8.9285714),adj(size,amt,2.3214285),adj(size,amt,7.944380099999999),adj(size,amt,7.409513500000001),adj(size,amt,6.9642857),adj(size,amt,9.8214286));
ctx.bezierCurveTo(adj(size,amt,6.2371346999999995),adj(size,amt,11.610876000000001),adj(size,amt,4.2857142999999995),adj(size,amt,14.821429000000002),adj(size,amt,4.2857142999999995),adj(size,amt,14.821429000000002));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();
ctx.restore();
}


function p_tilda(ctx,size,amt,width,color,x,y,tilt){
ctx.strokeStyle = 'rgba(0,0,0,0)';
ctx.lineCap = 'butt';
ctx.lineJoin = 'miter';
ctx.miterLimit = 4;
ctx.save();
ctx.restore();
ctx.save();
ctx.restore();
ctx.save();
ctx.save();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,1.0714285),adj(size,amt,996.46932));
ctx.bezierCurveTo(adj(size,amt,1.0714285),adj(size,amt,996.46932),adj(size,amt,4.7266089),adj(size,amt,992.50854),adj(size,amt,8.3928571),adj(size,amt,991.8264700000001));
ctx.bezierCurveTo(adj(size,amt,15.535377),adj(size,amt,990.4976600000001),adj(size,amt,28.174581),adj(size,amt,995.20829),adj(size,amt,35),adj(size,amt,992.71932));
ctx.bezierCurveTo(adj(size,amt,38.483339),adj(size,amt,991.4490800000001),adj(size,amt,40),adj(size,amt,985.75504),adj(size,amt,40),adj(size,amt,985.75504));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();
ctx.restore();
}



function logoB(ctx,size,amt,width,color,x,y,tilt){
ctx.strokeStyle = 'rgba(0,0,0,0)';
ctx.lineCap = 'butt';
ctx.lineJoin = 'miter';
ctx.miterLimit = 4;
ctx.save();
ctx.restore();
ctx.save();
ctx.restore();
ctx.save();
ctx.save();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,16.414979),adj(size,amt,64.392123));
ctx.bezierCurveTo(adj(size,amt,16.414979),adj(size,amt,64.392123),adj(size,amt,16.313478),adj(size,amt,59.060638999999995),adj(size,amt,15.909902999999998),adj(size,amt,56.310902));
ctx.bezierCurveTo(adj(size,amt,14.866203),adj(size,amt,49.199724),adj(size,amt,12.242692),adj(size,amt,42.37982),adj(size,amt,9.8489873),adj(size,amt,35.602775));
ctx.bezierCurveTo(adj(size,amt,7.6045786),adj(size,amt,29.248416),adj(size,amt,5.9470521),adj(size,amt,23.12807),adj(size,amt,2.7779195),adj(size,amt,16.662415));
ctx.bezierCurveTo(adj(size,amt,6.8645533),adj(size,amt,8.9155269),adj(size,amt,22.492766),adj(size,amt,6.7860011),adj(size,amt,28.789347),adj(size,amt,12.874343));
ctx.bezierCurveTo(adj(size,amt,32.872277),adj(size,amt,16.822243999999998),adj(size,amt,28.130574),adj(size,amt,22.45365),adj(size,amt,24.748737),adj(size,amt,27.016479));
ctx.bezierCurveTo(adj(size,amt,21.428379),adj(size,amt,31.496358999999998),adj(size,amt,20.849449999999997),adj(size,amt,30.197498),adj(size,amt,10.101524999999999),adj(size,amt,35.097699));
ctx.bezierCurveTo(adj(size,amt,16.857194999999997),adj(size,amt,32.106358),adj(size,amt,23.932707),adj(size,amt,29.651961),adj(size,amt,29.294423),adj(size,amt,31.814702999999998));
ctx.bezierCurveTo(adj(size,amt,35.695015),adj(size,amt,34.396493),adj(size,amt,39.388577999999995),adj(size,amt,39.474424),adj(size,amt,37.123106),adj(size,amt,48.229682));
ctx.bezierCurveTo(adj(size,amt,35.865443),adj(size,amt,53.090112),adj(size,amt,26.769042),adj(size,amt,55.553287999999995),adj(size,amt,26.769042),adj(size,amt,55.553287999999995));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();
ctx.restore();
}


function logoY(ctx,size,amt,width,color,x,y,tilt){
ctx.strokeStyle = 'rgba(0,0,0,0)';
ctx.lineCap = 'butt';
ctx.lineJoin = 'miter';
ctx.miterLimit = 4;
ctx.save();
ctx.restore();
ctx.save();
ctx.restore();
ctx.save();
ctx.save();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,9.343911),adj(size,amt,30.046936));
ctx.bezierCurveTo(adj(size,amt,9.343911),adj(size,amt,30.046936),adj(size,amt,10.809114000000001),adj(size,amt,34.302735),adj(size,amt,12.121831),adj(size,amt,36.865466));
ctx.bezierCurveTo(adj(size,amt,14.195644),adj(size,amt,40.914035),adj(size,amt,16.840832),adj(size,amt,45.077147999999994),adj(size,amt,20.708127),adj(size,amt,47.472068));
ctx.bezierCurveTo(adj(size,amt,23.347406),adj(size,amt,49.106508),adj(size,amt,25.478631),adj(size,amt,47.470368),adj(size,amt,28.031733000000003),adj(size,amt,45.704301));
ctx.bezierCurveTo(adj(size,amt,33.296285000000005),adj(size,amt,42.062711),adj(size,amt,33.139435000000006),adj(size,amt,35.201015),adj(size,amt,37.628182),adj(size,amt,37.118004));
ctx.bezierCurveTo(adj(size,amt,29.562882000000002),adj(size,amt,49.819023),adj(size,amt,31.011073000000003),adj(size,amt,61.528836),adj(size,amt,27.274119000000002),adj(size,amt,72.220805));
ctx.bezierCurveTo(adj(size,amt,25.406845000000004),adj(size,amt,77.563348),adj(size,amt,23.895682),adj(size,amt,84.72963),adj(size,amt,19.192898000000003),adj(size,amt,87.878169));
ctx.bezierCurveTo(adj(size,amt,10.132706000000002),adj(size,amt,93.944017),adj(size,amt,11.245535000000004),adj(size,amt,95.512881),adj(size,amt,3.788072000000003),adj(size,amt,96.464466));
ctx.bezierCurveTo(adj(size,amt,-0.4639921299999967),adj(size,amt,97.007037),adj(size,amt,-7.323605899999997),adj(size,amt,93.686547),adj(size,amt,-7.323605899999997),adj(size,amt,93.686547));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();
ctx.restore();
}


function logoT(ctx,size,amt,width,color,x,y,tilt){
ctx.strokeStyle = 'rgba(0,0,0,0)';
ctx.lineCap = 'butt';
ctx.lineJoin = 'miter';
ctx.miterLimit = 4;
ctx.save();
ctx.restore();
ctx.save();
ctx.restore();
ctx.save();
ctx.save();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,3.7880721),adj(size,amt,33.835008));
ctx.bezierCurveTo(adj(size,amt,3.7880721),adj(size,amt,33.835008),adj(size,amt,10.993575),adj(size,amt,32.189334),adj(size,amt,15.657364000000001),adj(size,amt,31.562165));
ctx.bezierCurveTo(adj(size,amt,20.431044),adj(size,amt,30.920218),adj(size,amt,27.779195),adj(size,amt,30.299474),adj(size,amt,27.779195),adj(size,amt,30.299474));
ctx.fill();
ctx.stroke();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,17.930208),adj(size,amt,20.955564));
ctx.bezierCurveTo(adj(size,amt,17.930208),adj(size,amt,20.955564),adj(size,amt,14.011819000000001),adj(size,amt,30.557591),adj(size,amt,15.152288),adj(size,amt,35.350237));
ctx.bezierCurveTo(adj(size,amt,16.973275),adj(size,amt,43.002651),adj(size,amt,16.575758),adj(size,amt,48.687454),adj(size,amt,20.203051000000002),adj(size,amt,52.52283));
ctx.bezierCurveTo(adj(size,amt,22.267599),adj(size,amt,54.705814),adj(size,amt,29.294424000000003),adj(size,amt,54.795674),adj(size,amt,29.294424000000003),adj(size,amt,54.795674));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();
ctx.restore();
}

function logoE(ctx,size,amt,width,color,x,y,tilt){
ctx.strokeStyle = 'rgba(0,0,0,0)';
ctx.lineCap = 'butt';
ctx.lineJoin = 'miter';
ctx.miterLimit = 4;
ctx.save();
ctx.restore();
ctx.save();
ctx.restore();
ctx.save();
ctx.save();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,13.131983),adj(size,amt,10.6015));
ctx.bezierCurveTo(adj(size,amt,13.131983),adj(size,amt,10.6015),adj(size,amt,15.01456),adj(size,amt,25.745862),adj(size,amt,14.647212),adj(size,amt,33.329932));
ctx.bezierCurveTo(adj(size,amt,14.271604),adj(size,amt,41.084534),adj(size,amt,10.85914),adj(size,amt,56.310902),adj(size,amt,10.85914),adj(size,amt,56.310902));
ctx.fill();
ctx.stroke();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,8.5862967),adj(size,amt,17.672568));
ctx.bezierCurveTo(adj(size,amt,8.5862967),adj(size,amt,17.672568),adj(size,amt,16.876801),adj(size,amt,15.111754999999999),adj(size,amt,21.970818),adj(size,amt,14.137033999999998));
ctx.bezierCurveTo(adj(size,amt,28.659168),adj(size,amt,12.857243999999998),adj(size,amt,42.173868999999996),adj(size,amt,11.106575999999999),adj(size,amt,42.173868999999996),adj(size,amt,11.106575999999999));
ctx.fill();
ctx.stroke();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,12.626907),adj(size,amt,28.279169));
ctx.bezierCurveTo(adj(size,amt,12.626907),adj(size,amt,28.279169),adj(size,amt,20.323352),adj(size,amt,33.716281),adj(size,amt,24.748737),adj(size,amt,35.097699));
ctx.bezierCurveTo(adj(size,amt,28.218935),adj(size,amt,36.180948),adj(size,amt,35.607877),adj(size,amt,36.107852),adj(size,amt,35.607877),adj(size,amt,36.107852));
ctx.fill();
ctx.stroke();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,3.788072),adj(size,amt,59.088822));
ctx.bezierCurveTo(adj(size,amt,3.788072),adj(size,amt,59.088822),adj(size,amt,10.220306),adj(size,amt,55.185911),adj(size,amt,14.394674),adj(size,amt,54.038059000000004));
ctx.bezierCurveTo(adj(size,amt,21.068137),adj(size,amt,52.20301500000001),adj(size,amt,35.102801),adj(size,amt,52.522830000000006),adj(size,amt,35.102801),adj(size,amt,52.522830000000006));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();
ctx.restore();
}


function logoC(ctx,size,amt,width,color,x,y,tilt){
ctx.strokeStyle = 'rgba(0,0,0,0)';
ctx.lineCap = 'butt';
ctx.lineJoin = 'miter';
ctx.miterLimit = 4;
ctx.save();
ctx.restore();
ctx.save();
ctx.restore();
ctx.save();
ctx.save();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,32.324882),adj(size,amt,22.218254));
ctx.bezierCurveTo(adj(size,amt,32.324882),adj(size,amt,22.218254),adj(size,amt,30.781599000000003),adj(size,amt,19.18035),adj(size,amt,28.536809),adj(size,amt,18.177644));
ctx.bezierCurveTo(adj(size,amt,23.914964),adj(size,amt,16.113151000000002),adj(size,amt,17.738359000000003),adj(size,amt,16.605611),adj(size,amt,13.384521000000001),adj(size,amt,19.187796000000002));
ctx.bezierCurveTo(adj(size,amt,8.664407),adj(size,amt,21.987213000000004),adj(size,amt,4.766475000000002),adj(size,amt,27.594013000000004),adj(size,amt,4.5456865),adj(size,amt,33.077394));
ctx.bezierCurveTo(adj(size,amt,4.277534500000001),adj(size,amt,39.737069),adj(size,amt,7.1140584),adj(size,amt,45.895658999999995),adj(size,amt,12.879444000000001),adj(size,amt,49.239834));
ctx.bezierCurveTo(adj(size,amt,15.065150000000001),adj(size,amt,50.507639000000005),adj(size,amt,17.932994),adj(size,amt,50.854633),adj(size,amt,20.203051000000002),adj(size,amt,49.744911));
ctx.bezierCurveTo(adj(size,amt,21.384375000000002),adj(size,amt,49.167418000000005),adj(size,amt,23.486047000000003),adj(size,amt,47.472068),adj(size,amt,23.486047000000003),adj(size,amt,47.472068));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();
ctx.restore();
}


function logoA(ctx,size,amt,width,color,x,y,tilt){
ctx.strokeStyle = 'rgba(0,0,0,0)';
ctx.lineCap = 'butt';
ctx.lineJoin = 'miter';
ctx.miterLimit = 4;
ctx.save();
ctx.restore();
ctx.save();
ctx.restore();
ctx.save();
ctx.save();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,19.697975),adj(size,amt,4.7931227));
ctx.bezierCurveTo(adj(size,amt,20.708127),adj(size,amt,8.8337328),adj(size,amt,22.551242),adj(size,amt,10.689985),adj(size,amt,23.991123),adj(size,amt,13.631958));
ctx.bezierCurveTo(adj(size,amt,27.003134000000003),adj(size,amt,19.786115),adj(size,amt,31.355827),adj(size,amt,23.821421),adj(size,amt,33.082495),adj(size,amt,32.067240999999996));
ctx.bezierCurveTo(adj(size,amt,34.774336),adj(size,amt,40.146738),adj(size,amt,38.133259),adj(size,amt,56.310902),adj(size,amt,38.133259),adj(size,amt,56.310902));
ctx.fill();
ctx.stroke();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,23.991123),adj(size,amt,15.652263));
ctx.bezierCurveTo(adj(size,amt,23.991123),adj(size,amt,15.652263),adj(size,amt,15.117473000000002),adj(size,amt,29.713543),adj(size,amt,11.364216000000003),adj(size,amt,37.118004));
ctx.bezierCurveTo(adj(size,amt,8.380727),adj(size,amt,43.00386),adj(size,amt,3.5355339),adj(size,amt,55.30075),adj(size,amt,3.5355339),adj(size,amt,55.30075));
ctx.fill();
ctx.stroke();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,10.354064),adj(size,amt,41.411152));
ctx.bezierCurveTo(adj(size,amt,10.354064),adj(size,amt,41.411152),adj(size,amt,18.549863),adj(size,amt,39.307422),adj(size,amt,22.728433),adj(size,amt,39.390848));
ctx.bezierCurveTo(adj(size,amt,26.508260999999997),adj(size,amt,39.466308),adj(size,amt,33.840109999999996),adj(size,amt,41.663691),adj(size,amt,33.840109999999996),adj(size,amt,41.663691));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();
ctx.restore();
}



function logoM(ctx,size,amt,width,color,x,y,tilt){
ctx.strokeStyle = 'rgba(0,0,0,0)';
ctx.lineCap = 'butt';
ctx.lineJoin = 'miter';
ctx.miterLimit = 4;
ctx.save();
ctx.restore();
ctx.save();
ctx.restore();
ctx.save();
ctx.save();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,4.7982246),adj(size,amt,24.743636));
ctx.lineTo(adj(size,amt,5.0507628),adj(size,amt,47.472066999999996));
ctx.lineTo(adj(size,amt,5.0507628),adj(size,amt,45.956838999999995));
ctx.fill();
ctx.stroke();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,6.3134534),adj(size,amt,37.62308));
ctx.bezierCurveTo(adj(size,amt,6.3134534),adj(size,amt,37.62308),adj(size,amt,10.997752),adj(size,amt,28.466535),adj(size,amt,15.152288),adj(size,amt,28.784246000000003));
ctx.bezierCurveTo(adj(size,amt,19.836093),adj(size,amt,29.142432000000003),adj(size,amt,21.720222),adj(size,amt,35.79551),adj(size,amt,23.486047),adj(size,amt,40.148462));
ctx.bezierCurveTo(adj(size,amt,24.636158),adj(size,amt,42.983611),adj(size,amt,23.563477),adj(size,amt,45.409087),adj(size,amt,24.748737),adj(size,amt,49.239835));
ctx.bezierCurveTo(adj(size,amt,24.504486),adj(size,amt,40.23081),adj(size,amt,31.312727),adj(size,amt,33.588612999999995),adj(size,amt,38.385796),adj(size,amt,33.582471));
ctx.bezierCurveTo(adj(size,amt,43.000329),adj(size,amt,33.578471),adj(size,amt,44.20169),adj(size,amt,38.485832),adj(size,amt,45.456863999999996),adj(size,amt,42.926381));
ctx.bezierCurveTo(adj(size,amt,46.81727299999999),adj(size,amt,47.739224),adj(size,amt,43.436558999999995),adj(size,amt,57.573594),adj(size,amt,43.436558999999995),adj(size,amt,57.573594));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();
ctx.restore();
}

function logoP(ctx,size,amt,width,color,x,y,tilt){
ctx.strokeStyle = 'rgba(0,0,0,0)';
ctx.lineCap = 'butt';
ctx.lineJoin = 'miter';
ctx.miterLimit = 4;
ctx.save();
ctx.restore();
ctx.save();
ctx.restore();
ctx.save();
ctx.save();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,6.5659915),adj(size,amt,77.524106));
ctx.bezierCurveTo(adj(size,amt,6.5659915),adj(size,amt,77.524106),adj(size,amt,3.9751829),adj(size,amt,65.17580600000001),adj(size,amt,4.0406102),adj(size,amt,58.331208000000004));
ctx.bezierCurveTo(adj(size,amt,4.1898152),adj(size,amt,42.72229900000001),adj(size,amt,4.357353),adj(size,amt,39.403773),adj(size,amt,7.576143999999999),adj(size,amt,33.835008));
ctx.bezierCurveTo(adj(size,amt,11.093067),adj(size,amt,27.75045),adj(size,amt,19.809179),adj(size,amt,25.567907),adj(size,amt,24.496199),adj(size,amt,30.804550000000003));
ctx.bezierCurveTo(adj(size,amt,28.119362000000002),adj(size,amt,34.852584),adj(size,amt,30.150689),adj(size,amt,37.320591),adj(size,amt,25.253813),adj(size,amt,43.683996));
ctx.bezierCurveTo(adj(size,amt,21.021036000000002),adj(size,amt,49.184417),adj(size,amt,10.606602),adj(size,amt,54.543135),adj(size,amt,10.606602),adj(size,amt,54.543135));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();
ctx.restore();
}


function logoLaptop(ctx,size,amt,width,color,x,y,tilt){

ctx.strokeStyle = 'rgba(0,0,0,0)';
ctx.lineCap = 'butt';
ctx.lineJoin = 'miter';
ctx.miterLimit = 4;
ctx.save();
ctx.restore();
ctx.save();
ctx.restore();
ctx.save();
ctx.save();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,19.6875),adj(size,amt,26.5625));
ctx.bezierCurveTo(adj(size,amt,19.6875),adj(size,amt,26.5625),adj(size,amt,18.751389),adj(size,amt,19.4174),adj(size,amt,19.196428),adj(size,amt,15.892857));
ctx.bezierCurveTo(adj(size,amt,19.949973),adj(size,amt,9.9250686),adj(size,amt,24.285715),adj(size,amt,2.366071399999999),adj(size,amt,24.285715),adj(size,amt,2.366071399999999));
ctx.bezierCurveTo(adj(size,amt,24.285715),adj(size,amt,2.366071399999999),adj(size,amt,31.948021),adj(size,amt,2.1337650999999993),adj(size,amt,35.758929),adj(size,amt,2.812499999999999));
ctx.bezierCurveTo(adj(size,amt,37.79739),adj(size,amt,3.1755562999999993),adj(size,amt,40.157432),adj(size,amt,3.8783382999999994),adj(size,amt,42.1875),adj(size,amt,4.285714199999999));
ctx.bezierCurveTo(adj(size,amt,47.688563),adj(size,amt,5.3896182999999995),adj(size,amt,54.320949),adj(size,amt,4.089396999999999),adj(size,amt,58.75),adj(size,amt,5.892857099999999));
ctx.bezierCurveTo(adj(size,amt,59.755261),adj(size,amt,8.221189499999998),adj(size,amt,60.105513),adj(size,amt,9.973175399999999),adj(size,amt,59.776786),adj(size,amt,12.723213999999999));
ctx.bezierCurveTo(adj(size,amt,59.311038),adj(size,amt,16.619536),adj(size,amt,56.793811),adj(size,amt,20.634506),adj(size,amt,56.160714),adj(size,amt,24.910714));
ctx.bezierCurveTo(adj(size,amt,55.737846),adj(size,amt,27.766945999999997),adj(size,amt,54.064057999999996),adj(size,amt,30.692583999999997),adj(size,amt,54.285714),adj(size,amt,33.571428999999995));
ctx.bezierCurveTo(adj(size,amt,54.410018),adj(size,amt,35.185872999999994),adj(size,amt,56.060764),adj(size,amt,35.726223999999995),adj(size,amt,55.840555),adj(size,amt,37.330403));
ctx.bezierCurveTo(adj(size,amt,55.705827),adj(size,amt,38.311873),adj(size,amt,55.515872),adj(size,amt,38.323153),adj(size,amt,54.612219),adj(size,amt,39.51473));
ctx.bezierCurveTo(adj(size,amt,53.193430000000006),adj(size,amt,41.385579),adj(size,amt,49.795166),adj(size,amt,42.472509),adj(size,amt,48.161983000000006),adj(size,amt,44.159445));
ctx.bezierCurveTo(adj(size,amt,46.605655000000006),adj(size,amt,45.766996),adj(size,amt,44.30364800000001),adj(size,amt,49.509553),adj(size,amt,42.587428),adj(size,amt,50.945159));
ctx.bezierCurveTo(adj(size,amt,38.363420000000005),adj(size,amt,54.066888),adj(size,amt,34.191262),adj(size,amt,53.600593999999994),adj(size,amt,31.160715000000003),adj(size,amt,54.285714999999996));
ctx.bezierCurveTo(adj(size,amt,31.870929000000004),adj(size,amt,51.663762999999996),adj(size,amt,35.453091),adj(size,amt,47.293144),adj(size,amt,38.526786),adj(size,amt,43.16964299999999));
ctx.bezierCurveTo(adj(size,amt,40.077825000000004),adj(size,amt,41.08885399999999),adj(size,amt,43.244402),adj(size,amt,38.95962299999999),adj(size,amt,45.669643),adj(size,amt,38.03571399999999));
ctx.bezierCurveTo(adj(size,amt,48.79699),adj(size,amt,36.84433399999999),adj(size,amt,52.471939),adj(size,amt,37.81701999999999),adj(size,amt,54.527421000000004),adj(size,amt,35.41655999999999));
ctx.bezierCurveTo(adj(size,amt,55.204896000000005),adj(size,amt,33.983704999999986),adj(size,amt,53.319855000000004),adj(size,amt,35.04258199999999),adj(size,amt,52.008928000000004),adj(size,amt,34.15178599999999));
ctx.bezierCurveTo(adj(size,amt,49.99038),adj(size,amt,32.78014899999999),adj(size,amt,47.01184500000001),adj(size,amt,32.55064799999999),adj(size,amt,44.64285700000001),adj(size,amt,31.964285999999987));
ctx.bezierCurveTo(adj(size,amt,42.428284000000005),adj(size,amt,31.416144999999986),adj(size,amt,40.38656),adj(size,amt,30.791300999999986),adj(size,amt,38.12500000000001),adj(size,amt,30.491070999999987));
ctx.bezierCurveTo(adj(size,amt,36.76785900000001),adj(size,amt,30.31090599999999),adj(size,amt,35.313258000000005),adj(size,amt,29.78923599999999),adj(size,amt,33.973214000000006),adj(size,amt,29.508927999999987));
ctx.bezierCurveTo(adj(size,amt,31.938182000000005),adj(size,amt,29.083242999999985),adj(size,amt,30.362551000000007),adj(size,amt,28.50586399999999),adj(size,amt,28.348215000000007),adj(size,amt,27.991070999999987));
ctx.bezierCurveTo(adj(size,amt,26.379807000000007),adj(size,amt,27.488015999999988),adj(size,amt,23.862767000000005),adj(size,amt,27.259818999999986),adj(size,amt,22.008928000000008),adj(size,amt,26.428570999999987));
ctx.bezierCurveTo(adj(size,amt,20.730515000000008),adj(size,amt,25.855339999999988),adj(size,amt,19.966040000000007),adj(size,amt,26.89735999999999),adj(size,amt,19.15178600000001),adj(size,amt,27.76785699999999));
ctx.bezierCurveTo(adj(size,amt,17.019129000000007),adj(size,amt,30.047822999999987),adj(size,amt,12.783615000000008),adj(size,amt,32.66565399999999),adj(size,amt,9.151785700000008),adj(size,amt,34.19642799999999));
ctx.bezierCurveTo(adj(size,amt,6.463546900000008),adj(size,amt,35.32948999999999),adj(size,amt,5.335865100000008),adj(size,amt,35.22665699999999),adj(size,amt,1.7857143000000084),adj(size,amt,37.72321499999999));
ctx.bezierCurveTo(adj(size,amt,4.418565900000008),adj(size,amt,41.00251199999999),adj(size,amt,6.359956100000009),adj(size,amt,42.26179899999999),adj(size,amt,9.642857100000008),adj(size,amt,44.15178599999999));
ctx.bezierCurveTo(adj(size,amt,12.258008000000007),adj(size,amt,45.657344999999985),adj(size,amt,15.452476000000008),adj(size,amt,46.16353499999999),adj(size,amt,18.035715000000007),adj(size,amt,47.72321499999999));
ctx.bezierCurveTo(adj(size,amt,19.766730000000006),adj(size,amt,48.76834799999999),adj(size,amt,20.361446000000008),adj(size,amt,49.95256999999999),adj(size,amt,22.224484000000007),adj(size,amt,50.73857799999999));
ctx.bezierCurveTo(adj(size,amt,24.144762000000007),adj(size,amt,51.548734999999986),adj(size,amt,26.597003000000008),adj(size,amt,50.93971199999999),adj(size,amt,28.57142900000001),adj(size,amt,51.607142999999986));
ctx.bezierCurveTo(adj(size,amt,30.09498000000001),adj(size,amt,52.122160999999984),adj(size,amt,30.71428600000001),adj(size,amt,53.303570999999984),adj(size,amt,30.71428600000001),adj(size,amt,53.303570999999984));
ctx.fill();
ctx.stroke();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,60.104605),adj(size,amt,33.109681));
ctx.bezierCurveTo(adj(size,amt,60.104605),adj(size,amt,33.109681),adj(size,amt,66.945041),adj(size,amt,35.822065),adj(size,amt,68.192622),adj(size,amt,38.897933));
ctx.bezierCurveTo(adj(size,amt,66.516773),adj(size,amt,41.824379),adj(size,amt,64.221527),adj(size,amt,44.138130000000004),adj(size,amt,61.785714),adj(size,amt,46.785714));
ctx.bezierCurveTo(adj(size,amt,60.503018),adj(size,amt,48.179929),adj(size,amt,57.678571),adj(size,amt,50.714286),adj(size,amt,57.678571),adj(size,amt,50.714286));
ctx.fill();
ctx.stroke();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,62.981553),adj(size,amt,47.140999));
ctx.bezierCurveTo(adj(size,amt,62.981553),adj(size,amt,47.140999),adj(size,amt,65.333119),adj(size,amt,52.557086),adj(size,amt,64.033176),adj(size,amt,54.484091));
ctx.bezierCurveTo(adj(size,amt,62.096160999999995),adj(size,amt,57.355475999999996),adj(size,amt,56.810877),adj(size,amt,58.352045),adj(size,amt,53.517268),adj(size,amt,57.940084));
ctx.bezierCurveTo(adj(size,amt,51.62842),adj(size,amt,56.696083),adj(size,amt,51.271636),adj(size,amt,55.730427),adj(size,amt,50.903690000000005),adj(size,amt,54.338017));
ctx.bezierCurveTo(adj(size,amt,50.614700000000006),adj(size,amt,52.066399000000004),adj(size,amt,52.05769600000001),adj(size,amt,49.713308),adj(size,amt,53.928571000000005),adj(size,amt,48.392857));
ctx.bezierCurveTo(adj(size,amt,55.943682),adj(size,amt,46.970605),adj(size,amt,60.30298200000001),adj(size,amt,47.700236),adj(size,amt,60.30298200000001),adj(size,amt,47.700236));
ctx.fill();
ctx.stroke();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,28.214286),adj(size,amt,8.5714285));
ctx.bezierCurveTo(adj(size,amt,27.078456),adj(size,amt,11.250261),adj(size,amt,26.365644),adj(size,amt,15.484104),adj(size,amt,25),adj(size,amt,19.285715));
ctx.bezierCurveTo(adj(size,amt,24.506956),adj(size,amt,20.658224999999998),adj(size,amt,24.662311),adj(size,amt,22.298808),adj(size,amt,26.071429),adj(size,amt,23.928570999999998));
ctx.bezierCurveTo(adj(size,amt,27.754036),adj(size,amt,23.086458999999998),adj(size,amt,32.310561),adj(size,amt,24.949163),adj(size,amt,36.964286),adj(size,amt,25.892857));
ctx.bezierCurveTo(adj(size,amt,40.056669),adj(size,amt,26.519938),adj(size,amt,42.950871),adj(size,amt,25.738255),adj(size,amt,46.071428),adj(size,amt,26.205358));
ctx.bezierCurveTo(adj(size,amt,47.357124),adj(size,amt,26.397808),adj(size,amt,48.922301999999995),adj(size,amt,26.932418000000002),adj(size,amt,50.178571),adj(size,amt,27.142857));
ctx.bezierCurveTo(adj(size,amt,50.958791999999995),adj(size,amt,23.225976),adj(size,amt,50.000291),adj(size,amt,16.404128999999998),adj(size,amt,51.785714),adj(size,amt,11.964286));
ctx.bezierCurveTo(adj(size,amt,48.753911),adj(size,amt,11.173801),adj(size,amt,45.415561),adj(size,amt,11.165552),adj(size,amt,42.276786),adj(size,amt,10.491071));
ctx.bezierCurveTo(adj(size,amt,38.804518),adj(size,amt,9.7449267),adj(size,amt,35.783671),adj(size,amt,8.1751575),adj(size,amt,32.232143),adj(size,amt,8.1696428));
ctx.bezierCurveTo(adj(size,amt,30.947202),adj(size,amt,8.1676428),adj(size,amt,29.483365),adj(size,amt,7.8894077000000005),adj(size,amt,28.214286),adj(size,amt,8.5714285));
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,20.030638),adj(size,amt,34.991026));
ctx.bezierCurveTo(adj(size,amt,20.030638),adj(size,amt,34.991026),adj(size,amt,23.485832),adj(size,amt,34.25069),adj(size,amt,24.873731),adj(size,amt,34.79079));
ctx.bezierCurveTo(adj(size,amt,25.818378),adj(size,amt,35.158399),adj(size,amt,26.331255),adj(size,amt,36.033091),adj(size,amt,27.321429),adj(size,amt,36.25));
ctx.bezierCurveTo(adj(size,amt,28.407667),adj(size,amt,36.487953),adj(size,amt,29.30014),adj(size,amt,35.027283),adj(size,amt,30.472579),adj(size,amt,35.73595));
ctx.bezierCurveTo(adj(size,amt,31.750179),adj(size,amt,36.50818),adj(size,amt,35.400470999999996),adj(size,amt,37.142857),adj(size,amt,35.400470999999996),adj(size,amt,37.142857));
ctx.fill();
ctx.stroke();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,18.046547),adj(size,amt,37.310596));
ctx.bezierCurveTo(adj(size,amt,18.046547),adj(size,amt,37.310596),adj(size,amt,19.945455),adj(size,amt,37.48224),adj(size,amt,20.892857),adj(size,amt,37.85714299999999));
ctx.bezierCurveTo(adj(size,amt,22.475844),adj(size,amt,38.48355699999999),adj(size,amt,22.550916),adj(size,amt,40.38437699999999),adj(size,amt,24.242386),adj(size,amt,40.577183999999995));
ctx.bezierCurveTo(adj(size,amt,26.486394),adj(size,amt,40.83297399999999),adj(size,amt,29.731872),adj(size,amt,39.54663599999999),adj(size,amt,31.76405),adj(size,amt,40.809915999999994));
ctx.bezierCurveTo(adj(size,amt,32.627888),adj(size,amt,41.34691099999999),adj(size,amt,32.835479),adj(size,amt,43.41452099999999),adj(size,amt,32.835479),adj(size,amt,43.41452099999999));
ctx.fill();
ctx.stroke();
ctx.fillStyle = "rgba(0,0,0,0)";
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.miterLimit = 4;
ctx.setTransform(1,0,tilt,1,0,0);
ctx.translate(x,y);
ctx.beginPath();
ctx.moveTo(adj(size,amt,28.95921),adj(size,amt,46.700915));
ctx.bezierCurveTo(adj(size,amt,28.95921),adj(size,amt,46.700915),adj(size,amt,25.118776999999998),adj(size,amt,44.27349),adj(size,amt,20.849528999999997),adj(size,amt,43.129487000000005));
ctx.bezierCurveTo(adj(size,amt,18.685226999999998),adj(size,amt,42.549533000000004),adj(size,amt,16.577571),adj(size,amt,42.023926),adj(size,amt,14.799763999999996),adj(size,amt,40.66012500000001));
ctx.bezierCurveTo(adj(size,amt,13.908667999999997),adj(size,amt,39.97654200000001),adj(size,amt,13.582260999999995),adj(size,amt,38.93940400000001),adj(size,amt,13.582260999999995),adj(size,amt,38.93940400000001));
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();
ctx.restore();



}


