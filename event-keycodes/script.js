const body = document.querySelector('body');

window.addEventListener('keydown', (event) => {
    body.innerHTML = `
        <div class="box">
            ${event.key === ' ' ? 'Space' : event.key}
            <small>event.key</small>
        </div>
        <div class="box">
            ${event.keyCode}
            <small>event.keyCode</small>
        </div>
        <div class="box">
            ${event.code}
            <small>event.code</small>
        </div>
    `
})