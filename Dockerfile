FROM node:10.16.0-alpine

# Create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY . /app

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

EXPOSE 5000
CMD [ "npm", "start" ]