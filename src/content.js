import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { discoverNeumorphismElements, resetNeumorphismElements } from './util/analyze';
import { applyNeumorphism } from './util/style';

function main() {
    const targetElements = discoverNeumorphismElements();
    targetElements.forEach(element => {
        applyNeumorphism(element);
    });
}

// メッセージリステナー
function onMessage(message) {
    if (message['switch'] === 'on') {
        main();
    } else {
        resetNeumorphismElements();
    }
}
browser.runtime.onMessage.addListener(onMessage);

// 初期実行を通知
browser.runtime
    .sendMessage({
        exec: 'init',
    })
    .then(res => {})
    .catch(err => {});

let href = location.href;

const observer = new MutationObserver(function(mutations) {
    if (href !== location.href) {
        href = location.href;

        browser.runtime
            .sendMessage({
                exec: 'update',
            })
            .then(res => {})
            .catch(err => {});
    }
});

observer.observe(document, { childList: true, subtree: true });
