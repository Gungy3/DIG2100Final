let mybutton = document.getElementById("topButton")

window.onscroll = function() {scrollFunction()}

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.ducomentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0; // Used for Safari
    document.ducomentElement.scrollTop =0; //Used for pretty much everything else
}