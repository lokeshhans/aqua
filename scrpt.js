var tl = gsap.timeline({
    repeat:30
});

tl
.to(".imgcontainer",{
    ease: Expo.easeInOut,
    width: "100%",
    // duration: 2,
    stagger: 2,
},'a')
.to(".text h1",{
    ease: Expo.easeInOut,
    stagger: 2,
    top:-10,
},'a')
.to(".text h1",{
    delay:2,
    ease: Expo.easeInOut,
    stagger: 2,
    top:"-100%",
},'a')
// gsap.to("#one",
// {
//     width: "100%",
//     ease: Expo.easeInOut,
//     duration: 2
// })

// document.querySelectorAll("imgcontainer")
// .forEach(function(elem){

// })

// gsap.to(".imgcontainer",{
//     ease: Expo.easeInOut,
//     width: "100%",
//     // duration: 2,
//     stagger: 2,
// })

// gsap.to(".text h1",{
//     ease: Expo.easeInOut,
//     stagger: 2,
//     top:-10,
// })
// gsap.to(".text h1",{
//     delay:2,
//     ease: Expo.easeInOut,
//     stagger: 2,
//     top:"-100%",
// })

