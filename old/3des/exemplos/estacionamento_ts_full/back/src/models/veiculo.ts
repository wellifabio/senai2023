import mongoose, { Schema, Document } from "mongoose";

export interface IVeiculo extends Document {
  placa: string;
  tipo: string;
  modelo: string;
  marca: string;
  cor: string;
}

const VeiculoSchema: Schema = new Schema({
  placa: { type: String, required: true, unique: true },
  tipo: { type: String, required: true },
  modelo: { type: String, required: true },
  marca: { type: String, required: false },
  cor: { type: String },
});

export default mongoose.model<IVeiculo>("Veiculo", VeiculoSchema);