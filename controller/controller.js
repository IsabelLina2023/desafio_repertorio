import path from "path";
import { addSongQuery, getSongQuery, editSongQuery, deleteSongQuery } from "../models/queries.js";
const __dirname = path.resolve();

export const home = (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
};

export const addSong = async (req, res) => {
    const { titulo, artista, tono } = req.body;
    const datos = [titulo, artista, tono];  
    const cancion = await addSongQuery(datos);
    res.send(cancion);
};

export const getSong = async (req, res) => {
    const canciones = await getSongQuery();
    res.send(canciones);
};

export const editSong = async (req, res) => {
    const { id } = req.params;
    const { titulo, artista, tono } = req.body;
    const cancion = await editSongQuery(titulo, artista, tono, id);
    res.send(cancion);
};

export const deleteSong = async (req, res) => {
    const { id } = req.query;
    const cancion = await deleteSongQuery(id);
    res.send(cancion);
};