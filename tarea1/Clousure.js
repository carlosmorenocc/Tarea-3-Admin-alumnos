// counterClosure.js

function crearContador() {
  let total = 0; // estado privado

  return {
    incrementar() {
      total++;
    },
    disminuir() {
      total--;
    },
    reset() {
      total = 0;
    },
    obtenerCuenta() {
      return total;
    }
  };
}


// Prueba
const contador = crearContador();

contador.incrementar();
contador.incrementar();
contador.incrementar();
contador.disminuir();

console.log(contador.obtenerCuenta()); // 2
