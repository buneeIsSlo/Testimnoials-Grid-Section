const allCards = document.querySelectorAll("article");
let activeAnimArr = anime.running; // Array of animations that are active
const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)"); // Reduced motion media query

// Initiate animation function
const initAnimation = () => {

/* Cards Enter/Translate animation */
anime({
    targets: ".testimonial__one",
    translateX: [-70, 0],
    duration: 2000
})
  

anime({
    targets: ".testimonial__two",
    translateY: [-70, 0],
    duration: 2100
})


anime({
    targets: ".testimonial__three",
    translateY: [70, 0],
    duration: 2200
})


anime({
    targets: ".testimonial__four",
    translateX: [70, 0],
    duration: 2300
})


anime({
    targets: ".testimonial__five",
    scale: ["70%", "100%"],
    duration: 2400,
})


/* Cards and Content opacity animation */
anime({
    targets: [allCards, ".testimonial__content"],
    easing: "easeOutBack",
    opacity: {
        value: [0, 1],
        duration: 2500 
    }
})


/* Body background animation */
anime({
    targets: "body",
    backgroundPosition: ["90%", "100%"],
    duration: 10000,
    easing: "linear",
    direction: "alternate",
    loop: true    
})

//console.log(activeAnimArr);

}


// Check if media query matches function
const preferredMotion = query => {
    //If media query matches, Empty active animation array(This will cancel every animation)
    if (!query || query.matches) activeAnimArr.splice(0, activeAnimArr.length);

    // Else, Initiate animation
    else initAnimation();
}


// Check for media query match at run time
preferredMotion(mediaQuery); 

// Add Event listener to check if media query value changes
mediaQuery.addEventListener("change", () => preferredMotion(mediaQuery));


/* Attribution :) */
console.log("(\\ /)\n(0_0) Coded this.");