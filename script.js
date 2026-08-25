/* =====================================================
   RAKSHA BANDHAN SURPRISE WEBSITE
   COMPLETE SCRIPT.JS
===================================================== */


/* =====================================================
   1. PARTY POPPER CELEBRATION
===================================================== */

const partyPopper =
    document.getElementById("partyPopper");


if (partyPopper) {

    const confettiContainer =
        partyPopper.querySelector(
            ".confetti-container"
        );


    /*
     * Number of confetti pieces
     */

    const confettiCount = 100;


    /*
     * Confetti colors
     */

    const confettiColors = [

        "#ff4f87",
        "#ff6f91",
        "#ffd166",
        "#9b72e8",
        "#6ec6ff",
        "#ffffff",
        "#ff9fba"

    ];


    /*
     * Create confetti
     */

    for (
        let i = 0;
        i < confettiCount;
        i++
    ) {


        const piece =
            document.createElement("span");


        piece.className =
            "confetti";


        /*
         * Alternate between
         * left and right poppers
         */

        const fromLeft =
            i % 2 === 0;


        /*
         * Starting position
         */

        const startX =
            fromLeft
                ? 55
                : window.innerWidth - 55;


        const startY =
            window.innerHeight * 0.65;


        piece.style.left =
            `${startX}px`;


        piece.style.top =
            `${startY}px`;


        /*
         * Direction
         */

        const direction =
            fromLeft ? 1 : -1;


        /*
         * Horizontal movement
         */

        const horizontalDistance =
            180 +
            Math.random() * 500;


        /*
         * Vertical movement
         */

        const verticalDistance =
            -(250 +
            Math.random() * 500);


        /*
         * Add some randomness
         */

        const x =
            direction *
            horizontalDistance;


        const y =
            verticalDistance;


        /*
         * Give CSS the values
         */

        piece.style.setProperty(
            "--confetti-x",
            `${x}px`
        );


        piece.style.setProperty(
            "--confetti-y",
            `${y}px`
        );


        /*
         * Random rotation
         */

        piece.style.setProperty(
            "--confetti-rotate",
            `${Math.random() * 1200 - 600}deg`
        );


        /*
         * Random delay
         */

        piece.style.animationDelay =
            `${Math.random() * 0.45}s`;


        /*
         * Random size
         */

        const width =
            5 +
            Math.random() * 9;


        const height =
            8 +
            Math.random() * 18;


        piece.style.width =
            `${width}px`;


        piece.style.height =
            `${height}px`;


        /*
         * Random color
         */

        const randomColor =
            confettiColors[
                Math.floor(
                    Math.random() *
                    confettiColors.length
                )
            ];


        piece.style.background =
            randomColor;


        /*
         * Random shape
         */

        const shape =
            Math.floor(
                Math.random() * 3
            );


        if (shape === 0) {

            piece.style.borderRadius =
                "2px";

        }

        else if (shape === 1) {

            piece.style.borderRadius =
                "50%";

        }

        else {

            piece.style.borderRadius =
                "0";

        }


        /*
         * Add to page
         */

        confettiContainer.appendChild(
            piece
        );

    }


    /*
     * Remove party popper
     * after animation
     */

    setTimeout(function () {

        partyPopper.remove();

    }, 3200);

}



/* =====================================================
   2. CLICK HEART EFFECT
===================================================== */

document.addEventListener(
    "click",
    function (event) {


        /*
         * Don't create a heart when
         * clicking the Rakhi image
         */

        if (
            event.target.closest(
                ".rakhi-icon"
            )
        ) {

            return;

        }


        /*
         * Don't create a heart
         * when clicking photos
         */

        if (
            event.target.closest(
                ".memory-photo"
            )
        ) {

            return;

        }


        /*
         * Create heart
         */

        createHeart(
            event.clientX,
            event.clientY
        );

    }
);



/* =====================================================
   3. CREATE HEART
===================================================== */

function createHeart(x, y) {


    const heart =
        document.createElement("div");


    heart.textContent =
        "❤️";


    heart.style.position =
        "fixed";


    heart.style.left =
        `${x}px`;


    heart.style.top =
        `${y}px`;


    heart.style.zIndex =
        "9998";


    heart.style.pointerEvents =
        "none";


    heart.style.fontSize =
        `${14 + Math.random() * 10}px`;


    heart.style.transform =
        "translate(-50%, -50%)";


    heart.style.transition =
        "all 0.8s ease";


    heart.style.opacity =
        "1";


    document.body.appendChild(
        heart
    );


    /*
     * Animate heart upward
     */

    requestAnimationFrame(
        function () {

            heart.style.transform =
                "translate(-50%, -90px) scale(1.4)";

            heart.style.opacity =
                "0";

        }
    );


    /*
     * Remove heart
     */

    setTimeout(
        function () {

            heart.remove();

        },
        800
    );

}



/* =====================================================
   4. RAKHI CLICK EFFECT
===================================================== */

const rakhiImages =
    document.querySelectorAll(
        ".rakhi-icon img, .promise-rakhi img"
    );


rakhiImages.forEach(
    function (rakhi) {


        rakhi.addEventListener(
            "click",
            function () {


                rakhi.style.transform =
                    "scale(1.12) rotate(-3deg)";


                setTimeout(
                    function () {

                        rakhi.style.transform =
                            "";

                    },
                    500
                );

            }
        );

    }
);



/* =====================================================
   5. MEMORY PHOTO EFFECT
===================================================== */

const memoryPhotos =
    document.querySelectorAll(
        ".memory-photo"
    );


memoryPhotos.forEach(
    function (photo) {


        photo.addEventListener(
            "click",
            function () {


                photo.classList.toggle(
                    "photo-selected"
                );

            }
        );

    }
);



/* =====================================================
   6. PAGE LOADED
===================================================== */

window.addEventListener(
    "load",
    function () {

        document.body.classList.add(
            "page-loaded"
        );

    }
);



/* =====================================================
   7. CONSOLE MESSAGE
===================================================== */

console.log(
    "❤️ Raksha Bandhan website loaded!"
);

console.log(
    "🎉 Party popper celebration activated!"
);

console.log(
    "Made with love for your sister ❤️"
);
/* =====================================================
   MUSIC PLAYER
===================================================== */

const bgMusic = document.getElementById("bgMusic");
const musicButton = document.getElementById("musicButton");

if (bgMusic && musicButton) {

    musicButton.addEventListener("click", async function () {

        try {

            if (bgMusic.paused) {

                await bgMusic.play();

                musicButton.textContent = "🔊";

                musicButton.classList.add("playing");

            } else {

                bgMusic.pause();

                musicButton.textContent = "🎵";

                musicButton.classList.remove("playing");

            }

        } catch (error) {

            console.error("Music could not play:", error);

            alert(
                "Music could not play. Please check that rakhi-music.mp3 is inside the music folder."
            );

        }

    });

}