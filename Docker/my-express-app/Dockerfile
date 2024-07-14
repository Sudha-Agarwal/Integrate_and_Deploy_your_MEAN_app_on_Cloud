#Use an official Node.js image as the base image
FROM node:18
#set the working directory inside the container
WORKDIR /app
#copy package.json to the working directory
COPY package.json ./
RUN npm install

#Copy the rest of the application code to the working directory
COPY . .

#Expose the port the app runs on
EXPOSE 5000

#define the command to run the application
CMD ["app.js"]

ENTRYPOINT ["node"]

#command to build the image is:
# docker build -t my-express-app .
#here . serves as the build context. build context is the path on your locla machine where the dockerfile and any other files needed for the build process are located. the . represents the current directory.

#to run the conatiner using the image:
# docker run -d -p 5000:5000 my-express-app

# If you dont specify entrypoint in docker file, then the default entry point would be /bin/sh -c