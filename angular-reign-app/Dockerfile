FROM node:lts
WORKDIR  /app
COPY package*.json ./
COPY . .
RUN npm i @angular/cli
RUN npm ci 
RUN npm run build --prod
EXPOSE 4200
CMD npm run start 