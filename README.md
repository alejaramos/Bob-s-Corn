# Bob-s-Corn Challenge

A full-stack application for managing corn purchases with this requirement :
You are a very fair farmer and your policy is to sell at most 1 corn per client per minute.

## Setup and Installation

### Prerequisites
- Node.js (v18 or higher)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone git@github.com:alejaramos/Bob-s-Corn.git
   cd Bob-s-Corn
   ```

2. Install dependencies for both client and server:
   ```bash
   # Install client dependencies
   cd client
   npm install
   cd ..

   # Install server dependencies
   cd server
   npm install
   cd ..
   ```

3. Create a `.env` file in the server directory:
   ```
   PORT=8080
   FRONTEND_URL=http://localhost:3000
   DB_PATH=./database.sqlite
   ```

### Running the Application

Start the server
The database will be automatically initialized when the server starts.


```bash
cd server
npm run dev
```

Start the client

```bash
cd client
npm start
```

This will start:
- The React client on http://localhost:3000
- The Express server on http://localhost:8080
- Swagger API documentation on http://localhost:8080/api-docs

## Client Architecture (LRS)

The client follows the Layered React Structure (LRS) pattern following this article https://playfulprogramming.com/posts/layered-react-structure?utm_source=tldrwebdev:

1. **Views Layer**: Contains page components that compose the UI
2. **Components Layer**: Reusable UI components
3. **Contexts Layer**: React context for state management
4. **Services Layer**: API communication and data transformation
5. **Types Layer**: TypeScript interfaces and types

## Server Architecture (MVC)

The server follows a modified MVC (Model-View-Controller) architecture with Repository pattern:

1. **Models Layer**: Defines data structures using Sequelize ORM
2. **Controllers Layer**: Handles HTTP requests and responses
3. **Services Layer**: Contains business logic and rules (like purchase time restrictions)
4. **Repositories Layer**: Abstracts database operations and data acces
5. **Routes Layer**: Defines API endpoints and connects them to controllers

## Desing

For colors and design I used this palette from Coolors generator https://coolors.co/visualizer/6d545d-756d54-8b9556-abb557-bed558 and Material UI components.

And last but not least, I put a lot of love in this project ❤️✨💫
