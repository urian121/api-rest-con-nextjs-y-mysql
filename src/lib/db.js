import mysql from "mysql2/promise";

export async function query({ query, values = [] }) {
  const dbconnection = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    post: process.env.MYSQL_PORT,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
  });

  try {
    const [results] = await dbconnection.execute(query, values);
    console.log("Conexión exitosa a la base de datos...");

    const [rows] = await dbconnection.execute("SELECT 1 + 1 AS result");
    console.log("Consulta ejecutada exitosamente, resultado:", rows[0].result);

    dbconnection.end();
    return results;
  } catch (error) {
    console.error("Error al conectar a la base de datos:", error.message);
    //throw Error(error.message);
    return { error };
  }
}
