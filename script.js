var flashing = false;
$(document).ready(function() {
    var history = [];
    var historyPointer = -1;
    var interval = 100;

    var words1List = words1.split("\n");
    var words2List = words2.split("\n");
    delete words1;
    delete words2;
    var wordsList = words1List;
    var complexWords = false;

    $('html').click(function(e) {
        if ($("p").css("opacity") !== 0) {
            $("p").css("opacity", 0)
        }    
        flashing = !flashing;
        if (flashing) {
            $("h1").css("color", "#000")
        }
        else {
            $("h1").css("color", "#555")
        }
    });

    function randomWord() {
        historyPointer = -1;
        $("h1").html(wordsList[Math.floor(Math.random() * wordsList.length)]);
        history.push($("h1").html());
        if ($("p").css("opacity") !== 0) {
            $("p").css("opacity", 0)
        }    
    }

    $(document).keydown(function(e) {
        switch(e.which) {
            case 32:
            complexWords = !complexWords;
            if (complexWords) {
                wordsList = words2List;
            }
            else {
                wordsList = words1List;
            }
            break;

            case 37:
            if (historyPointer === -1) {
                historyPointer = history.length - 2;
            }
            else if (historyPointer > 0) {
                historyPointer--;
            }
            $("h1").html(history[historyPointer]);
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
                if (historyPointer === -1 || historyPointer === history.length -1)
                    randomWord();
                else {
                    historyPointer++;
                    $("h1").html(history[historyPointer]);
                }        
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
                randomWord();
            }
        }
        $("h6").html("Interval: " + interval + " | Words: " + (complexWords ? "Complex" : "Simple"));  
        counter++;
    }, 5)
});