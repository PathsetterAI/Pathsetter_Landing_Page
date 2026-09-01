# Stage 1: Build the React/Vite application
FROM node:20-alpine AS build

WORKDIR /app

# Copy dependency definition files
COPY package.json package-lock.json ./

# Install packages clean/frozen-lockfile
RUN npm ci

# Copy the rest of the application source files
COPY . .

# Build the React application (output goes to /app/dist)
RUN npm run build

# Stage 2: Serve the application and the subscription API
FROM node:20-alpine AS runtime

WORKDIR /app
ENV NODE_ENV=production
ENV PORT=8080

COPY package.json package-lock.json ./
RUN npm ci --omit=dev

COPY --chown=node:node server ./server
COPY --from=build --chown=node:node /app/dist ./dist

EXPOSE 8080

USER node

CMD ["node", "server/index.js"]
