gsap.from('.line',{
     y:100,
     stagger:0.5,
     opacity:0,
     delay:0.1,
     duration:0.9,
     
})
gsap.from('.line1',{
     y:100,
     stagger:0.5,
     opacity:0,
     delay:0.1,
     duration:0.9,
     
})
var tl = gsap.timeline();
tl.to('#loader',{
     opacity:0,
     delay:3.5,
     y:-1200,
     duration:1
})

tl.from("#page1",{
     // y:1000
})

let h3 = document.querySelector(".line1 #timer")
var grow = 0;
setInterval(function(){
     if(grow<100){
          h3.innerHTML = grow++  
     }
     else{
          h3.innerHTML = grow
     }
},30)