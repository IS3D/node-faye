
FROM alpine

# Install base packages
RUN apk update && apk add --no-cache \
  build-base \
  python-dev \
  nodejs

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app
