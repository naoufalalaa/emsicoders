function myFunction(x) {
    x.classList.toggle("change");
    var links = document.getElementById("nav-links");
    links.classList.toggle("show");
}
function hide(){
    var location = document.getElementById("location");
    location.classList.toggle("showMe");
    var icon = document.getElementById("angle");
    icon.classList.toggle("rotate");
}