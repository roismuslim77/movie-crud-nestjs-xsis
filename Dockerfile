FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm i -g @nestjs/cli
RUN npm install

COPY . /app/

RUN npm run build

CMD [ "npm", "run", "start:dev" ]