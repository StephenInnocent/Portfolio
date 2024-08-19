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

//Submitting contact
const contactForm = document.getElementById('contact_form');
contactForm.addEventListener('submit', function(event){
    event.preventDefault(); // Prevent form submission

    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries());
    

    fetch('http://localhost:2100/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.text())
    .then(data => {
        alert(data); // Show success message
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error sending message');
    });
});