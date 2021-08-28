import { discoverNeumorphismElements, resetNeumorphismElements } from './analyze';
import { applyNeumorphism } from './style';

function main() {
  const targetElements = discoverNeumorphismElements();
  targetElements.forEach((element) => {
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