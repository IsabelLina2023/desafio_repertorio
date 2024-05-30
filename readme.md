# Desafío Mi repertorio

Prueba de Desafío LATAM, que solicita los sgtes. requerimientos:

Desarrollar un servidor con Express, usando el paquete pg para conectarse con PostgreSQL y funciones asíncronas para hacer las consultas a una base de datos.

## Descripción del proyecto

Trabajo enfocado solo en el BackEnd.

Se crea base de datos llamada repertorio y tabla llamada canciones.

Se disponibilizan las siguientes rutas:
●
POST /cancion: Recibe los datos correspondientes a una canción y realiza la inserción en la tabla canciones.
●
GET /canciones: Devuelve un JSON con los registros de la tabla canciones.
●
PUT /cancion: Recibe los datos de una canción que se desea editar y ejecuta una función asíncrona para hacer la consulta SQL, actualizando ese registro en la tabla canciones.
●
DELETE /cancion: Recibe por queryString el id de una canción y realiza una consulta SQL a través de una función asíncrona para eliminarla de la base de datos.


Realizado por: Norma Isabel Rojas 🌞