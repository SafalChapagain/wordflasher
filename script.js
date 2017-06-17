var flashing = false;
$(document).ready(function() {
    var interval = 100;

    var wordsList = words.split("\n");
    delete words;

    $('html').click(function(e) {
        if ($("p").css("opacity") !== 0) {
            $("p").css("opacity", 0)
        }    
        flashing = !flashing;
    });

    $(document).keydown(function(e) {
        switch(e.which) {
            case 37:
            counter = 0;
            if (!flashing) {
                $("h1").html(wordsList[Math.floor(Math.random() * wordsList.length)]);
            }
            break;

            case 38: // up
            if (interval > 25) {
                interval -= 20;
                counter = 1;
            }
            break;

            case 39:
            counter = 0;
            if (!flashing) {
                $("h1").html(wordsList[Math.floor(Math.random() * wordsList.length)]);
            }
            break;

            case 40: // down
            interval += 20;
            counter = 1;
            break;

            default: return; // exit this handler for other keys
        }
        e.preventDefault(); // prevent the default action (scroll / move caret)
    });

    counter = 0;
    setInterval(function() {
        if (counter % interval === 0) {
            if (flashing) {  
                $("h1").html(wordsList[Math.floor(Math.random() * wordsList.length)]);
            }
        }
        counter++;
    }, 5)
});