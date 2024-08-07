FROM node:14

WORKDIR /app

COPY package.json ./

RUN npm install

EXPOSE 3400

CMD ["npm", "run", "start.dev"]