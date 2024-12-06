const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let items = [
    { id: 1, name: "Item 1", description: "Descrição item 1" },
    { id: 2, name: "Item 2", description: "Descrição item 2" },
];

// Rota GET
app.get("/itens", (req, res) => {
    res.json(items);
});

// Rota POST
app.post("/itens", (req, res) => {
    const { name, description, location } = req.body;
    console.log("Dados recebidos no backend:", { name, description, location });
  
    if (!name || !description) {
      return res.status(400).json({ error: "Nome e descrição são obrigatórios" });
    }
  
    const newItem = {
      id: items.length + 1,
      name,
      description,
      location: location || { latitude: null, longitude: null },
    };
  
    items.push(newItem);
    console.log("Novo item adicionado:", newItem);
    res.status(201).json(newItem);
  });
  
  
  
  
  

app.listen(3000, () => {
    console.log("API is running on http://localhost:3000");
});
