import { discoverNeumorphismElements } from './analyze'
import { applyNeumorphism } from './style';

function main() {
  const targetElements = discoverNeumorphismElements();
  targetElements.forEach((element) => {
    applyNeumorphism(element);
  });
}

main();
