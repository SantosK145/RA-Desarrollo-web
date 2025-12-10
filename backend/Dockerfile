# 1. Imagen base oficial de Node.js (versión LTS recomendada)
FROM node:18-alpine

# 2. Crear y definir directorio de trabajo dentro del contenedor
WORKDIR /app

# 3. Copiar package.json y package-lock.json
COPY package*.json ./

# 4. Instalar dependencias
RUN npm install

# 5. Copiar el resto del código de la aplicación
COPY . .

# 6. Exponer el puerto donde corre la app
EXPOSE 3000

# 7. Comando para iniciar la aplicación
CMD ["npm", "start"]
