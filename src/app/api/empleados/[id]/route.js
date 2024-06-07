import { query } from "@/lib/db";
import { NextResponse } from "next/server";

/**
 * En este Route definimos dos funciones GET, DELETE y PUT, que nos permiten obtener, borrar y actualizar un nuevo empleado.
 * Tanto request como context son necesarios para definir las funciones GET, DELETE y PUT. Actuamente el unico valor de context es 'params' el cual es un objeto que contiene los parametros de la ruta dinamica para la url actual.
 */

export async function GET(request, context) {
  // const { id } = await request.json();
  // console.log(id);

  // const { params } = context;
  // const { id } = context.params;
  const idEmpleado = context.params.id;
  /*
  console.log(params);
  console.log(id);
  console.log(idEmpleado);
  */

  const resultado = await query({
    query: "SELECT * FROM tbl_empleados WHERE id = ?",
    values: [idEmpleado],
  });
  return NextResponse.json(resultado);
}

// Método DELETE para eliminar un empleado por ID
export async function DELETE(request, context) {
  // const { id } = await request.json();
  // console.log(id);
  const { id } = context.params;

  try {
    const result = await query({
      query: "DELETE FROM tbl_empleados WHERE id = ?",
      values: [id],
    });

    if (result.affectedRows > 0) {
      return NextResponse.json({ message: `Empleado con ID ${id} eliminado correctamente` });
    } else {
      return NextResponse.json(
        { message: `No se encontró un empleado con ID ${id}` },
        { status: 404 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { message: error.message },
      {
        status: 500,
      }
    );
  }
}

// Método PUT para actualizar un empleado por ID
export async function PUT(request, context) {
  // Obtener el ID del contexto
  // const { id } = context.params;

  try {
    // Se leen los datos del empleado del cuerpo de la solicitud
    const { id, nombre, edad, cedula, sexo, telefono, cargo } = await request.json();
    console.log(`Actualizando empleado con ID: ${id}`);
    console.log(
      `Nuevos datos - Nombre: ${nombre}, Edad: ${edad}, Cédula: ${cedula}, Sexo: ${sexo}, Teléfono: ${telefono}, Cargo: ${cargo}`
    );

    // Se realiza una consulta para actualizar los datos del empleado en la base de datos
    const result = await query({
      query:
        "UPDATE tbl_empleados SET nombre = ?, edad = ?, cedula = ?, sexo = ?, telefono = ?, cargo = ? WHERE id = ?",
      values: [nombre, edad, cedula, sexo, telefono, cargo, id],
    });

    // Se verifica si alguna fila fue afectada y se devuelve una respuesta adecuada. Si no se encuentra el empleado,
    // se devuelve un error 404. También se maneja cualquier error que ocurra durante el proceso de actualización.
    if (result.affectedRows > 0) {
      return NextResponse.json({ message: `Empleado con ID ${id} actualizado correctamente` });
    } else {
      return NextResponse.json(
        { message: `No se encontró un empleado con ID ${id}` },
        { status: 404 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { message: error.message },
      {
        status: 500,
      }
    );
  }
}
