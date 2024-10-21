async function getJoke() {
    
    try {
        const response = await fetch('https://official-joke-api.appspot.com/random_joke');
        const data = await response.json();
        document.getElementById('joke').textContent = `${data.setup} - ${data.punchline}`;
    } 
    catch (error) {
        document.getElementById('joke').textContent = 'Failed to fetch a joke!';
    }

}

getJoke();

document.getElementById('new-joke-btn').addEventListener('click', getJoke);