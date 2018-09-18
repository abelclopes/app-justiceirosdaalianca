FROM node:10
WORKDIR /app
RUN cd client && npm install
COPY dist /app
COPY package.json /app
RUN npm install
COPY . /app
CMD node index.js
EXPOSE 8081