# Step 1: Build React App
FROM node:20 AS builder
WORKDIR /app

COPY package*.json ./
RUN npm install --legacy-peer-deps

COPY . .
RUN npm run build

# Step 2: Serve with Nginx
FROM nginx:alpine

# Copy build output to Nginx
COPY --from=builder /app/dist /usr/share/nginx/html
# If your build outputs to 'build' folder instead, use:
# COPY --from=builder /app/build /usr/share/nginx/html

# Copy custom Nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Fix permissions
RUN chmod -R 755 /usr/share/nginx/html

EXPOSE 80 443
CMD ["nginx", "-g", "daemon off;"]