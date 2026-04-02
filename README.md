
# Hostel Room Allocation System

This is a full-stack web application for managing a hostel's rooms, students, and visitors. It is built with Node.js, Express.js, and uses SQLite for the database.

## Project Structure

```
/DBMS_miniproject49
  - /public (static files like CSS)
  - /views (EJS templates for the UI)
  - /routes (Express routes for each entity)
  - /db (SQLite database file and setup scripts)
    - hostel.db
    - database.js
    - seed.js
  - app.js (main server file)
  - package.json
  - README.md
```

## Features

- **CRUD Operations:** Create, Read, Update, and Delete for all entities:
    - Hostels
    - Rooms
    - Students
    - Visitors
- **Admin Authentication:** A basic login system for the administrator.
- **Relational Data Display:** View students with their assigned room and hostel, visitors linked to students, etc.
- **Simple & Clean UI:** Built with HTML, EJS, and Bootstrap.

## Setup and Usage

### 1. Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.

### 2. Installation

Clone the repository or download the source code into the `DBMS_miniproject49` directory. Open a terminal in the project root and run the following command to install the necessary dependencies:

```bash
npm install
```

### 3. Initialize and Seed the Database

Before starting the server for the first time, you need to create the database schema and populate it with initial sample data.

Run the following command in your terminal:

```bash
npm run db:seed
```

This command executes the `db/seed.js` script, which first sets up the tables (via `db/database.js`) and then inserts the sample data for administrators, hostels, rooms, students, and visitors. A `hostel.db` file will be created in the `/db` directory.

### 4. Run the Server

Once the database is ready, you can start the web server with the following command:

```bash
npm start
```

The application will be running at [http://localhost:3000](http://localhost:3000).

### 5. Admin Login

Navigate to the login page to access the admin dashboard.

- **URL:** [http://localhost:3000/login](http://localhost:3000/login)
- **Default Credentials:**
    - **Username:** `Admin`
    - **Password:** `admin123`

From the dashboard, you can navigate to manage all aspects of the hostel system.
