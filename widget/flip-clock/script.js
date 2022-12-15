// set 3d transforms
TweenMax.set("#clock", {perspective:1500, scale:0.7125})
TweenMax.set(".upper", {rotationX:0.01, transformOrigin:"50% 100%"})
TweenMax.set(".lower", {rotationX:0.01, transformOrigin:"50% 0%"})

// set clock
var t, ss, mm, hh;
setTimeVars();
function setTimeVars(){
  t = new Date();
  t = new Date();
	ss = String(t.getSeconds());
  mm = String(t.getMinutes());
  hh = String( (t.getHours()>12) ? t.getHours()-12 : t.getHours() );
  if (ss.length==1) ss = "0"+ss;
  if (mm.length==1) mm = "0"+mm;
  if (hh.length==1) hh = "0"+hh;
}

h10.childNodes[3].innerHTML = h10.childNodes[7].innerHTML = "<span>"+Number(hh.substr(0,1))+"</span>";
h0.childNodes[3].innerHTML = h0.childNodes[7].innerHTML = "<span>"+Number(String(hh).substr(1,1))+"</span>";

m10.childNodes[3].innerHTML = m10.childNodes[7].innerHTML = "<span>"+Number(mm.substr(0,1))+"</span>";
m0.childNodes[3].innerHTML = m0.childNodes[7].innerHTML = "<span>"+Number(mm.substr(1,1))+"</span>";

s10.childNodes[3].innerHTML = s10.childNodes[7].innerHTML = "<span>"+Number(ss.substr(0,1))+"</span>";
s0.childNodes[3].innerHTML = s0.childNodes[7].innerHTML = "<span>"+Number(ss.substr(1,1))+"</span>";


// start ticking
var interval = setInterval(function(){
 	setTimeVars();
  
  tick(s0, Number(ss.substr(1,1)) )
  
  if (ss.substr(1,1)=="9"){
    tick(s10, Number(ss.substr(0,1)) ) 
    if (ss=="59"){
      tick(s10, 5, true)
      tick(m0, Number(mm.substr(1,1)))
      if (mm.substr(1,1)=="9"){
        tick(m10, Number(mm.substr(0,1)))
        if (mm=="59") {
          tick(m10, 5, true)
          tick(h0, Number(hh.substr(1,1)))
          if (hh.substr(1,1)=="9") tick(h10, Number(hh.substr(0,1)))
          if (hh=="12") {
            tick(h0, Number(hh.substr(0,1)), true)
            tick(h10, Number(hh.substr(1,1)), true)
          }
        }
      }
    }
  }
  
}, 1000)

function tick(mc,i, toZero=false){
  // set numbers
  mc.childNodes[3].innerHTML = "<span>"+i+"</span>"; //start upper
  mc.childNodes[5].innerHTML = "<span>"+i+"</span>"; //start lower
  if ( i==9 || toZero ) i=-1;
  mc.childNodes[1].innerHTML = "<span>"+(i+1)+"</span>"; //end upper
  mc.childNodes[7].innerHTML = "<span>"+(i+1)+"</span>"; //end lower
  // animate tick
  TweenMax.fromTo(mc.childNodes[1], .3, {alpha:0},{alpha:1, ease:Power4.easeIn})  
  TweenMax.fromTo(mc.childNodes[3], .3, {rotationX:0, background:"linear-gradient(0deg, rgba(200,200,200,1), rgba(255,255,255,1) 15%)"},{rotationX:-90, ease:Power1.easeIn})
  TweenMax.fromTo(mc.childNodes[7], .5+.2*Math.random(), {rotationX:90},{rotationX:0, ease:Bounce.easeOut, delay:.3})
  TweenMax.fromTo(mc.childNodes[5], .6, {alpha:1},{alpha:0, ease:Bounce.easeOut, delay:.3})  
}