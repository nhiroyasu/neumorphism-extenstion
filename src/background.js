import { fetchSwitchState } from './repository/state';

function sendOnMessage() {
    browser.tabs.query({}).then(tabs => {
        for (let tab of tabs) {
            browser.tabs
                .sendMessage(tab.id, {
                    switch: 'on',
                })
                .then(res => {})
                .catch(err => {});
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
                .then(res => {})
                .catch(err => {});
        }
    });
}

function onMessage(message) {
    console.log(message);
    switch (message['exec']) {
        case 'init':
            fetchSwitchState().then(value => {
                if (value) {
                    sendOnMessage();
                } else {
                    sendOffMessage();
                }
            });
            break;
        default:
            break;
    }
}
browser.runtime.onMessage.addListener(onMessage);
