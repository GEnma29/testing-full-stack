FROM node:14
WORKDIR  /server
COPY server .
RUN npm i
RUN npm start
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
