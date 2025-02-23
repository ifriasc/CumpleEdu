const codeElement = document.querySelector("#code code");
const codeText = `// ¡Feliz Cumpleaños! 🎉
function showMessage() {
    console.log("¡Feliz Cumpleaños! 🎂");
    document.getElementById("output").innerText = "¡Feliz Cumpleaños! 🎂";
}
Executing birthday_message.js...`;

let index = 0;
function typeCode() {
    if (index < codeText.length) {
        codeElement.innerHTML += codeText[index] === '\n' ? '<br>' : codeText[index];
        index++;
        setTimeout(typeCode, 50); // Velocidad de escritura
    } else {
        // Una vez terminado de escribir el código, se llama a la función de transición:
        transitionToPage("./prueba.html"); 
    }
}

typeCode();

function transitionToPage(url) {
    document.body.classList.add("transitioning");
    setTimeout(() => {
        window.location.href = url;
    }, 2000); // Espera a que la animación termine (1s)
}

document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.remove("transitioning");
});