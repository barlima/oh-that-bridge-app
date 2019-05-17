# base image
FROM node:9.6.1

# set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
ADD . /usr/src/app

RUN yarn install --silent
RUN yarn add react-scripts@1.1.1 -g --silent
RUN yarn run build:prod

# start app
CMD ["yarn", "start"]
