function myFunction() {
    const x = document.getElementById("myMenu");
    if (x.className === "myLinks") {
        x.className += " responsive";
    } else {
        x.className = "myLinks";
    }
}
