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
   cd bob-s-corn
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
   PORT=5000
   FRONTEND_URL=http://localhost:3000
   DB_PATH=./database.sqlite
   ```

### Running the Application

Start the server
The database will be automatically initialized when the server starts.


```bash
npm run dev
```

Start the client

```bash
npm start
```

This will start:
- The React client on http://localhost:3000
- The Express server on http://localhost:5000
- Swagger API documentation on http://localhost:5000/api-docs

## Client Architecture (LRS)

The client follows the Layered React Structure (LRS) pattern following this article https://playfulprogramming.com/posts/layered-react-structure?utm_source=tldrwebdev:

1. **Views Layer**: Contains page components that compose the UI
2. **Components Layer**: Reusable UI components
3. **Contexts Layer**: React context for state management
4. **Services Layer**: API communication and data transformation
5. **Types Layer**: TypeScript interfaces and types

