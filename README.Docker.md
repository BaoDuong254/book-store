# Docker and Nginx Setup

This document provides instructions on how to run your server using Docker and Nginx with load balancing.

## Prerequisites

- **Docker**: Ensure Docker is installed on your machine. You can download it from [Docker's official website](https://www.docker.com/get-started).

## Setup

### 1. Create an Environment File
Make sure you have a `.env` file in the project root. This file should contain your environment variables, for example:

```dotenv
DB_URL=your_database_url_here
```

### 2. Build the Docker Compose Environment
Build your Docker images using the Docker Compose configuration by running:

```bash
docker-compose build
```

### 3. Start the Docker Compose Environment
Start your Docker Compose environment by running:

```bash
docker-compose up
```
Once the command runs successfully, your server will be accessible at http://localhost:80.

### 4. Stop the Docker Compose Environment
To stop your Docker Compose environment, run:

```bash
docker-compose down
```

Or Ctrl+C in the terminal.

### 5. Access the Nginx Load Balancer
Check the terminal output to see which server instance is being served by Nginx load balancing.
