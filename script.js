var flashing = false;
$(document).ready(function() {
    var interval = 100;

    var wordsList = words.split("\n");
    delete words;

    $('html').click(function(e) {    
        flashing = !flashing;
    });

    $(document).keydown(function(e) {
        switch(e.which) {
            case 38: // up
            if (interval > 25) {
                interval -= 20;
            }
            break;

            case 40: // down
            interval += 20;
            break;

            default: return; // exit this handler for other keys
        }
        e.preventDefault(); // prevent the default action (scroll / move caret)
    });

    counter = 0;
    setInterval(function() {
        if (counter % interval == 0) {
            if (flashing) {  
                $("h1").html(wordsList[Math.floor(Math.random() * wordsList.length)]);
            }
            else {
                $("h1").html("Click to Start/Stop")
            }
        }
        counter++;
    }, 5)
});