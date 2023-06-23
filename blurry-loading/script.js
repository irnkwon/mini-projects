const loadingText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let percentage = 0
let interval = setInterval(blurring, 30)

function blurring() {
    percentage++

    if (percentage > 99) {
        clearInterval(interval)
    }

    loadingText.innerText = `${percentage}%`
    loadingText.style.opacity = scale(percentage, 0, 100, 1, 0)
    bg.style.filter = `blur(${scale(percentage, 0, 100, 30, 0)}px)`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}