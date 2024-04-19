document.addEventListener("DOMContentLoaded", function() {
    const counterElement = document.getElementById("counter");
    const targetCount = 185;
    let count = 0;

    function updateCounter() {
        if (count <= targetCount) {
            counterElement.textContent = count++;
            setTimeout(updateCounter, 10); 
        }
    }
    updateCounter();
});