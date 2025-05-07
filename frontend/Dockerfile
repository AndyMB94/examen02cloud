FROM node:18

WORKDIR /app

COPY package*.json ./

# Instala todas las dependencias necesarias (prod y dev)
RUN npm install --include=dev

# Asegura que los binarios de node_modules estén disponibles
ENV PATH="/app/node_modules/.bin:$PATH"

COPY . .

# Compila la app
RUN npm run build

EXPOSE 4000

# Sirve el contenido compilado
CMD ["npx", "serve", "-s", "dist", "-l", "4000"]