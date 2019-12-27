FROM node:12.14.0

ARG MONGODB_DB

RUN echo "MONGODB_DB arg: $MONGODB_DB"

RUN env

# WORKDIR /usr/src/app

# COPY package*.json ./

# RUN yarn

# COPY . .

# CMD ["yarn", "start"]
