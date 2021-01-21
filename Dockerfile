FROM node:current-alpine

WORKDIR /product-journey

ENV NODE_ENV=development

RUN set -ex; \
	yarn global add nuxt;

COPY . /product-journey

RUN yarn
