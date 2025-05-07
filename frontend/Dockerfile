FROM node:18

WORKDIR /app

COPY package*.json ./

# Fuerza instalación de todas las dependencias, incluyendo devDependencies
RUN npm install --include=dev

ENV PATH="/app/node_modules/.bin:$PATH"

COPY . .

RUN npm run build

EXPOSE 4000

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "4000"]