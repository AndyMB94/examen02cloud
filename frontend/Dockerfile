FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

# Agregar binarios locales al PATH para encontrar vite
ENV PATH="/app/node_modules/.bin:$PATH"

COPY . .

RUN npm run build

EXPOSE 4000

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "4000"]
