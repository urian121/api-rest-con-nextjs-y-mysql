# Como conectar MySQL con Next.js

# Instalar el paquete (driver) mysql2 para conectar MySQL con Next.js

    npm install --save mysql2

    https://www.npmjs.com/package/mysql2

##### Crear una BD en el gestor de base de datos MySQL

    bd_nextjs_mysql

##### Instalar Axios para hacer peticiones HTTP

    npm install axios

##### Crear el archivo db.js en src/lib, para configurar la conexión a la base de datos

## Instalar dependencias del proyecto

    npm install
    Luego ejecutar los siguientes comandos:

    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    # or
    bun dev
    ```

Acceder a la URL en tu navegador [http://localhost:3000](http://localhost:3000)

##### Métodos (GET, POST, PUT, DELETE) para realizar las peticiones HTTP

    Para obtener todos los registros
    http://localhost:3000/api/empleados


    Para obtener un solo registro de acuerdo a su ID
    http://localhost:3000/api/empleados/4


    Para insertar un nuevo registro
    http://localhost:3000/api/empleados


    Para actualizar un registro de acuerdo a su ID
    http://localhost:3000/api/empleados/34


    Para eliminar un registro de acuerdo a su ID
    http://localhost:3000/api/empleados/35

---

    async function loadProduct() {
        const { data } = await axios.get("http://localhost:3000/api/products");
        console.log(data);
        return data;
    }

    async function ProductsPage() {
        const products = await loadProduct();

        if (products.length === 0) return <h1>No Products</h1>;

        return (
            <div className="grid gap-4 grid-cols-1 md:grid-cols-4">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
            </div>
        );
    }
