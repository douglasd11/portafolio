const conteDegradado = document.querySelector('.cont-deg');
const principal = document.querySelector('.principal');
const sizeDegradado = 500;


conteDegradado.style.background = `radial-gradient(circle at 100px 100px, transparent 0%, #1e40547b ${sizeDegradado}px)`

principal.addEventListener('mousemove', (e) => {
    const x = e.clientX
    const y = e.clientY
    //console.log(x, y)
    conteDegradado.style.background = 
    `radial-gradient(circle at ${x}px ${y}px, #8987fd2f 0%, #ffffff00 ${100}px, #1e405444 ${sizeDegradado}px)`
})