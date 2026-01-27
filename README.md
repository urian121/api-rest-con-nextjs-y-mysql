# Como conectar MySQL con Next.js

Conexión de MySQL con Next.js: Recuperación de Datos a través de una API, este proyecto integra una base de datos MySQL con una aplicación Next.js para crear una API eficiente de recuperación de datos. Se establecerá una conexión segura utilizando bibliotecas como mysql2 o sequelize, y se desarrollarán endpoints en Next.js para manejar consultas SQL. El objetivo es proporcionar una solución escalable y eficiente para la manipulación de datos, ideal para aplicaciones web modernas.

En Next.js, las API Routes permiten crear puntos finales de API directamente dentro de la aplicación Next.js. Estas rutas son útiles para manejar solicitudes HTTP, realizar operaciones CRUD (crear, leer, actualizar, eliminar) y comunicarse con bases de datos o servicios externos, todo dentro del mismo entorno de la aplicación.

![Resultado final](https://raw.githubusercontent.com/urian121/imagenes-proyectos-github/master/api-rest-next-mysql.png)

Instalar el paquete (driver) mysql2 para conectar MySQL con Next.js

    npm install --save mysql2

    https://www.npmjs.com/package/mysql2

Crear una BD en el gestor de base de datos MySQL

    bd_nextjs_mysql

Crear el archivo db.js en src/lib, para configurar la conexión a la base de datos

Instalar dependencias del proyecto

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

Métodos (GET, POST, PUT, DELETE) para realizar las peticiones HTTP

    Para obtener todos los registros (GET)
    http://localhost:3000/api/empleados


    Para obtener un solo registro de acuerdo a su ID (GET)
    http://localhost:3000/api/empleados/4


    Para insertar un nuevo registro (POST)
    http://localhost:3000/api/empleados


    Para actualizar un registro de acuerdo a su ID (PUT)
    http://localhost:3000/api/empleados/34


    Para eliminar un registro de acuerdo a su ID (DELETE)
    http://localhost:3000/api/empleados/35

Código para el aechivo .env

    MYSQL_HOST ="localhost"
    MYSQL_PORT ="3306"
    MYSQL_DATABASE ="bd_nextjs_mysql"
    MYSQL_USER ="root"
    MYSQL_PASSWORD =

Expresiones de Gratitud 🎁

    Comenta a otros sobre este proyecto 📢
    Invita una cerveza 🍺 o un café ☕
    Paypal iamdeveloper86@gmail.com
    Da las gracias públicamente 🤓.

No olvides SUSCRIBIRTE 👍
