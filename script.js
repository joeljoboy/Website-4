var cur= document.querySelector('#cursor');
var curblur= document.querySelector('#cursor-blur');
document.addEventListener("mousemove",(dets) =>
{
cur.style.left=dets.x+'px';
cur.style.top=dets.y+'px';
curblur.style.left=dets.x - 250 +'px';
curblur.style.top=dets.y - 250 +'px';
})
// cursor and cursor blur

gsap.to("#nav",
{
    backgroundColor : "#000",
    height:'110px',
    duration : '0.5',
    scrollTrigger:{
        trigger:"#nav",
        scroller:'body',
        // markers:'true',
        start:'top -10%',
        end:'top-11%',
        scrub:1
    }
})

gsap.to("#main",
{
    backgroundColor:"#000",
    scrollTrigger:
    {
        trigger:'#main',
        scroller:'body',
        // markers:'true',
        start:'top - 25%',
        end:'top -70%',
        scrub:2
    }
})

 var allh4=document.querySelectorAll("#nav h4")
allh4.forEach((elem) =>
{
    elem.addEventListener("mouseenter",()=>
    {
        cur.style.scale =3;
        cur.style.border="1px solid #fff";
        cur.style.backgroundColor="transparent";
    })
    elem.addEventListener("mouseleave",()=>
    {
        cur.style.scale =1;
        cur.style.border="0px solid #95C11E";
        cur.style.backgroundColor="#95C11E";
    })
})

gsap.from("#about-us img, #about-us-in",{
    y:50,
    opacity:0,
    duration:1,
    // stagger:0.4,
    scrollTrigger:
    {
        trigger:"#about-us",
        scroller:"body",
        // markers:true
        start:"top 60%",
        end:"top 58%",
        scrub:2
    }
})

gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:1,
    // stagger:0.1,
    scrollTrigger:
    {
        trigger:".card",
        scroller:"body",
        // markers:true
        start:"top 70%",
        end:"top 65%",
        scrub:3
    }
})

gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:
    {
        trigger:"#colon1",
        // marker:'true',
        scroller:'body',
        start:"top 55%",
        end:"top 45%",
        scrub:'4'
    }
})


gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:
    {
        trigger:"#colon1",
        // marker:'true',
        scroller:'body',
        start:"top 55%",
        end:"top 45%",
        scrub:'4'
    }
})

