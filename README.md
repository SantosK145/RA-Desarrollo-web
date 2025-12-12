# Informacion sobre el proyecto
Este proyecto contiene el backend desarrollado en Node.js. Incluye integración continua (CI) mediante GitHub Actions, pruebas unitarias con Jest y despliegue mediante Docker.

# Requisitos
Antes de ejecutar el proyecto asegúrate de tener instalado:
- Node.js
- Docker y Docker Compose
- Git

# Dependencias necesarias
- npm i express
- npm i path
- npm i cors
- npm i dotenv
- npm i pg

Las pruebas unitarias se llevan a cabo mediante el siguiente comando:
npm test

# Construccion y ejecución con Docker
Construir la imagen
docker build -t ra-docker .

Ejecutar la imagen
docker run -p 3000:3000 ra-docker

# Construccion y ejecución con Docker Compose
    - docker compose up --build -d

Como iniciar el programa mediante Docker
    - docker compose up -d

# Detener contenedores
docker compose down

