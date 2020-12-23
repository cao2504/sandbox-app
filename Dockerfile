FROM node:14.15.3

WORKDIR /app

#Install dependencies
COPY package.json /app
RUN npm install

#Add app
COPY . /app

EXPOSE 3000
#CMD is execute when the container is started based on the image
CMD ["npm", "start"]

