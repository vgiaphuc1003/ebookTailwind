// Show/Hide Account Profile

function accountBtn() {
    var x = document.getElementById("accountDetails");
    if (x.classList.contains("show")) {
        x.classList.remove("show");
    }
}

// document.addEventListener("click", function handleClickOutsideBox(event) {
//     if (x.classList.contains("show")) {
//         x.classList.remove("show");

//     } else {
//         x.classList.add("show");
//     }

//     console.log("user clicked: ", event.target);
// });

// if (!x.contains(event.target)) {
//     x.classList.remove("show");
// } else {
//     x.classList.add("show");
// }
