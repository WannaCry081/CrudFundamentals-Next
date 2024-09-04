#!/usr/bin/bash

echo "Building Docker image 'my-app'..."
docker build -t my-app .

echo "Running Docker container from 'my-app' image..."
docker run -p 3000:3000 -p 8000:8000 my-app
