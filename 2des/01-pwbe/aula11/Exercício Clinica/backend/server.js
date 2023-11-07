const express = require("express");
const cors = require("cors");

const EspecialidadesRouter = require("./src/routes/especialidades.routes");
const MedicosRouter = require("./src/routes/medicos.routes");
const PacientesRouter = require("./src/routes/pacientes.routes");
const AtendimentosRouter = require("./src/routes/atendimentos.routes");

const app = express();

app.use(cors());
app.use(express.json);

app.use(EspecialidadesRouter);
app.use(MedicosRouter);
app.use(PacientesRouter);
app.use(AtendimentosRouter);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});