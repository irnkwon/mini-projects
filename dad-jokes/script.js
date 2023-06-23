const jokeContent = document.getElementById('joke')
const jokeButton = document.getElementById('joke-button')

generateJokes()

jokeButton.addEventListener('click', generateJokes)

async function generateJokes() {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    }

    const response = await fetch('https://icanhazdadjoke.com/', config)
    const data = await response.json()

    jokeContent.innerHTML = data.joke
}

// function generateJokes() {
//     const config = {
//         headers: {
//             'Accept': 'application/json'
//         }
//     }

//     fetch('https://icanhazdadjoke.com/', config)
//     .then(response => response.json())
//     .then(data => {
//         jokeContent.innerHTML = data.joke
//     })
// }