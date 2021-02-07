function myFunction() {
    const x = document.getElementById("myMenu");
    if (x.className === "myLinks") {
        x.className += " responsive";
    } else {
        x.className = "myLinks";
    }
}

// function myFunction() {
//     const x = document.getElementById("myMenu");
//     if (x.style.display === "flex") {
//         x.style.display = "none";
//     } else {
//         x.style.display = "flex";
//     }
//   }

/*
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
*/
