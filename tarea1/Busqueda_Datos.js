// busquedaDatos.js

const usuarios = [
  { id: 1, nombre: "Ana", email: "ana@mail.com" },
  { id: 2, nombre: "Luis", email: "luis@mail.com" },
  { id: 3, nombre: "Carlos", email: "carlos@mail.com" }
];


// 1️⃣ Usando ciclo for
function buscarPorCorreoFor(email) {
  for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].email === email) {
      return usuarios[i];
    }
  }
  return null;
}


// 2️⃣ Usando find
function buscarPorCorreoFind(email) {
  return usuarios.find(usuario => usuario.email === email) || null;
}


// 3️⃣ Usando preprocesamiento (indexación)
function crearIndicePorCorreo(data) {
  const indice = {};
  data.forEach(usuario => {
    indice[usuario.email] = usuario;
  });
  return indice;
}

const indice = crearIndicePorCorreo(usuarios);

function buscarPorCorreoIndex(email) {
  return indice[email] || null;
}


// Pruebas
console.log(buscarPorCorreoFor("ana@mail.com"));
console.log(buscarPorCorreoFind("ana@mail.com"));
console.log(buscarPorCorreoIndex("ana@mail.com"));
