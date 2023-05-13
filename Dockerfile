FROM node:19 as install
LABEL stage="install"

WORKDIR /src/install

COPY package.json .
COPY package-lock.json .

RUN npm install

FROM node:19 as compile
LABEL stage="compile"

WORKDIR /src/build

COPY --from=install /src/install .
COPY . .

RUN npm build
RUN npm install --production

FROM node:19-alpine as deploy

WORKDIR /app

COPY --from=compile /src/build/dist/main.js index.js
COPY --from=compile /src/build/node_modules node_modules

ENTRYPOINT node .



ENTRYPOINT npm run start:dev