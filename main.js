
$(document).ready(function() {
    $(function () {
        var flame = $("#flame");
        var txt = $("h1");

        flame.on({
            click: function () {
                flame.removeClass("burn").addClass("puff");
                $(".smoke").each(function () {
                    $(this).addClass("puff-bubble");
                });
                $("#glow").remove();
                txt.hide().html(" '生日快乐,坤' 🎀  13-november-2002 ").delay(200).fadeIn(300);
                $("#candle").animate(
                    {
                        opacity: ".5"
                    },
                    300
                );

                // Trigger the firework effect
                for (var i = 0; i < 30; i++) {
                    var firework = $("<div class='firework'></div>");
                    $("body").append(firework);
                    var xPos = Math.random() * window.innerWidth;
                    var yPos = Math.random() * window.innerHeight;
                    firework.css({
                        left: xPos + "px",
                        top: yPos + "px"
                    });
                    firework.fadeOut(90000, function() {
                        $(this).remove(); // Remove the firework after animation
                    });
                }

                // After everything finishes, hide the old content and show new message word by word
                setTimeout(function() {
                    txt.fadeOut(100, function() {
                        var newText = "Wishing you all the happiness in the world! 💌 ";
                        var words = newText.split(' ');
                        var i = 0;
                        $(this).html('');
                        var interval = setInterval(function() {
                            if (i < words.length) {
                                $(this).append(words[i] + ' ').fadeIn(200);
                                i++;
                            } else {
                                clearInterval(interval);
                            }
                        }.bind(this), 0); // Adjust time between words here
                    });
                }, 3000); // Wait for the fireworks animation and initial text to finish
            }
        });
    });
});
function showBalloons() {
    const balloonCount = 20; // Increased number of balloons
    const colors = ["#ADD8E6", "#B0E0E6", "#87CEFA", "#4682B4", "#FFFFFF", "#FFC0CB"]; // Light blue shades, white, and light pink

    for (let i = 0; i < balloonCount; i++) {
        setTimeout(() => {
            const balloon = document.createElement("div");
            balloon.classList.add("balloon");
            balloon.style.left = Math.random() * 80 + "vw"; // Random horizontal position
            balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]; // Random color from array
            document.body.appendChild(balloon);

            // Remove balloon after animation completes
            balloon.addEventListener("animationend", () => {
                balloon.remove();
            });
        }, Math.random() * 2000); // Random delay between balloons (0 - 2 seconds)
    }
}

// Call this function after the last message is displayed
setTimeout(showBalloons, 2000); // Adjust this timing if needed