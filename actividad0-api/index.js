const express = require("express");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 3000;
const BASE_URL = "https://jsonplaceholder.typicode.com";

app.use(express.json());

// 1) GET /users -> lista de usuarios
app.get("/users", async (req, res) => {
  try {
    const response = await axios.get(`${BASE_URL}/users`);
    return res.json(response.data);
  } catch (error) {
    return res.status(502).json({
      message: "Error al consultar JSONPlaceholder",
    });
  }
});

// 2) GET /users/:id -> un usuario por id
app.get("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // validación simple
    const numericId = Number(id);
    if (!Number.isInteger(numericId) || numericId <= 0) {
      return res.status(400).json({ message: "El id debe ser un entero positivo" });
    }

    const response = await axios.get(`${BASE_URL}/users/${numericId}`);

    // JSONPlaceholder típicamente responde 200 con objeto si existe
    return res.json(response.data);
  } catch (error) {
    // Si la API responde 404, axios cae aquí con error.response
    const status = error?.response?.status;
    if (status === 404) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    return res.status(502).json({
      message: "Error al consultar JSONPlaceholder",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
