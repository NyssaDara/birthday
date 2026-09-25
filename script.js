/* =========================
   PAGE SWITCHING
========================= */

function showPage(id) {

    document.querySelectorAll(".screen").forEach(screen => {

        screen.classList.remove("active");

    });

    document.getElementById(id).classList.add("active");

}



/* =========================
   COVER → BALLOONS
========================= */

function openBalloons() {

    showPage("balloons");

}



/* =========================
   BALLOON → GIFT
========================= */

function openGift(gift, balloon) {

    balloon.classList.add("popped");

    createPop(balloon);


    setTimeout(() => {

        showPage(gift);


        if (gift === "memories") {

            startMemoryWall();

        }

    }, 500);

}



/* =========================
   BALLOON POP EFFECT
========================= */

function createPop(balloon) {

    const rect = balloon.getBoundingClientRect();

    const emojis = [
        "♡",
        "♡",
        "✦",
        "♡",
        "✧"
    ];


    emojis.forEach((emoji, index) => {

        const heart =
            document.createElement("div");


        heart.className = "pop-heart";

        heart.innerHTML = emoji;


        heart.style.left =
            rect.left +
            rect.width / 2 +
            "px";


        heart.style.top =
            rect.top +
            rect.height / 2 +
            "px";


        heart.style.color =
            index % 2 === 0
                ? "#e979a2"
                : "#ffffff";


        heart.style.setProperty(
            "--x",
            (Math.random() - 0.5) * 250
        );


        heart.style.setProperty(
            "--y",
            (Math.random() - 0.5) * 250
        );


        document.body.appendChild(heart);


        setTimeout(() => {

            heart.remove();

        }, 1000);

    });

}



/* =========================
   MEMORY WALL
========================= */

function startMemoryWall() {

    const wall =
        document.getElementById("photoWall");


    wall.innerHTML = "";


    /*
        20 photos

        Your files should be:

        photo1.jpg
        photo2.jpg
        photo3.jpg
        ...
        photo20.jpg
    */

    const photos = [];


    for (let i = 1; i <= 20; i++) {

        photos.push(
            `images/photo${i}.jpeg`
        );

    }



    /*
        Photo positions
    */

    const positions = [

        [5, 5],
        [22, 1],
        [40, 7],
        [59, 2],
        [76, 9],

        [13, 28],
        [32, 25],
        [51, 29],
        [70, 25],
        [84, 31],

        [4, 52],
        [23, 50],
        [43, 54],
        [62, 51],
        [80, 55],

        [12, 75],
        [32, 72],
        [51, 77],
        [69, 73],
        [84, 78]

    ];



    /*
        Slight rotations
        make it feel handmade
    */

    const rotations = [

        -6,
        4,
        -3,
        7,
        -5,

        5,
        -7,
        3,
        -4,
        6,

        -5,
        7,
        -2,
        5,
        -6,

        4,
        -5,
        6,
        -3,
        5

    ];



    /*
        Create every photo
    */

    photos.forEach((photo, index) => {

        const card =
            document.createElement("div");


        card.className =
            "memory-photo";


        /*
            Position
        */

        const [left, top] =
            positions[index];


        card.style.left =
            left + "%";


        card.style.top =
            top + "%";



        /*
            Rotation
        */

        card.style.setProperty(
            "--rotation",
            rotations[index] + "deg"
        );



        /*
            Image
        */

        const img =
            document.createElement("img");


        img.src = photo;


        img.alt =
            `Memory ${index + 1}`;



        /*
            Hide missing photos
        */

        img.onerror = function () {

            card.style.display =
                "none";

        };



        card.appendChild(img);

        wall.appendChild(card);



        /*
            Attach photos
            one by one
        */

        setTimeout(() => {

            card.classList.add(
                "attached"
            );

        }, 500 + index * 550);

    });

}



/* =========================
   BACK TO BALLOONS
========================= */

function goHome() {
    document.querySelectorAll(".balloon").forEach(balloon => {
        balloon.classList.remove("popped");
    });

    showPage("balloons");
}



/* =========================
   CAKE
========================= */

function blowCake() {
    const cake = document.querySelector(".cake");
    const button = document.getElementById("blowButton");
    const result = document.getElementById("wishResult");

    cake.classList.add("blown");
    button.innerText = "WISH MADE ♡";
    button.disabled = true;
    result.classList.add("show");
    createConfetti();

    // Go to review page after the wish animation
    setTimeout(() => {
        showPage("final");
    }, 2500);
}


/* =========================
   FINAL PAGE
========================= */

function showFinal() {

    showPage("final");

}



/* =========================
   RATING
========================= */

function rate(number) {

    const buttons =
        document.querySelectorAll(
            ".rating-hearts button"
        );


    buttons.forEach((button, index) => {

        if (index < number) {

            button.innerHTML = "♥";

            button.classList.add(
                "selected"
            );

        } else {

            button.innerHTML = "♡";

            button.classList.remove(
                "selected"
            );

        }

    });



    const messages = {

        1:
            "iTNA KAMMM .. . 😭",

        2:
            "whaaa ..okay ..u hate me . 😭",

        3:
            "ok. 👀",

        4:
            "Thoda sa badha doo ..thodu sa. 🎀",

        5:
            "Half marks??!!. 🤨",

        6:
            "Kaam nhi chlega ..but okayy. 💗",

        7:
            "Now we're talking. ✨",

        8:
            "Damnn..thnxx. 🎀",

        9:
            "I LOVE YOU TOO. 😭💗",

        10:
            "Correct answer. ik tujhe pasand aaegaa. 💅💗"

    };


    document.getElementById(
        "ratingText"
    ).innerText = messages[number];

}



/* =========================
   CONFETTI
========================= */

function createConfetti() {

    const container =
        document.getElementById("confetti");


    container.innerHTML = "";


    for (let i = 0; i < 100; i++) {

        const piece =
            document.createElement("div");


        piece.className =
            "confetti-piece";


        piece.style.left =
            Math.random() * 100 + "%";


        piece.style.top =
            -Math.random() * 20 + "%";


        piece.style.animationDelay =
            Math.random() * 0.7 + "s";


        piece.style.transform =
            `rotate(${Math.random() * 360}deg)`;


        container.appendChild(piece);



        setTimeout(() => {

            piece.remove();

        }, 3500);

    }

}



/* =========================
   RESTART
========================= */

function restart() {


    /*
        Reset balloons
    */

    document.querySelectorAll(
        ".balloon"
    ).forEach(balloon => {

        balloon.classList.remove(
            "popped"
        );

    });



    /*
        Reset cake
    */

    const cake =
        document.querySelector(".cake");


    cake.classList.remove("blown");



    document.querySelectorAll(
        ".flame"
    ).forEach(flame => {

        flame.style.display =
            "block";

    });



    const blowButton =
        document.getElementById(
            "blowButton"
        );


    blowButton.innerText =
        "BLOW THE CANDLES ✨";


    blowButton.disabled = false;



    /*
        Reset wish
    */

    document.getElementById(
        "wishResult"
    ).classList.remove("show");



    /*
        Reset rating
    */

    document.querySelectorAll(
        ".rating-hearts button"
    ).forEach(button => {

        button.innerHTML = "♡";

        button.classList.remove(
            "selected"
        );

    });


    document.getElementById(
        "ratingText"
    ).innerText =
        "1 — 10. Don't be shy.";



    /*
        Clear memory wall
    */

    document.getElementById(
        "photoWall"
    ).innerHTML = "";



    /*
        Clear confetti
    */

    document.getElementById(
        "confetti"
    ).innerHTML = "";



    /*
        Back to beginning
    */

    showPage("cover");

}