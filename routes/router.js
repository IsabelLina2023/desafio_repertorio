import express from "express";
import { home, addSong, getSong, editSong, deleteSong} from "../controller/controller.js";
const router = express.Router();

router.get("/", home);

router.post('/cancion', addSong);

router.get('/canciones', getSong);

router.put('/cancion/:id', editSong);

router.delete('/cancion', deleteSong);

router.get("*", (req, res) => {
  res.send("404 - page not found");
});

export default router;