document.addEventListener("DOMContentLoaded", () => {
    console.log("JavaScript carregado com sucesso!");

    const mascot = document.getElementById("brown_x5F_mascot");
    let angle = 0;
    let position = 0;
    let scale = 1;
    let direction = 1;

    function animate() {
        angle += 1;

        position += 0.5 * direction;
        if (position > 20 || position < -20) {
            direction *= -1;
        }

        scale = 1 + 0.1 * Math.sin(angle * (Math.PI / 180)); 

        mascot.style.transform = `
            rotate(${angle}deg)
            translateX(${position}px)
            scale(${scale})
        `;

        requestAnimationFrame(animate);
    }

    animate();
});
