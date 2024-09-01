
let clock = document.querySelector('.abc')

setInterval(function() {
    let currentTime = new Date().toLocaleTimeString()

    updateTime(currentTime)
}, 1000)

function updateTime(time) {
    clock.innerHTML = time
} 