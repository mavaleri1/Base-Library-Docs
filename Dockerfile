# Stage 1: Build application
FROM node:20-alpine AS builder

WORKDIR /app

# Copy dependency files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy remaining files
COPY . .

# Build application
RUN npm run build

# Stage 2: Production image
FROM node:20-alpine

WORKDIR /app

# Copy package.json
COPY package*.json ./

# Install only production dependencies
RUN npm ci --only=production

# Copy built application from builder
COPY --from=builder /app/build ./build

# Copy static files
COPY --from=builder /app/static ./static

# Expose port
EXPOSE 3000

# Start application
CMD ["npx", "docusaurus", "serve", "--host", "0.0.0.0", "--port", "3000"]
