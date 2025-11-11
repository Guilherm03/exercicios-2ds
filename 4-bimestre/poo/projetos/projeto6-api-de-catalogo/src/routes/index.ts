import { Router, Request, Response } from "express";
import produtosRouter from "./produto.ts";

const router = Router();

// Rota de teste
router.get("/ping", (req: Request, res: Response) => {
  res.json({ pong: true });
});

// Rota principal → retorna nome e idade
router.get("/", (req: Request, res: Response) => {
  res.json({ nome: "João Guilherme", idade: 16 }); // altere para seu nome e idade
});

// Usando as rotas de produtos
router.use("/produtos", produtosRouter);

export default router;
