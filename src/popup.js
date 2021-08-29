import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { fetchSwitchState, setState, setObserverState } from './repository/state';
import { SWITCH_STATE } from './repository/static';

const switchOnClassName = 'switch-on';
const switchOffClassName = 'switch-off';
const switchButton = document.getElementById('neumorphism-button');

switchButton.addEventListener('click', () => {
    if (switchButton.classList.contains(switchOffClassName)) {
        setSwitchState(true);
    } else if (switchButton.classList.contains(switchOnClassName)) {
        setSwitchState(false);
    }
});

/**
 *
 * @param {Boolean} value
 */
function refreshView(value) {
    if (value) {
        switchButton.classList.remove(switchOffClassName);
        switchButton.classList.add(switchOnClassName);
        switchButton.value = 'ON';
        sendOnMessage();
    } else {
        switchButton.classList.remove(switchOnClassName);
        switchButton.classList.add(switchOffClassName);
        switchButton.value = 'OFF';
        sendOffMessage();
    }
}

/**
 *
 * @param {Boolean} value
 */
function setSwitchState(value) {
    const obj = {};
    obj[SWITCH_STATE] = value;
    setState(obj)
        .then(res => {})
        .catch(res => {});
}

/**
 * Stateの監視
 * @param {Object} changes 変化した値
 * @param {String} area 変化したストレージタイプ
 */
function observeState(changes, area) {
    console.log(changes);
    if (Object.keys(changes).includes(SWITCH_STATE)) {
        refreshView(changes[SWITCH_STATE].newValue);
    }
}
setObserverState(observeState);

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

fetchSwitchState().then(value => {
    console.log(value);
    refreshView(value);
});
