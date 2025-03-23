document.addEventListener("DOMContentLoaded", function () {
    const toggleScript = document.getElementById("toggleScript");
    const statusText = document.getElementById("status");

    toggleScript.addEventListener("change", function () {
        if (toggleScript.checked) {
            statusText.textContent = "Turn On";
            enableBlocker();
        } else {
            statusText.textContent = "Turn Off";
            disableBlocker();
        }
    });

    function enableBlocker() {
        document.body.addEventListener("click", preventNewTabOpen, true);
        document.body.addEventListener("touchstart", preventNewTabOpen, true);
    }

    function disableBlocker() {
        document.body.removeEventListener("click", preventNewTabOpen, true);
        document.body.removeEventListener("touchstart", preventNewTabOpen, true);
    }

    function preventNewTabOpen(event) {
        event.preventDefault();
        event.stopPropagation();
        console.log("Blocked an unwanted tab from opening.");
    }
});
