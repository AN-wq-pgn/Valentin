const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const container = document.querySelector(".container");

// Posición inicial
let posX = 100;
let posY = 50;

noBtn.style.left = posX + "px";
noBtn.style.top = posY + "px";

container.addEventListener("mousemove", function (e) {

    const rect = noBtn.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const dx = centerX - mouseX;
    const dy = centerY - mouseY;

    const distancia = Math.sqrt(dx * dx + dy * dy);

    if (distancia < 180) {

        const fuerza = 60;

        posX += (dx / distancia) * fuerza;
        posY += (dy / distancia) * fuerza;

        // Limitar dentro del contenedor
        posX = Math.max(0, Math.min(posX, containerRect.width - noBtn.offsetWidth));
        posY = Math.max(0, Math.min(posY, containerRect.height - noBtn.offsetHeight));

        noBtn.style.left = posX + "px";
        noBtn.style.top = posY + "px";
    }

});




// Si milagrosamente lo presionan
noBtn.addEventListener("click", function () {
    alert("JAJA te falta rapidez preciosa 😜");
});

// Cuando presiona "Sí"
yesBtn.addEventListener("click", function () {
    document.body.classList.add("latido");



    document.querySelector(".container").innerHTML = `
        <h1 style="font-size:3rem;">
            💕 Sabía que dirías que sí 💕<br>
            Te amoooo muchoo pollito 🐥💘
        </h1>
    <img src="ya.jpg" class="foto-romantica">
`;

    iniciarCorazones();
});



function crearCorazon() {
    const corazon = document.createElement("div");
    corazon.classList.add("corazon");
    corazon.innerHTML = "💖 ";
    corazon.style.left = Math.random() * window.innerWidth + "px";
    corazon.style.fontSize = (Math.random() * 20 + 20) + "px";

    document.body.appendChild(corazon);

    setTimeout(() => {
        corazon.remove();
    }, 3000);
}

function iniciarCorazones() {
    setInterval(crearCorazon, 300);
}
