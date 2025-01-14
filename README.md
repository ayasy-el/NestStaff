# 🏢 Employee Management API

![Node.js](https://img.shields.io/badge/node-%3E%3D%2018.0.0-brightgreen) ![NestJS](https://img.shields.io/badge/nestjs-%5E10.0.0-red) ![PostgreSQL](https://img.shields.io/badge/postgresql-%5E16.2-blue) ![Prisma](https://img.shields.io/badge/prisma-%5E5.18.0-blueviolet)

An efficient and scalable API built with [NestJS](https://nestjs.com) for managing employee data. This project uses Prisma for database management and PostgreSQL as the default database. 🚀

![image](https://github.com/user-attachments/assets/26b59139-b8ed-48a7-bd5f-b569c4900abe)


## ✨ Features

- CRUD operations for employees 👩‍💼👨‍💼
- PostgreSQL as the database 🗄️
- Prisma ORM for seamless database interactions 🧑‍💻
- Global exception handling with custom filters 🎯
- Swagger API documentation 📑

## 🛠️ Project Setup

```bash
# Install dependencies
$ pnpm install

# Run database migrations
$ pnpm prisma migrate dev

# Seed the database
$ pnpm prisma db seed
```

## 🚀 Running the Project

```bash
# Start the server (development)
$ pnpm run start

# Start the server in watch mode
$ pnpm run start:dev

# Start the server (production)
$ pnpm run start:prod
```

## 🧪 Running Tests

```bash
# Unit tests
$ pnpm run test

# End-to-end tests
$ pnpm run test:e2e

# Test coverage
$ pnpm run test:cov
```

## 📚 API Endpoints

You can explore the API documentation using Swagger after starting the server:

```
GET /employees        -> Retrieve all employees
POST /employees       -> Create a new employee
GET /employees/:id    -> Retrieve employee by ID
PATCH /employees/:id  -> Update employee by ID
DELETE /employees/:id -> Remove employee by ID
```

Access the Swagger UI at: [http://localhost:3000/swagger](http://localhost:3000/swagger)

## 📂 Resources

- [NestJS Documentation](https://docs.nestjs.com)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Swagger Docs](https://swagger.io/docs/)
- [Prisma Generator NestJs DTO](https://github.com/Brakebein/prisma-generator-nestjs-dto)

## ❤️ Support

If you find this project helpful, consider giving it a ⭐ or contributing!

## 📝 License

This project is [MIT licensed](./LICENSE).
