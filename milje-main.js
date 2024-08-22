window.addEventListener("message", (event) => {
    if (event.data.extensionDetected) {
        const elementToHide = document.getElementById("test-milje");
        if (elementToHide) elementToHide.style.display = "none";
    }
});