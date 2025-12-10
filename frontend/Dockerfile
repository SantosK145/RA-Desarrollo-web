# Imagen base de Nginx
FROM nginx:alpine

# Eliminar configuración por defecto
RUN rm -rf /usr/share/nginx/html/*

# Copiar archivos del frontend (carpeta public)
COPY public /usr/share/nginx/html

# Exponer puerto donde Nginx sirve los archivos
EXPOSE 80

# Iniciar Nginx en modo foreground
CMD ["nginx", "-g", "daemon off;"]