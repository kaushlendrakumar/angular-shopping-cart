FROM node:10.16.3-alpine
MAINTAINER Rajan <rajan@tripeur.com>
USER root
RUN npm config set unsafe-perm true
ARG BUILDCMD="npm run buildDev"
WORKDIR /server
    
ADD . /server
RUN /sbin/apk update && \
    /sbin/apk upgrade && \
    /sbin/apk add --no-cache bash git openssh
    
RUN /sbin/apk --no-cache add --virtual native-deps \
    g++ gcc libgcc libstdc++ linux-headers make python tzdata && \
    npm install node-gyp -g
RUN npm install
RUN ${BUILDCMD}
EXPOSE 80
CMD node app.js