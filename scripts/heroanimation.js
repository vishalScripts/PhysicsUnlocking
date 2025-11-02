const mainElem = document.querySelector("main");
const bgImg = document.querySelector(".bg-img");
const bgIcons= document.querySelector(".icons")
const bgIconsElem= document.querySelectorAll(".icon")



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
    
    bgIcons.style.rotate = `${(4 * currentX)}deg`

    bgIconsElem[0].style.transform = `rotate(-${ 60 + (4 * currentX)}deg) translateY(-15vw) rotate(${ 60 + (4 * currentY)}deg)`


    bgIconsElem[0].addEventListener("hover",(event)=>{
        targetX = (event.clientX / window.innerWidth - 0.5) * 50;
        targetY = (event.clientY / window.innerHeight - 0.5) * 50;
        bgIconsElem[0].style.transform = `rotate(-${ 60 + (4 * currentX)}deg) translateY(-${15 + ((targetX * targetY) / 2)}vw) rotate(${ 60 + (4 * currentY)}deg)`
    })

    bgIconsElem[1].style.transform = `rotate(${ 0 + (4 * currentX)}deg) translateY(-15vw) rotate(0deg)`

    bgIconsElem[2].style.transform = `rotate(${ 60 + (4 * currentX)}deg) translateY(-15vw) rotate(-${ 60 + (4 * currentY)}deg)`

    bgIconsElem[3].style.transform = `rotate(${ 120 + (4 * currentX)}deg) translateY(-15vw) rotate(-${ 120 + (4 * currentY)}deg)`

    bgIconsElem[4].style.transform = `rotate(-${ 120 + (4 * currentX)}deg) translateY(-15vw) rotate(${ 120 + (4 * currentY)}deg)`

    bgIconsElem[5].style.transform = `rotate(${ 180 + (4 * currentX)}deg) translateY(-15vw) rotate(-${ 180 + (4 * currentY)}deg)`

    // bgIconsElem.forEach((item, index)=>{

    //     if (index == 0) {
            
    //         item.style.transform = `rotate( -${ 60 * currentX}deg ) translateY(-15vw) rotate(60deg)`
    //     }
    //     console.log(index)
    // })
    // bgIcons.style.rotate = `${currentX}deg`
}

animate();
