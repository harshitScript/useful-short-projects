console.log('Welcome To speech Recognition Software.');

const listenButton = document.getElementById('listen-button');
const listenText = document.getElementById('listen-text');

if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
    console.log('Speech recognition is not supported in this browser.');
} else {
    console.log('Speech recognition is supported!');
}

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.lang = 'en-US'; // Set language to English (US)
recognition.interimResults = false; // Disable interim results
recognition.continuous = false; // Stops listening after a single result

// When recognition starts
recognition.onstart = function () {
    listenButton.innerHTML = 'listening....';
};

// When a speech result is returned
recognition.onresult = function (event) {
    const transcript = event.results[0][0].transcript;
    listenButton.innerHTML = 'Start Listening'
    listenText.innerHTML = transcript;
};

// If there is an error
recognition.onerror = function () {
    listenButton.innerHTML = 'Retry Listening'
};

listenButton.addEventListener('click', () => {
    recognition.start();
})
