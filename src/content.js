import { discoverNeumorphismElements, resetNeumorphismElements } from './util/analyze';
import { applyNeumorphism } from './util/style';

function main() {
    const targetElements = discoverNeumorphismElements();
    targetElements.forEach(element => {
        applyNeumorphism(element);
    });
}

function onMessage(message) {
    if (message['switch'] === 'on') {
        main();
    } else {
        resetNeumorphismElements();
    }
}

browser.runtime.onMessage.addListener(onMessage);

browser.runtime
    .sendMessage({
        exec: 'init',
    })
    .then(res => {})
    .catch(err => {});
