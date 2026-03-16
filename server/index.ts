import cors from "cors";
import express from "express";

const app = express();

app.use(cors());
app.use(express.json());

const products = [
  { id: "1", name: "Laptop", price: 10000 },
  { id: "2", name: "Phone", price: 5000 },
  { id: "3", name: "Keyboard", price: 100 }
];

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {

  const product = products.find(p => p.id === req.params.id);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.json(product);
});
