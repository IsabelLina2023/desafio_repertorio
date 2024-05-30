import { pool } from "../config/db.js";

const addSongQuery = async(datos) => {
    try {
        const sql = {
            text: "INSERT INTO canciones (titulo, artista, tono) VALUES ($1, $2, $3) RETURNING *",
            values: datos,
        };
        const response = await pool.query(sql);
        if (response.rowCount > 0) {
            return response.rows[0];
        } else {
            return throwError("No se agregó la canción");
        };
    } catch (error) {
        console.error("Error code: ", error.code, "Error message: ", error.message);
    };
};

const getSongQuery = async() => {
    try {
        const sql = { text: "SELECT * FROM canciones" };
        const result = await pool.query(sql);
        if (result.rowCount > 0) {
            return result.rows;
        } else {
            return throwError("No se obtuvo la lista de canciones");
        };
    } catch (error) {
        console.log("Error code: ", error.code, "Error message: ", error.message);
    };
};

const editSongQuery = async(titulo, artista, tono, id) => {
    try {
        const sql = {
            text: "UPDATE canciones SET titulo = $1, artista = $2, tono = $3 WHERE id = $4 RETURNING *",
            values: [titulo, artista, tono, id],
        };
        const result = await pool.query(sql);
        if (result.rowCount > 0) {
            return result.rows[0];
        } else {
            return throwError("No se pudo editar la canción");
        };
    } catch (error) {
        console.log("Error code: ", error.code, "Error message: ", error.message);
    };
};

const deleteSongQuery = async(id) => {
    try {
        const sql = {
            text: "DELETE FROM canciones WHERE id = $1 returning *",
            values: [id],
        };
        const result = await pool.query(sql)
        if (result.rowCount > 0) {
            return result.rows
        } else {
            return throwError("No se pudo eliminar la canción");
        };
    } catch (error) {
        console.log("Error code: ", error.code, "Error message: ", error.message);
    };
};

export { addSongQuery, getSongQuery, editSongQuery, deleteSongQuery };