// normalizacion.js

function normalizarUsuarios(data) {
  const resultado = {};

  data.forEach(usuario => {
    const { id, name, roles } = usuario;

    if (!resultado[id]) {
      resultado[id] = {
        id,
        name,
        roles: new Set()
      };
    }

    roles.forEach(role => resultado[id].roles.add(role));
  });

  // Convertimos Set a Array
  Object.keys(resultado).forEach(id => {
    resultado[id].roles = Array.from(resultado[id].roles);
  });

  return resultado;
}


// Prueba
const data = [
  { id: 1, name: "Ana", roles: ["admin", "editor"] },
  { id: 2, name: "Luis", roles: ["editor"] },
  { id: 1, name: "Ana", roles: ["viewer"] }
];

console.log(normalizarUsuarios(data));
