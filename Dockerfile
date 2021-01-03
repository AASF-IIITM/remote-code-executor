FROM node:12.18

WORKDIR /rce

RUN apt-get install python3 -y
RUN apt-get update && \
    apt-get -y install gcc mono-mcs && \
    rm -rf /var/lib/apt/lists/*

copy . .
RUN npm install
ENV PORT=8080
EXPOSE 8080

CMD [ "node", "index.js" ]