FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
ENV NODE_ENV=production
RUN npm install
COPY . .
ENV PORT=3003
EXPOSE 3003
CMD ["npm", "start"]