# Car Rental Website Backend

This repository contains the backend implementation for a car rental website. It is designed to handle various functionalities related to managing car inventory, user authentication, and more.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Configuration](#configuration)

## Getting Started

### Prerequisites

Make sure you have the following installed on your system:

- Node.js (version >= 12)
- MongoDB

### Installation

1. Clone the repository:

```bash
   https://github.com/KHARKIVSKA-KURKUMA/CAR-RENT-API.git
```

2. Navigate to the project directory:

```bash
cd CAR-RENT-API
```

3. Install dependencies:

```bash
npm install
```

4. Configure your environment variables (see [Configuration](#configuration)).

5. Start the server:

```bash
npm start
```

## Usage

You can access the server by opening http://localhost:3000 in your web browser.

## API Documentation

For detailed documentation of the API endpoints, request/response formats, and authentication requirements, please refer to the provided [Swagger](https://rent-car-r832.onrender.com/api-docs) specification file.

## Configuration

To ensure proper configuration, review the `.env.example` file thoroughly. This file contains examples for each variable that needs to be set in your `.env` file. Pay close attention to the following:

### 1. DB_HOST:

- **Definition:** The `DB_HOST` variable holds the connection string for your [MongoDB](https://www.mongodb.com/) database.
- **Format:** Example format:

```bash
mongodb+srv://<username>:<password>@krabaton.5mlpr.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority
```

- **Replacement:** Replace the placeholders within the angle brackets (<>):
  - `<username>` with your MongoDB username
  - `<password>` with your MongoDB password
  - `<dbname>` with the name of your MongoDB database (Will be created when accessing the cloud)

### 2. SECRET_KEY:

- **Definition:** The `SECRET_KEY` variable holds the Client Secret code from [jwt](https://jwt.io/)
