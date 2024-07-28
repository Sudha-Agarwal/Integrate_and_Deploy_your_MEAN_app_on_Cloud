FROM node:18 as build

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY User-app/package*.json ./

RUN npm install -g @angular/cli

RUN npm install

COPY User-app .

# Build the angular application
RUN ng build --configuration=production --output-path=dist/User-app

FROM nginx:alpine
COPY --from=build /usr/src/app/dist/User-app /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
