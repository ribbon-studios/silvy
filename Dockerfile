FROM node:16-alpine

WORKDIR /silvy

COPY node_modules/ node_modules/
COPY package.json package.json
COPY .next/ .next/

RUN npm i -g next@^12

ENV ENVIRONMENT="live"
EXPOSE 3000

CMD ["npm", "run", "start:prod"]