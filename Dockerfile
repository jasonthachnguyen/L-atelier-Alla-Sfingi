FROM ubuntu:latest
RUN apt-get update && apt-get install -y nodejs npm
COPY --exclude=Dockerfile ./* /website-files/
WORKDIR /website-files/
RUN npm install
EXPOSE 8000
CMD node /website/app.js 