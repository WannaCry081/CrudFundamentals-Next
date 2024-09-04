FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install

ENV NEXT_PUBLIC_API_URL=http://localhost:8000/

COPY . .

EXPOSE 3000 8000

CMD ["npm", "run", "app"]
