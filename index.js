$(function() {
    const BULB_ELEMENT = 1;
    const OFF_COLOR = "#A3A2A2";
    var interval;
    var index = 0;
    var selectedText  = [];
    var timeout;

    const COLOR = {
        A: "#ffeb04", B: "#e60227", C: "#05a2f1", D: "#70b21d", E: "#ad0073", F: "#00a131",
        G: "#f5a300", H: "#e75000", I: "#0082ce", J: "#1C48AB", K: "#5C87AA", L: "#E7FFFF",
        M: "#EECA42", N: "#34CECE", O: "#B7078E", P: "#C9E3E2", Q: "#D3499F", R: "#ECECEA",
        S: "#E9A321", T: "#F7BF12", U: "#2CA5D0", V: "#C0467F", W: "#0394CB", X: "#FBBD2E",
        Y: "#E68FD6", Z: "#73BEA9"
    }

    $("#go_for_it").on("click", setTextReady);

    function setTextReady() {
        selectedText = $("#i_text").val().split('');
        if(!$("#go_for_it").selected && selectedText.length > 0) {
            interval = setInterval(showLetters, 1000);
            $("#go_for_it")[0].disabled = true;
        }
    }

    function showLetters() {
        if(index < selectedText.length) {
            $("#b" + selectedText[index])[0].children[BULB_ELEMENT].style.fill = COLOR[selectedText[index].toUpperCase()];
            blink(index);
            if(index !== selectedText.length - 1)
            index++;
        }
    }
    
    function blink (i) {
        clearTimeout(timeout);
        timeout = setTimeout(function() {
            if(i < selectedText.length) {
                $("#b" + selectedText[i])[0].children[BULB_ELEMENT].style.fill = OFF_COLOR;
                if(i === selectedText.length - 1)
                    reset();
            }
        }, 500);
    }

    function reset() {
        $("#go_for_it")[0].disabled = false;
        selectedText = [];
        index = 0;
        clearInterval(interval);
    }
})