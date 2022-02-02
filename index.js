const canvas = document.getElementById("canvas1")
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");
const particlesArray = [];
let hue = 0;

window.addEventListener('resize', (event) => {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;


})

const mouse = {
    x: undefined,
    y: undefined
}
canvas.addEventListener("click", (event) => {
    mouse.x = event.x;
    mouse.y = event.y;
    for (let i = 0; i < 5; i++) {
        particlesArray.push(new Particle())

    }
})
canvas.addEventListener("mousemove", (event) => {
    mouse.x = event.x;
    mouse.y = event.y;
    for (let i = 0; i < 5; i++) {
        particlesArray.push(new Particle())

    }
    
})

class Particle {
    constructor() {
        this.x = mouse.x;
        this.y = mouse.y;
        // this.x = Math.random() * canvas.width
        // this.y = Math.random() * canvas.width
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.color = "hsl("+hue+",100%,50%)";
    }

    update() {
        this.x += this.speedX
        this.y += this.speedY
        this.size > 0.2 ? this.size -= 0.1 : this.size
    }
    draw() {
        ctx.fillStyle = this.color;        
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();

    }
}


function handleParticles() {
    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
        if (particlesArray[i].size <= 0.3) {
            particlesArray.splice(i, 1);
            i--;
        }
    }
}


function animate() {
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgba(0,0,0,0.1)"
    ctx.fillRect(0,0,canvas.width,canvas.height)
    handleParticles();
    hue+=.5;
    requestAnimationFrame(animate);
}
animate();




// function init() {
//     for (let i = 0; i < 100; i++) {
//         particlesArray.push(new Particle())
//     }
// }
// init();


