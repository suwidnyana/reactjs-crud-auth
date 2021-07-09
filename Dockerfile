# Stage 1 - the build process
FROM node:15.0.0-alpine as build
WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
RUN yarn install 
COPY . .
RUN yarn build


# FROM nginx:1.19-alpine AS server
# COPY --from=build ./app/build /usr/share/nginx/html