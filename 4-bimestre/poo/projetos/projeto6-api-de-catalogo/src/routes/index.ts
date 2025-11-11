import { Router, Request, Response } from "express";
import produtosRouter from "./produto.ts";

const router = Router();

router.get("/ping", (req: Request, res: Response) => {
  res.json({ pong: true });
});

router.get("/", (req: Request, res: Response) => {
  res.json({ nome: "João Guilherme", idade: 16 });
});

router.use("/produtos", produtosRouter);

export default router;
