import { Router, Request, Response } from "express";
import produtosRouter from "./produtos.js";

const router = Router();

router.get("/ping", (req: Request, res: Response) => {
  res.json({ pong: true });
});

router.get("/", (req: Request, res: Response) => {
  res.json({ nome: "Everson", idade: 34 });
});

router.use("/produtos", produtosRouter);

export default router;
