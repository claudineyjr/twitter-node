FROM node:7.10.0-alpine

ENV PORT=5000

WORKDIR /usr/src/cuca

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD [ "npm", "start" ]