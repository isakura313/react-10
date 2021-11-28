# Set the base image to node:14-alpine
FROM node:14-alpine  as build-stage

# Specify where our app will live in the container
WORKDIR /react-10
COPY package*.json ./
RUN npm i
COPY . .
RUN npm run build



FROM nginx:stable-alpine as production-stage
COPY ./.nginx/ /etc/nginx/
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build-stage /react-10/build /usr/share/nginx/html


EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
# Set the base image to node:12-alpine