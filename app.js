function updateTime() {
    var currentDate = new Date();
    if (currentDate.getMinutes() <= 9) {
        var time = currentDate.getHours() + ":0" + currentDate.getMinutes();
    } else {
        var time = currentDate.getHours() + ":" + currentDate.getMinutes();
    }
    document.querySelector("#time-sub").innerHTML = time;
    document.querySelector("#time-main").innerHTML = time;

    var day = currentDate.getDay();
    if (day == 0) {
        document.querySelector("#date-main").innerHTML = "Sunday";
    }
    if (day == 1) {
        document.querySelector("#date-main").innerHTML = "Monday";
    }
    if (day == 2) {
        document.querySelector("#date-main").innerHTML = "Tuesday";
    }
    if (day == 3) {
        document.querySelector("#date-main").innerHTML = "Wednesday";
    }
    if (day == 4) {
        document.querySelector("#date-main").innerHTML = "Thursday";
    }
    if (day == 5) {
        document.querySelector("#date-main").innerHTML = "Friday";
    }
    if (day == 6) {
        document.querySelector("#date-main").innerHTML = "Saturday";
    }
}

const inner_main = document.querySelector(".inner-main");


var interval = setInterval(updateTime, 0);

const icons = document.querySelectorAll(".watchIcon");
icons.forEach(icon => {
    icon.classList.add("iconActive");
});

const main = document.querySelector(".main-section");


function showIconSection() {
    clearInterval(interval);
    icons.forEach(icon => {
        if (icon === this && this.dataset.name === "music") { //only for music button
            if (this.classList.contains("iconActive")) {
                icon.classList.remove("iconActive");
                if (this.dataset.name === "music") {
                    main.innerHTML = "";
                    // music-section
                    // const songMedia = document.querySelector(".song-media");
                    // songMedia.addEventListener("click", (e) => {
                    //     if (!e.target.classList.contains("song")) return;
                    //     else {
                    //         console.log(e.target);
                    //     }
                    // })
                    main.innerHTML = `
                    <div class="inner-main">
                        <div class="inner-media">
                        <div class="active-song">
                                    <div class="active-img">
                                        <img src="./music.jpg">
                                    </div>
                                    <div class="active-control">
                                        <p>Emotion (Deluxe)</p>
                                        <p>Carly Rae Jepsen</p>
                                        <div>
                                            <i class="fas fa-caret-square-left"></i>
                                            <div class="duration"></div>
                                            <i class="fas fa-caret-square-right"></i>
                                        </div>
                                    </div>
                                </div>
                            <div class="song-media">
                                
                                <div class="song">
                                    <p class="song-number">2</p>
                                    <p class="song-name">Emotion</p>
                                    <p class="song-duration">3.11</p>
                                </div>
                                <div class="song">
                                    <p class="song-number">3</p>
                                    <p class="song-name">Emotion</p>
                                    <p class="song-duration">3.11</p>
                                </div>
                                <div class="song">
                                    <p class="song-number">4</p>
                                    <p class="song-name">Emotion</p>
                                    <p class="song-duration">3.11</p>
                                </div>
                                <div class="song">
                                    <p class="song-number">5</p>
                                    <p class="song-name">Emotion</p>
                                    <p class="song-duration">3.11</p>
                                </div>
                                <div class="song">
                                    <p class="song-number">6</p>
                                    <p class="song-name">Emotion</p>
                                    <p class="song-duration">3.11</p>
                                </div>
                                <div class="song">
                                    <p class="song-number">7</p>
                                    <p class="song-name">Emotion</p>
                                    <p class="song-duration">3.11</p>
                                </div>
                                <div class="song">
                                    <p class="song-number">8</p>
                                    <p class="song-name">Emotion</p>
                                    <p class="song-duration">3.11</p>
                                </div>
                                <div class="song">
                                    <p class="song-number">9</p>
                                    <p class="song-name">Emotion</p>
                                    <p class="song-duration">3.11</p>
                                </div>
                                <div class="song">
                                    <p class="song-number">10</p>
                                    <p class="song-name">Emotion</p>
                                    <p class="song-duration">3.11</p>
                                </div>
                                <div class="song">
                                    <p class="song-number">10</p>
                                    <p class="song-name">Emotion</p>
                                    <p class="song-duration">3.11</p>
                                </div>
                                <div class="song">
                                    <p class="song-number">11</p>
                                    <p class="song-name">Emotion</p>
                                    <p class="song-duration">3.11</p>
                                </div>
                                <div class="song">
                                    <p class="song-number">12</p>
                                    <p class="song-name">Emotion</p>
                                    <p class="song-duration">3.11</p>
                                </div>
                                <div class="song">
                                    <p class="song-number">13</p>
                                    <p class="song-name">Emotion</p>
                                    <p class="song-duration">3.11</p>
                                </div>
                                <div class="song">
                                    <p class="song-number">14</p>
                                    <p class="song-name">Emotion</p>
                                    <p class="song-duration">3.11</p>
                                </div>
                                <div class="song">
                                    <p class="song-number">15</p>
                                    <p class="song-name">Emotion</p>
                                    <p class="song-duration">3.11</p>
                                </div>
                                <div class="song">
                                    <p class="song-number">16</p>
                                    <p class="song-name">Emotion</p>
                                    <p class="song-duration">3.11</p>
                                </div>
                                <div class="song">
                                    <p class="song-number">17</p>
                                    <p class="song-name">Emotion</p>
                                    <p class="song-duration">3.11</p>
                                </div>
                                <div class="song">
                                    <p class="song-number">18</p>
                                    <p class="song-name">Emotion</p>
                                    <p class="song-duration">3.11</p>
                                </div>
                                <div class="song">
                                    <p class="song-number">19</p>
                                    <p class="song-name">Emotion</p>
                                    <p class="song-duration">3.11</p>
                                </div>
                                <div class="song">
                                    <p class="song-number">20</p>
                                    <p class="song-name">Emotion</p>
                                    <p class="song-duration">3.11</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    `
                }
            } else {
                this.classList.add("iconActive");
                main.innerHTML = `
                        <div class="inner-main">
                        <div class="inner-time">
                            <h4 class="time-main" id="time-main"></h4>
                            <p class="date-main" id="date-main"></p>
                        </div>
                        </div>
                `
                interval = setInterval(updateTime, 0);
            }
        } else {
            // icon.classList.add("iconActive");
        }
    });
}


icons.forEach(icon => icon.addEventListener("click", showIconSection));