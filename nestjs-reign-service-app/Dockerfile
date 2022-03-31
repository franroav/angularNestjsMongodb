FROM node:alpine
# Create app directory
WORKDIR /usr/src/app


#Install app dependencies
COPY package*.json ./
RUN npm install glob rimraf
RUN npm install -g @nestjs/cli
# npm continuous integration 
RUN npm ci
# Bundle app source 
COPY . .
RUN npm run build
EXPOSE 3000 9204
# Run npm Istall 
CMD ["npm", "run", "start:dev"]
#CMD ["node", "dist/main"]
