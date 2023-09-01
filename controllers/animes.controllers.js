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
        res.status(200).json({ code: 200, message: "OK", animes: data.animes });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            code: 500,
            message: "Error al leer los datos de Anime's",
        });
    }
};

const findByPk = async (req = request, res = response) => {
    let id = req.params.id;

    //res.send("devolver todos los animes");
    try {
        let data = await fs.readFile(pathAnimes, "utf-8");
        data = JSON.parse(data);
        console.log("-------------DATA----------------------");
        console.log(data);

        //let animeBuscado = data.animes.find((anime) => anime.id == id);
        let animeBuscado = data[id];

        if (!animeBuscado) {
            return res.status(404).json({
                code: 404,
                message: `No existe el Anime con ID: ${id}`,
            });
        }
        console.log("--------Anime encontrado-----------------");
        console.log(animeBuscado);
        res.status(200).json({ code: 200, message: "OK", anime: animeBuscado });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            code: 500,
            message: "Error al leer Anime con ID: " + id,
        });
    }
};

export { findAll, findByPk };
