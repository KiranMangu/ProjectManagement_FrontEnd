 FROM node:latest
 RUN mkdir -p /usr/src/app
 WORKDIR /usr/src/app
 RUN npm i -g @angular/cli@7.1.4
 COPY package.json /usr/src/app
# # RUN npm cache clean
 RUN npm install
 COPY . /usr/src/app
 RUN ng build
 RUN ls
# EXPOSE 4200
# CMD ["ng","serve"]
# CMD ["echo","testing"]

 FROM nginx:latest
 COPY wrapper.sh /
 COPY /usr/src/app/dist/proejctmanagement /usr/share/nginx/html
 CMD ["./wrapper.sh"]
