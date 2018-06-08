FROM alpine

ENV PORT=3010

RUN apk add --update nodejs

WORKDIR /usr/src/cuca

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 3010

CMD [ "npm", "start" ]