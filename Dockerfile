# 1. Imagen base
FROM node:18-alpine

# 2. Crear directorio de la app
WORKDIR /app

# 3. Copiar package.json y package-lock.json
COPY package*.json ./

# 4. Instalar dependencias
RUN npm install --production

# 5. Copiar el resto del proyecto
COPY . .

# 6. Exponer el puerto (cámbialo si tu server.js usa otro)
EXPOSE 3000

# 7. Comando de arranque
CMD ["node", "server.js"]
