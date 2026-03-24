let waves;

window.onload = () => {
    start();

};

const start = () => {

    document.getElementById("first").style.opacity = "1";
    document.getElementById("first").style.pointerEvents = "auto";
    document.getElementById("second").style.opacity = "0";
    document.getElementById("second").style.pointerEvents = "none";
    document.getElementById("third").style.opacity = "0";
    document.getElementById("third").style.pointerEvents = "none";


    
    // cursor
    const cursor = document.getElementById("cursor");
    window.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
    });

    // zone characters
    const zonecontent = "deportación deportação depòtasyon 驱逐出境  निर्वासन  deportare депортация K'iche' Maya";
    const zones = document.querySelectorAll(".zones");
    const beltcontent = "*-";
    const belts = document.querySelectorAll(".belts");

    setInterval(() => {
        zones.forEach(z => {
            let random = "";
            for(let i = 0; i<100; i++) {
                random += zonecontent[Math.floor(Math.random() * zonecontent.length)];
            }
            z.textContent = random;

        });

    }, 10);


    // strom 1

    const storm1 = document.querySelectorAll(".storm-1");
    const strom1content = "Tantos días y ni sabíamos para donde íbamos";

    setInterval(() => {
        storm1.forEach(s => {
            let random = "";
            for(let i = 0; i<30; i++) {
                random += strom1content[Math.floor(Math.random() * strom1content.length)];
            }
            s.textContent = random;
        });

    }, 500);

    // show poems on hover
    const stormbox = document.querySelectorAll(".storm-box");

    stormbox.forEach(s => {
        const poem = document.getElementById(s.dataset.p);
        poem.style.opacity = "0";

        s.addEventListener('mouseenter', () => {        
            document.getElementById("first").style.pointerEvents = "none";
            s.style.pointerEvents = "auto";
            poem.style.opacity = "1";
        })
        s.addEventListener('mouseleave', () => {

            document.getElementById("first").style.pointerEvents = "auto";
            poem.style.opacity = "0";
        })

    });


    // storm 1 states changing
    
    let c1 = 0; //to track the current state

    setInterval(() => {
        storm1.forEach(s => {
            s.style.opacity = "0";
        })

        storm1[c1].style.opacity = "1";
        c1++;
        if (c1 >= storm1.length){
            c1 = 0;
        }
    }, 1000)


    // strom 2

    const storm2 = document.querySelectorAll(".storm-2");
    const strom2content = "laws pass laws with scientific walls detention cells ";

    setInterval(() => {
        storm2.forEach(s => {
            let random = "";
            for(let i = 0; i<30; i++) {
                random += strom2content[Math.floor(Math.random() * strom2content.length)];
            }
            s.textContent = random;
        });

    }, 500);

    // storm 2 states changing
    let c2 = 0; //to track the current state

    setInterval(() => {
        storm2.forEach(s => {
            s.style.opacity = "0";
        })

        storm2[c2].style.opacity = "1";
        c2++;
        if (c2 >= storm2.length){
            c2 = 0;
        }
    }, 300)

