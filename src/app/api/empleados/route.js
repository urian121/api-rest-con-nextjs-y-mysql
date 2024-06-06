import { query } from "../../../lib/db";
import { NextResponse } from "next/server";

export async function GET(request) {
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
    const { name, description, price } = await request.json();
    console.log(name, description, price);

    const result = await query("INSERT INTO tbl_empleados SET ?", {
      name,
      description,
      price,
    });

    return NextResponse.json({ name, description, price, id: result.insertId });
  } catch (error) {
    return NextResponse.json(
      { message: error.message },
      {
        status: 500,
      }
    );
  }
}
