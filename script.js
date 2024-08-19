document.addEventListener("DOMContentLoaded", function() {
    const flowTitle = document.getElementById("flow_title");
    const name = "Stephen_Innocent_Mandong"; 
    const delay = 100; // Delay in milliseconds between letters

    // Split the name into individual letters and create spans
    name.split("").forEach((letter, index) => {
        const span = document.createElement("span");
        span.textContent = letter;
        span.classList.add("letter");
        span.style.animationDelay = `${index * delay}ms`; // Set delay for each letter
        flowTitle.appendChild(span);
    });
});