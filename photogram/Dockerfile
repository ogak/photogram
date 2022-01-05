FROM node:16.13-alpine
RUN npm install -g http-server
WORKDIR /node/src/photogram
COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE 8080
CMD ["http-server", "dist"]
