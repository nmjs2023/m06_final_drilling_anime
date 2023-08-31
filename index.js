import express from "express";
import animesRoutes from "./routes/animes.routes.js";

const app = express();

const PORT = 3000;
app.listen(3000, () => {
    console.log(`Servidor escuchando en puerto ${PORT}`);
});

//------------- RUTAS - ENDPOINTS ---------

/* 
app.get("/", (req, res) => {
    res.send("Página principal");
}); 
*/

app.use("/api/v1/animes", animesRoutes);
