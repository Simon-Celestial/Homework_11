let startBtn = document.getElementById("start");

startBtn.addEventListener("click", () => {
    confirm("Do you want to change body color to black?")? document.body.style.backgroundColor = "black" : document.body.style.backgroundColor = "bisque";
});

