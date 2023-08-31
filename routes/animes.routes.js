import { Router } from "express";
import { findAll, findByPk } from "../controllers/animes.controllers.js";
const router = Router();

// define the home page route
/* router.get("/", function (req, res) {
    res.send("lista de todos los animes");
});
 */
router.get("/", findAll);
router.get("/:id", findByPk);

export default router;
