# Hire Intelligence Ireland - Tech Gadget Rental App

The Hire Intelligence Ireland is a simple and efficient system designed to help users rent technology devices such as laptops, cameras, tablets, and more. This application focuses on making short-term gadget rentals easy to manage for both administrators and customers. The app allows an administrator to manage a catalogue of gadgets such as adding new devices, updating information, changing availability, or removing old items. Customers can browse the available gadgets, book a rental, and later view their own rental history. The system is built to be straightforward, user-friendly, and suitable for both personal learning projects and small rental operations.

# Key Features

## Gadget Management (Admin Role)
Admins have full control over the gadget inventory.
### Add new gadgets (e.g., laptop, camera)
### Update gadget details such as name, price and availability
### Delete gadgets that are no longer offered
### View all gadgets 

## Gadget Browsing and Renting (Customer Role)
Customers using the system can:
### Browse the full list of available gadgets with details like price and features
### Rent a device for a selected period
### View their personal rental history, including past and ongoing rentals

# System Architecture

The MERN stack, which gives each component of the system a distinct function, is used in the construction of Hire Intelligence Ireland.
## Client (React.js)
The React frontend gives customers and the admin an easy interface to use.
All interactions with the backend happen through Axios, and React Router handles the page navigation.

## Server  (Node.js + Express.js)
The backend provides APIs for gadget management, rentals, and user login.
It handles all the main logic - checking availability, updating records, and making sure requests are processed safely.

### Database (MongoDB + Mongoose)
MongoDB stores everything: user accounts, gadgets, and rental history. Mongoose helps define clean and organised data models.

## Additional Features
User login is secured with JWT.
	
# Run application (command):
cd server
npm run prod

## Run Test
cd server
npm test

# References:
# Express.js
Express routing: https://expressjs.com/en/guide/routing.html
Express Router API: https://expressjs.com/en/5x/api.html#router
Using middleware in Express: https://expressjs.com/en/guide/using-middleware.html
Express error handling: https://expressjs.com/en/guide/error-handling.html

# Authentication & Security
JSON Web Token (JWT) official docs: https://jwt.io/introduction
jsonwebtoken npm package: https://github.com/auth0/node-jsonwebtoken
Bearer token in HTTP Authorization header: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization

# MongoDB & Mongoose
Mongoose schemas: https://mongoosejs.com/docs/guide.html
Mongoose models: https://mongoosejs.com/docs/models.html
Mongoose queries & CRUD: https://mongoosejs.com/docs/queries.html
Mongoose connections: https://mongoosejs.com/docs/connections.html
MongoDB ObjectId: https://www.mongodb.com/docs/manual/reference/method/ObjectId/

# Password Hashing
bcryptjs npm package: https://www.npmjs.com/package/bcryptjs
Password hashing basics (OWASP): https://owasp.org/www-project-top-ten/2017/A2_2017-Broken_Authentication

# CORS & Middleware
CORS middleware (official GitHub): https://github.com/expressjs/cors
What is CORS (MDN): https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS

# React Core
React Hooks (useState, useEffect): https://react.dev/reference/react
React Context API: https://react.dev/reference/react/createContext
React StrictMode: https://react.dev/reference/react/StrictMode

# React Router
React Router v6 docs: https://reactrouter.com/en/main
BrowserRouter, Routes, Route: https://reactrouter.com/en/main/components/browser-router
useNavigate hook: https://reactrouter.com/en/main/hooks/use-navigate

# Axios
Axios official documentation: https://axios-http.com/docs/intro
Axios interceptors: https://axios-http.com/docs/interceptors

# Browser APIs
Local Storage (MDN): https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

# Jest
Jest official docs: https://jestjs.io/docs/getting-started
Mocking with Jest: https://jestjs.io/docs/mock-functions

# Supertest
Supertest GitHub: https://github.com/ladjs/supertest

# MongoDB In-Memory Testing
mongodb-memory-server: https://github.com/nodkz/mongodb-memory-server

# CSS Basics & Layout
CSS Grid layout (MDN): https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout
CSS Flexbox (MDN): https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout
CSS animations & keyframes: https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes
Media queries (responsive design): https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries

# performance & Monitoring
Web Vitals (Google): https://web.dev/vitals/
web-vitals npm package: https://github.com/GoogleChrome/web-vitals



