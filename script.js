const toggleButton = document.getElementById('toggleButton');
const slider = document.querySelector('.slider');

let isToggled = false;

toggleButton.addEventListener('click', () => {
    isToggled = !isToggled;

    if (isToggled) {
        slider.style.transform = 'translateX(30px)';
        toggleButton.style.backgroundColor = '#4CAF50'; // Green color when toggled on
    } else {
        slider.style.transform = 'translateX(0)';
        toggleButton.style.backgroundColor = '#ff0000'; // Default color when toggled off
    }
});
