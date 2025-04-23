# 🏃‍♂️ ONE Running - Prueba Técnica Backend

Este repositorio contiene la solución de backend para la prueba técnica propuesta por la startup **ONE Running**, implementada con `Node.js`, `Express`, `Sequelize`, `MySQL`, `JWT` y `Bull` + `Redis` para tareas en segundo plano.
---

## 🚀 Tecnologías utilizadas

- Node.js
- Express.js
- Sequelize ORM
- MySQL
- Redis + Bull (para procesamiento asíncrono)
- JWT (autenticación)
- Docker (para Redis)
- Postman (pruebas)

---

## 📦 Instalación y ejecución local

### 1. Clona el repositorio
``git clone https://github.com/tuusuario/onerunning-backend.git
cd onerunning-backend``


## 2. Instala las dependencias correspondientes
`npm install`


## 3. Configura tus variables de entorno
```bash
PORT=3000
DB_NAME=one_running
DB_USER=root
DB_PASSWORD=6kevin27
DB_HOST=localhost
REDIS_URL=redis://127.0.0.1:6379
JWT_SECRET=key
```
⚠️ Asegúrate de tener tu base de datos MySQL creada antes de ejecutar el servidor.

##  4. Corre el servidor y corre el Worker (para tareas en segundo plano)
`node app.js` y `npm run worker`

El Worker procesará tareas como la sincronización de dispositivos.

## 🧠 Estructura del proyecto
<!-- ``src``      
``config``                                         
``controllers``                    
``jobs``              
``middlewares``                
``models``       
``app.js ``        -->
```bash
src/
├── config/         # Configuración de Sequelize
├── controllers/    # Lógica de negocio
├── jobs/           # Bull queues y workers
├── middlewares/    # Autenticación con JWT
├── models/         # Definición de modelos Sequelize
├── routes/         # Rutas de la API
└── app.js          # Punto de entrada principal
```


## 🔐 Autenticación
El sistema utiliza ``JWT`` para proteger rutas. Para acceder a rutas como ``/devices`` o ``/workouts``, debes autenticarte y usar el token:                
``Authorization``: Bearer ``token``

## 📮 Endpoints principales
| Método | Ruta             | Descripción                         |
|--------|------------------|-------------------------------------|
| POST   | /users/register  | Registro de usuario                 |
| POST   | /users/login     | Login y obtención de token JWT      |
| GET    | /users/profile   | Ver perfil del usuario autenticado  |
| POST   | /devices         | Crear dispositivo (requiere JWT)    |
| GET    | /devices         | Ver dispositivos del usuario        |
| POST   | /workouts        | Crear entrenamiento asociado        |
| GET    | /workouts        | Consultar entrenamientos            |


## 🔁 Sincronización en segundo plano
Cuando un dispositivo es creado, se dispara una tarea en ``Bull`` que simula la sincronización del estado del dispositivo. Esta tarea es gestionada por ``Redis`` y el ``Worker``.

## 🧪 Pruebas
Se realizaron pruebas con ``Postman`` para validar:

``Registro`` y ``login``

``Asociación`` de ``dispositivos``

``Asociación`` de ``entrenamientos``

Tareas en segundo plano ejecutadas por el ``Worker``

# 📬 Contacto
Desarrollado por ``Kevin Steven Uribe Lara``

📧 ``kevinesteven0627@gmail.com``             
📍 ``Cajicá`` ``Colombia``

## 📌 Notas
``Redis`` se ejecuta con ``Docker``:

```bash
docker run --name redis-server -p 6379:6379 -d redis
```