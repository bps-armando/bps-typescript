FROM node:alpine AS deps
WORKDIR /home/bps-tx5/chapter-16
COPY ./package*.json ./
ARG NODE_ENV
ENV NODE_ENV ${NODE_ENV}
RUN npm install

FROM node:alpine AS builder
WORKDIR /home/bps-tx5/chapter-16
COPY --from=deps /home/bps-tx5/chapter-16/node_modules ./node_modules
COPY data ./data
COPY src ./src
COPY public ./public
COPY package.json next.config.mjs tsconfig.json ./
RUN npm run build

FROM node:alpine
WORKDIR /home/bps-tx5/chapter-16
COPY --from=builder /home/bps-tx5/chapter-16/.next ./.next
COPY --from=builder /home/bps-tx5/chapter-16/public ./public
COPY --from=builder /home/bps-tx5/chapter-16/node_modules ./node_modules
COPY --from=builder /home/bps-tx5/chapter-16/package.json ./package.json
EXPOSE 3000
CMD ["npm", "run", "start"]

