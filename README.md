# refurbLab API

This is the backend API for the refurbLab project, built with **Node.js**, **Express**, and **PostgreSQL**. The project uses **Docker** for easy setup and deployment.

---

## 🚀 Prerequisites

Before running the project, ensure you have:

- [Node.js (v18+)](https://nodejs.org/en/download/)
- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/) (usually included with Docker Desktop)

---

## 🛠️ Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd refurbLab-api
```

### 2. Create .env file
Create a `.env` file in the root directory with the following variables (adjust values as needed):

```plaintext
PORT=4000
DB_HOST=db
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=password
DB_NAME=refurblab_db
```

### 3. Build and start containers
Run the following command to build Docker images and start containers:

```bash
docker compose up --build -d
```

This is the only command you need to run to build the images and start the entire project (both backend API and database) in Docker containers.

This will start:

- Postgres database container (`refurb_db`)
- Backend API container (`refurb_backend`)

### 4. Check running containers
Verify containers are running:

```bash
docker compose ps
```

or

```bash
docker ps
```

## Accessing the API
- Backend API runs on [http://localhost:4000](http://localhost:4000)
- Health check endpoint: [http://localhost:4000/health](http://localhost:4000/health)

### Example response:
```json
{
  "status": "OK",
  "timestamp": "2025-05-17T08:00:00.000Z"
}
```

## Stopping and cleaning Docker environment

### To stop running containers:
```bash
docker compose down
```

### To remove all containers, images, and volumes (use with caution):
```bash
docker system prune -a --volumes
```

## Troubleshooting
- If the backend cannot connect to the database, make sure the database container is running.

- Check container logs for errors:

```bash
docker compose logs backend
docker compose logs db
```

## 🤝 Contributing
### Feel free to open issues or submit pull requests!