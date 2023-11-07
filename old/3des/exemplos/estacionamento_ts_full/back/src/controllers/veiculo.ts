import Veiculo, { IVeiculo } from "../models/veiculo";
import { Request, Response } from "express";

class VeiculoController {
    async create(req: Request, res: Response) {
        try {
            const veiculo: IVeiculo = new Veiculo({
                placa: req.body.placa,
                tipo: req.body.tipo,
                modelo: req.body.modelo,
                marca: req.body.marca,
                cor: req.body.cor,
            });
            await veiculo.save();
            res.status(201).json(veiculo);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }

    async read(req: Request, res: Response) {
        try {
            const veiculos: IVeiculo[] = await Veiculo.find();
            res.json(veiculos);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }

    async update(req: Request, res: Response) {
        try {
            const veiculo: IVeiculo | null = await Veiculo.findById(req.params.id);

            if (veiculo) {
                if (req.body.name) veiculo.placa = req.body.placa;
                if (req.body.tipo) veiculo.tipo = req.body.tipo;
                if (req.body.modelo) veiculo.modelo = req.body.modelo;
                if (req.body.marca) veiculo.marca = req.body.marca;
                if (req.body.cor) veiculo.cor = req.body.cor;
                await veiculo.save();
                res.json(veiculo);
            } else {
                res.status(404).json({ message: "Veículo não encontrado" });
            }
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
    async remove(req: Request, res: Response) {
        try {
            const veiculo: IVeiculo | null = await Veiculo.findByIdAndDelete(req.params.id);
            if (veiculo) {
                res.json({ message: "Veiculo removido" });
            } else {
                res.status(404).json({ message: "Veículo não encontrado" });
            }
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
}
export default new VeiculoController();