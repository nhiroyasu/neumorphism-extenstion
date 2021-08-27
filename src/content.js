import { discoverNeumorphismElements } from './analyze';
import { applyNeumorphism } from './style';

function main() {
  const targetElements = discoverNeumorphismElements();
  targetElements.forEach((element) => {
    applyNeumorphism(element);
  });
}

setTimeout(() => {
  main();
}, 5000);

window.onload = function() {
  console.log("onload");
  main()
};