# Usa nginx para servir arquivos estáticos
FROM nginx:alpine

# Copia todos os arquivos do projeto para a pasta pública do nginx
COPY . /usr/share/nginx/html

# Expõe a porta 8080
EXPOSE 8080

# Inicia o nginx em modo foreground
CMD ["nginx", "-g", "daemon off;"]