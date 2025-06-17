const yesButton = document.getElementById("yes");
const noButton = document.getElementById("no");
const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "Pookie please...",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️"
];
var messageIndex = 0;

function accepted() {
    const head = document.getElementById("head");
    const gif = document.getElementById("gif");
    yesButton.style.display = `none`;
    noButton.style.display = `none`;
    head.textContent = "I knew it freaky 🩵"
    gif.src = "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2tta2Zkd3BkdDY4OWRsczRxM2g1NDU4ZXliMXc5cHY5NmlweGMxciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5dUllWbKVlaqmMTvHb/giphy.gif";
}

function rejected() {
    if(messageIndex >= messages.length) {
        noButton.style.display = `none`;
    } else {
        noButton.textContent = messages[messageIndex++];
        const currentSize = parseFloat(getComputedStyle(yesButton).fontSize);
        yesButton.style.fontSize = `${currentSize * 1.25}px`;
    }
}