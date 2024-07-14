FROM node:18 as build

WORKDIR /usr/src/app

COPY User-app/package.json ./

RUN npm install -g @angular/cli

RUN npm install

COPY Uesr-app .

RUN ng build --configuration=production --output-path=dist/User-app

FROM nginx:alpine
COPY --from=build /usr/src/app/dist/User-app /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off"]