// strom 3

    const storm3 = document.querySelectorAll(".storm-3");
    const strom3content = "After being humiliated one continues the manuscript of identity ";

    setInterval(() => {
        storm3.forEach(s => {
            let random = "";
            for(let i = 0; i<30; i++) {
                random += strom3content[Math.floor(Math.random() * strom3content.length)];
            }
            s.textContent = random;
        });

    }, 500);

    // storm 3 states changing
    let c3 = 0; //to track the current state

    setInterval(() => {
        storm3.forEach(s => {
            s.style.opacity = "0";
        })

        storm3[c3].style.opacity = "1";
        c3++;
        if (c3 >= storm3.length){
            c3 = 0;
        }
    }, 300)


    // strom 4

    const storm4 = document.querySelectorAll(".storm-4");
    const strom4content = "lwhere walls between all beings are dreamt to dissolve";

    setInterval(() => {
        storm4.forEach(s => {
            let random = "";
            for(let i = 0; i<30; i++) {
                random += strom4content[Math.floor(Math.random() * strom4content.length)];
            }
            s.textContent = random;
        });

    }, 500);

    // storm 4 states changing
    let c4 = 0; //to track the current state

    setInterval(() => {
        storm4.forEach(s => {
            s.style.opacity = "0";
        })

        storm4[c4].style.opacity = "1";
        c4++;
        if (c4 >= storm4.length){
            c4 = 0;
        }
    }, 300)


    // strom 5

    const storm5 = document.querySelectorAll(".storm-5");
    const strom5content = "the impression of a key in a bar of soap";

    setInterval(() => {
        storm5.forEach(s => {
            let random = "";
            for(let i = 0; i<30; i++) {
                random += strom5content[Math.floor(Math.random() * strom5content.length)];
            }
            s.textContent = random;
        });

    }, 500);

    // storm 5 states changing
    let c5 = 0; //to track the current state

    setInterval(() => {
        storm5.forEach(s => {
            s.style.opacity = "0";
        })

        storm5[c5].style.opacity = "1";
        c5++;
        if (c5 >= storm5.length){
            c5 = 0;
        }
    }, 300)






    // scale and fade on scroll
    const marquee = document.querySelectorAll(".marquee")



 window.addEventListener('scroll', () => {
        const scroll = window.scrollY;
        if (scroll > 100 && scroll <= 500) {
            const op1 = 1 - ((scroll - 100) / 400);
            const op2 = (scroll - 100) / 400;
            const scale = 1 + ((scroll - 100) / 400) * 9;

            marquee.forEach(m => {
                m.style.transform = "scale(" + scale + ")";
            });

            document.getElementById("first").style.opacity = op1;
            document.getElementById("second").style.opacity = op2;
            document.getElementById("third").style.opacity = "0";
            document.getElementById("first").style.pointerEvents = "none";
        }
        else if (scroll <= 100) {
            const scale = 1 + (scroll / 100) * 9;
            marquee.forEach(m => {
                m.style.transform = "scale(" + scale + ")";
            });

            document.getElementById("first").style.opacity = "1";
            document.getElementById("first").style.pointerEvents = "auto";
            document.getElementById("second").style.opacity = "0";
            document.getElementById("second").style.pointerEvents = "none";
            document.getElementById("third").style.opacity = "0";
            document.getElementById("third").style.pointerEvents = "none";
        }

        else if (scroll > 500 && scroll <=800) {
            document.getElementById("first").style.opacity = "0";
            document.getElementById("first").style.pointerEvents = "none";
            document.getElementById("second").style.opacity = "1";
            document.getElementById("second").style.pointerEvents = "auto";
            document.getElementById("third").style.opacity = "0";
            document.getElementById("third").style.pointerEvents = "none";



        }

        else if (scroll > 800 && scroll <= 1100) {
            const op2 = 1 - ((scroll - 800) / 300);
            const op3 = (scroll - 800) / 300;
            document.getElementById("first").style.opacity = "0";
            document.getElementById("first").style.pointerEvents = "none";

            document.getElementById("second").style.opacity = op2;
            document.getElementById("second").style.pointerEvents = "none";

            document.getElementById("third").style.opacity = op3;
            document.getElementById("third").style.pointerEvents = "auto";

        }

        else if (scroll> 1100){
            document.getElementById("first").style.opacity = "0";
            document.getElementById("first").style.pointerEvents = "none";

            document.getElementById("second").style.opacity = "0";
            document.getElementById("second").style.pointerEvents = "none";

            document.getElementById("third").style.opacity = "1";
            document.getElementById("third").style.pointerEvents = "auto";

        }

    });



    // second layer

    waves = document.querySelectorAll(".waves");
    waves.forEach(w => {
        //adding the initial letter spacing and shrink properties to waves
        w.l = 0;
        w.shrink = false;
        w.number = w.textContent;

        w.addEventListener('mouseenter', () => {
            w.textContent = w.dataset.hover;
        });

        w.addEventListener('mouseleave', () => {
            w.textContent = w.number;
        })
    });
    
    move();


    // third layer

    const cursorlight = document.getElementById("light");

    window.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
        cursorlight.style.left = e.clientX + "px";
        cursorlight.style.top = e.clientY + "px";
    });

    const name = document.querySelectorAll(".name");
    name.forEach(n => {
        const info = document.getElementById(n.dataset.info);
        info.style.opacity = "0";
        n.addEventListener('mouseover', () => {
            info.style.opacity = "1";
        })

        n.addEventListener('mouseout', () => {
            info.style.opacity = "0";
        })
    })

};







// second layer animation
const move = () => {

    const windoW = window.innerWidth;
    

    //for each w, I am adding t.l and t.shrink properties. their initial state was already defined above through text.l and text.shrink so each new div starts as a letter spacing =  0 and shrink = false, and inside the loop it will change for each div created.
    waves.forEach(w => {

        const textW = w.getBoundingClientRect().width;

        if (textW >= windoW - 20){ 
            w.shrink = true;
        }

        if (w.shrink) {
            w.l-=0.2;
        }

        else { 
         w.l+=0.2;
        }

        if (w.l<=-3) {
         w.shrink = false;
        }

        w.style.letterSpacing = w.l + "px"; 
        console.log(w.shrink);
        console.log(w.l);

    });
    
    //loops through my move function to create the animation
    requestAnimationFrame(move);

}