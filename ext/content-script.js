var elements = document.getElementsByClassName("ContributionCalendar-day");

function changeColor() {
    var letters = "1234567890ABCDEF";
    var color = "#";
    for (var i = 0; i < 8; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

for (var i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = changeColor();
}

changeColor();
