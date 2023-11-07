import express, { Request, Response } from "express";
import veiculo from "../controllers/veiculo";

const router = express.Router();

router.get("/", (req: Request, res: Response) => { res.send("API Respondendo"); });
router.post("/veiculos", veiculo.create);
router.get("/veiculos", veiculo.read);
router.put("/veiculos/:id", veiculo.update);
router.delete("/veiculos/:id", veiculo.remove);

export default router;