// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.main'),
//     smooth: true
// });

Shery.mouseFollower();
Shery.hoverWithMediaCircle(".homemain",{videos:["./1.mp4","./2.mp4","./3.mp4"]})
Shery.makeMagnet(".magnet"); 
Shery.makeMagnet(".tag");

gsap.to(".fleftelem",{
    scrollTrigger:{
        trigger:".fimages",
        pin:true,
        start:"top top",
        end:"bottom bottom",
        endTrigger:".last",
        scrub:1

    },
    y:"-300%",
    ease:Power1

})

let sections =document.querySelectorAll(".fleftelem");

Shery.imageEffect(".images", {
    style: 5,
    config:{onMouse:{value:1}},
    slideStyle: (setScroll) => {
        sections.forEach(function(section,index){
            ScrollTrigger.create({
                trigger:section,
                start:"top top",
                scrub:1,
                onUpdate:function(prog){
                    setScroll(prog.progress+index)
                }
            })
        })
     
    },
  });

  Shery.imageEffect(".img",{
    style:3,
    config:{"uFrequencyX":{"value":9.92,"range":[0,100]},"uFrequencyY":{"value":4.13,"range":[0,100]},"uFrequencyZ":{"value":46.28,"range":[0,100]},"geoVertex":{"range":[1,64],"value":18.18},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.75001089485374},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.36,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
   

  })