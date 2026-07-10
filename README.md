## Module

Search, Filtering & Validation APIs

## Objective

This module implements:

* Employee Search API
* Attendance Filtering API
* Pagination
* Input Validation using express-validator
* Global Error Handling

## Technologies Used

* Node.js
* Express.js
* PostgreSQL
* express-validator
* dotenv
* pg

## Installation

### Clone Repository

```bash
git clone <repository-url>
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file:

```env
PORT=3000
DB_USER=postgres
DB_PASSWORD=postgres
DB_HOST=localhost
DB_PORT=5432
DB_NAME=flowtrack360
```

## Run Application

Development Mode:

```bash
npm run dev
```

Production Mode:

```bash
npm start
```

## API Endpoints

### Employee Search

```http
GET /api/employees/search?name=vin
```

### Attendance Filter with Pagination

```http
GET /api/attendance/filter?status=Present&page=1&limit=5
```

## Features

* Search employees by name
* Filter attendance records by status
* Pagination support
* Input validation
* Centralized error handling
* PostgreSQL integration

## Testing

Use Postman to test all endpoints.


FlowTrack 360
