import { query } from "../../../lib/db";
import { NextResponse } from "next/server";
// import axios from "axios";

// Función con el metodo GET, esta retorna un JSON con todos los registros
export async function GET() {
  try {
    const results = await query({ query: "SELECT * FROM tbl_empleados" });
    return NextResponse.json(results);
  } catch (error) {
    return NextResponse.json(
      { message: error.message },
      {
        status: 500,
      }
    );
  }
}

export async function POST(request) {
  try {
    const { nombre, edad, cedula, sexo, telefono, cargo } = await request.json();
    // console.log(nombre, edad, cedula, sexo, telefono, cargo);

    //const MiQuery =
    const result = await query({
      query:
        "INSERT INTO tbl_empleados (nombre, edad, cedula, sexo, telefono, cargo) VALUES (?,?,?,?,?,?)",
      values: [nombre, edad, cedula, sexo, telefono, cargo],
    });

    return NextResponse.json({ nombre, edad, cedula, sexo, telefono, cargo, id: result.insertId });
  } catch (error) {
    return NextResponse.json(
      { message: error.message },
      {
        status: 500,
      }
    );
  }
}
