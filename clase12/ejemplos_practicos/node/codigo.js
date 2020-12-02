/* 
Largo plazo
Elementos del lenguaje => 
        API de Node.Js => fs 
        Librerias => React / React-Router
        Frameworks => Next.Js
Corto plazo
*/
require('')
const cpus = require("os").cpus();

const maxCpu = cpus.reduce((prev, val) => {
  if (prev) {
    // 2da o > vuelta
    if (val.speed > prev.speed) {
      return val;
    } else {
      return prev;
    }
  } else {
    // 1ra vuelta
    return val;
  }
});

console.log(maxCpu, cpus);
