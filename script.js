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

