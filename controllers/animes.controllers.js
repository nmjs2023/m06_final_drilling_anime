import { request, response } from "express";
import fs from "fs/promises";

import * as path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

let pathAnimes = path.resolve(__dirname, "../data/anime.json");

console.log("ruta archivo animes", pathAnimes);

const findAll = async (req = request, res = response) => {
    //res.send("devolver todos los animes");
    try {
        let data = await fs.readFile(pathAnimes, "utf-8");
        data = JSON.parse(data);
        console.log(data);
        res.status(200).json({ code: 200, message: "OK", animes: data });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            code: 500,
            message: "Error al leer los datos de Anime's",
        });
    }
};

const findByPk = async (req = request, res = response) => {
    //res.send("devolver todos los animes");
    try {
        let data = await fs.readFile(pathAnimes, "utf-8");
        data = JSON.parse(data);
        console.log(data);
        res.status(200).json({ code: 200, message: "OK", animes: data });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            code: 500,
            message: "Error al leer los datos de Anime's",
        });
    }
};

export { findAll, findByPk };
