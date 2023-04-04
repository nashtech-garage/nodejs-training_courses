FROM node:12-alpine
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./
# COPY wait-for.sh /wait-for.sh
RUN wget https://raw.githubusercontent.com/eficode/wait-for/master/wait-for -O /wait-for.sh
RUN chmod +x /wait-for.sh

USER node
RUN npm install
COPY --chown=node:node . .
EXPOSE 3000
CMD [ "node", "app.js" ]