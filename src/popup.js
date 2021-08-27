const switchOnClassName = 'switch-on';
const switchOffClassName = 'switch-off';
const switchButton = document.getElementById('neumorphism-button');

switchButton.addEventListener('click', () => {
    if (switchButton.classList.contains(switchOffClassName)) {
        switchButton.classList.remove(switchOffClassName)
        switchButton.classList.add(switchOnClassName)
        switchButton.value = "ON"
    } else if (switchButton.classList.contains(switchOnClassName)) {
        switchButton.classList.remove(switchOnClassName)
        switchButton.classList.add(switchOffClassName)
        switchButton.value = "OFF"
    }
})