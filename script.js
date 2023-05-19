const popupButton = document.getElementById('popup-button');
const closeButton = document.getElementById('close-button');
const popupMenu = document.getElementById('popup-menu');

popupButton.addEventListener('click', function() {
popupMenu.style.display = 'inline-block' ;
});
closeButton.addEventListener('click', function() {
    popupMenu.style.display = 'none' ;
});

const texts = ['John Doe', 'Web Developer'];
const textElement = document.getElementById('text');
let textIndex = 0;
let charIndex = 0;

function typeText() {
    if (charIndex < texts[textIndex].length) {
        textElement.innerHTML += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 100);
    } else {
        setTimeout(eraseText, 1000);
    }
}

function eraseText() {
    if (charIndex > 0) {
        textElement.innerHTML = texts[textIndex].substring(0, charIndex-1);
        charIndex--;
        setTimeout(eraseText, 50);
    } else {
        textIndex++;
        if (textIndex >= texts.length) {
        textIndex = 0;
        }
        setTimeout(typeText, 1000);
    }
}

typeText();