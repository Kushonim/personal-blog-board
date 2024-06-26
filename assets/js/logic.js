var modeEl = document.getElementById("pageModeSelect");
let mode = "light";
modeEl.textContent = "☼ Light Mode"

// A function that listens to light/dark mode button and changes the background color accordingly
modeEl.addEventListener("click", function() {
    if(mode === "light") {
        document.body.style.backgroundColor = "#49243E";
        modeEl.textContent="☾ Dark Mode";
        mode = "dark";
    } else if (mode === "dark") {
        document.body.style.backgroundColor = "#EEE2DC";
        modeEl.textContent="☼ Light Mode";
        mode = "light";
    }
})