const mainElem = document.querySelector("main");
const bgImg = document.querySelector(".bg-img");

let targetX = 0, targetY = 0;
let currentX = 0, currentY = 0;

mainElem.addEventListener("mousemove", (event) => {
    targetX = (event.clientX / window.innerWidth - 0.5) * 50;
    targetY = (event.clientY / window.innerHeight - 0.5) * 50;
});

function animate() {
    currentX += (targetX - currentX) * 0.05;
    currentY += (targetY - currentY) * 0.05;

    bgImg.style.transform = `translate(${currentX}px, ${currentY}px) scale(1.05)`;
    requestAnimationFrame(animate);
}

animate();
