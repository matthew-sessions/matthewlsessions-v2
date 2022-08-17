FROM node:16
WORKDIR /usr/src/app

COPY . ./

# building the app
RUN npx browserslist@latest --update-db
RUN npm i
RUN npm run build

# Running the app
CMD [ "npm", "start" ]
