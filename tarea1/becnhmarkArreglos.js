// benchmarkArreglos.js

function generarDatos(tamano) {
  const datos = [];
  for (let i = 0; i < tamano; i++) {
    datos.push({
      id: i,
      valor: Math.random() * 1000
    });
  }
  return datos;
}

function benchmark(tamano) {
  console.log(`\n🔎 Benchmark con ${tamano} elementos`);

  const datos = generarDatos(tamano);

  // 1️⃣ filter + map
  console.time("filter + map");
  const resultado1 = datos
    .filter(item => item.valor > 500)
    .map(item => item.valor * 2);
  console.timeEnd("filter + map");

  // 2️⃣ reduce
  console.time("reduce");
  const resultado2 = datos.reduce((acc, item) => {
    if (item.valor > 500) {
      acc.push(item.valor * 2);
    }
    return acc;
  }, []);
  console.timeEnd("reduce");

  // 3️⃣ for tradicional
  console.time("for loop");
  const resultado3 = [];
  for (let i = 0; i < datos.length; i++) {
    if (datos[i].valor > 500) {
      resultado3.push(datos[i].valor * 2);
    }
  }
  console.timeEnd("for loop");
}


// Ejecutar pruebas con diferentes tamaños
benchmark(10000);
benchmark(100000);
benchmark(500000);
