import express from "express";
import produtosRouter from "./produtos";

const router = express.Router();

// Rota de produtos
router.use("/produtos", produtosRouter);

// Rota principal (nome e idade)
router.get("/", (req, res) => {
  let nome: string = "João Guilherme"; // altere para o seu nome
  let idade: number = 16;              // e sua idade real
  res.json({ nome, idade });
});

// Rota de teste
router.get("/ping", (req, res) => {
  res.json({ pong: true });
});

export default router;
