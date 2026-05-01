# base image setup
FROM node:24

# workdir setup, application stay here
WORKDIR /app

# package json file copied
COPY package.json  .

# package installed
RUN npm install

# copy rest
COPY . .

# EXPOSE THE PORT
EXPOSE 3000

# CMD
CMD [ "node", "index.js" ]
