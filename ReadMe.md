# Quick Start

```docker compose up --build```

# Overview 

This project is a containerized Node.js application for managing movies and directors. It uses MongoDB for data storage. The application is built using Docker Compose, enabling seamless integration and scalability across multiple services.

The backend API built with Express and Typescript. 
Provides CRUD endpoints for managing movies and directors.
Uses Mongoose to interact with MongoDB.

The project mosly employes Layered Architecture style and patterns. It is organized into distinct layers, each responsible for a specific aspect of the application. These layers include controllers, services, models, middleware, and routes. This separation of concerns enhances maintainability and scalability.

# Folder Structure:
```
src/
├── controllers/       # Request handling and business logic
├── services/          # Encapsulates reusable logic for MongoDB 
├── models/            # Mongoose schemas for MongoDB collections
├── middleware/        # Custom middlewares for validation and caching
├── utils/             # Helper functions
├── routes/            # API route definitions
├── tests/             # Unit tests for endpoints
├── app.ts             # Main entry point
├── database.ts        # MongoDB connection logic
└── docker-compose.yml # Docker setup 
```

# Technologies used:
```
Node.js        --->  Runtime for backend API
Express.js     --->  Framework for building RESTful APIs
TypeScript     --->  Typed superset of JavaScript
MongoDB        --->  NoSQL database for persistent storage
Mongoose       --->  ODM for MongoDB interaction
Docker         ---> Containerization of services
Docker Compose ---> Service orchestration
Joi            --->  Request data validation
Redis          ---> In-memory database for caching
```


# Key Features

CRUD Endpoints:
Movies: Create, Read, Update, Delete.
Directors: Create, Read, Delete.
Caching with Redis:
Frequently requested data (e.g., movie list) is cached for faster access.
Cache is invalidated when data is modified.
Containerized Services:
Application, MongoDB, and Redis run in isolated containers managed by Docker Compose.

DockerHub: saygilib/hubxproject:latest