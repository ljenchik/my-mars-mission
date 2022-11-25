export const Data = [
    {  
        title: `Moons of Mars`,
        image: "https://mars.nasa.gov/system/content_pages/main_images/65_moons.jpg",
        information : `Mars has two small moons: Phobos and Deimos. 
                Phobos (fear) and Deimos (panic) were named after the horses 
                that pulled the chariot of the Greek war god Ares, 
                the counterpart to the Roman war god Mars. 
                Both Phobos and Deimos were discovered in 1877 
                by American astronomer Asaph Hall. The moons appear to have 
                surface materials similar to many asteroids in the outer asteroid belt, 
                which leads most scientists to believe 
                that Phobos and Deimos are captured asteroids.`,
        question: "How many moons does Mars have?", 
        answers : 
            [
                {text: "2", correct:true}, 
                {text:"3", correct:false},
                {text:"4", correct:false}
            ],
    }, 
    {
        title: `Atmosphere`,
        image: "https://www.nasa.gov/sites/default/files/thumbnails/image/mars_landscape_dry_wet.png",
        information: `Mars’ atmosphere is composed primarily 
        of carbon dioxide, with minor amounts 
        of argon and nitrogen. The atmosphere is very thin, 
        however, and the atmospheric pressure at 
        the surface of Mars is only about 0.6 percent of Earth’s.
        Scientists think that Mars may have had a thicker atmosphere early in its history,
         and data from NASA spacecraft indicate that Mars has lost significant amounts of its atmosphere through time. 
         The primary culprit for Mars’ atmospheric loss is the solar wind!`,
        question: "Why is Mars atmosphere thin?", answers : 
            [
                {text:"Because of a low gravity", correct:false},
                {text:"Because of a low atmospheric pressure", correct:false},
                {text:"Because of the solar wind.", correct:true}
            ]
    },
    {
        title: "Terrains",
        image: "https://www.universetoday.com/wp-content/uploads/2014/03/800px-VallesMarinerisHuge.jpg",
        information: `The surface gravity of Mars is only 37% of what 
        you would find on Earth, which makes it possible for volcanoes 
        to be taller without collapsing. This is why we have Olympus Mons,
         the tallest volcano known on a planet in the Solar System. 
         It’s 16 miles high and its diameter 
         is approximately the same as the state of Arizona, 
         according to NASA. But Mars also has a deep and wide canyon 
         known as Valles Marineris, after the spacecraft (Mariner 9) 
         that discovered it. In some parts, the canyon is 4 miles (7 kilometers) deep. 
         According to NASA, the valley is as wide as the United States 
         and is about 20% of the Red Planet’s diameter.`,
        question: "What is the height of the tallest Mars volcano?", 
        answers : 
            [
                {text:"16 km", correct:false},
                {text:"25 miles", correct:false},
                {text:"25 km", correct: true},
            ]
    }
] 