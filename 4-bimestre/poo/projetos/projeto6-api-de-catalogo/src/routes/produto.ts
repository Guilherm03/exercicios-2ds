import { Router, Request, Response } from "express";

const router = Router();

let produtos = [
  { id: 1, nome: "Mouse Gamer", preco: 120 },
  { id: 2, nome: "Teclado Mecânico", preco: 350 },
  { id: 3, nome: "Monitor Full HD", preco: 900 },
];

router.get("/", (req: Request, res: Response) => {
  res.json(produtos);
});

router.get("/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const produto = produtos.find((p) => p.id === id);

  if (produto) {
    res.json(produto);
  } else {
    res.status(404).json({ erro: "Produto não encontrado" });
  }
});

router.post("/", (req: Request, res: Response) => {
  const novoProduto = req.body;
  produtos.push(novoProduto);
  res.status(201).json(novoProduto);
});

export default router;
