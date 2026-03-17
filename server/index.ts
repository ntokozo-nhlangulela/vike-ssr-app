import { PrismaClient } from "@prisma/client";
import cors from "cors";
import express from "express";

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

app.get("/api/products", async (req, res) => {

  const products = await prisma.product.findMany();
  res.json(products);
});


app.get("/api/products/:id", async (req, res) => {
  
  const product = await prisma.product.findUnique({
    where: { id: req.params.id }
  });

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }
res.json(product);

});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});