FROM node:18.16-alpine3.16

RUN mkdir /app && chown -R node:node /app
WORKDIR /app
USER node

COPY --chown=node:node .npmrc server/package.json server/yarn.lock server/
RUN yarn --cwd server --frozen-lockfile

COPY --chown=node:node server server

RUN yarn --cwd server build
RUN yarn --cwd server --frozen-lockfile --production

ENV NODE_ENV=production

# adds the app version to env via build arg
ARG APP_VERSION
ENV APP_VERSION=$APP_VERSION

CMD [ "node", "./server/dist/index.js" ]