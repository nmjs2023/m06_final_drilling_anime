import express from "express";
import animesRoutes from "./routes/animes.routes.js"; //se importan las rutas

const app = express();

//------------- MIDDLEWARES ---------
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//--------------------------------

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
