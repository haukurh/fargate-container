FROM node:14-slim
LABEL maintainer="haukur@haukurh.is"

COPY ./ /app
WORKDIR /app

EXPOSE 3000

CMD ["node", "index.js"]
