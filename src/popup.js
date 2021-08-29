import { getState, setState } from './repository/state';
const switchOnClassName = 'switch-on';
const switchOffClassName = 'switch-off';
const switchButton = document.getElementById('neumorphism-button');

switchButton.addEventListener('click', () => {
    if (switchButton.classList.contains(switchOffClassName)) {
        switchButton.classList.remove(switchOffClassName);
        switchButton.classList.add(switchOnClassName);
        switchButton.value = 'ON';
        sendOnMessage();
    } else if (switchButton.classList.contains(switchOnClassName)) {
        switchButton.classList.remove(switchOnClassName);
        switchButton.classList.add(switchOffClassName);
        switchButton.value = 'OFF';
        sendOffMessage();
    }
});

function sendOnMessage() {
    browser.tabs.query({}).then(tabs => {
        for (let tab of tabs) {
            browser.tabs
                .sendMessage(tab.id, {
                    switch: 'on',
                })
                .then(res => {
                    console.log(res);
                })
                .catch(err => {
                    console.error(err);
                });
        }
    });
}

function sendOffMessage() {
    browser.tabs.query({}).then(tabs => {
        for (let tab of tabs) {
            browser.tabs
                .sendMessage(tab.id, {
                    switch: 'off',
                })
                .then(res => {
                    console.log(res);
                })
                .catch(err => {
                    console.error(err);
                });
        }
    });
}

function onMessage(message) {
    switch (message['exec']) {
        case 'reload':
            browser.tabs.reload();
            break;
        case 'init':
            break;
        default:
            break;
    }
}

browser.runtime.onMessage.addEventListener(onMessage);
